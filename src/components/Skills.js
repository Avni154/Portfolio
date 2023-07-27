import React from 'react';

import './css/skills.css';
import VerifiedIcon from '@mui/icons-material/Verified';

function skills() {
  return (
    <section id = "skills">
      <h5>What skills I have?</h5>
      

      <div className='container skillsContainer'>
        <div className='skillsCoreSkills'>
          <h3>Core Skills</h3>
          <div className='skillsContent'>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon   className='skillsDetailsIcons'/>
              <div>
                <h4>Data Analytics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon  className='skillsDetailsIcons'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon  className='skillsDetailsIcons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
          </div>
        </div>
        <div className='skillsOtherSkills'>
          <h3>Other Skills</h3>
          <div className='skillsContent'>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Cryptograhy</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Go Lang</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Postman API</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='skillsDetails'>
              <VerifiedIcon className='skillsDetailsIcons'/>
              <div>
                <h4>Microsoft Azure</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills