import '@/app/join/join.css';
import UserLayout from '../_components/user-layout';
import JoinText from './join-components/join-text';
import JoinSubText from './join-components/join-sub-text';
import JoinEmail from './join-components/join-email';
import JoinPassword from './join-components/join-password';
import JoinJob from './join-components/join-job';
import JoinBusiness from './join-components/join-business';
import JoinAgree from './join-components/join-agree';
import JoinButton from './join-components/join-button';

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