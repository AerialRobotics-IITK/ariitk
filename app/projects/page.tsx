import ProjectsPage from "@/components/Projects";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | ARIITK",
  description: "Current projects of team ARIITK",
  // other metadata
};

const ProjectsPage_load = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projects"
        description="Some projects that we have taken up"
      />
      <ProjectsPage />
    </>
  );
};

export default ProjectsPage_load;
