import { useState } from 'react'
import { Menu, X, Phone, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null)

  const menuItems = [
    {
      label: '방학특강 사전예약',
      href: '#',
    },
    {
      label: '그린소개',
      submenu: ['기관소개', '왜 그린인가', '기관연혁', '사업영역', '제휴대학 혜택', '제휴 서비스', '언론보도&뉴스'],
    },
    {
      label: '학원안내',
      submenu: ['학원소개', '강사소개', '찾아오시는 길'],
    },
    {
      label: '국비과정',
      submenu: ['지원제도안내', 'K-디지털 트레이닝', '특화과정', '온라인 국비지원', 'IT개발', 'AI', '웹개발', '편집디자인', '건축·산업디자인', '게임·영상·마야', '세무회계·OA'],
    },
    {
      label: '일반과정',
      submenu: ['IT개발', '웹개발', '편집디자인', '건축·산업디자인', '게임·영상·마야', '세무회계·OA', 'AI'],
    },
    {
      label: '커뮤니티',
      submenu: ['공지사항', '수강후기', '자격증정보'],
    },
    {
      label: '포트폴리오',
      submenu: ['인터렉티브 웹', '프론트엔드 웹', '편집디자인', '건축·인테리어', '게임·원화', '영상 / 마야', 'IT개발'],
    },
    {
      label: '고객센터',
      submenu: ['고객의 소리', '장비/시설점검 요청', '온라인 결제', '국비지원 신청양식', '설문조사'],
    },
    {
      label: '취업센터',
      submenu: ['취업지원시스템', '취업담당자 안내', '취업현황', '취업인터뷰', '취업후기', '채용정보', '채용정보등록', '작품발표(현장면접)'],
    },
    {
      label: '상담센터',
      submenu: ['온라인상담', '수강료조회', '기업단체교육', '대학맞춤교육', '프랜차이즈 안내'],
    },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 상단 바로가기 메뉴 */}
      <div className="bg-primary-700 text-white text-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-primary-200 transition-colors">홈</Link>
              <span>|</span>
              <Link to="/notice" className="hover:text-primary-200 transition-colors">공지사항</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:051-413-1234" className="hover:text-primary-200 transition-colors flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>051-413-1234</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              영도웹컴퓨터학원
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsSubMenuOpen(item.label)}
                onMouseLeave={() => setIsSubMenuOpen(null)}
              >
                {item.label === '커뮤니티' ? (
                  <Link
                    to="/notice"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-2 ${
                      isSubMenuOpen === item.label ? 'block' : 'hidden'
                    } group-hover:block`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem === '공지사항' ? '/notice' : '#'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 우측 액션 버튼 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-700 hover:text-primary-600 flex items-center gap-1">
              <Search className="w-4 h-4" />
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-primary-600">로그인</a>
            <a href="#" className="text-sm text-gray-700 hover:text-primary-600">회원가입</a>
            <a href="#" className="btn-primary text-sm">My Study</a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded"
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault()
                      setIsSubMenuOpen(isSubMenuOpen === item.label ? null : item.label)
                    }
                  }}
                >
                  {item.label}
                </a>
                {item.submenu && isSubMenuOpen === item.label && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem === '공지사항' ? '/notice' : '#'}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t space-y-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded">로그인</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded">회원가입</a>
              <a href="#" className="block px-4 py-2 btn-primary text-center">My Study</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

