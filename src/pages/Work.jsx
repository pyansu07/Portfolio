import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { Pagination } from "../components/index";
import Logo from "../assets/github.png";


const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const sortedProjects = projectsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const projectSlice = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div name="work" id="work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div className="flex items-center justify-center py-12">
            <p className="text-4xl font-bold inline">Projects</p>
          </div>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {/* Grid Item */}
          {projectSlice.map((project) => (
            <div key={project.id} className="card-box glass">
              <div className="card-content">
                <div className="flex items-start justify-between w-full mb-4">
                  <h3 className="description text-xl font-semibold ">{project.name}</h3>
                  <button className="button">
                  <a href={project.github}>
                    <img src={Logo} alt="Logo" className="w-6 h-6" />
                   </a> 
                  </button>
                </div>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <style jsx>{`
      :root {
          --card-bg: rgba(255, 255, 255, 0.1);
          --card-border: rgba(255, 255, 255, 0.2);
          --card-shadow: rgba(0, 255, 255, 0.6);
          --text-color: #000000;
          --button-hover-color: #00ffff;
        }

        .card-box {
          width: 280px;
          height: 350px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card-box:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
        }

        .card-content {
          width: 100%;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        h3 {
          color: #e5e7eb;
          margin: 0;
        }

        .description {
          color: var(--text-color); 
          margin-top: auto;
          word-wrap: break-word; 
        }

        .button {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #e5e7eb;
          transition: color 0.3s ease;
        }

        .button:hover {
          color: #00ffff; 
        }

        .button img {
          width: 24px; 
          height: 24px; 
          transition: transform 0.3s ease;
        }

        .button:hover img {
          transform: scale(1.2);
        }
      `}</style>
    </div>
        );
};

export default Work;
