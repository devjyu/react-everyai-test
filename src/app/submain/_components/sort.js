export default function SubmainSort() {
    return (
        // <!-- 드롭다운 -->
    <div class="sort-dropdowns">
      <div>
        <select className="category-detail" id="category-detail" class="category-detail">
          <option disabled selected>전체 카테고리</option>
          <option value="디자인">디자인</option>
        </select>
        <select className="category-detail" id="category-detail" class="category-detail">
          <option disabled selected>세부 카테고리</option>
          <option value="디자인">디자인</option>
        </select>
      </div>
      <div>
        <select className="sort" id="sort" class="sort">
          <option disabled selected>정렬</option>
          <option value="오름차순">오름차순</option>
        </select>
      </div>
    </div>
    );
}
