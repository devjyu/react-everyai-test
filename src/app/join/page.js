import '@/app/join/join.css';
import UserLayout from '../_components/user-layout';
import JoinText from './join-components/join-text';
import JoinSubText from './join-components/join-sub-text';
import JoinInput from './join-components/join-input';

export default function Join() {
    return(
        <UserLayout>
            <div class="join">
                <JoinText />
                <JoinSubText />
                <JoinInput />
            </div>
        </UserLayout>
    );
}