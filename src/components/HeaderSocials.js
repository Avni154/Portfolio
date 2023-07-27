import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function HeaderSocials() {
  return (
    <div className='headerSocials'>
        <a href = "https://www.linkedin.com/in/avni-shah-0238b0203/" target = "_blank"><LinkedInIcon/></a>
        <a href = "https://github.com/Avni154" target = "_blank"><GitHubIcon/></a>
        {/* <a href = "" target = "_blank"></a> */}
    </div>
  )
}

export default HeaderSocials