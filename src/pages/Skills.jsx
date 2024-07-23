import React from "react";
import { skillsData  } from "../data/skillsData";

const Skills = () => {
  const skill = skillsData;

  return (
    <div
      name="skills"
      id="skills"
      className="w-full md:h-screen text-gray-300 mb-8"
    >
      {/* Container */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
  {skill.map((item, index) => (
    <div
      key={index}
      className="font-bold rounded-md hover:scale-110 hover:rainbow-glow duration-500 group flex flex-col items-center justify-center p-5 transition-all"
    >
      <img
        src={item.image}
        alt={`Logo ${index + 1}`}
        className="max-w-none h-8"
      />
      <p className="my-4">{item.name}</p>
    </div>
  ))}
</div>

<style jsx>{`
  @keyframes rainbow-glow {
    0% {
      box-shadow: 0 0 25px rgba(255, 0, 0, 0.5);
    }
    14% {
      box-shadow: 0 0 25px rgba(255, 165, 0, 0.5);
    }
    28% {
      box-shadow: 0 0 25px rgba(255, 255, 0, 0.5);
    }
    42% {
      box-shadow: 0 0 25px rgba(0, 255, 0, 0.5);
    }
    57% {
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
    }
    71% {
      box-shadow: 0 0 25px rgba(0, 0, 255, 0.5);
    }
    85% {
      box-shadow: 0 0 25px rgba(255, 0, 255, 0.5);
    }
    100% {
      box-shadow: 0 0 25px rgba(255, 0, 0, 0.5);
    }
  }

  .hover\\:rainbow-glow:hover {
    animation: rainbow-glow 1.5s linear infinite;
    background: rgb(0, 0, 0);
  }
`}</style>

      </div>
    </div>
  );
};

export default Skills;
