// import React from 'react';

// const EducationExperienceAward = ({
//   sectionHeading,
//   //   info: { icon, duration, title, school, description },
// }) => {
//   return <section>{sectionHeading && <h2>{sectionHeading}</h2>}</section>;
// };

// export default EducationExperienceAward;

import React from 'react';

const Resume = ({
  resume: {
    titleOrPosition,
    workspaceOrCompany,
    startDate,
    endDate,
    city,
    country,
    companyDescription,
    achievementsOrTasks,
    contactPerson,
    contactInfo,
  },
}) => {
  return (
    <div className='resume'>
      <span className='text-indigo-600 font-extrabold sm:text-sm md:text-lg'>
        2014 - 2015
      </span>
      <h2 className='font-black font-poppins sm:text-xl md:text-2xl'>
        {titleOrPosition}
      </h2>
      <h6 className='font-black font-poppins sm:text-lg md:text-xl sm:py-2 md:py-3'>
        {workspaceOrCompany}
      </h6>

      <ul className='text-neutral-400 list-decimal'>{achievementsOrTasks}</ul>
    </div>
  );
};

export default Resume;
