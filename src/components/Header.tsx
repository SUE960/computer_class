import { useState } from 'react'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const courseCategories = [
    { label: 'K-디지털', href: '#' },
    { label: '프로그래밍', href: '#' },
    { label: '데이터분석/AI', href: '#' },
    { label: '정보보안/클라우드', href: '#' },
    { label: '디자인', href: '#' },
    { label: '건축·기계·제품디자인', href: '#' },
    { label: 'CG·VR·게임', href: '#' },
    { label: '자격증', href: '#' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 상단 헤더 */}
      <div className="bg-primary-700 text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3">
            {/* 왼쪽: 월별 추천과정 버튼 */}
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
              <Calendar className="w-4 h-4" />
              월별 추천과정
            </button>

            {/* 중앙: 로고 및 학원명 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary-700 font-bold text-lg">N</span>
              </div>
              <Link to="/" className="text-lg font-bold whitespace-nowrap">
                영도웹컴퓨터학원
              </Link>
            </div>

            {/* 오른쪽: 상담 정보 */}
            <div className="flex items-center gap-4 text-sm">
              <span className="whitespace-nowrap">365일 상담</span>
              <span className="whitespace-nowrap">카톡상담</span>
              <a href="tel:051-413-1234" className="flex items-center gap-1 hover:text-primary-200 transition-colors whitespace-nowrap">
                <Phone className="w-4 h-4" />
                051-413-1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {/* 햄버거 메뉴 및 바로가기 */}
            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium whitespace-nowrap flex-shrink-0">
              <Menu className="w-4 h-4" />
              바로가기
            </button>

            {/* 전액무료 배지 */}
            <span className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap flex-shrink-0">
              전액무료
            </span>

            {/* 과정 카테고리 */}
            {courseCategories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors whitespace-nowrap flex-shrink-0"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 버튼 */}
      <div className="lg:hidden container-custom py-2">
        <button
          className="p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-2">
            {courseCategories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded whitespace-nowrap"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
