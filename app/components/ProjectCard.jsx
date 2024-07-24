import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, git }) => {
  return (
    <div className="flex flex-col h-full shadow-lg rounded-xl overflow-hidden bg-[#181818]">
      <div
        className="h-52 md:h-72 relative group"
        style={{
          background: `url(${imgUrl}) center center/cover no-repeat`,
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href={git}
            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-pink-200"
          >
            <CodeBracketIcon className="h-10 w-10 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:white" />
          </Link>
        </div>
      </div>
      <div className="text-white p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
