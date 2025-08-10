import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'
import { recentSessions } from '../constants'

const Page = () => {
  return(
   <main>
 <h1>Popular Companion</h1>
      <section className='home-section'>
<CompanionCard
  id  = "123"
  name="neura the brainy exlorer"
  topic = "Neural Network of the Brain"
  subject ="science"
  duration= {43}
  color = "#E5D0FF"
></CompanionCard>
<CompanionCard
  id  = "123"
  name="Countsy the Number Wizard"
  topic = "Derivatives & Integrals"
  subject ="Maths"
  duration= {30}
  color = "#FFDA6E"
></CompanionCard>
<CompanionCard
  id  = "123"
  name="Verba the Vocabulary Builder"
  topic = "English Literature"
  subject ="Language"
  duration= {30}
  color = "#BDE7FF"
></CompanionCard>
      </section>

      <section className='home-section'>
          <CompanionsList
            title="Recently completed session"
            companions = {recentSessions}
            classNames  = "w-2/3 max-lg:w-full"
          ></CompanionsList>
          <CTA></CTA>
      </section>
      

   </main>
    
     
   
  )
}

export default Page