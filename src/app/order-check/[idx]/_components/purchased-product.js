import React, { useState } from 'react';
import InputField from "@/_components/input-field";
import Image from 'next/image';

export default function PurchasedProduct({ data }) {

  const getStatusContent = (status, createDat, index) => {

    let element;
    switch (status) {
      case 'PROCESS':
        element = (<div className="proceeding">
          <div class="purchased-product-proceeding">
            <div>진행중</div>
            <div>{data.paymentDay}</div>
          </div>
          {data.userstatus === 'user' ? (
            <div>
              <div>전문가 작업이 진행중입니다.</div>
              <div>궁금한 사항은 전문가에게 문의해주세요!</div>
            </div>
          ) : (
            <div className='flex-between-button'>
              <div>
                <div>서비스에 대한 결제가 완료 되었습니다.</div>
                <div>작업을 완성하시고 완료되면 작업물을 발송해주세요. </div>
              </div>
              <div><button disabled="true">작업물 발송</button></div>
            </div>
          )}

        </div>);
        break;

      case 'UPDATE_REQUEST':
        element = (<div className="proceeding">
          <div className="purchased-product-proceeding">
            <div>수정요청</div>
            <div>{<span className="font-blue">{createDat}</span>}</div>
          </div>

          {data.userstatus === 'user' ? (
            <div>
              <div>전문가에게 수정을 요청하였습니다.</div>
              <div>다시 작업물이 발송될 때까지 기다려주세요.</div>
            </div>
          ) : (
            <div className='flex-between-button'>
              <div>
                <div>서비스에 대한 결제가 완료 되었습니다.</div>
                <div>작업을 완성하시고 완료되면 작업물을 발송해주세요. </div>
              </div>
              <div><button disabled={index !== data.worklogList.length - 1}>작업물 발송</button></div>
            </div>
          )}

        </div>);
        break;


      case 'COMPLETE':
        element = (
          data.userstatus === 'user' ? (
            <div className="proceeding">
              <div className="purchased-product-proceeding">
                <div>구매완료</div>
                <div>{<span className="font-blue">{createDat}</span>}</div>
              </div>

              <div className='flex-between-button'>
                <div>
                  <div>이용해주셔서 감사합니다!</div>
                  <div>작업물에 대한 평가를 남겨주세요.</div>
                </div>
                <div><button disabled={index !== data.worklogList.length - 1}>리뷰 작성</button></div>
              </div>
              <hr />
              <div >내가 남긴 구매후기</div>
              <div className='review-detail'>
                <div className='grid-1-2-1'>
                  <div >
                    <div className='font-20 flex-center'>⭐⭐⭐⭐⭐</div>
                    <div className='font-25 flex-center'>5.0</div>
                  </div>
                  <div>
                    <div className='flex font-15 grid-1-2-1'><div>결과물 만족도</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                    <div className='flex font-15 grid-1-2-1'><div>친절한 상담</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                    <div className='flex font-15 grid-1-2-1'><div>신속한 대응</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                  </div>
                  <div><Image src={data.serviceThumbnailUrl} alt='' placeholder="blur" width={150} height={80} blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." /></div>
                </div>
                <div>
                  <div className="arrival-of-work-message-center">
                    <div className="arrival-of-work-message">{<span className="font-blue">리뷰내용</span>}</div>
                  </div>
                </div>
              </div>
            </div>) : (
            <div className="proceeding">
              <div className="purchased-product-proceeding">
                <div>작업완료</div>
                <div>{<span className="font-blue">{createDat}</span>}</div>
              </div>

              <div className='flex-between-button'>
                <div>
                  <div>의뢰인이 평가를 남겼습니다.</div>
                  <div>수익관리에서 수익금을 확인 해 보세요.</div>
                </div>
                <div><button disabled={index !== data.worklogList.length - 1}>댓글 달기</button></div>
              </div>
              <hr />
              <div >고객이 남긴 구매후기</div>
              <div className='review-detail'>
                <div className='grid-1-2-1'>
                  <div >
                    <div className='font-20 flex-center'>⭐⭐⭐⭐⭐</div>
                    <div className='font-25 flex-center'>5.0</div>
                  </div>
                  <div>
                    <div className='flex font-15 grid-1-2-1'><div>결과물 만족도</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                    <div className='flex font-15 grid-1-2-1'><div>친절한 상담</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                    <div className='flex font-15 grid-1-2-1'><div>신속한 대응</div> <div>⭐⭐⭐⭐⭐</div> <div>5.0</div></div>
                  </div>
                  <div><Image src={data.serviceThumbnailUrl} alt='' placeholder="blur" width={150} height={80} blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." /></div>
                </div>
                <div>
                  <div className="arrival-of-work-message-center">
                    <div className="arrival-of-work-message">{<span className="font-blue">리뷰내용</span>}</div>
                  </div>
                </div>
              </div>
            </div>
          ));
        break;

      case 'SEND':
        element = (
          data.userstatus === 'user' ? (
            <div className="arrival-of-work">
              <div className="arrival-of-work-detail">
                <div>작업물 도착</div>
                <div>{<span className="font-blue">{createDat}</span>}</div>
              </div>
              <div className="arrival-of-work-detail">
                <div>작업물을 확인하고 구매확정 또는 수정요청을 해주세요.</div>
                <div><button disabled={index !== data.worklogList.length - 1}>수정요청</button></div>
              </div>
              <div className="arrival-of-work-detail">
                <div>미응답 시, 7일 후 자동으로 구매확정이 됩니다.</div>
                <div><button disabled={index !== data.worklogList.length - 1}>구매확정</button></div>
              </div>
              <hr />
              <div className="profile-img">
                <Image src={data.expertProfileUrl} alt="profile-img" className="profile-image" width={50} height={50} />
                <div className="profile-img-text">하늘그리다</div>
                <div className="profile-img-text">{<span className="font-blue">다운로드기간</span>}</div>
              </div>
              <div className="arrival-of-work-message-center">
                <div className="arrival-of-work-message">{<span className="font-blue">작업물 발송 메세지</span>}</div>
              </div>
              <div className="arrival-of-work-file-center">
                <div className="arrival-of-work-file">{<span className="font-blue">첨부 파일</span>}</div>
              </div>
            </div>) : (
            <div className="proceeding">
              <div className="purchased-product-proceeding">
                <div>작업물 발송</div>
                <div><span className="font-blue">{createDat}</span></div>
              </div>
              <div>
                <div>의뢰인이 작업물을 확인중 입니다.</div>
                <div>수정요청 또는 구매확정할 때까지 기다려주세요.</div>
              </div>
            </div>
          )
        );
        break;

      case 'SEND_DELAY':
        element = (<div className="proceeding">
          <div class="purchased-product-proceeding">
            <div>발송지연</div>
            <div>{data.workDay}</div>
          </div>
          {data.userstatus === 'user' ? (
            <div>
              <div>작업물 도착 예정일이 지났습니다.</div>
              <div>전문가에게 문의해 주세요!</div>
            </div>
          ) : (
            <div className='flex-between-button'>
              <div>
                <div>작업물 발송 기한이 지났습니다.</div>
                <div>완료된 작업물을 발송해주세요. </div>
              </div>
              <div><button disabled="true">작업물 발송</button></div>
            </div>
          )}

        </div>);
        break;

      case 'DEAL_CANCEL_CLIENT_REQUEST':
        element = (<div className="proceeding">
          <div class="purchased-product-proceeding">
            <div>거래 취소 요청</div>
            <div>{data.paymentDay}</div>
          </div>
          {data.userstatus === 'user' ? (
            <>
              <div className='flex-between-button'>
                <div>
                  <div>전문가에게 취소 요청을 보냈습니다.</div>
                  <div>24시간 내에 응답하지 않으면, 자동 주문 취소됩니다.</div>
                </div>
                <div><button disabled="true">요청 철회</button></div>
              </div>
              <hr />
              <div className='flex-colmn-center'>
                <div className="arrival-of-work-message">{<span className="font-blue">거래 취소 사유</span>}</div>
                <div className="arrival-of-work-message">{<span className="font-blue">거래취소 사유 내용</span>}</div>
              </div>
            </>
          ) : (
            <>
              <div className='flex-between-button'>
                <div>
                  <div>의뢰인에게 취소 요청을 받았습니다.</div>
                  <div>24시간 내에 응답하지 않으면, 자동 주문 취소됩니다.</div>
                </div>
                <div className='for-and-against'>
                  <div><button disabled="true">수락</button></div>
                  <div><button disabled="true">거절</button></div>
                </div>
              </div>
              <hr />
              <div className='flex-colmn-center'>
                <div className="arrival-of-work-message">{<span className="font-blue">거래 취소 사유</span>}</div>
                <div className="arrival-of-work-message">{<span className="font-blue">거래취소 사유 내용</span>}</div>
              </div>
            </>
          )}

        </div>);
        break;

        case 'DEAL_CANCEL_CLIENT_REQUEST':
          element = (<div className="proceeding">
            <div class="purchased-product-proceeding">
              <div>거래 취소 요청</div>
              <div>{data.paymentDay}</div>
            </div>
            {data.userstatus === 'user' ? (
              <>
                <div className='flex-between-button'>
                  <div>
                    <div>전문가에게 취소 요청을 받았습니다.</div>
                    <div>24시간 내에 응답하지 않으면, 자동 주문 취소됩니다.</div>
                  </div>
                  <div className='for-and-against'>
                    <div><button disabled="true">수락</button></div>
                    <div><button disabled="true">거절</button></div>
                  </div>
                 
                </div>
                <hr />
                <div className='flex-colmn-center'>
                  <div className="arrival-of-work-message">{<span className="font-blue">거래 취소 사유</span>}</div>
                  <div className="arrival-of-work-message">{<span className="font-blue">거래취소 사유 내용</span>}</div>
                </div>
              </>
            ) : (
              <>
                <div className='flex-between-button'>
                  <div>
                    <div>의뢰인에게 취소 요청을 보냈습니다.</div>
                    <div>24시간 내에 응답하지 않으면, 자동 주문 취소됩니다.</div>
                  </div>
                  <div><button disabled="true">요청 철회</button></div>
                </div>
                <hr />
                <div className='flex-colmn-center'>
                  <div className="arrival-of-work-message">{<span className="font-blue">거래 취소 사유</span>}</div>
                  <div className="arrival-of-work-message">{<span className="font-blue">거래취소 사유 내용</span>}</div>
                </div>
              </>
            )}
  
          </div>);
          break;

      case 'DEAL_CANCEL':
        element = (<div className="proceeding">
          <div class="purchased-product-proceeding">
            <div>거래취소</div>
            <div>{data.paymentDay}</div>
          </div>
          <div>
            <div>작업물에 대한 거래가 취소되었습니다.</div>
            <div>다음에 다시 이용해주세요!</div>
          </div>
        </div>);
        break;

      case 'DELAY_REQUEST':
        element = (<div className="proceeding">
          <div class="purchased-product-proceeding">
            <div>작업물 연장요청</div>
            <div>{data.workDay}</div>
          </div>
          {data.userstatus === 'user' ? (
            <>
              <div className='flex-between-button'>
                <div>
                  <div>전문가에게 작업일 연장 요청을 받았습니다.</div>
                  <div>요청을 수락하면 작업물 도착 예정 일시가 변경됩니다.</div>
                </div>
                <div className='for-and-against'>
                  <div><button disabled="true">수락</button></div>
                  <div><button disabled="true">거절</button></div>
                </div>

              </div>
              <hr />
              <div className="flex-colmn-center">
                <div className="arrival-of-work-message">{<span className="font-blue">작업 연장사유</span>}</div>
                <div className="arrival-of-work-message">{<span className="font-blue">발송 예정일</span>}</div>
              </div>
            </>
          ) : (
            <>
              <div className='flex-between-button'>
                <div>
                  <div>의뢰인에게 작업일 연장 요청을 보냈습니다.</div>
                  <div>요청을 수락하면 작업물 발송 예정 일시가 변경됩니다.</div>
                </div>
                <div><button disabled="true">요청 철회</button></div>
              </div>
              <hr />
              <div className="flex-colmn-center">
                <div className="arrival-of-work-message">{<span className="font-blue">작업 연장사유</span>}</div>
                <div className="arrival-of-work-message">{<span className="font-blue">발송 예정일</span>}</div>
              </div>
            </>

          )
          }

        </div >);
        break;

      default:
        element = null;
    } return element
  };

  return (
    // <!-- 구매한 상품 -->
    <>
      <div className="purchased-product">
        <div className="font-20">구매한 서비스</div>
        {data.worklogList.map((worklog, index) => (
          <div key={index}>{getStatusContent(worklog.status, worklog.createDat, index)}</div>
        ))}
      </div>
    </>
  );
}

