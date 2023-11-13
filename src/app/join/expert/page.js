"use client";
import '@/app/join/style.css';
import UserLayout from '@/_components/user-layout';
import JoinText from '../_components/text';
import JoinSubExpertText from '../_components/sub-text-expert';
import ExpertJoinForm from '../_components/expert-form';
import UserJobBusiness from '@/repository/data/user-job-business.json';

export default function JoinExpert() {
    return(
        <UserLayout>
            <JoinText />
            <JoinSubExpertText />
            <ExpertJoinForm {...UserJobBusiness}/>
        </UserLayout>
    );
}