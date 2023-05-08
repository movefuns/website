import type { Project } from "../content/projects";
import { useState,useEffect } from "react";

type ProjectProps = {
  project: Project;
  // include feature description
  detailed?: boolean;
};

export default function Project(props: ProjectProps) {
  const { project, detailed = false } = props;
  const { Icon, name, description } = project;

  const [data,setData] = useState(true)

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    const agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
    let flag = true;
    for (let v = 0; v < agents.length; v++) {
        if (userAgent.indexOf(agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width<768){
          flag = false;
    }
    console.log(flag);
    setData(flag);
  }, []);


  if (data) {
    return (
      <div className="p-10 bg-white shadow-lg rounded-xl dark:bg-opacity-5 ">
        <div>
          <Icon
            className="h-8 w-8 dark:text-white  rounded-full p-1.5 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-5 text-black"
            aria-hidden="true"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium dark:text-white">{name}</h3>
          <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div>
        <Icon
          className="block w-8 h-8"
          style={{ height: 24, width: 24 }}
          aria-hidden="true"
        />
      </div>
      <div>
        <div className="my-0 font-medium dark:text-white">{name}</div>
      </div>
    </div>
  );
}
