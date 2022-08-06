import { useRouter } from 'next/router';
import React from 'react';

const Project = () => {
  const {
    query: { projectId },
  } = useRouter();
  return <div>Project {projectId}</div>;
};

export default Project;
