import InputField from "@/_components/input-field";

export default function PurchasedProduct() {
    return (
      // <!-- 구매한 상품 -->
      <>
      <div class="purchased-product">
          <div class="font-20">구매한 상품</div>

          <div class="proceeding">
              <div class="purchased-product-proceeding">
                  <div>진행중</div>
                  <div>{<span class="font-blue">결제완료일시</span>}</div>
              </div>
              <div>전문가 작업이 진행중입니다.</div>
              <div>궁금한 사항은 전문가에게 문의해주세요!</div>
          </div>
          <div class="arrival-of-work">
              <div class="arrival-of-work-detail">
                  <div>작업물 도착</div>
                  <div>{<span class="font-blue">작업물 도착일시</span>}</div>
              </div>
              <div class="arrival-of-work-detail">
                  <div>작업물을 확인하고 구매확정 또는 수정요청을 해주세요.</div>
                  <div><button>수정요청</button></div>
              </div>
              <div class="arrival-of-work-detail">
                  <div>미응답 시, 7일 후 자동으로 구매확정이 됩니다.</div>
                  <div><button>구매확정</button></div>
              </div>
              <hr/>
              <div class="profile-img">
                  {/* <img src="http://via.placeholder.com/50x50" alt=""> */}
                  <div class="profile-img-text">하늘그리다</div>
                  <div class="profile-img-text">{<span class="font-blue">다운로드기간</span>}</div>
              </div>
              <div class="arrival-of-work-message-center">
                  <div class="arrival-of-work-message">{<span class="font-blue">작업물 발송 메세지</span>}</div>
              </div>
              <div class="arrival-of-work-file-center">
                  <div class="arrival-of-work-file">{<span class="font-blue">첨부 파일</span>}</div>
              </div>
          </div>
          <div class="proceeding">
              <div class="purchased-product-proceeding">
                  <div>구매완료</div>
                  <div>{<span class="font-blue">구매 확정 일시</span>}</div>
              </div>
              <div>이용해주셔서 감사합니다!</div>
              <div>작업물에 대한 평가를 남겨주세요.</div>
              <hr/>
              <div>내가 남긴 구매후기</div>
              <InputField type="text"/>
          </div>
      </div>
      </>
    );
}
