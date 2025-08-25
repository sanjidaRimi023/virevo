import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const WorkCard = ({ imageUrl, title, liveLink }) => {
  return (
    <div className="w-full relative h-[350px] overflow-hidden group mx-auto bg-white text-black flex flex-col">
      {/* Background Image */}
      <div>
        <img
          src={imageUrl}
          alt={title}
        //   width={600}
        //   height={600}
          className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-400"
        />
      </div>

      {/* Hover Overlay */}
      <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end bg-yellow-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-800 space-y-2">
          <h1 className="md:text-xl font-semibold">{title}</h1>

          <Link to={liveLink}>
            <button className="p-2 bg-black flex rounded-md text-white items-center">
              View<ChevronsRight size={20} />
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};
export default WorkCard;
