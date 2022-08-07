import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const style = `hover:translate-x-3 hover:text-indigo-600 transition 2s delay-200 duration-300`;

  return (
    <aside className='md:col-span-3'>
      <ul className='sticky top-[5.5rem] -z-50 sm:flex md:block'>
        <li className={`${style} pb-3`}>
          <Link href={'/#education'} passHref>
            <a
              className={`font-poppins sm:text-sm md:text-xl ${
                router.asPath === '/#education' ? 'text-indigo-600' : ''
              }`}
            >
              Education
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#experience'} passHref>
            <a
              className={`font-poppins sm:text-sm md:text-xl ${
                router.asPath === '/#experience' ? 'text-indigo-600' : ''
              }`}
            >
              Experience
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#skill'} passHref>
            <a
              className={`font-poppins sm:text-sm md:text-xl ${
                router.asPath === '/#skill' ? 'text-indigo-600' : ''
              }`}
            >
              Skill
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#award'} passHref>
            <a
              className={`font-poppins sm:text-sm md:text-xl ${
                router.asPath === '/#award' ? 'text-indigo-600' : ''
              }`}
            >
              Award
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
