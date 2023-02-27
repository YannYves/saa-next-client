import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='py-28 flex justify-center items-center'>
      <button
        className={`bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0`}
        onClick={handleClick}
      >
        Retour en haut de page
      </button>
    </div>
  );
};

export default ScrollToTopButton;
