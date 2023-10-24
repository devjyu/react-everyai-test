import '@/app/join/join.css';
import JoinText from './join-components/join-text';
import JoinSubText from './join-components/join-sub-text';
import JoinInput from './join-components/join-input';

export default function Join() {
    return(
        <>
            <JoinText />
            <JoinSubText />
            <JoinInput />
        </>
    );
}