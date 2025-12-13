import { Link } from 'react-router-dom'
import { Bell, ChevronRight } from 'lucide-react'

interface Notice {
  id: number
  title: string
  date: string
  isNew?: boolean
}

interface NoticeBoardProps {
  notices?: Notice[]
}

const NoticeBoard = ({ notices }: NoticeBoardProps) => {
  // 기본 공지사항 데이터
  const defaultNotices: Notice[] = notices || [
    {
      id: 1,
      title: '초중고 대학생 성인반 완전초보과정 부터 자격증반 모집중입니다 수업시간은 오전반 오후반 선택 가능합니다',
      date: '2024-12-13',
      isNew: true,
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                공지사항
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                최신 소식과 안내사항을 확인하세요
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {defaultNotices.slice(0, 5).map((notice) => (
              <Link
                key={notice.id}
                to="/notice"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-primary-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {notice.isNew && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{notice.date}</span>
                    </div>
                    <h3 className="text-gray-900 font-medium line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0 transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="mt-6">
            <Link
              to="/notice"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              더보기
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticeBoard

