# WorkOS Role Management Integration

## Overview

This document explains how role updates sync with WorkOS user metadata, ensuring that user roles are stored in the JWT and accessible throughout the application.

## Frontend Implementation

### Types
- **UserRoleUpdate**: Interface for role update requests
- **UserRoleUpdateResponse**: Response from role update endpoints

### Hooks

#### `useAdminUsers()`
For admin users with full role management capabilities:
```typescript
const { users, loading, error, updateUserRole } = useAdminUsers();

// Update any user to any role (student, teacher, admin)
await updateUserRole(workosId, { role: 'teacher' });
```

#### `useTeacherUserManagement()`
For teacher users with limited role management:
```typescript
const { users, loading, error, updateUserRole } = useTeacherUserManagement();

// Can only update to 'student' or 'teacher', not 'admin'
await updateUserRole(workosId, { role: 'student' });
```

### Components

#### Admin Component: `UserRoleManager`
Location: `src/components/admin/UserRoleManager.tsx`
- Full role management UI
- Can assign any role (student, teacher, admin)
- Shows all users

#### Teacher Component: `TeacherUserRoleManager`
Location: `src/components/teacher/UserRoleManager.tsx`
- Limited role management UI
- Can only assign student or teacher roles
- Filters out admin users

## Backend Requirements

### API Endpoints

#### Admin Role Update
```
PUT /users/admin/{workos_id}/role
```
Request body:
```json
{
  "role": "student" | "teacher" | "admin"
}
```

#### Teacher Role Update
```
PUT /users/teacher/{workos_id}/role
```
Request body:
```json
{
  "role": "student" | "teacher"
}
```

### WorkOS Integration

When a role is updated, the backend should:

1. **Update the database** with the new role
2. **Update WorkOS user metadata** using the WorkOS Management API

#### Example Python Implementation (FastAPI)

```python
from workos import WorkOSClient
import os

workos_client = WorkOSClient(api_key=os.getenv("WORKOS_API_KEY"))

@app.put("/users/admin/{workos_id}/role")
async def update_user_role_admin(
    workos_id: str,
    role_update: UserRoleUpdate,
    current_user: User = Depends(require_admin)
):
    # Update database
    user = await update_user_role_in_db(workos_id, role_update.role)
    
    # Update WorkOS user metadata
    try:
        workos_client.user_management.update_user(
            user=workos_id,
            metadata={
                "role": role_update.role.upper()  # Store as 'student', 'teacher', 'ADMIN'
            }
        )
    except Exception as e:
        # Handle WorkOS API errors
        raise HTTPException(status_code=500, detail=f"Failed to update WorkOS metadata: {str(e)}")
    
    return {
        "success": True,
        "message": "User role updated successfully",
        "user": user
    }

@app.put("/users/teacher/{workos_id}/role")
async def update_user_role_teacher(
    workos_id: str,
    role_update: UserRoleUpdate,
    current_user: User = Depends(require_teacher)
):
    # Teachers cannot assign admin role
    if role_update.role == "admin":
        raise HTTPException(status_code=403, detail="Teachers cannot assign admin role")
    
    # Update database
    user = await update_user_role_in_db(workos_id, role_update.role)
    
    # Update WorkOS user metadata
    try:
        workos_client.user_management.update_user(
            user=workos_id,
            metadata={
                "role": role_update.role.upper()
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update WorkOS metadata: {str(e)}")
    
    return {
        "success": True,
        "message": "User role updated successfully",
        "user": user
    }
```

### Accessing Role from JWT

On the frontend, the role will be available in the WorkOS user object:

```typescript
import { useAuth } from '@workos-inc/authkit-nextjs';

// In client component
const { user } = useAuth();
const role = user?.role; // 'student', 'teacher', or 'ADMIN'

// In server component
import { withAuth } from '@workos-inc/authkit-nextjs';

const { user } = await withAuth();
const role = user?.role;
```

## Flow Diagram

```
Admin/Teacher → Click "Update Role" Button
    ↓
Frontend Hook → PUT /users/admin/{workos_id}/role
    ↓
Backend → Update Database (users table)
    ↓
Backend → Update WorkOS User Metadata via API
    ↓
WorkOS → Stores role in user metadata
    ↓
User Logs Out & Logs In Again
    ↓
New JWT Contains Updated Role
    ↓
Frontend Reads role from user.role
```

## Important Notes

1. **Role changes require re-login**: The user must log out and log back in for the new role to appear in their JWT
2. **Case sensitivity**: Store roles in uppercase ('student', 'teacher', 'ADMIN') in WorkOS to match the auth.ts expectations
3. **Error handling**: Always wrap WorkOS API calls in try-catch to handle network errors
4. **Sync consistency**: Always update both database and WorkOS in the same transaction/operation
5. **Teacher limitations**: Teachers can only manage student and teacher roles, not admin

## Testing

1. As admin, update a user's role to 'teacher'
2. That user logs out and logs back in
3. Verify `user.role` in JWT shows 'teacher'
4. Verify the user can now access teacher-only routes
5. Test that teachers cannot assign admin role (403 error expected)

## Security Considerations

- Validate role values on backend (only accept 'student', 'teacher', 'admin')
- Verify current user has permission to update roles
- Log all role changes for audit trail
- Rate limit role update endpoints to prevent abuse
