import React from 'react';

const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 md:p-10 text-center bg-black text-white-50 font-['Mona_Sans']">
      <div className="flex flex-col justify-center items-center card-border rounded-xl p-8 md:p-10 max-w-md md:max-w-2xl mx-auto gap-6 md:gap-8 w-full">
        <div className="text-4xl md:text-5xl text-white">🛠️</div>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Website Under Maintenance</h1>
        <h2 className="text-xl md:text-2xl text-blue-50">I'm working on something awesome!</h2>
        <p className="max-w-xl leading-relaxed text-center">
          Thank you for visiting my portfolio website. I'm currently making some improvements to enhance your experience.
          Please check back soon to see the completed version.
        </p>
        <div className="text-blue-50 mt-2">
          <p>© {new Date().getFullYear()} Devansh - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
