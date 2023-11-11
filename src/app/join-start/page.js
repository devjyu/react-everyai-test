"use client"
import '@/app/join-start/join-start.css';
import UserLayout from "@/_components/user-layout";
import JoinStartText from './_components/text';
import JoinStartButton from './_components/button';
import JoinStartLogo from './_components/logo';

export default function JoinStart() {
    return(
        <UserLayout>
            <JoinStartLogo />
            <JoinStartText />
            <JoinStartButton />
        </UserLayout>
    );
}