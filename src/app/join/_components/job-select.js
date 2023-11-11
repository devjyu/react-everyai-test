import SelectFields from "@/_components/select-fields";

export default function JobSelect({
  data,
  userData,
  handleInputChange,
}) {
  return (
    <>
      <div className="job">
        <label>
          직업 <span className="star">*</span>
        </label>
        <div>
          <SelectFields
            className="job-select"
            placeholder={"선택하기"}
            options={data.userJobList}
            name="userJobIdx"
            value={userData.userJobIdx}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}
