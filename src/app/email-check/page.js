import '@/app/email-check/email-check.css';
import UserLayout from '../../_components/user-layout';
import EmailCheckText from './_components/email-check-text';
import EmailCheckInput from './_components/email-check-input';

export default function EmailCheck() {
    return(
        <UserLayout>
            <EmailCheckText />
            <EmailCheckInput />
        </UserLayout>
    );
}