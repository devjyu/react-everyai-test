import '@/app/profile-management/style.css';
import MainLayout from "@/_components/main-layout";
import ProfileManagementTitle from './_components/title';
import ProfileManagementInput from './_components/input';

export default function ProfileManagement() {
    return (
        <MainLayout>
            <ProfileManagementTitle />
            <ProfileManagementInput />
        </MainLayout>
    );
}