'use client';

import { useTeacherDashboard, useGradingQueue, useTeacherUserManagement } from '@/lib/api';
import { motion } from 'framer-motion';
import { Users, ClipboardCheck, TrendingUp, Calendar, ChevronRight, Clock, AlertCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function TeacherDashboard() {
  const { stats, loading: statsLoading } = useTeacherDashboard();
  const { queue, loading: queueLoading } = useGradingQueue();
  const { users, loading: usersLoading } = useTeacherUserManagement();

  if (statsLoading || queueLoading) {
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
      label: 'Total Students',
      value: stats?.total_students || 0,
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-500/20',
    },
    {
      icon: ClipboardCheck,
      label: 'Pending Grading',
      value: stats?.pending_grading_count || 0,
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-500/20',
      urgent: (stats?.pending_grading_count || 0) > 10,
    },
    {
      icon: Calendar,
      label: 'Assigned This Week',
      value: stats?.tests_assigned_this_week || 0,
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-500/20',
    },
    {
      icon: TrendingUp,
      label: 'Class Average',
      value: stats?.average_class_performance ? `${stats.average_class_performance.toFixed(1)}%` : 'N/A',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-500/20',
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
              Teacher Dashboard
            </h1>
            <p className="text-white/70">
              Manage students, grade submissions, and track performance
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
                  {stat.urgent && (
                    <Badge className="bg-red-500/20 text-red-300 border-red-400/30">
                      Urgent
                    </Badge>
                  )}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Grading Queue */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <ClipboardCheck className="w-6 h-6" />
                  Grading Queue
                </h2>
                <Badge className="bg-white/20 text-white">
                  {queue?.total_pending || 0} Total
                </Badge>
              </div>

              <div className="space-y-4">
                {/* Writing Task 1 */}
                {queue?.writing_task1 && queue.writing_task1.length > 0 && (
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Writing Task 1
                      <Badge className="bg-main-200/20 text-main-300">
                        {queue.writing_task1.length}
                      </Badge>
                    </h3>
                    <div className="space-y-2">
                      {queue.writing_task1.slice(0, 3).map((item) => (
                        <Link key={item.answer_id} href={`/teacher/grade/${item.answer_id}`}>
                          <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-white font-medium">{item.student_name}</p>
                                <p className="text-white/60 text-sm truncate">{item.test_title}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                {item.is_urgent && (
                                  <Badge className="bg-red-500/20 text-red-300 border-red-400/30">
                                    {item.days_waiting}d
                                  </Badge>
                                )}
                                <ChevronRight className="w-5 h-5 text-white/40" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Writing Task 2 */}
                {queue?.writing_task2 && queue.writing_task2.length > 0 && (
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Writing Task 2
                      <Badge className="bg-main-200/20 text-main-300">
                        {queue.writing_task2.length}
                      </Badge>
                    </h3>
                    <div className="space-y-2">
                      {queue.writing_task2.slice(0, 3).map((item) => (
                        <Link key={item.answer_id} href={`/teacher/grade/${item.answer_id}`}>
                          <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="text-white font-medium">{item.student_name}</p>
                                <p className="text-white/60 text-sm truncate">{item.test_title}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                {item.is_urgent && (
                                  <Badge className="bg-red-500/20 text-red-300 border-red-400/30">
                                    {item.days_waiting}d
                                  </Badge>
                                )}
                                <ChevronRight className="w-5 h-5 text-white/40" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {(!queue || (queue.writing_task1.length === 0 && queue.writing_task2.length === 0 && queue.speaking.length === 0)) && (
                  <div className="text-center py-8 text-white/60">
                    No submissions pending grading.
                  </div>
                )}

                {queue && queue.total_pending > 6 && (
                  <Link href="/teacher/grading">
                    <Button className="w-full bg-main-200 hover:bg-main-100 text-white">
                      View All ({queue.total_pending})
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions & Students */}
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
                <Link href="/teacher/grading">
                  <Button className="w-full bg-main-200 hover:bg-main-100 text-white justify-start">
                    <ClipboardCheck className="w-4 h-4 mr-2" />
                    Start Grading
                  </Button>
                </Link>
                <Link href="/teacher/students">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Students
                  </Button>
                </Link>
                <Link href="/teacher/passages">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Manage Content
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Students Needing Attention */}
            {stats?.students_needing_attention && stats.students_needing_attention.length > 0 && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Attention Needed
                </h3>
                <div className="space-y-3">
                  {stats.students_needing_attention.slice(0, 5).map((student: any, index: number) => (
                    <div
                      key={index}
                      className="p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <p className="text-white text-sm font-medium">
                        {student.name || 'Student'}
                      </p>
                      <p className="text-white/60 text-xs">
                        {student.reason || 'Needs attention'}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-main-200 to-main-100 border-0 p-6">
              <h3 className="text-white font-bold text-lg mb-2">
                Recent Submissions
              </h3>
              <p className="text-white/80 text-sm mb-4">
                {stats?.recent_submissions?.length || 0} new submissions today
              </p>
              <Link href="/teacher/grading">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                  View All
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
