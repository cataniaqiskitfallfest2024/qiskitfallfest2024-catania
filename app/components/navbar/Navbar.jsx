'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Per rilevare il percorso corrente
import './navbar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Link attivo
  
  const pathname = usePathname(); // Ottieni il percorso attuale
  const router = useRouter(); // Router di Next.js

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (pathname === '/') {
      // IntersectionObserver per aggiornare il link attivo solo nella pagina principale
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.5 } // Attiva quando il 50% della sezione è visibile
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    } else {
      // Resetta il link attivo quando si è su una pagina diversa 
      setActiveLink(pathname);
    }
  }, [pathname]);

  // Funzione per aggiungere la classe 'active' alla voce della navbar
  const getLinkClass = (path) => {
    return activeLink === path ? 'active text-white' : 'text-gray-400';
  };

  // Funzione per gestire il click sui link delle sezioni
  const handleSectionClick = (sectionId) => {
    if (pathname !== '/') {
      router.push('/'); // Naviga alla pagina principale
    }
    setActiveLink(sectionId); // Imposta il link attivo
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <div
      className={`fixed top-0 w-full bg-black text-white p-4 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 backdrop-blur-lg text-black' : 'bg-black'
      }`}
    >
      <div className="flex justify-between items-center md:min-h-[50px] md:mx-10">
        <div className="text-lg md:text-3xl font-semibold">
          <Link href={'/'}><span className={`${isScrolled ? 'text-black' : 'text-white'}`}>Qiskit Fall Fest 2024 </span></Link>
          <span className="text-[#FF7EB5] mx-2">/</span>
          <span className="text-[#9D5CFD]">Catania</span>
        </div>

        <div className="md:hidden cursor-pointer " onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${isScrolled ? 'black' : 'currentColor'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <ul className="hidden md:flex flex-row items-center gap-10 text-lg">
          <li className={getLinkClass('#about')}>
            <a href="#about" onClick={() => handleSectionClick('#about')}>About</a>
          </li>
          <li
            className={`relative ${['#partners', '#speakers', '#location', '#organizers'].includes(activeLink) ? 'active text-white' : 'text-gray-400'}`}
            onClick={toggleDropdown}
          >
            <span>The Event</span>
            <ArrowDropDownIcon />
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded">
                <li className={getLinkClass('#partners')}>
                  <a href="#partners" onClick={() => handleSectionClick('#partners')}>Partners</a>
                </li>
                <li className={getLinkClass('#speakers')}>
                  <a href="#speakers" onClick={() => handleSectionClick('#speakers')}>Speakers</a>
                </li>
                <li className={getLinkClass('#location')}>
                  <a href="#location" onClick={() => handleSectionClick('#location')}>Location</a>
                </li>
                <li className={getLinkClass('#organizers')}>
                  <a href="#organizers" onClick={() => handleSectionClick('#organizers')}>Organizers</a>
                </li>
              </ul>
            )}
          </li>
          <li className={getLinkClass('#schedule')}>
            <a href="#schedule" onClick={() => handleSectionClick('#schedule')}>Schedule</a>
          </li>
          <li className={getLinkClass('/faq')}>
            <Link href="/faq" onClick={handleLinkClick}>FAQ</Link>
          </li>
          <li className={getLinkClass('#register')}>
            <Link href={'https://www.eventbrite.com/e/catania-qiskit-fall-fest-tickets-1029219452087'} onClick={handleLinkClick} >Register</Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 text-lg py-4">
          <li className={getLinkClass('#about')}>
            <a href="#about" onClick={() => handleSectionClick('#about')}>About</a>
          </li>
          <li
            className={`relative ${['#partners', '#speakers', '#location', '#organizers'].includes(activeLink) ? 'active text-white' : 'text-gray-400'}`}
            onClick={toggleDropdown}
          >
            <span>The Event</span>
            <ArrowDropDownIcon />
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded">
                <li className={getLinkClass('#partners')}>
                  <a href="#partners" onClick={() => handleSectionClick('#partners')}>Partners</a>
                </li>
                <li className={getLinkClass('#speakers')}>
                  <a href="#speakers" onClick={() => handleSectionClick('#speakers')}>Speakers</a>
                </li>
                <li className={getLinkClass('#location')}>
                  <a href="#location" onClick={() => handleSectionClick('#location')}>Location</a>
                </li>
                <li className={getLinkClass('#organizers')}>
                  <a href="#organizers" onClick={() => handleSectionClick('#organizers')}>Organizers</a>
                </li>
              </ul>
            )}
          </li>
          <li className={getLinkClass('#schedule')}>
            <a href="#schedule" onClick={() => handleSectionClick('#schedule')}>Schedule</a>
          </li>
          <li className={getLinkClass('/faq')}>
            <Link href="/faq">FAQ</Link>
          </li>
          <li className={getLinkClass('#register')}>
            <Link href="https://www.eventbrite.com/e/catania-qiskit-fall-fest-tickets-1029219452087">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
