import InputField from "@/_components/input-field";
import SelectField from "@/_components/select-field";
import Image from "next/image";

export default function RecievedProposal({ data }) {
    const proposalOptions = [
        '옵션 1',
        '옵션 2',
        '옵션 3',
    ]
    return (
        <>
            <div className="filter">
                <SelectField className={"proposal-options"} options={proposalOptions} placeholder={"프로젝트 이름"} />

            </div>
            <div className="inner-container-body">
                <div className="sent-proposal-list">
                    {data.projectProposalList.map((project, index) => (
                        <div className="sent-proposal-list-item" key={index}>
                            <div className="recieved-proposal-list-item-left">
                                <Image src={project.profileUrl} alt="plcaholder" width={150} height={150} />
                            </div>
                            <div className="recieved-proposal-list-item-middle">
                                <div className="recieved-proposal-list-item-middle-1">
                                    <div className="expert-nickname">{project.expertNickname}</div>
                                    <div className="expert-grade">level {project.expertLevel}</div>
                                </div>
                                <div className="recieved-proposal-list-item-middle-2">
                                    {project.description}
                                </div>
                                <div className="recieved-proposal-list-item-middle-3">
                                    제안 금액 : {project.price} | 제안 일수 : {project.workDay}
                                </div>
                            </div>
                            <div className="recieved-proposal-list-item-right">
                                <div>
                                    <div className="recieved-proposal-list-item-right-proposal-status">{project.status}</div>
                                    <div className="ask"><a href="#"> 문의하기</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
