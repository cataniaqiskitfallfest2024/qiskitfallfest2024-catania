import Link from 'next/link';
import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-[#353A3F] py-6">
      <div className="container mx-auto p-4">
        <ul className="flex justify-center space-x-1 text-sm text-gray-300">
          <li>
            <Link href="/contacts">
              <span className="hover:text-white">Contacts</span>
            </Link>
          </li>
          <li>
            <Link href="/credits">
              <span className="hover:text-white">Credits</span>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <span className="hover:text-white">Terms and Conditions</span>
            </Link>
          </li>
        </ul>
        <p className="text-center text-white text-sm mt-4">
          © 2024 Qiskit Fall Fest 2024 / Catania. All rights reserved.
        </p>
        <div className='flex justify-center mt-2'>
        <Link href={'https://github.com/cataniaqiskitfallfest2024/qiskitfallfest2024-catania'}>
            <Button>
              <GitHubIcon className="text-[#9D5CFD]" /> 
            </Button>
        </Link>
        <Link href={'https://www.instagram.com/cataniaqiskitfallfest/'}>
          <Button>
            <InstagramIcon className="text-[#9D5CFD]" />
          </Button>
        </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
