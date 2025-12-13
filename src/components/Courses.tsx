import { Code, Palette, Gamepad2, Building2, Calculator, Brain } from 'lucide-react'

const Courses = () => {
  const courseCategories = [
    {
      icon: Code,
      title: 'IT개발',
      description: '프로그래밍, 소프트웨어 개발, 시스템 구축',
      courses: ['Java 개발자', 'Python 개발자', 'C++ 개발자', '시스템 아키텍트'],
      color: 'bg-blue-600',
    },
    {
      icon: Brain,
      title: 'AI',
      description: '인공지능, 머신러닝, 딥러닝',
      courses: ['AI 엔지니어', '데이터 사이언티스트', 'ML 엔지니어'],
      color: 'bg-purple-600',
    },
    {
      icon: Code,
      title: '웹개발',
      description: '프론트엔드, 백엔드, 풀스택 개발',
      courses: ['React 개발자', 'Node.js 개발자', '풀스택 개발자'],
      color: 'bg-green-600',
    },
    {
      icon: Palette,
      title: '편집디자인',
      description: '그래픽 디자인, 편집 디자인, 브랜딩',
      courses: ['그래픽 디자이너', '편집 디자이너', '브랜드 디자이너'],
      color: 'bg-pink-600',
    },
    {
      icon: Building2,
      title: '건축·산업디자인',
      description: '건축 설계, 인테리어, 제품 디자인',
      courses: ['건축 설계사', '인테리어 디자이너', '제품 디자이너'],
      color: 'bg-orange-600',
    },
    {
      icon: Gamepad2,
      title: '게임·영상·마야',
      description: '게임 개발, 영상 제작, 3D 모델링',
      courses: ['게임 개발자', '영상 편집자', '3D 아티스트'],
      color: 'bg-red-600',
    },
    {
      icon: Calculator,
      title: '세무회계·OA',
      description: '회계, 세무, 사무 자동화',
      courses: ['세무사', '회계사', 'OA 전문가'],
      color: 'bg-indigo-600',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            교육과정
          </h2>
          <p className="text-lg text-gray-600">
            다양한 분야의 전문 교육과정을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                {/* 아이콘 헤더 */}
                <div className={`${category.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <Icon className="w-12 h-12 text-white" />
                    <span className="text-white/80 text-sm font-medium">국비지원 가능</span>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>

                  {/* 과정 목록 */}
                  <div className="space-y-2 mb-4">
                    {category.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {course}
                      </div>
                    ))}
                  </div>

                  {/* 버튼 */}
                  <a
                    href="#"
                    className="block w-full text-center py-2 px-4 bg-primary-50 text-primary-600 rounded-lg font-semibold hover:bg-primary-100 transition-colors group-hover:bg-primary-600 group-hover:text-white"
                  >
                    과정 상세보기
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* 국비지원 안내 */}
        <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            국비지원 과정 안내
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            고용노동부에서 인정한 우수 교육기관으로, 다양한 국비지원 과정을 제공합니다.
            수강료 전액 또는 일부를 지원받을 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              국비지원 신청하기
            </a>
            <a href="#" className="btn-secondary">
              지원제도 안내
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses

