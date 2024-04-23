'use client'

import React, { useEffect, useState } from 'react'

const Hero = () => {

    const images = [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1679090005074-78e1f2f47649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1554679665-f5537f187268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D'
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <section className="w-full z-0 relative md:h-screen">
        <div className="w-full  h-full bg-cover bg-center py-32" style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 0.8, // Set opacity value as needed
        }}>
          <div className="container mt-28 mx-auto text-center text-white">
            <h1 className="sm:text-5xl text-3xl font-extrabold md:mb-16 mb-10">The Perfect Dine For You</h1>
            <p className="text-xl  font-bold mb-12">Good food .. Good life</p>
            {/* <a href="#" className="bg-[#9b7b32]  text-white py-4 px-12 rounded-full hover:bg-[#755e26] hover:cursor-pointer">Learn More</a> */}
          </div>
        </div>
      </section>
  )
}

export default Hero