import React from 'react';

const Partners = () => {
  return (
    <section id='partners' className="bg-[#F4F4F4] p-5">
      <h1 className="text-6xl font-bold text-center mt-5 text-[#9D5CFD]">Partners</h1>
      <div className="flex flex-wrap justify-center ">
        <div id="qiskit" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/logo_QISKIT.png"
            alt="Qiskit Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">Qiskit Community</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
            Qiskit is an open-source framework for working with noisy quantum computers at the level of pulses, 
            circuits, and algorithms. It provides tools for creating and manipulating quantum programs and 
            running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer.
            Qiskit also enables the user to optimize quantum circuits for a particular device, perform quantum computing 
            experiments on real devices with little effort, and easily access to IBM Quantum hardware through the cloud.
          </p>
        </div>
        <div id="ibm" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-cover mix-blend-multiply"
            src="./assets/img/logo_IBM2.svg"
            alt="IBM Quantum Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">IBM Quantum</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
            IBM Quantum is an industry-first initiative to build universal quantum computers for business,
            engineering and science. This effort includes advancing the entire quantum computing technology 
            stack and exploring applications to make quantum broadly usable and accessible. With a worldwide network of Fortune 500
            companies, academic institutions, researchers, educators, and enthusiasts, 
            IBM Quantum is committed to driving innovation for clients in the IBM Q Network and the Qiskit Community.
          </p>
        </div>
        <div id="dmi" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/logo_DMI2.png"
            alt="DMI Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">Dipartimento di Matematica e Informatica - UNICT</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
          The Department of Mathematics and Informatics (DMI), located in the University Citadel, was founded in 1999 by the merger of the Degree Course in Informatics and the Department of Mathematics. 
          It aims to coordinate and promote research in Mathematics and Computer Science, covering various scientific sectors. It currently has 84 teachers (26.19% women) and 17 staff units (38.8% women). 
          It includes a Library with 900 journals and over 70,000 volumes, and a Computing Center to support teaching and research activities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Partners;
