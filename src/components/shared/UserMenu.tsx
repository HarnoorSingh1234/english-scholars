"use client";

import { useAuth } from '@workos-inc/authkit-nextjs/components';
import Link from 'next/link';
import { LogOut, User, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UserMenu() {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
    );
  }

  if (!user) {
    return null;
  }

  // Extract role from organization membership
  const userData = user as any;
  let role = 'student'; // Default role
  
  if (userData.organizationMemberships && userData.activeOrganizationId) {
    const activeMembership = userData.organizationMemberships.find(
      (m: any) => m.organizationId === userData.activeOrganizationId
    );
    if (activeMembership?.role) {
      role = activeMembership.role.toUpperCase();
    }
  }
  
  const dashboardPath =
    role === 'admin'
      ? '/admin'
      : role === 'teacher'
      ? '/teacher'
      : '/student';

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold">
          {user.firstName?.[0] || user.email[0].toUpperCase()}
        </div>
        <span className="text-white font-medium hidden md:block">
          {user.firstName || user.email}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="p-4 bg-gradient-to-r from-main-400 to-main-500 text-white">
              <p className="font-semibold">{user.firstName || 'User'}</p>
              <p className="text-sm text-white/80">{user.email}</p>
              <p className="text-xs mt-1 px-2 py-1 bg-white/20 rounded inline-block capitalize">
                {role?.toLowerCase() || 'Student'}
              </p>
            </div>

            <div className="py-2">
              <Link
                href={dashboardPath}
                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Dashboard</span>
              </Link>

              <form action="/logout" method="GET">
                <button
                  type="submit"
                  className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors text-left"
                >
                  <LogOut className="w-4 h-4 text-red-600" />
                  <span className="text-red-600">Sign Out</span>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
