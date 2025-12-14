import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      label: '방학특강 사전예약',
      href: '#',
    },
    {
      label: '학원소개',
      href: '#',
    },
    {
      label: '국비과정',
      href: '#',
    },
    {
      label: '일반과정',
      href: '#',
    },
    {
      label: '공지사항',
      href: '/notice',
    },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* 메인 네비게이션 */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-18 py-2">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo_vertical.jpeg" 
                alt="영도웹컴퓨터학원" 
                className="h-8 object-contain -my-1"
              />
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.href === '/notice' ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* 우측 연락처 */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:051-404-2966" className="text-sm text-gray-700 hover:text-primary-600 flex items-center gap-1 whitespace-nowrap">
              <Phone className="w-4 h-4" />
              051-404-2966
            </a>
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
                {item.href === '/notice' ? (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <a href="tel:051-404-2966" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded whitespace-nowrap flex items-center gap-2">
                <Phone className="w-4 h-4" />
                051-404-2966
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
