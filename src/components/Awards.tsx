import { Trophy, Award, Star, Medal } from 'lucide-react'

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: '대한민국 교육브랜드 대상',
      subtitle: 'IT·디자인 교육 부문 1위',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Award,
      title: '사랑나눔 사회공헌 대상',
      subtitle: '교육사회공헌 부문 부총리 겸 교육부 장관상',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Star,
      title: '대한민국 교육대상',
      subtitle: '디자인·IT 교육 부문 대상',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Medal,
      title: '고객신뢰도 1위 프리미엄 브랜드',
      subtitle: '디자인·IT 취업교육 부문 대상',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Trophy,
      title: '국가브랜드 대상',
      subtitle: '디자인·IT 교육 최우수 브랜드',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Star,
      title: '한국의 가장 사랑받는 브랜드 대상',
      subtitle: '디자인·IT 교육 부문 대상',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Award,
      title: '소비자추천 1위 브랜드 대상',
      subtitle: '디자인·IT 교육 부문 1위',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Medal,
      title: '대한민국브랜드평가 1위',
      subtitle: '디자인·IT 교육 브랜드 1위',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            수상 내역
          </h2>
          <p className="text-lg text-gray-600">
            교육 분야에서 인정받은 다양한 수상 경력
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <div
                key={index}
                className={`${award.bgColor} rounded-xl p-6 border-2 border-transparent hover:border-primary-300 transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`${award.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {award.subtitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Awards

