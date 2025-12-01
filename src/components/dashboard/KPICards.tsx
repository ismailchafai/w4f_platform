import { Card } from '../ui/Card';
import { Zap, Droplets, Leaf, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: string;
}

const KPICard = ({ icon, title, value, change, changeType, color }: KPICardProps) => {
  const changeColors = {
    positive: 'text-green-600 dark:text-green-400',
    negative: 'text-red-600 dark:text-red-400',
    neutral: 'text-gray-600 dark:text-gray-400',
  };

  return (
    <Card hover className="relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 rounded-full -mr-16 -mt-16`} />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
            {icon}
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
        <div className="flex items-center">
          <span className={`text-sm font-medium ${changeColors[changeType]}`}>{change}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">vs hier</span>
        </div>
      </div>
    </Card>
  );
};

export const KPICards = () => {
  const kpis = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: 'Énergie consommée',
      value: '285 kWh',
      change: '+12%',
      changeType: 'negative' as const,
      color: 'bg-blue-500',
    },
    {
      icon: <Droplets className="w-6 h-6 text-cyan-600" />,
      title: 'Niveau d\'eau',
      value: '87%',
      change: '-3%',
      changeType: 'negative' as const,
      color: 'bg-cyan-500',
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: 'Santé écosystème',
      value: '92%',
      change: '+5%',
      changeType: 'positive' as const,
      color: 'bg-green-500',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      title: 'Alertes critiques',
      value: '2',
      change: '+1',
      changeType: 'neutral' as const,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <KPICard {...kpi} />
        </motion.div>
      ))}
    </div>
  );
};
