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
import { data, skills, projects, blogs } from '../data';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { FiCamera } from 'react-icons/fi';
import AvailableSection from '../components/AvailableSection';
import ContactSection from '../components/ContactSection';

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
  const style = `before:inline-block before:content-[""] before:w-3 before:translate-y-[-0.3rem] before:h-1 before:bg-indigo-600 before:mr-[0.3rem] mr-4 md:mr-0 md:pb-3 hover:translate-x-3 hover:text-indigo-600 transition 2s delay-200 duration-300`;

  useEffect(() => {
    const links = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('section');
    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 75 < sections[len].offsetTop) {}
      links.forEach((link) => link.classList.remove('active'));
      links[len]?.classList.add('active');
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
          <aside className='sidebar md:col-span-3 pb-5 md:pb-0'>
            <ul className='sticky top-[22.5rem] -z-50 flex md:block'>
              <li className={style}>
                <Link href={'/#education'} passHref>
                  <a
                    className={`font-poppins text-lg md:text-xl ${
                      router.asPath === '/#education' ? 'active' : ''
                    }`}
                  >
                    Education
                  </a>
                </Link>
              </li>
              <li className={style}>
                <Link href={'/#experience'} passHref>
                  <a
                    className={`font-poppins text-lg md:text-xl ${
                      router.asPath === '/#experience' ? 'active' : ''
                    }`}
                  >
                    Experience
                  </a>
                </Link>
              </li>
              <li className={style}>
                <Link href={'/#skill'} passHref>
                  <a
                    className={`font-poppins text-lg md:text-xl ${
                      router.asPath === '/#skill' ? 'active' : ''
                    }`}
                  >
                    Skill
                  </a>
                </Link>
              </li>
              <li className={style}>
                <Link href={'/#award'} passHref>
                  <a
                    className={`font-poppins text-lg md:text-xl ${
                      router.asPath === '/#award' ? 'active' : ''
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
            <div className='pb-10 md:pb-16' id='skill'>
              <h2 className='font-black font-poppins text-indigo-600 text-2xl mb-4 md:text-4xl md:mb-6'>
                Skills
              </h2>
              <div className='md:grid md:grid-cols-12 md:gap-4'>
                {skills?.length > 0 &&
                  skills?.map((d, i) => {
                    return (
                      <div
                        key={i}
                        className='mb-4 md:mb-0 md:col-span-6 xl:col-span-4'
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
        <div className='grid grid-cols-12 gap-6 pt-16'>
          {services?.length > 0 &&
            services?.map((service, index) => {
              return (
                <div
                  key={index}
                  className='col-span-12 md:col-span-6 xl:col-span-4'
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
      >
        <div className='grid grid-cols-12 pt-16'>
          {projects?.length > 0 &&
            projects?.map((project, index) => {
              return (
                <div
                  key={index}
                  className='col-span-12 md:col-span-6 xl:col-span-4'
                >
                  <ProjectCard project={project} />
                </div>
              );
            })}
        </div>
      </Section>
      <Section
        id={'blogs'}
        title='Our Blogs'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      >
        <div className='grid grid-cols-12 gap-6 pt-16'>
          {blogs?.length > 0 &&
            blogs?.map((blog, index) => {
              return (
                <div
                  key={index}
                  className='col-span-12 md:col-span-6 xl:col-span-4'
                >
                  <BlogCard blog={blog} />
                </div>
              );
            })}
        </div>
      </Section>
      <AvailableSection />
      <Section
        id={'contact'}
        title='Contact Me'
        description={
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        }
      >
        <ContactSection />
      </Section>
    </>
  );
}
