import { Card } from '../ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  temperatureData,
  precipitationData,
  humidityData,
  energyData,
} from '../../utils/mockData';
import { useTheme } from '../../contexts/ThemeContext';

const CustomTooltip = ({ active, payload, label }: any) => {
  const { isDark } = useTheme();

  if (active && payload && payload.length) {
    return (
      <div className={`p-3 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Valeur: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export const Charts = () => {
  const { isDark } = useTheme();
  const gridColor = isDark ? '#374151' : '#e5e7eb';
  const textColor = isDark ? '#9ca3af' : '#6b7280';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Température (°C)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="time" stroke={textColor} style={{ fontSize: '12px' }} />
            <YAxis stroke={textColor} style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Précipitations (mm)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={precipitationData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="month" stroke={textColor} style={{ fontSize: '12px' }} />
            <YAxis stroke={textColor} style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Humidité (%)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={humidityData}>
            <defs>
              <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="day" stroke={textColor} style={{ fontSize: '12px' }} />
            <YAxis stroke={textColor} style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#humidityGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Consommation d'énergie (kWh)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={energyData}>
            <defs>
              <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="hour" stroke={textColor} style={{ fontSize: '12px' }} />
            <YAxis stroke={textColor} style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f59e0b"
              strokeWidth={2}
              fill="url(#energyGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};
