import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] mb-10 px-4 lg:px-0">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-[#9D5CFD]">
                        Contacts
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl italic text-center mt-10">
                        If you haven't found an answer to your question in the FAQ section, send us an email or write to us on IG
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-16">
                        <span className="flex items-center bg-purple-600 hover:bg-[#9D5CFD] text-white font-bold py-2 px-4 rounded text-sm sm:text-base lg:text-lg">
                            cataniaqiskitfallfest@unict.it
                        </span>
                        <button className="flex items-center bg-purple-600 hover:bg-[#9D5CFD] text-white font-bold py-2 px-4 rounded text-sm sm:text-base lg:text-lg">
                            <Link href="https://www.instagram.com/cataniaqiskitfallfest/">
                                <InstagramIcon className="mr-2" /> IG
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default contacts