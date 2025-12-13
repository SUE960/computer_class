import { Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch">
          {/* 왼쪽: 히어로 배너 (2/3) */}
          <div className="lg:col-span-2 flex">
            <div className="bg-white rounded-xl shadow-xl w-full overflow-hidden relative">
              {/* 배너 이미지 */}
              <img 
                src="/banner2background.jpg" 
                alt="영도웹컴퓨터학원 배너" 
                className="w-full h-full object-cover"
              />
              {/* 텍스트 오버레이 */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12">
                <div className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-left mb-4 leading-relaxed">
                  <p>30년 노하우와 최신 트렌드 지식을 바탕으로</p>
                  <p>최적의 수업을 선사합니다</p>
                </div>
                <div className="bg-white rounded-full px-6 py-3">
                  <p className="text-gray-900 font-semibold text-lg md:text-xl">
                    기초에서 자격증까지 개별맞춤지도
                  </p>
                </div>
              </div>
              {/* 스와이프 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-8 h-1 bg-gray-900 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-900 font-medium ml-2">1/1</span>
              </div>
            </div>
          </div>

          {/* 오른쪽: 유틸리티 (1/3) */}
          <div className="lg:col-span-1 space-y-4">
            {/* 빠른 링크 그리드 */}
            <div className="grid grid-cols-2 gap-3">
              {/* 온라인 예약상담 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <img 
                    src="/icon/free-icon-consultation-4167025.png" 
                    alt="상담 아이콘" 
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 block">온라인</span>
                <span className="text-sm font-medium text-gray-700 block">예약상담</span>
              </a>

              {/* 수강료 조회 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <img 
                    src="/icon/free-icon-3d-calculator-10473465.png" 
                    alt="계산기 아이콘" 
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 block">수강료</span>
                <span className="text-sm font-medium text-gray-700 block">조회</span>
              </a>

              {/* 수업 개강일정 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <img 
                    src="/icon/free-icon-calendar-10770024.png" 
                    alt="달력 아이콘" 
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 block">수업</span>
                <span className="text-sm font-medium text-gray-700 block">개강일정</span>
              </a>

              {/* 학원 위치조회 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <img 
                    src="/icon/free-icon-map-1865269.png" 
                    alt="지도 위치 아이콘" 
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 block">학원</span>
                <span className="text-sm font-medium text-gray-700 block">위치조회</span>
              </a>
            </div>

            {/* 연락처 정보 */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-2">
                  <Phone className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
                </div>
                <a href="tel:051-413-1234" className="text-lg font-bold text-gray-900">
                  051-413-1234
                </a>
              </div>
              <p className="text-xs text-gray-600">
                주말·공휴일 상담 및 접수가 가능합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
