import '@/app/bookmark/style.css';
import MainLayout from '@/_components/main-layout';
import BookmarkTitle from './_components/title';
import BookmarkServiceList from './_components/service-list';
import BookmarkData from '@/repository/data/bookmark.json';

export default function Bookmark() {
    return(
        <MainLayout>
            <BookmarkTitle />
            <BookmarkServiceList {...BookmarkData}/>
        </MainLayout>
    );
}