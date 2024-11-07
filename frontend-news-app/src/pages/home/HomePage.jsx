import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Hero2 from './container/Hero2'
import Hero3 from './container/Hero3'
import Hero4 from './container/Hero4'

const HomePage = () => {
  return (
    <div>
        <MainLayout>
          <Hero />
          <Hero2 />
          <Hero3 />
          <Hero4 />
        </MainLayout>
    </div>
  )
}

export default HomePage
