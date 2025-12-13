import { Link } from 'react-router-dom'
import { ArrowLeft, Bell, Calendar } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Notice {
  id: number
  title: string
  content: string
  date: string
  isNew?: boolean
}

const NoticePage = () => {
  // 공지사항 데이터
  const notices: Notice[] = [
    {
      id: 1,
      title: '초중고 대학생 성인반 완전초보과정 부터 자격증반 모집중입니다 수업시간은 오전반 오후반 선택 가능합니다',
      content: `안녕하세요. 영도웹컴퓨터학원입니다.

초중고 대학생 성인반 완전초보과정부터 자격증반까지 모집 중입니다.

수업시간은 오전반과 오후반 중 선택 가능합니다.

자세한 문의는 학원으로 연락주시기 바랍니다.

감사합니다.`,
      date: '2024-12-13',
      isNew: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="container-custom">
          {/* 헤더 */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>홈으로 돌아가기</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-primary-600 p-3 rounded-lg">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  공지사항
                </h1>
                <p className="text-gray-600 mt-2">
                  영도웹컴퓨터학원의 최신 소식과 안내사항입니다
                </p>
              </div>
            </div>
          </div>

          {/* 공지사항 목록 */}
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {notice.isNew && (
                        <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                          NEW
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{notice.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {notice.title}
                    </h2>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {notice.content}
                  </div>
                </div>
              </div>
            ))}

            {notices.length === 0 && (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">등록된 공지사항이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NoticePage

