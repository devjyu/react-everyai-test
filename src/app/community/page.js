import '@/app/community/style.css';
import CommunityData from "@/repository/data/community.json";
import MainLayout from "@/_components/main-layout";
import CommunityText from "./_components/text";
import CommunityTable from "./_components/table";


export default function Community() {
    return(
        <MainLayout>
            <CommunityText />
            <CommunityTable {...CommunityData} />
        </MainLayout>
    );
}