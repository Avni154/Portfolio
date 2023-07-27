import React from 'react';

import './css/Courses.css';
import {TbCircleFilled} from 'react-icons/tb';

function Courses() {
  return (
    <section id = 'Courses'>
        <h5>My course</h5>
        <h2>Courses</h2>

        <div className='container courseContainer'>
            <div className='course'>
                <p className='courses'>
                    <TbCircleFilled fontSize='large' className='coursesIcon'/>    
                    <h4>SC-900: Microsoft Security, Compliance, and Identity Fundamentals</h4>
                </p>
                <p className='courses'>
                    <TbCircleFilled fontSize='large' className='coursesIcon'/>  
                    <h4>Cisco NetAcad – Introduction to cybersecurity</h4>
                </p>
                <p className='courses'>
                    
                    <h4></h4>
                </p>
                <p className='courses'>
                    
                    <h4></h4>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Courses