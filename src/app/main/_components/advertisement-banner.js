import React, {useState, useEffect} from 'react';
import Data from '@/repository/data/main.json';
import Image from 'next/image';

export default function MainAdvertisementBanner() {

  const [advertisementBanner, setAdvertisementBanner] = useState([]);

  useEffect(() => {
    fetch('data/main.json')
    .then((res) => res.json())
    .then((result) => setAdvertisementBanner(result));
  }, []);  

  return (
    // <div className="main-banner-box">
    //   <div className="main-inner-banner-box">
    //     <Image src="" alt='광고배너'/>
    //   </div>
    // </div>
    <div className="main-banner-box">
      <Image src="" alt='광고배너' width={700} height={100} />
    </div>
  );
}
