import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import AboutSection from '../components/AboutSection';
import Resume from '../components/Resume';
import { useEffect } from 'react';
import ResumeList from '../components/ResumeList';
import Link from 'next/link';
import { useRouter } from 'next/router';

const data = [
  {
    titleOrPosition: 'Frontend Developer',
    workspaceOrCompany: 'Codelabs Private Limited',
    startDate: '01-12-2021',
    endDate: '',
    // country: 'Pakistan',
    // city: 'Karachi',
    companyDescription: '',
    achievementsOrTasks:
      'As a frontend developer here my role is to make single-page applications using react.js (projects like logofy, Ordering system) as well as creating mobile responsive, dynamic websites using HTML, CSS, JavaScript, JQuery (projects like Humwell Admin Panel a website that won Consumers Choice Award 2021 for successful services delivered in the field of healthcare and technology) and on the other side customizing and making WordPress sites like iDialogue, mywater, codelabs using Wocommerce (Elementor, Divi, WPBakery page builders) from the first day to now I have learned and explore many new things like WordPress theme based and custom development and explore many other new things like react native, next.js, GraphQL, PWA, Webrtc, stripe, socket.io, MySQL, SQL, Sequelize(ORM), styled-components, tailwindcss, etc.',
    contactPerson: '',
    contactInfo: '',
  },
  {
    titleOrPosition: 'MERN Stack Developer',
    workspaceOrCompany: 'Social Pie (ABM Info Tech)',
    startDate: '01-12-2021',
    endDate: '01-08-2022',
    country: 'Pakistan',
    city: 'Karachi',
    companyDescription:
      'Abm is a group of company and social pie its child company.',
    achievementsOrTasks: `Here at social pie my main task is to make static websites, dynamic websites, SPA, MPA using the latest technologies and trends and also make restful api's using MongoDB, expressjs and nodejs. Now a days mainly working on reactjs, nextjs apps and Strapi (Headless CMS).`,
    contactPerson: 'Raza Bhai',
    contactInfo: 'Front end Developer at Social Pie',
  },
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('section');
    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 75 < sections[len].offsetTop) {}
      links.forEach((link) => link.classList.remove('active'));
      links[len].classList.add('active');
    };
    window.addEventListener('scroll', activeMenu);
    return () => {
      window.removeEventListener('scroll', activeMenu);
    };
  }, []);

  return (
    <>
      <section className='pt-24' id='about'>
        <AboutSection />
      </section>
      <section className='pt-24' id='resume'>
        <div className='md:grid md:grid-cols-12'>
          <div className='sidebar md:col-span-3 sticky z-[1000] top-1/2'>
            <ul>
              <li className='ml-5 pb-1'>
                <Link href={'/#education'} passHref>
                  <a
                    className={`font-poppins sm:text-sm md:text-xl ${
                      router.asPath === '/#education' ? 'active' : ''
                    }`}
                  >
                    Education
                  </a>
                </Link>
              </li>
              <li className='ml-5 pb-1'>
                <Link href={'/#experience'} passHref>
                  <a
                    className={`font-poppins sm:text-sm md:text-xl ${
                      router.asPath === '/#experience' ? 'active' : ''
                    }`}
                  >
                    Experience
                  </a>
                </Link>
              </li>
              <li className='ml-5 pb-1'>
                <Link href={'/#skill'} passHref>
                  <a
                    className={`font-poppins sm:text-sm md:text-xl ${
                      router.asPath === '/#skill' ? 'active' : ''
                    }`}
                  >
                    Skill
                  </a>
                </Link>
              </li>
              <li className='ml-5 pb-1'>
                <Link href={'/#award'} passHref>
                  <a
                    className={`font-poppins sm:text-sm md:text-xl ${
                      router.asPath === '/#award' ? 'active' : ''
                    }`}
                  >
                    Award
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:col-span-9'>
            <ResumeList data={data} id='education' />
            <ResumeList data={data} id='experience' />

            <div className='sm:pb-10 md:pb-16' id='skill'>
              <h2 className='font-black font-poppins text-indigo-600 sm:text-2xl sm:mb-4 md:text-4xl md:mb-6'>
                Education
              </h2>
              {data?.length > 0 &&
                data?.map((d, i) => {
                  return (
                    <div
                      key={i}
                      className={`sm:px-4 md:px-6 sm:pb-4 sm:mb-4 md:pb-6 md:mb-6 border-solid border-b-2 border-neutral-300`}
                    >
                      <Resume resume={d} />
                    </div>
                  );
                })}
            </div>

            <ResumeList data={data} id='award' />
          </div>
        </div>
      </section>
      <section className='h-60 pt-24' id='services'>
        services
      </section>
      <section className='h-60 pt-24' id='projects'>
        projects
      </section>
      <section className='h-60 pt-24' id='blogs'>
        blogs
      </section>
      <section className='h-60 pt-24' id='contact'>
        contact
      </section>
    </>
  );
}
