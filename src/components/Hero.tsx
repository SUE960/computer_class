import { Calendar, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: 히어로 배너 (2/3) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl min-h-[400px] flex flex-col justify-center">
              {/* 메인 콘텐츠 */}
              <div className="text-center">
                {/* 제목 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-700">
                  영도웹컴퓨터학원
                </h1>
                
                {/* 설명 텍스트 */}
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    <span className="font-semibold text-primary-600">30년 노하우</span>와{' '}
                    <span className="font-semibold text-primary-600">최신 트렌드 지식</span>을 바탕으로
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mt-2">
                    <span className="font-bold text-gray-900">최적의 수업</span>을 선사합니다
                  </p>
                </div>

                {/* 배지 */}
                <div className="inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full text-lg font-semibold">
                  기초에서 자격증까지 개별맞춤지도
                </div>
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

              {/* 캠퍼스 개강일정 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <Calendar className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium text-gray-700 block">캠퍼스</span>
                <span className="text-sm font-medium text-gray-700 block">개강일정</span>
              </a>

              {/* 캠퍼스 위치조회 */}
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3">
                  <MapPin className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium text-gray-700 block">캠퍼스</span>
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
