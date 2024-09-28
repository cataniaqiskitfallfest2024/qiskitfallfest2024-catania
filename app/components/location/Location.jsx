import React from 'react'
import Link from 'next/link'
const Location = () => {
  return (
    <section id='location' className='my-10'>
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-center text-[#353A3F]">Location</h1>
          <span className='text-center text-wrap text-sm md:text-lg font-bold mt-5 italic'>Università degli Studi di Catania <br/>
                Dipartimento di Matematica e Informatica, Aula 25<br />
                Viale Andrea Doria, 6, 95125 Catania</span>
        </div>
        <div className='flex justify-center'> 
          <button className="bg-[#9D5CFD] hover:bg-[#924afc] text-white rounded text-center text-2xl font-bold mt-5 flex justify-center md:w-[30%] p-5"><Link href={'https://maps.app.goo.gl/hw4JPcuA5yMMpe7P7'}>Find us on Maps</Link></button>
        </div>
    </section>
  )
}

export default Location