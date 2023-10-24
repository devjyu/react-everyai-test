import '@/app/join/join.css';
import UserLayout from '../../_components/user-layout';
import JoinText from './_components/join-text';
import JoinSubText from './_components/join-sub-text';
import JoinEmail from './_components/join-email';
import JoinPassword from './_components/join-password';
import JoinJob from './_components/join-job';
import JoinBusiness from './_components/join-business';
import JoinAgree from './_components/join-agree';
import JoinButton from './_components/join-button';

export default function Join() {
    return(
        <UserLayout>
            <JoinText />
            <JoinSubText />
            <JoinEmail />
            <JoinPassword />
            <JoinJob />
            <JoinBusiness />
            <JoinAgree />
            <JoinButton />
        </UserLayout>
    );
}