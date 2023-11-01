import React from 'react';
import BookmarkServiceCard from './service-list-card';

export default function BookmarkServiceList({ data }) {
    return (
        <>
            <div className="service-card-list">
                {data.map((bookmark, index) => (
                    <BookmarkServiceCard key={index} bookmark={bookmark} />
                ))}
            </div>
        </>
    );
}
