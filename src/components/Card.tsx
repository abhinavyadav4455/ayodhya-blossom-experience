
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  buttonText = "Learn More" 
}) => {
  return (
    <div className="card-custom flex flex-col h-full">
      <div className="image-container h-48 sm:h-56">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        {link && (
          <Link to={link} className="btn-primary self-start mt-auto">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
