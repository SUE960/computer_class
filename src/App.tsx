import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CampusSelector from './components/CampusSelector'
import Awards from './components/Awards'
import Courses from './components/Courses'
import Footer from './components/Footer'

function App() {
  const [selectedCampus, setSelectedCampus] = useState<string>('강남(본점)')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
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

export default App

