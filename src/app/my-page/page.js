import '@/app/my-page/style.css';
import MainLayout from '@/_components/main-layout';
import MyPageTitle from './_components/title';
import MyPageUserInfo from './_components/user-info';
import MyPageSuggest from './_components/suggest';
import MyPageSellInfo from './_components/sell-info';
import MyPageServiceList from './_components/service-list';

export default function MyPage() {
    return(
        <MainLayout>
            <MyPageTitle />
            <MyPageUserInfo />
            <MyPageSuggest />
            <MyPageSellInfo />
            <MyPageServiceList />
        </MainLayout>
    );
}