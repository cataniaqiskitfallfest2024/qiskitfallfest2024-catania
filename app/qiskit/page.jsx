import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Qiskit = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center'>
                <div className='min-w-[70%] max-w-[70%] mt-32 mb-10 '>
                    <h1 className='text-6xl font-bold text-center text-[#9D5CFD]'>Qiskit</h1>
                    <h2 className='text-3xl font-bold text-center text-[#353A3F] mt-5'>An opensource quantum programming framework</h2>
                    <p className='mt-5'>
                    Qiskit is an open-source quantum computing software development framework. It provides tools for working with quantum circuits, algorithms, and experiments. With Qiskit, you can explore the fascinating world of quantum computing, develop quantum applications, and run them on real quantum hardware or simulators.
                    </p>
                    <div className='mt-5'>
                      <h2 className='text-3xl font-bold'>Key Features of Qiskit</h2>
                      <div className='m-5'>
                        <ul className='list-disc'>
                            <li><strong>Quantum Circuit Construction:</strong> Qiskit allows you to define and manipulate quantum circuits using a user-friendly and intuitive interface.</li>
                            <li><strong>Quantum Algorithm Development:</strong> You can implement and test quantum algorithms, including famous ones like Shor’s algorithm and Grover’s algorithm</li>
                            <li><strong>Access to Real Quantum Hardware:</strong> Qiskit provides access to IBM’s quantum devices, allowing you to run your quantum programs on actual quantum processors.</li>
                            <li><strong>Simulation:</strong> You can simulate quantum circuits to understand their behavior without access to quantum hardware.</li>
                            <li><strong>Community and Resources:</strong> Qiskit has a thriving community of developers and researchers, along with extensive documentation and tutorials.</li>
                        </ul>
                      </div>
                        
                      <p className='font-bold'>Qiskit is a powerful tool for learning and experimenting with quantum computing, making it accessible to researchers, educators, and enthusiasts worldwide.</p>
                    </div>
                </div>
            </div>
          <Footer/>
    </div>
  )
}

export default Qiskit