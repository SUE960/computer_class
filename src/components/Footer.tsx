import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { label: '기관소개', href: '#' },
      { label: '기관연혁', href: '#' },
      { label: '사업영역', href: '#' },
      { label: '제휴대학 혜택', href: '#' },
    ],
    courses: [
      { label: '국비과정', href: '#' },
      { label: '일반과정', href: '#' },
      { label: '온라인 과정', href: '#' },
      { label: '기업단체교육', href: '#' },
    ],
    support: [
      { label: '고객의 소리', href: '#' },
      { label: '온라인 상담', href: '#' },
      { label: '취업센터', href: '#' },
      { label: '포트폴리오', href: '#' },
    ],
    legal: [
      { label: '이용약관', href: '#' },
      { label: '개인보호정책', href: '#' },
      { label: '제휴제안', href: '#' },
      { label: '사이트맵', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: '페이스북', href: '#' },
    { icon: Instagram, label: '인스타그램', href: '#' },
    { icon: Youtube, label: '유튜브', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">영도웹컴퓨터학원</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              부산 영도구 지역의 전문 컴퓨터 교육기관
              <br />
              초중고 대학생 성인반 완전초보과정부터 자격증반까지
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a href="tel:051-413-1234" className="text-white font-semibold hover:text-primary-400 transition-colors">
                  대표번호: 051-413-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info@youngdo-web.co.kr</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span>부산 영도구 동삼로 84 신협 4층<br className="hidden sm:inline" /> (동삼동 일동미라주아파트 근처)</span>
              </div>
            </div>
          </div>

          {/* 링크 섹션 */}
          <div>
            <h4 className="text-white font-semibold mb-4">기관소개</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">교육과정</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 소셜 미디어 */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <div className="flex items-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
              <p>부산 영도구 동삼로 84 신협 4층</p>
              <p>동삼동 일동미라주아파트 근처</p>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 영도웹컴퓨터학원. All rights reserved.</p>
              <div className="mt-2 space-y-1">
                <p>
                  <a 
                    href="https://www.flaticon.com/kr/free-icons/" 
                    title="상의 아이콘" 
                    className="hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    상의 아이콘 제작자: bukeicon - Flaticon
                  </a>
                </p>
                <p>
                  <a 
                    href="https://www.flaticon.com/kr/free-icons/3d-" 
                    title="3d 계산기 아이콘" 
                    className="hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    3d 계산기 아이콘 제작자: Freepik - Flaticon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

