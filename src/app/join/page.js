import '@/app/join/style.css';
import UserLayout from '../../_components/user-layout';
import JoinText from './_components/text';
import JoinSubText from './_components/sub-text';
import JoinForm from './_components/form';

export default function Join() {
    return(
        <UserLayout>
            <JoinText />
            <JoinSubText />
            <JoinForm />
        </UserLayout>
    );
}