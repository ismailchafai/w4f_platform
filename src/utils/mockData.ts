export const temperatureData = [
  { time: '00:00', value: 18 },
  { time: '04:00', value: 16 },
  { time: '08:00', value: 22 },
  { time: '12:00', value: 28 },
  { time: '16:00', value: 26 },
  { time: '20:00', value: 20 },
];

export const precipitationData = [
  { month: 'Jan', value: 45 },
  { month: 'Fév', value: 52 },
  { month: 'Mar', value: 38 },
  { month: 'Avr', value: 65 },
  { month: 'Mai', value: 78 },
  { month: 'Jun', value: 82 },
];

export const humidityData = [
  { day: 'Lun', value: 65 },
  { day: 'Mar', value: 72 },
  { day: 'Mer', value: 68 },
  { day: 'Jeu', value: 75 },
  { day: 'Ven', value: 70 },
  { day: 'Sam', value: 62 },
  { day: 'Dim', value: 58 },
];

export const energyData = [
  { hour: '00h', value: 120 },
  { hour: '04h', value: 80 },
  { hour: '08h', value: 200 },
  { hour: '12h', value: 350 },
  { hour: '16h', value: 280 },
  { hour: '20h', value: 180 },
];

export const recentMeasurements = [
  { id: 1, metric: 'Température', value: '24°C', status: 'normal', timestamp: '10:23' },
  { id: 2, metric: 'Humidité', value: '68%', status: 'normal', timestamp: '10:22' },
  { id: 3, metric: 'Énergie', value: '285 kWh', status: 'high', timestamp: '10:20' },
  { id: 4, metric: 'Niveau eau', value: '87%', status: 'normal', timestamp: '10:18' },
  { id: 5, metric: 'pH', value: '7.2', status: 'normal', timestamp: '10:15' },
  { id: 6, metric: 'CO2', value: '420 ppm', status: 'warning', timestamp: '10:12' },
];
