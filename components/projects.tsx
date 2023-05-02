import Project from "./project"
import PROJECTS from "../content/projects"
import type { Project as FeatureType } from "../content/projects"

export default function Features({
  page = "home",
  detailed = true,
}: {
  page?: FeatureType["page"]
  detailed?: boolean
}) {
  return (
    <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
      {PROJECTS.map((project) => (
        <Project
          key={project.name.split(" ").join("-")}
          project={project}
          detailed={detailed}
        />
      ))}
    </div>
  );
}
