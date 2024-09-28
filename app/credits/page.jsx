import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen mt-10">
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] mb-10 px-4 lg:px-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#9D5CFD]">
                        Credits
                    </h1>
                    <div>
                        <h2 className='font-bold  mt-5 text-2xl'>Web Development</h2>
                        <ul className="text-base sm:text-lg lg:text-xl italic list-disc px-4 ">
                            <li className='hover:bg-white hover:text-black'>Mirko Russo</li>
                            <li className='hover:bg-white hover:text-black' >Gabriele Messina</li>
                        </ul>
                        <h2 className='font-bold mt-5 text-2xl'>Social Media Management & Communication</h2>
                        <ul className="text-base sm:text-lg lg:text-xl italic list-disc px-4">
                            <li className='hover:bg-white hover:text-black'>Marco Gionfriddo</li>
                            <li className='hover:bg-white hover:text-black'>Elenoire Scaletta</li>
                            <li className='hover:bg-white hover:text-black'>Miriana Russo</li>
                        </ul>
                        <h2 className='font-bold mt-5 text-2xl '>Graphics</h2>
                        <ul className="text-base sm:text-lg lg:text-xl italic list-disc px-4">
                            <li className='hover:bg-white hover:text-black'>Marco Gionfriddo</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default contacts