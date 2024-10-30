import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="bg-[#F4F4F4] p-10" style={{minHeight: '10rem'}}>
      {/* Titolo */}
      <div className="flex flex-col justify-center md:m-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#9D5CFD]">Schedule</h1>
      </div>

      {/* Tabella */}
      <div className="flex my-5 overflow-x-auto rounded-lg m-0 lg:mx-48">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-[#9D5CFD] text-white uppercase text-xs md:text-sm leading-normal rounded-lg">
              <th className="py-2 px-3 w-1/3 text-center rounded-tl-lg">Giovedì 7 Nov. 2024</th>
              <th className="py-2 px-3 w-1/3 text-center">Mercoledì 13 Nov. 2024</th>
              <th className="py-2 px-3 w-1/3 text-center rounded-tr-lg">Martedì 19 Nov. 2024</th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base font-light">
          <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:00 - 15:15</span><br /> <span className="md:ms-3 block">Saluti Istituzionali</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}} rowSpan='2'><span className="opacity-80">15:00 - 15:45</span><br /> <span className="md:ms-3 block">Error Mitigation (G. Piccitto)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" rowSpan='2'><span className="opacity-80">15:00 - 15:45</span><br /> <span className="md:ms-3 block">QFT (Schilirò)</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:15 - 15:55</span><br /> <span className="md:ms-3 block">Qiskit 101 (C. Viola)</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}} rowSpan='2'><span className="opacity-80">16:00 - 17:00</span><br /> <span className="md:ms-3 block">Quantum Basics (G. Piccitto)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:45 - 16:15</span><br /> <span className="md:ms-3 block">Master in Quantum Technologies Presentation (E. Paladino)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">15:45 - 16:15</span><br /> <span className="md:ms-3 block">Qiskit Projects @UniCT</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">16:15 - 17:00</span><br /> <span className="md:ms-3 block">TBA</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">16:15 - 16:45</span><br /> <span className="md:ms-3 block">Application of Quantum computation to real world (M. Gibilterra)</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:00 - 17:30</span><br /> <span className="md:ms-3 block">Coffee Break</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:00 - 17:30</span><br /> <span className="md:ms-3 block">Coffee Break</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">16:45 - 17:15</span><br /> <span className="md:ms-3 block">Coffee Break</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:30 - 18:15</span><br /> <span className="md:ms-3 block">LAB 1 (M. Gionfriddo - A. Pricoco - E. Scaletta)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" rowSpan='2' style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:30 - 19:00</span><br /> <span className="md:ms-3 block">LAB 2 (C. Viola - M. Gibilterra)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" rowSpan='2'><span className="opacity-80">17:15 - 19:00</span><br /> <span className="md:ms-3 block">LAB 3 (G.Messina)</span></td>
            </tr>
            <tr style={{height: '4rem'}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">18:15 - 19:00</span><br /> <span className="md:ms-3 block">Bell inequalities and the No-Cloning theorem (S. Faro)</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
