import '@/app/join-start/join-start.css';
import UserLayout from "@/_components/user-layout";
import JoinStartText from './_components/join-start-text';
import JoinStartButton from './_components/join-start-button';
import JoinStartLogo from './_components/join-start-logo';

export default function JoinStart() {
    return(
        <UserLayout>
            <JoinStartLogo />
            <JoinStartText />
            <JoinStartButton />
        </UserLayout>
    );
}