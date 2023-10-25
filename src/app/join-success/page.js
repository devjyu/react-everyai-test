import '@/app/join-success/join-success.css';
import UserLayout from '@/_components/user-layout';
import JoinSuccessLogo from './_components/join-success-logo';
import JoinSuccessText from './_components/join-success-text';
import JoinSuccessImage from './_components/join-success-image';
import MainMovementButton from './_components/join-success-main-button';

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