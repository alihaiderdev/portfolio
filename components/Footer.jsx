import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { RiGithubLine, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

const links = ['about', 'resume', 'services', 'projects', 'blogs', 'contact'];
const services = [
  'Web Design',
  'Web Development',
  'Business Strategy',
  'Data Analysis',
  'Graphic Design',
];
const socials = [
  {
    icon: <RiTwitterFill size={25} color='#000' />,
    link: 'https://twitter.com/_alihaiderdev',
  },
  {
    icon: <RiLinkedinFill size={25} color='#000' />,
    link: 'https://www.linkedin.com/in/alihaiderdev/',
  },
  {
    icon: <RiGithubLine size={25} color='#000' />,
    link: 'https://github.com/alihaiderdev',
  },
];

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const Footer = () => {
  return (
    <footer className='bg-black py-16'>
      <div className='container'>
        <div className='grid md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 text-white'>
          <div className='h-full'>
            <h2 className='text-xl lg:text-xl lg:font-semibold mb-12'>About</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            {/* <ul className='flex items-center mt-auto h-full'> */}
            <ul className='flex items-center mt-24'>
              {socials?.length > 0 &&
                socials?.map((social, index) => {
                  return (
                    <li
                      key={index}
                      className='transition ease-in-out w-12 h-12 bg-white hover:bg-neutral-300 rounded-full mr-4'
                    >
                      <a
                        href={social?.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social w-full h-full flex items-center justify-center'
                      >
                        {social?.icon}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h2 className='text-xl lg:text-xl lg:font-semibold mb-12'>Links</h2>
            <ul>
              {links?.length > 0 &&
                links?.map((link, index) => {
                  return (
                    <li key={index} className='pb-4'>
                      <Link href={`#${link}`}>
                        <a className='flex items-center'>
                          <BsArrowRight className='mr-2' />
                          {capitalizeFirstLetter(link)}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h2 className='text-xl lg:text-xl lg:font-semibold mb-12'>
              Services
            </h2>
            <ul>
              {services?.length > 0 &&
                services?.map((link, index) => {
                  return (
                    <li key={index} className='pb-4'>
                      <Link href={`#services`}>
                        <a className='flex items-center'>
                          <BsArrowRight className='mr-2' />
                          {link}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h2 className='text-xl lg:text-xl lg:font-semibold mb-12'>
              Have a Questions?
            </h2>
            <ul>
              <li className='pb-4'>
                <address>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </address>
              </li>
              <li className='pb-4'>
                <a href='tel:+923092422648'>+923092422648</a>
              </li>
              <li className='pb-4'>
                <a href='mailto:alihaiderdev2646@gmail.com'>
                  alihaiderdev2646@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center pt-10'>
          <p className='text-white'>
            Copyright ©{new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
