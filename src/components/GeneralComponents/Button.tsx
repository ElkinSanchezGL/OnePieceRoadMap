import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type TextProps = {
  text: string;
  route: string; 
  className?: string;
  onNavigate?: () => void;
};

const ButtonRedirect: React.FC<TextProps> = ({ text, route, className, onNavigate }) => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }

    
    const fullRoute = `/${lang}/${route.replace(/^\/+/, '')}`;
    navigate(fullRoute);
  };

  return (
    <button
      className={className || "bg-red-800 text-white px-8 py-2 rounded hover:bg-red-500 cursor-pointer"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonRedirect;
