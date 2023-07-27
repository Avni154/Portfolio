import React from 'react';

import './css/Educations.css';
import BTechResult from './files/BTechResult.pdf';
import tenthResult from './files/10thResult.pdf';
import twelfthResult from './files/12thResult.pdf';

function Education() {
  return (
    <section id = "educations">
        <h5>My Learning</h5>
        <h2>Education</h2>

        <div className='container educationContainer'>
            <div className='education'>
              <div className='educationHead'>
                <h3>Undergraduation</h3>
              </div>
              <div className='headTitle'>
                <h4>VIT University,Vellore</h4>
              </div>
              <div className='educationInfo'>
                <p className='educationInfoDegree'>Bachelor of Technology (B.Tech)</p>
                <p className='educationInfoFOS'>Computer Science (CS)</p>
              </div>
              <div className='educationQualification'>
                <p className='educationQualificationDuration'>Year: 2020-Present</p>
              </div>
            </div>
            <div className='education'>
              <div className='educationHead'>
                <h3>High School</h3>
              </div>
              <div className='headTitle'>
                <h4>Delhi Public School,Sushant Lok</h4>
              </div>
              <div className='educationQualification'>
                <small className='educationQualificationDuration'>Year: 2019-2020</small>
              </div>
            </div>
            <div className='education'>
              <div className='educationHead'>
                <h3>Primary School</h3>
              </div>
              <div className='headTitle'>
                <h4>Delhi Public School,Sushant Lok</h4>
              </div>
              <div className='educationQualification'>
                <p className='educationQualificationDuration'>Year: 2008-2018</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Education