import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Radio,
  Bot,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: MenuItem[] = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Graphiques' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Prévisions' },
    { icon: <Radio className="w-5 h-5" />, label: 'Temps réel' },
    { icon: <Bot className="w-5 h-5" />, label: 'Assistant IA' },
    { icon: <Settings className="w-5 h-5" />, label: 'Paramètres' },
  ];

  return (
    <motion.aside
      initial={{ x: 0 }}
      animate={{ width: collapsed ? '80px' : '256px' }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 flex flex-col"
    >
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className={item.active ? 'text-blue-600 dark:text-blue-400' : ''}>
                {item.icon}
              </span>
              {!collapsed && (
                <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </motion.aside>
  );
};
