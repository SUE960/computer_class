import { MessageCircle, Calculator, Calendar, MapPin, ChevronLeft, ChevronRight, Pause, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: 히어로 배너 (2/3) */}
          <div className="lg:col-span-2">
            <div className="bg-primary-100 rounded-xl p-8 md:p-12 relative overflow-hidden">
              {/* 배지 */}
              <div className="absolute top-6 left-6 bg-primary-200 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                K-디지털 트레이닝
              </div>

              {/* 생성형 AI 배지 */}
              <div className="absolute top-6 right-6 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-primary-700">생성형 AI</span>
                <span className="text-lg font-bold text-primary-600">AI</span>
              </div>

              {/* 메인 콘텐츠 */}
              <div className="mt-16 md:mt-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-primary-700">빅데이터 분석 및 AI</span>
                  <br />
                  <span className="text-gray-900">개발 전문가 취업캠프</span>
                </h1>
                
                {/* 해시태그 */}
                <div className="flex gap-2 mt-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-medium">#머신러닝</span>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-medium">#딥러닝</span>
                </div>
              </div>

              {/* 슬라이더 네비게이션 */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <button className="p-2 hover:bg-white/20 rounded">
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <span className="text-sm text-gray-700 font-medium">04 | 09</span>
                <button className="p-2 hover:bg-white/20 rounded">
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 hover:bg-white/20 rounded ml-2">
                  <Pause className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* 3D 그래픽 요소 (간단한 표현) */}
              <div className="absolute bottom-0 right-0 opacity-20">
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
