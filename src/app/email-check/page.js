"use client"
import '@/app/email-check/style.css';
import UserLayout from '../../_components/user-layout';
import EmailInputs from './_components/email';
import Text from './_components/text';

export default function EmailCheck() {
    return(
        <UserLayout>
            <Text />
            <EmailInputs />
        </UserLayout>
    );
}