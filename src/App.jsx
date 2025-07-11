import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-700 relative overflow-hidden">
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-8 pb-8">
        {/* Logo */}
        <div className="mx-auto">
          <img src="/public/velocity.png" alt="velocity-logo" className='w-35 h-25 mr-4' />
        </div>
        
        {/* Subscriber count */}
        <div className="text-gray-300 text-md mb-2 font-medium">
          1M+ Subscribers
        </div>
        
        {/* Main heading */}
        <h1 className="text-white text-2xl md:text-xl font-semibold text-center mb-8 max-w-2xl">
          World's Most Profitable Account Management System
        </h1>
        
        {/* Features card */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-10 md:mb-12 max-w-md w-full shadow-2xl border border-white/20">
          <h2 className="text-white text-xl font-semibold mb-4">Features:</h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-0">
              <span className="text-blue-400 text-lg">💰</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                Earn income while sleeping
              </span>
            </div>
            
            <div className="flex items-center gap-0">
              <span className="text-green-400 text-lg">✅</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                Unlock your path to financial freedom
              </span>
            </div>
            
            <div className="flex items-center gap-0">
              <span className="text-purple-400 text-lg">🏗️</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                Tired of trading manually? We can help
              </span>
            </div>
            
            <div className="flex items-center gap-0">
              <span className="text-yellow-400 text-lg">📊</span>
              <span className="text-gray-300 text-sm leading-tight">
                Tired of analysing candlesticks alone?
              </span>
            </div>
            
            <div className="flex items-center gap-0">
              <span className="text-orange-400 text-lg">⚡</span>
              <span className="text-gray-300 text-sm leading-relaxed">
                Unlock handsfree trading system
              </span>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="relative mb-16">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 active:from-blue-500 active:via-purple-500 active:to-blue-600 z-10" onClick={() => {
            const button = document.querySelector('button');
            button.classList.add('hover');
            setTimeout(() => button.classList.remove('hover'), 300);
          }}>

              <svg className='w-10 h-10 text-white rounded-full backdrop-brightness-80 bg-white/50 backdrop-blur-5xl bg-blend-lighten' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>
  
           <span className="relative">Join Telegram</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
          
          {/* Logo watermark positioned at bottom of button */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-10 pointer-events-none">
             {/* <img src="/public/velocity.png" alt="velocity-logo" className='w-35 h-25 mr-4' /> */}
          </div>
        </div>
      </div>
      
      {/* Large bottom logo watermark */}
      <div className="absolute bottom-20 left-1/2 -translate-x-[65%] scale-250 lg:-bottom-12 lg:left-2/4 transform lg:-translate-x-[55%] md:bottom-20 md:left-1/2  md:-translate-x-[60%] md:scale-160 lg:scale-100  opacity-5 pointer-events-none">
         <img src="/public/velocity.png" alt="velocity-logo" className='w-full h-full mr-4' />
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-20">
        <p className="text-gray-500 text-sm">
          © 2025 Velocity. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;