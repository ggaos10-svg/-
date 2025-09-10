import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
          번랩피트니스 (BurnLab Fitness)
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          최고의 시설과 전문적인 트레이너와 함께 당신의 건강 목표를 달성하세요.
        </p>
      </div>
    </header>
  );
};

export default Header;