export default function Title({data}) {
    return (
        <>
            <div className="inner-container-header">
                <div className="inner-container-header-route">
                    <span>{data.ResProject.productCategory}</span> / <span>{data.ResProject.productSubcategory}</span>
                </div>
                <div className="inner-container-header-title">
                    <span className="title">{data.ResProject.projectTitle}</span>
                </div>
                <hr />
            </div>
        </>
    );
}
