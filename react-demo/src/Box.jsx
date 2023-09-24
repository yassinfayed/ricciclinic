import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Box = ({head,dest}) => {
    const [isHovered, setIsHovered] =  useState(false);
    const nav =useNavigate();

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const handleExploreClick = () => {
        nav(dest);
    };

    
    return (
        <div
          className={`boxa ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        
        >
          <h3 className={`hea ${isHovered ? 'hea-hovered' : ''}`}>{head}</h3>
          <button className="box-button" onClick={handleExploreClick}>Explore</button>
        </div>
      );
};

export default Box;