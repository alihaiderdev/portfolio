import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header className='py-6 sticky top-0 left-0 right-0 bg-white shadow-md'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href={'/'} passHref>
            <a className='logo'></a>
          </Link>
          {/* <nav className='md:w-3/5 lg:w-1/2'> */}
          <nav>
            <ul className='flex items-center justify-between'>
              <li className='ml-5'>
                <Link href={'/'} passHref>
                  <a>Home</a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#about'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#about' ? 'active' : ''
                    }`}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#resume'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#resume' ? 'active' : ''
                    }`}
                  >
                    Resume
                  </a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#services'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#services' ? 'active' : ''
                    }`}
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#projects'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#projects' ? 'active' : ''
                    }`}
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#blogs'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#blogs' ? 'active' : ''
                    }`}
                  >
                    Blogs
                  </a>
                </Link>
              </li>
              <li className='ml-5'>
                <Link href={'/#contact'} passHref>
                  <a
                    className={`link ${
                      router.asPath === '/#contact' ? 'active' : ''
                    }`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
