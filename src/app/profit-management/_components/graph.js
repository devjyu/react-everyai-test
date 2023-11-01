import Image from 'next/image';

export default function ProfitManagementGraph() {
    return(
        <div className="order-graph">
            {/* <!-- 제목, 버튼 --> */}
            <div className="order-graph-header">
                <div className="order-graph-header-left">
                    <span className="order-graph-title">주문 그래프</span>
                </div>
                <div className="order-graph-header-right">
                    <button>일별</button>
                    <button>월별</button>
                </div>
            </div>
            {/* <!-- 실제 그래프 --> */}
            <div className="order-graph-body">
                <Image src="https://via.placeholder.com/500" alt="그래프" width={500} height={500}/>
            </div>
      </div>
    );
}