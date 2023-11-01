import '@/app/profit-management/style.css';
import MainLayout from "@/_components/main-layout";
import ProfitManagementTitle from './_components/title';
import ProfitManagementInfo from './_components/info';
import ProfitManagementGraph from './_components/graph';
import ProfitManagementLog from './_components/log';

export default function ProfitManagement() {
  return (
    <MainLayout>
        <ProfitManagementTitle />
        <ProfitManagementInfo />
        <ProfitManagementGraph />
        <ProfitManagementLog />
    </MainLayout>
  );
}
