import '@/app/message/style.css';
import MainLayout from "@/_components/main-layout";
import MessageTitle from './_components/title';
import MessageResponseBox from './_components/respose-box';
import MessageBody from './_components/body';

export default function Message() {
    return(
        <MainLayout>
            <MessageTitle />
            <MessageResponseBox />
            <MessageBody />
        </MainLayout>
    );
}