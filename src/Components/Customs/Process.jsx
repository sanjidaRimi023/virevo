import React from "react";
import { ClipboardList, LayoutTemplate, Rocket, LifeBuoy } from "lucide-react";
import ProcessCard from "../Shared/ProcessCard";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      icon: <ClipboardList size={48} className="text-white" />,
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision to create a detailed project plan and roadmap for success.",
      imageUrl: "https://i.ibb.co.com/7dGFcQbV/colleagues-working-office-relaxed-atmosphere.jpg",
      overlayColor: "bg-yellow-500/80",
    },
    {
      id: 2,
      icon: <LayoutTemplate size={48} className="text-white" />,
      title: "Design & Development",
      description:
        "Our team designs a stunning UI and develops a robust, scalable website using the latest technologies.",
      imageUrl: "https://i.ibb.co.com/DHtdNGyy/design-html-web-design-template-concept.jpg",
      overlayColor: "bg-blue-900/80",
    },
    {
      id: 3,
      icon: <Rocket size={48} className="text-white" />,
      title: "Testing & Launch",
      description:
        "We conduct rigorous testing to ensure everything is flawless before deploying the website to a live server.",
      imageUrl: "https://i.ibb.co.com/whntjNhp/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg",
      overlayColor: "bg-yellow-500/90",
    },
    {
      id: 4,
      icon: <LifeBuoy size={48} className="text-white" />,
      title: "Support & Maintenance",
      description:
        "After launch, we provide dedicated support and maintenance to ensure your website remains secure and up-to-date.",
      imageUrl: "https://i.ibb.co.com/zH0M5nNz/concentrated-bearded-call-center-operator-working.jpg",
      overlayColor: "bg-blue-900/80",
    },
  ];

  return (
    <section className="bg-white font-sans w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our streamlined process ensures quality and efficiency from start to
            finish.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-transform duration-300 ${
                index === 1 || index === 3 ? "lg:-translate-y-8" : ""
              }`}
            >
              <ProcessCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                imageUrl={step.imageUrl}
                overlayColor={step.overlayColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
