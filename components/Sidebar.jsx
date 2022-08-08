import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const style = `hover:translate-x-3 hover:text-indigo-600 transition 2s delay-200 duration-300`;

  return (
    <aside className='md:col-span-3'>
      <ul className='sticky top-[5.5rem] -z-50 flex md:block'>
        <li className={`${style} pb-3`}>
          <Link href={'/#education'} passHref>
            <a
              className={`font-poppins text-sm md:text-xl ${
                router.asPath === '/#education' ? 'active' : ''
              }`}
            >
              Education
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#experience'} passHref>
            <a
              className={`font-poppins text-sm md:text-xl ${
                router.asPath === '/#experience' ? 'active' : ''
              }`}
            >
              Experience
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#skill'} passHref>
            <a
              className={`font-poppins text-sm md:text-xl ${
                router.asPath === '/#skill' ? 'active' : ''
              }`}
            >
              Skill
            </a>
          </Link>
        </li>
        <li className={`${style} pb-3`}>
          <Link href={'/#award'} passHref>
            <a
              className={`font-poppins text-sm md:text-xl ${
                router.asPath === '/#award' ? 'active' : ''
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
