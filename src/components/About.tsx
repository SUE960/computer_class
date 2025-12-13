const About = () => {
  const features = [
    {
      title: '30년 노하우',
      description: '오랜 경험과 검증된 교육 시스템',
    },
    {
      title: '최신 트렌드',
      description: '현장에서 요구하는 최신 기술 반영',
    },
    {
      title: '개별 맞춤 지도',
      description: '기초에서 자격증까지 개인별 맞춤 교육',
    },
    {
      title: '체계적 커리큘럼',
      description: '단계별 학습으로 실력 향상',
    },
    {
      title: '소규모 수업',
      description: '집중도 높은 소규모 반 운영',
    },
    {
      title: '자격증 취득 지원',
      description: '다양한 자격증 취득까지 완벽 지원',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* 메인 소개 */}
        <div className="mb-16">
          <div className="flex items-start gap-5">
            <img 
              src="/icon/free-icon-list-18094401.png" 
              alt="리스트 아이콘" 
              className="w-8 h-8 object-contain mt-1"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              영도웹컴퓨터학원을 선택해야하는 이유
            </h2>
          </div>
        </div>

        {/* 특징 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
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
      </div>
    </section>
  )
}

export default About

