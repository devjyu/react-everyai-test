export default function Title({data}) {
    return (
        <>
            <div className="inner-container-header">
                <div className="inner-container-header-route">
                    <span>{data.productCategory}</span> / <span>{data.productSubcategory}</span>
                </div>
                <div className="inner-container-header-title">
                    <span className="title">{data.projectTitle}</span>
                </div>
                <hr />
            </div>
        </>
    );
}
