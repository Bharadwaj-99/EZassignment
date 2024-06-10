import React from 'react'
import './card.css'
import PDIcon from '../assets/PDIcon.png';
import AVIcon from '../assets/AVIcon.png';
import TIcon from '../assets/TIcon.png';
import RAIcon from '../assets/RAIcon.png';
import DPIcon from '../assets/DPIcon.png';
import GDIcon from '../assets/GDIcon.png';

const Card = ({ icon, title, description }) => {
    const icons = {
        'Presentation Design': PDIcon,
        'Audio - Visual Production': AVIcon,
        'Translation Services': TIcon,
        'Graphic Design': GDIcon,
        'Research & Analytics': RAIcon,
        'Data Processing': DPIcon,
      };
  return (
    <div className="card">
      <div className='title-wrapper'>
       <img src={icons[title]} alt={title} className="card-icon" />
      <p className="card-title">{title}</p>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card