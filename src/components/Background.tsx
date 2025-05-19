import React from 'react';

type Props = {
  children: React.ReactNode;
  image: string;
};

const Background = ({ children, image }: Props) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75 z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
