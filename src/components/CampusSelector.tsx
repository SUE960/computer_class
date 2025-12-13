const CampusSelector = () => {
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            찾아오시는 길
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            영도웹컴퓨터학원으로 오시는 길을 안내해드립니다
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 좌측: 네이버 지도 */}
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-inner border border-gray-200">
              <iframe
                src="https://map.naver.com/v5/embed/place/1518817991?c=15.00,0,0,0,dh"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="영도웹컴퓨터학원 위치"
                loading="lazy"
              ></iframe>
            </div>

            {/* 우측: 위치 정보 */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src="/icon/free-icon-map-1865269.png" 
                  alt="지도 위치 아이콘" 
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">학원 위치</h3>
                  <p className="text-lg text-gray-700 mb-1">
                    부산 영도구 동삼로 84 신협 4층
                  </p>
                  <p className="text-gray-600">
                    동삼동 일동미라주아파트 근처 신협 4층
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">대중교통 이용 시</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 버스: 동삼동 일동미라주아파트 정류장 하차</li>
                  <li>• 지하철: 부산 1호선 남포역 하차 후 버스 환승</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t">
                <a
                  href="https://map.naver.com/v5/entry/place/1518817991?c=15.00,0,0,0,dh&placePath=%2Fhome%3Fentry%3Dplt&entry=plt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary"
                >
                  네이버 지도에서 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusSelector

