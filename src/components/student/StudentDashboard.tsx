'use client';

import { useCurrentUser, useTestLevels, useStudentDashboard, useStudentProgress } from '@/lib/api';
import { motion } from 'framer-motion';
import { BookOpen, Award, TrendingUp, Calendar, ChevronRight, Clock, Target, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function StudentDashboard() {
  const { user, loading: userLoading } = useCurrentUser();
  const { testLevels, loading: levelsLoading } = useTestLevels();
  const { stats: dashboardStats, loading: statsLoading } = useStudentDashboard();
  const { progress, loading: progressLoading } = useStudentProgress();

  if (userLoading || levelsLoading || statsLoading) {
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
      icon: BookOpen,
      label: 'Tests Completed',
      value: dashboardStats?.total_tests_completed || 0,
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-500/20',
    },
    {
      icon: Target,
      label: 'Band Score',
      value: dashboardStats?.overall_band_score ? dashboardStats.overall_band_score.toFixed(1) : 'N/A',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-500/20',
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${dashboardStats?.current_streak || 0} days`,
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-500/20',
    },
    {
      icon: TrendingUp,
      label: 'Improvement',
      value: dashboardStats?.improvement_rate ? `+${dashboardStats.improvement_rate.toFixed(1)}%` : '0%',
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
              Welcome back, {user?.display_name || user?.first_name || 'Student'}!
            </h1>
            <p className="text-white/70">
              Continue your IELTS preparation journey
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
                  <Badge className="bg-white/20 text-white border-none">
                    New
                  </Badge>
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
          {/* Available Test Levels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Available Test Levels
                </h2>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  size="sm"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {testLevels && testLevels.length > 0 ? (
                  testLevels.slice(0, 5).map((level, index) => (
                    <motion.div
                      key={level.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link href={`/student/tests/${level.id}`}>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-main-200 to-main-100 flex items-center justify-center">
                              <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold group-hover:text-main-300 transition-colors">
                                {level.name}
                              </h3>
                              <p className="text-white/60 text-sm">
                                {level.description || 'IELTS Reading Test'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge className="bg-main-200/20 text-main-300 border-main-300/30">
                              Order {level.display_order}
                            </Badge>
                            <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-white/60">
                    No test levels available yet.
                  </div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions & Recent Activity */}
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
                <Button className="w-full bg-main-200 hover:bg-main-100 text-white justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Practice Test
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white justify-start border border-white/20">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Classes
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-main-200 mt-2" />
                  <div>
                    <p className="text-white text-sm">Account created</p>
                    <p className="text-white/50 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(user?.created_at || Date.now()).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Profile Card */}
            <Card className="bg-gradient-to-br from-main-200 to-main-100 border-0 p-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white">
                  {(user?.first_name?.[0] || user?.email?.[0] || 'S').toUpperCase()}
                </div>
                <h4 className="text-white font-semibold mb-1">
                  {user?.display_name || user?.first_name || 'Student'}
                </h4>
                <p className="text-white/70 text-sm mb-4">{user?.email}</p>
                <Link href="/student/profile">
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
