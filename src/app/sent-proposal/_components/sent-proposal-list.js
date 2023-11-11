
import SelectField from "@/_components/select-field";
import Image from "next/image";

export default function SentProposal({data}) {
    const proposalOptions = [
        '진행중',
        '체택',
        '마감',
    ]
    const handleProjectClick = (index) => {
        window.location.href = `project-detail/${index}`;
    };
    return (
        <>
            <div className="filter">
                <SelectField className="proposal-options" options={proposalOptions} placeholder={"전체 제안"} />
            </div>
            <div className="inner-container-body">
                <div className="sent-proposal-list">
                    {data.projectList.map((project, index) => (
                        <div className="sent-proposal-list-item" key={index}>
                            <div className="sent-proposal-list-item-left">
                                <Image src={project.thumbnailUrl} alt="placeholder" width={150} height={150}/>
                                <span>d-{project.dDay}</span>
                            </div>
                            <div className="recieved-proposal-list-item-middle">
                                <div className="recieved-proposal-list-item-middle-1">
                                    {project.title}
                                </div>
                                <div className="sent-proposal-list-item-middle-2">
                                    작업기간 : {project.workDay} | 비용 : {project.price}
                                </div>
                            </div>
                            <div className="recieved-proposal-list-item-right">
                                <div>
                                    <div className="project-shortcut" onClick={() => handleProjectClick(project.idx)}>프로젝트 바로가기</div>
                                    <div>
                                        <div className="sent-proposal-list-item-right-proposal-status">{project.status}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    );
}
