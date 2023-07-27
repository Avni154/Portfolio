import React from 'react';

import './css/Portfolio.css';

import amazonClone from './images/amazon-clone.png';
import netflixClone from './images/netflix-clone.png';
import spotifyClone from './images/spotify-clone.png';
import myPortfolio from './images/my-portfolio.png';
import monkNode from './images/monkNode.png';

const data = [
  {
    id: 1,
    title: 'Cryptoserve-Data exchange built for cryptosystems',
    github: 'https://github.com/Avni154/Data-exchange-built-for-cryptosystems.git',
  },
  {
    id: 2,
    
    title: 'Online Pharmacy Portal with Prescription Reading',
    github: 'https://github.com/Avni154/Online-Pharmacy-Portal-with-Prescription-Reading.git',
  
  },
  {
    id: 3,
    
    title: 'Attack analysis on network.',
    github: 'https://github.com/Avni154/attack-analysis-on-network.git',
 
  },
  {
    id: 4,
    
    title: 'My Portfolio - This Single Page Web Application using React JS',
    github: '',
   
  },
  {
    id: 5,
    
    title: 'A MERN stack Web App aimed to boost productivity.',
    github: 'https://github.com/Avni154/Productivity-App.git',
   
  },
  {
    id: 6,
    
    title: 'Flower Prediction - An AI Python Application that used to predict Flower Species.',
    github: 'https://github.com/Avni154/flower-detection-system.git',
   
  },
  
]

function Portfolio() {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolioContainer'>
        {
          data.map(({id, title, github}) => {
            return (
              <div key = {id} className='portfolioItem'>
               
                <h3>{title}</h3>
                <div className='portfolioItemCTA'>
                  <a href = {github} className='btn' target='_blank'>Github</a>
                  
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio