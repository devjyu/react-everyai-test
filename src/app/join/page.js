import '@/app/join/join.css';
import UserLayout from '../../_components/user-layout';
import JoinText from './_components/text';
import JoinSubText from './_components/sub-text';
import JoinEmail from './_components/email';
import JoinPassword from './_components/password';
import JoinJob from './_components/job';
import JoinBusiness from './_components/business';
import JoinAgree from './_components/agree';
import JoinButton from './_components/button';

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