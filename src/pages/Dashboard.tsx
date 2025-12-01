import { KPICards } from '../components/dashboard/KPICards';
import { Charts } from '../components/dashboard/Charts';
import { DataTable } from '../components/dashboard/DataTable';
import { AIAssistant } from '../components/dashboard/AIAssistant';

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Vue d'ensemble de vos métriques environnementales en temps réel
        </p>
      </div>

      <KPICards />

      <Charts />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DataTable />
        </div>
        <div className="lg:col-span-1">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
};
