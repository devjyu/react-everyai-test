import '@/app/join-success/join-success.css';
import UserLayout from '@/_components/user-layout';
import JoinSuccessLogo from './_components/logo';
import JoinSuccessText from './_components/text';
import JoinSuccessImage from './_components/image';
import MainMovementButton from './_components/main-movement-button';

export default function JoinSuccess() {
    return(
        <UserLayout>
            <JoinSuccessLogo />
            <JoinSuccessText />
            <JoinSuccessImage />
            <MainMovementButton />
        </UserLayout>
    );
}