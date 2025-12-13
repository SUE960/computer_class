import Header from '../components/Header'
import Hero from '../components/Hero'
import NoticeBoard from '../components/NoticeBoard'
import About from '../components/About'
import CampusSelector from '../components/CampusSelector'
import Awards from '../components/Awards'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NoticeBoard />
      <About />
      <CampusSelector />
      <Awards />
      <Courses />
      <Footer />
    </div>
  )
}

export default HomePage

