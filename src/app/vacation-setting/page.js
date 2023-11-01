import '@/app/vacation-setting/style.css';
import MainLayout from "@/_components/main-layout";
import VacationSettingTitle from './_components/title';
import VacationSettingSelect from './_components/select';

export default function VacationSetting() {
    return(
        <MainLayout>
            <VacationSettingTitle />
            <VacationSettingSelect />
        </MainLayout>
    );
}