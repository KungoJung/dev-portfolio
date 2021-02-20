import React from 'react';
import Icon from "../Image/Icon";

const SkillList = ({skills}) => {
  return (
    <div className="skill-list">
      {skills.map((skill, idx) => (
        <div className="ind-skill" key={idx}>
          <div className="skill-img-container">
            <Icon filename={skill.img} alt={skill.name} />

          </div>
          {skill.name}
        </div>
      ))}
    </div>
  )
};

export default SkillList;
