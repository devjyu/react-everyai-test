import '@/app/email-check/[idx]/password-change.css';
import UserLayout from '../../../_components/user-layout';
import PasswordChangeText from './_components/password-change-text';
import PasswordChangeInput from './_components/password-change-input';

export default function EmailCheck() {
    return(
        <UserLayout>
            <PasswordChangeText />
            <PasswordChangeInput />
        </UserLayout>
    );
}