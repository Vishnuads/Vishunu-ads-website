import React from 'react';

const Hamburger = ({ toggle, isOn }) => {
  

  return (
    <button
      className="flex flex-col justify-between w-8 h-4 relative z-50 focus:outline-none"
      onClick={toggle}
    >
      <span
        className={`block h-1 bg-black transition-all duration-300 ease-in-out ${
          isOn ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      {/* <span
        className={`block h-1 bg-black transition-all duration-300 ease-in-out ${
          isOn ? 'opacity-0' : ''
        }`}
      ></span> */}
      <span
        className={`block h-1 bg-black transition-all duration-300 ease-in-out ${
          isOn ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;