'use client';

import { useAdminOverview, useAdminUsers, useTestLevels, useContactFormStatistics } from '@/lib/api';
import { motion } from 'framer-motion';
import { Users, BookOpen, MessageSquare, TrendingUp, ChevronRight, Settings, BarChart3, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AdminDashboard() {
  const { overview, loading: overviewLoading } = useAdminOverview();
  const { users, loading: usersLoading } = useAdminUsers();
  const { testLevels, loading: levelsLoading } = useTestLevels();
  const { statistics: contactStats, loading: contactLoading } = useContactFormStatistics();

  if (overviewLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-main-400 via-main-400 to-main-500/30 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-xl"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const statsData = [
    {
      icon: Users,
      label: 'Total Users',
      value: Object.values(overview?.users_by_role || {}).reduce((a, b) => a + b, 0),
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-500/20',
      breakdown: overview?.users_by_role,
    },
    {
      icon: BookOpen,
      label: 'Test Levels',
      value: testLevels?.length || 0,
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-500/20',
    },
    {
      icon: MessageSquare,
      label: 'Contact Forms',
      value: contactStats?.total_submissions || 0,
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-500/20',
    },
    {
      icon: TrendingUp,
      label: 'Engagement Rate',
      value: overview?.engagement_metrics ? `${Object.values(overview.engagement_metrics)[0] || 0}%` : 'N/A',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-main-400 via-main-400 to-main-500/30">
      {/* Header Section */}
      <div className="border-b border-white/10 bg-main-400/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-white/70">
              Platform overview and management
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mb-2">{stat.label}</div>
                {stat.breakdown && (
                  <div className="flex gap-2 flex-wrap mt-3">
                    {Object.entries(stat.breakdown).map(([role, count]) => (
                      <Badge key={role} className="bg-white/10 text-white border-white/20 text-xs">
                        {role}: {count}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Management Sections */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* User Management */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <UserCog className="w-6 h-6" />
                  User Management
                </h2>
                <Link href="/admin/users">
                  <Button variant="ghost" className="text-white hover:bg-white/10" size="sm">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {users && users.length > 0 ? (
                  users.slice(0, 5).map((user, index) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link href={`/admin/users/${user.workos_id}`}>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-main-200 to-main-100 flex items-center justify-center text-white font-semibold">
                              {(user.first_name?.[0] || user.email[0]).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-white font-medium group-hover:text-main-300 transition-colors">
                                {user.display_name || user.first_name || user.email}
                              </p>
                              <p className="text-white/60 text-sm">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={`
                              ${user.role === 'admin' ? 'bg-red-500/20 text-red-300 border-red-400/30' : ''}
                              ${user.role === 'teacher' ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' : ''}
                              ${user.role === 'student' ? 'bg-green-500/20 text-green-300 border-green-400/30' : ''}
                            `}>
                              {user.role}
                            </Badge>
                            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-white/60">
                    No users found.
                  </div>
                )}
              </div>
            </Card>

            {/* Content Management */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Content Management
                </h2>
                <Link href="/admin/content">
                  <Button variant="ghost" className="text-white hover:bg-white/10" size="sm">
                    Manage
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link href="/admin/test-levels">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="text-2xl font-bold text-white mb-1">
                      {testLevels?.length || 0}
                    </div>
                    <div className="text-white/70 text-sm">Test Levels</div>
                  </div>
                </Link>
                <Link href="/admin/passages">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="text-2xl font-bold text-white mb-1">
                      {overview?.content_metrics?.passages || 0}
                    </div>
                    <div className="text-white/70 text-sm">Passages</div>
                  </div>
                </Link>
                <Link href="/admin/questions">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="text-2xl font-bold text-white mb-1">
                      {overview?.content_metrics?.questions || 0}
                    </div>
                    <div className="text-white/70 text-sm">Questions</div>
                  </div>
                </Link>
                <Link href="/admin/contact-forms">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="text-2xl font-bold text-white mb-1">
                      {contactStats?.pending_count || 0}
                    </div>
                    <div className="text-white/70 text-sm">Pending Forms</div>
                  </div>
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions & Analytics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link href="/admin/users">
                  <Button className="w-full bg-main-200 hover:bg-main-100 text-white justify-start">
                    <UserCog className="w-4 h-4 mr-2" />
                    Manage Users
                  </Button>
                </Link>
                <Link href="/admin/test-levels/new">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Test Level
                  </Button>
                </Link>
                <Link href="/admin/passages/new">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                    <Settings className="w-4 h-4 mr-2" />
                    Add Passage
                  </Button>
                </Link>
                <Link href="/admin/analytics">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Platform Activity */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Platform Activity
              </h3>
              <div className="space-y-3">
                {overview?.platform_activity && Object.entries(overview.platform_activity).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-white/70 text-sm capitalize">{key.replace(/_/g, ' ')}</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Status */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 p-6">
              <h3 className="text-white font-bold text-lg mb-2">
                System Status
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                <p className="text-white/90 text-sm">
                  All systems operational
                </p>
              </div>
              <Link href="/admin/settings">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                  System Settings
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
