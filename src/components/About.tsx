const About = () => {
  const features = [
    {
      title: '30년 노하우',
      description: '오랜 경험과 검증된 교육 시스템',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
    },
    {
      title: '최신 트렌드',
      description: '현장에서 요구하는 최신 기술 반영',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100',
    },
    {
      title: '개별 맞춤 지도',
      description: '기초에서 자격증까지 개인별 맞춤 교육',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
    },
    {
      title: '체계적 커리큘럼',
      description: '단계별 학습으로 실력 향상',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
    },
    {
      title: '소규모 수업',
      description: '집중도 높은 소규모 반 운영',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
    },
    {
      title: '자격증 취득 지원',
      description: '다양한 자격증 취득까지 완벽 지원',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* 메인 소개 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            영도웹컴퓨터학원
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-primary-600">30년 노하우</span>와{' '}
              <span className="font-semibold text-primary-600">최신 트렌드 지식</span>을 바탕으로
            </p>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              <span className="font-bold text-primary-700">최적의 수업</span>을 선사합니다
            </p>
            <div className="inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full font-semibold text-lg">
              기초에서 자격증까지 개별맞춤지도
            </div>
          </div>
        </div>

        {/* 특징 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className={`${feature.bgColor} ${feature.hoverColor} rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* 추가 설명 */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              WHY 영도웹컴퓨터학원
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

