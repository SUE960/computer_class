import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: GraduationCap, label: '교육과정', value: '다양' },
    { icon: Users, label: '수강생', value: '만족도 높음' },
    { icon: Award, label: '자격증', value: '취득 지원' },
    { icon: BookOpen, label: '수업시간', value: '오전/오후' },
  ]

  return (
    <section className="relative bg-primary-700 text-white overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            영도웹컴퓨터학원
            <br />
            <span className="text-yellow-300">완전초보과정부터 자격증반까지</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            부산 영도구 지역의 전문 컴퓨터 교육기관
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
              국비지원 과정 보기
            </a>
            <a href="#" className="btn-secondary border-white text-white hover:bg-white/10">
              온라인 상담 신청
            </a>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-100">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero

