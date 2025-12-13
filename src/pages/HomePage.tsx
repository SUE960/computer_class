import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CampusSelector from '../components/CampusSelector'
import Awards from '../components/Awards'
import Courses from '../components/Courses'
import NoticeBoard from '../components/NoticeBoard'
import Footer from '../components/Footer'

const HomePage = () => {
  const [selectedCampus, setSelectedCampus] = useState<string>('영도')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NoticeBoard />
      <CampusSelector 
        selectedCampus={selectedCampus} 
        onSelectCampus={setSelectedCampus} 
      />
      <Awards />
      <Courses />
      <Footer />
    </div>
  )
}

export default HomePage

