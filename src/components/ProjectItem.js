import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log("tech string", technologies)
  const technologyCard = technologies.map(technology => {
    return <span key={technology}>{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyCard}
      </div>
    </div>
  );
}

export default ProjectItem;
