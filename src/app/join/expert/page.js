"use client";
import '@/app/join/style.css';
import UserLayout from '@/_components/user-layout';
import JoinText from '../_components/text';
import JoinSubExpertText from '../_components/sub-text-expert';
import JoinForm from '../_components/form';
import UserJobBusiness from '@/repository/data/user-job-business.json';

export default function JoinExpert() {
    return(
        <UserLayout>
            <JoinText />
            <JoinSubExpertText />
            <JoinForm {...UserJobBusiness}/>
        </UserLayout>
    );
}