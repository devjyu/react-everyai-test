import SelectField from "@/_components/select-field";

export default function Title() {
  const proposalOptions=[
    '옵션 1',
    '옵션 2',
    '옵션 3',
  ]
  return (
    <>     
      <div class="inner-container-header">
        <div class="title">보낸 제안</div>
        <hr />
        <div class="filter">
          <SelectField  className="proposal-options" options={proposalOptions} placeholder={"전체 제안"}/>
        </div>
      </div>
    </>


  );
}
