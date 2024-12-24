import React from 'react';
import Eclipse from '../assets/eclipse.svg'

function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
      <img src={Eclipse}/> 
    </div>
  );
}

export default Loading;
