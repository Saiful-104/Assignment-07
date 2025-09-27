import React from 'react';
import bg1 from '../../assets/vector1.png'; 

 

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
  <div className="pt-8 mt-2 w-full px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div
          className="stat-card"
          style={{
            '--bg-url': `url(${bg1})`,
            '--card-gradient': 'linear-gradient(to right, #8B5CF6, #6366F1)',
          }}
        >
          <div className="card-content">
            <h2 className="title">In-Progress</h2>
            <h1 className="count">{inProgressCount}</h1>
          </div>
        </div>

      
        <div
          className="stat-card"
          style={{
            '--bg-url': `url(${bg1})`,
            '--card-gradient': 'linear-gradient(to right, #34D399, #2DD4BF)',
          }}
        >
          <div className="card-content">
            <h2 className="title">Resolved</h2>
            <h1 className="count">{resolvedCount}</h1>
          </div>
        </div>
      </div>
  );
};

export default Banner;