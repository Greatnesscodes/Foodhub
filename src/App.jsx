import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Product from './components/Product'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='webpage'>
      <Header />
      <main>
      <Hero />
       <About />
       <Service />
       <Product />
       <Testimonials />
      </main>
       
     
      
      <Footer />
    </div>
  )
}

export default App