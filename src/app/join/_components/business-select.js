import SelectFields from "@/_components/select-fields";

export default function BusinessSelect({ data, userData, handleInputChange }) {
    
    return(
        <>
        <div className="business">
            <label>
              (비즈니스)분야 <span className="star">*</span>
            </label>
            <div>
              <SelectFields
                className="business-select"
                placeholder="선택하기(단일분야)"
                options={data.userBusinessList}
                name="userBusinessIdx"
                value={userData.userBusinessIdx}
                onChange={handleInputChange}
              />
            </div>
        </div>
        </>
    );
}