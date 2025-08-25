import React, { useEffect, useState } from "react";
import WorkCard from "../Shared/WorkCard";

const Features = () => {
  const [workData, setWorkData] = useState([]);
  useEffect(() => {
    fetch("/featureData.json")
      .then((res) => res.json())
      .then((jsonData) => setWorkData(jsonData));
  }, []);
  console.log(workData);

  return (
    <>
      <section className="w-full bg-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Featured Work
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Here are some of the projects we're proud to have worked on.
            </p>
          </div>

          {/* Grid Container for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workData.map((work) => (
              <WorkCard
                key={work.id}
                imageUrl={work.projectImage}
                title={work.slogan}
               liveLink = {work.liveLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
