import { Code, Calculator, Award } from 'lucide-react'

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
      icon: Award,
      title: '컴퓨터 자격증',
      description: '컴퓨터활용능력, ITQ, 워드프로세서',
      courses: ['컴퓨터활용능력 1급', '컴퓨터활용능력 2급', 'ITQ OA Master', '워드프로세서'],
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
                {/* 콘텐츠 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      국비지원
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>

                  {/* 과정 목록 */}
                  <div className="space-y-2">
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

