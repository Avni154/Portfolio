import React from 'react';

import myPic7 from './images/myPic7.JPG';
import './css/About.css';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';
import BackupTableIcon from '@mui/icons-material/BackupTable';

function About() {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container aboutContainer'>
        <div className='aboutMe'>
          <div className='aboutMeImage'>
            <img src= {myPic7} alt = ""/>
          </div>
        </div>
        <div className='aboutContent'>
            <div className='aboutCards'>
              <p className='aboutCard'>
                <WorkspacePremiumIcon className='aboutCardIcon'/>
                <h5>Experience</h5>
                <small>Intern</small>
              </p>
              <p className='aboutCard'>
                <BackupTableIcon className='aboutCardIcon'/>
                <h5>Projects</h5>
                <small>6</small>
              </p>
            </div>
            <p>
              Disciplined and insightful fresher looking for job titled for Software
              Development Engineer, FrontEnd Web Developer and Data Analyst. Eager and 
              seeking to leverage FrontEnd and Data Analysis skills to gain experience 
              and learn something new and daily improving problem solving skills by 
              practicing on Codeforces and Leetcode.
            </p>
          </div>
      </div>
    </section>
  )
}

export default About