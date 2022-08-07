import styles from '../styles/Home.module.scss';
import AboutSection from '../components/AboutSection';
import { useEffect } from 'react';
import ResumeList from '../components/ResumeList';
import SkillProgressSlider from '../components/SkillProgressSlider';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FiCamera } from 'react-icons/fi';

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

const skills = [
  { skill: 'Photoshop', percent: 90 },
  { skill: 'jQuery', percent: 80 },
  { skill: 'HTML5', percent: 95 },
  { skill: 'CSS3', percent: 90 },
  { skill: 'WordPress', percent: 70 },
  { skill: 'SEO', percent: 80 },
];

const camera = <FiCamera size={40} className='mx-auto mb-4 text-indigo-600' />;
const services = [
  {
    // icon: '/images/photography.png',
    icon: camera,
    title: 'Web Design',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: camera,
    title: 'Photography',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: camera,
    title: 'Web Developer',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: camera,
    title: 'App Developer',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: camera,
    title: 'Branding',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: camera,
    title: 'Product Strategy',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

export default function Home() {
  const router = useRouter();
  const style = `hover:translate-x-3 hover:text-indigo-600 transition 2s delay-200 duration-300`;

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
          <div className='md:col-span-9'>
            <ResumeList data={data} id='education' />
            <ResumeList data={data} id='experience' />
            <div className='sm:pb-10 md:pb-16' id='skill'>
              <h2 className='font-black font-poppins text-indigo-600 sm:text-2xl sm:mb-4 md:text-4xl md:mb-6'>
                Skills
              </h2>
              <div className='md:grid md:grid-cols-12 md:gap-4'>
                {skills?.length > 0 &&
                  skills?.map((d, i) => {
                    return (
                      <div
                        key={i}
                        className='sm:mb-4 md:mb-0 md:col-span-6 xl:col-span-4'
                      >
                        <SkillProgressSlider data={d} />
                      </div>
                    );
                  })}
              </div>
            </div>

            <ResumeList data={data} id='award' />
          </div>
        </div>
      </section>
      <Section
        id={'services'}
        title='Services'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      >
        <div className='grid grid-cols-12 gap-6 sm:pt-16'>
          {services?.length > 0 &&
            services?.map((service, index) => {
              return (
                <div
                  key={index}
                  className='sm:col-span-12 md:col-span-6 xl:col-span-4'
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
        </div>
      </Section>
      <Section
        id={'projects'}
        title='Our Projects'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      ></Section>
      <Section
        id={'blogs'}
        title='Our Blogs'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      ></Section>
      <Section
        id={'contact'}
        title='Contact Me'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      ></Section>
    </>
  );
}
