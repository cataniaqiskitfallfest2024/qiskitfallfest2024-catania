import React from 'react';

const Sponsors = () => {
  return (
    <section id='sponsors' className="bg-[#F4F4F4] p-10">
      <h1 className="text-6xl font-bold text-center mt-5 text-[#9D5CFD]">Sponsors</h1>
      <div className="flex flex-wrap justify-center mt-5">
        <div id="digitizers" className="flex flex-col gap-2 w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/sponsor/digitizers_horizontal.svg"
            alt="Digitizers Logo"
          />
        </div>
        <div id="steve-jobs" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/sponsor/steve_jobs_horizontal.jpg"
            alt="Fondazione Istituto Tecnico Superiore Steve Jobs Logo"
          />
        </div>
        <div id="hig" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/sponsor/hig_horizontal.svg"
            alt="Harmonic Innovation Group Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
