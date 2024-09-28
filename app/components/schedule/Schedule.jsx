import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="bg-[#F4F4F4] p-5">
      {/* Titolo */}
      <div className="flex flex-col justify-center md:m-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#9D5CFD]">Schedule</h1>
      </div>

      {/* Tabella */}
      <div className="flex my-5 overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-[#9D5CFD] text-white uppercase text-xs md:text-sm leading-normal rounded-lg">
              <th className="py-2 px-3 text-left rounded-tl-lg">Giovedì 7 Nov. 2024</th>
              <th className="py-2 px-3 text-left">Mercoledì 13 Nov. 2024</th>
              <th className="py-2 px-3 text-left rounded-tr-lg">Martedì 19 Nov. 2024</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-xs md:text-base font-light">
            <tr className="hover:bg-[#FF7EB5] hover:text-white">
              <td className="py-2 px-3 text-left ">15:00 - 15:40 Introduction Qiskit 101 (C. Viola)</td>
              <td className="py-2 px-3 text-left">15:00 - 16:30 LAB 2 (A. Scardace - M. Gibilterra)</td>
              <td className="py-2 px-3 text-left">15:00 - 16:45 LAB 3 (G. Messina)</td>
            </tr>
            <tr className="hover:bg-[#FF7EB5] hover:text-white">
              <td className="py-2 px-3 text-left ">15:45 - 16:45 Quantum Basics (G. Piccitto)</td>
              <td className="py-2 px-3 text-left">16:45 - 17:15 Coffee Break</td>
              <td className="py-2 px-3 text-left">16:45 - 17:15 Coffee Break</td>
            </tr>
            <tr className="hover:bg-[#FF7EB5] hover:text-white">
              <td className="py-2 px-3 text-left ">16:45 - 17:15 Coffee Break</td>
              <td className="py-2 px-3 text-left">17:15 - 18:15 Error Mitigation (G. Piccitto)</td>
              <td className="py-2 px-3 text-left">17:15 - 18:00 TBA</td>
            </tr>
            <tr className="hover:bg-[#FF7EB5] hover:text-white">
              <td className="py-2 px-3 text-left ">17:15 - 18:00 LAB 1 (A. Pricoco - E. Scaletta)</td>
              <td className="py-2 px-3 text-left">18:15 - 19:00 TBA</td>
              <td className="py-2 px-3 text-left">18:00 - 18:50 Application of Quantum computation to real world (M. Gibilterra)</td>
            </tr>
            <tr className="hover:bg-[#FF7EB5] hover:text-white">
              <td className="py-2 px-3 text-left ">18:00 - 18:50 Bell inequalities and the No-Cloning theorem (S. Faro)</td>
              <td className="py-2 px-3 text-left"></td>
              <td className="py-2 px-3 text-left"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
