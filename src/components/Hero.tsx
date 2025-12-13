import { MessageCircle, Calculator, Calendar, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: 히어로 배너 (2/3) */}
          <div className="lg:col-span-2">
            <div className="bg-primary-100 rounded-xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
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
                <div className="inline-block bg-primary-200 text-primary-800 px-6 py-3 rounded-full text-lg font-semibold">
                  기초에서 자격증까지 개별맞춤지도
                </div>
              </div>

              {/* 장식 요소 (하단 우측) */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <div className="grid grid-cols-3 gap-2 p-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-primary-600 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 유틸리티 (1/3) */}
          <div className="lg:col-span-1 space-y-4">
            {/* 빠른 링크 그리드 */}
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">온라인 예약상담</span>
              </a>
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <Calculator className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">수강료 조회</span>
              </a>
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">캠퍼스 개강일정</span>
              </a>
              <a href="#" className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">캠퍼스 위치조회</span>
              </a>
            </div>

            {/* 연락처 정보 */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-primary-600" />
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
