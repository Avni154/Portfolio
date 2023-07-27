import React from 'react';

import './css/Interests.css';
import { TbPuzzle } from 'react-icons/tb';
import { BsFillPenFill } from 'react-icons/bs';
import { TbBook } from 'react-icons/tb';
import { GiGuitar } from 'react-icons/gi';


function Interests() {
  return (
    <section id = 'interests'>
        <h5>My hobbies</h5>
        <h2>Interests</h2>

        <div className='container hobbiesContainer'>
            <div className='hobbies'>
                <p className='hobby'>
                    <BsFillPenFill fontSize='large' className='hobbyIcon'/>
                    <h4>Sketching</h4>
                </p>
                <p className='hobby'>
                    <TbBook fontSize='large' className='hobbyIcon'/>
                    <h4>Reading</h4>
                </p>
                <p className='hobby'>
                    <TbPuzzle fontSize='large' className='hobbyIcon'/>
                    <h4>Puzzles</h4>
                </p>
                <p className='hobby'>
                    <GiGuitar fontSize='large' className='hobbyIcon'/>
                    <h4>Judo</h4>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Interests