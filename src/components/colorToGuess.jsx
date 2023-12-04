import React from 'react';

const ColorToGuess = ({ correctColor }) => {
  console.log({correctColor})

  const bgColor = "#" + correctColor

  return (
    <div className='flex justify-center mt-4'>
      <p className='w-60 h-60 rounded-full' data-testid="color-to-guess" style={{ backgroundColor: bgColor }}>
      
    </p>
    </div>
    
  );
};

export default ColorToGuess;
