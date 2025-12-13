import { MapPin } from 'lucide-react'

interface CampusSelectorProps {
  selectedCampus: string
  onSelectCampus: (campus: string) => void
}

const CampusSelector = ({ selectedCampus, onSelectCampus }: CampusSelectorProps) => {
  const campuses = [
    '강남(본점)',
    '역삼',
    '종로',
    '신촌',
    '신도림',
    '노원',
    '인천(부평)',
    '인천(구월)',
    '인천(청라)',
    '부천',
    '안산',
    '안양',
    '수원',
    '의정부',
    '성남',
    '천안',
    '청주',
    '대전(둔산)',
    '대전(중앙로)',
    '전주',
    '광주(서구)',
    '광주(첨단)',
    '대구(동성로)',
    '대구(교보타워)',
    '울산',
    '부산(서면)',
    '부산(경성대)',
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            전국 최다지점!
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            원하시는 캠퍼스를 선택해 주세요.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-600">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">현재 선택: {selectedCampus}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {campuses.map((campus) => (
            <button
              key={campus}
              onClick={() => onSelectCampus(campus)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                selectedCampus === campus
                  ? 'bg-primary-600 text-white border-primary-600 shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-400 hover:bg-primary-50'
              }`}
            >
              {campus}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block btn-primary"
          >
            캠퍼스 상세 정보 보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default CampusSelector

