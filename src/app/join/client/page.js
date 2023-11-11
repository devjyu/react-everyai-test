"use client";
import '@/app/join/style.css';
import UserLayout from '@/_components/user-layout';
import JoinText from '../_components/text';
import JoinSubClientText from '../_components/sub-text-client';
import JoinForm from '../_components/form';
import UserJobBusiness from '@/repository/data/user-job-business.json';

export default function JoinClient() {
    return(
        <UserLayout>
            <JoinText />
            <JoinSubClientText />
            <JoinForm {...UserJobBusiness}/>
        </UserLayout>
    );
}