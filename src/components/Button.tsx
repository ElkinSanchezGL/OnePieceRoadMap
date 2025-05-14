import React from 'react';
import { useNavigate } from 'react-router-dom';

type TextProps = {
  text: string;
  route: string;
  className?: string;
};

const ButtonRedirect: React.FC<TextProps> = ({ text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button className="bg-red-800 text-white px-8 py-2 rounded hover:bg-red-500 cursor-pointer" onClick={handleClick}>

      {text}
    </button>
  );
};

export default ButtonRedirect;
