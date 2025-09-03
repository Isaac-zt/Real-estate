import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Feedbacks from './components/Feedbacks'
import Contacts from './components/Contacts'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Feedbacks />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
