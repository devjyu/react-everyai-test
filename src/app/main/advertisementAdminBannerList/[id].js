import { useRouter } from 'next/router';

export default function AdvertisementAdminBannerList() {
    const router = useRouter();
    const { id } = router.query; // Get the dynamic parameter from the URL

    return (
        <div>
            <h1>Advertisement Admin Banner List Page {id}</h1>
            {/* Add your page content here */}
        </div>
    );
}