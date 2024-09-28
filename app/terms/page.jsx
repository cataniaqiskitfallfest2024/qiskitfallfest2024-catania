import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'
import Footer from '../components/footer/Footer'
const terms = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center min-h-screen'>
                <div className='min-w-[70%] max-w-[70%] mt-32 mb-10 '>
                    <h1 className='text-4xl md:text-6xl font-bold md:text-center text-[#9D5CFD]'>Terms & Conditions</h1>
                    <div className='mt-5'>
                      <h2 className='text-lg md:text-3xl font-bold'>Before you subscribe to the Event, please read carefully and take note of the followings:</h2>
                      <div className='m-5'>
                        <ul className='list-decimal'>
                            <li className='hover:bg-white hover:text-black'>All personal data will be handled confidentially. It will not be forwarded to any third parties except where necessary for the purpose of the conference. Please keep in mind that we will forward some of the information in your registration form to the Universities and Companies involved in these cases:
                                <ul className='list-disc m-5'>
                                    <li className='hover:bg-white hover:text-black'>your data will be communicated to ibm quantum in order to deliver to you the swag kit of IBM Quantum / Qiskit in case you win a challenge organized by us</li>
                                    <li className='hover:bg-white hover:text-black'>if you apply for the certificate of attendance for the purpose of recognition of formative university credits (CFU), your data will be communicated to your university department.</li>
                                </ul>
                            </li>
                            <li className='hover:bg-white hover:text-black'>You also confirm that you will be of 18 years of age at the start date of the Event.</li>
                            <li className='hover:bg-white hover:text-black'>You acknowledge and agree that the organizing committee and the hosts of the event have no responsibility whatsoever for injuries, losses, or damages of any kind that result from your participation in our Event programme.</li>
                            <li className='hover:bg-white hover:text-black'>You accept the <Link href={'https://docs.quantum.ibm.com/open-source/code-of-conduct'} className='font-bold underline text-[#9D5CFD]'>Qiskit Code of Conduct.</Link></li>
                            <li className='hover:bg-white hover:text-black'>By participating in the event you agree to be filmed, photographed and otherwise recorded during the conference anf hereby expressly grant the organizing committee the right to use your pictures, movie or any other form of media publication in contexts such as internet sites, social media, brochures, posters, informative and advertising materials. You also confirm that the information contained in this application is true and correct.</li>
                            <li className='hover:bg-white hover:text-black'>You accept that either the organizing committee or any other of the hosting institutes cannot be made responsible for the content of any poster, talk, workshop, excursion or similar activity.</li>
                            <li className='hover:bg-white hover:text-black'>The present terms and conditions are governed by the laws of the Republic of Italy.</li>
                        </ul>
                      </div>
                    </div>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default terms