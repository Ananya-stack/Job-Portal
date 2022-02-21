import React from 'react'
import './Home.css'
import BusinessIcon from '@mui/icons-material/Business';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory()
  return (
    <div>
      <p className="home-content"><em>Welcome to the JOB-PORTAL</em></p>
        <div class="row">
            <div class="inline">
        <a onClick={() => {history.push('/job')}}><p className='company-part'>COMPANY <BusinessIcon/></p></a>
        <a onClick={() => {history.push('/view')}}><p className='company-part2'>USER <SupervisedUserCircleIcon/></p></a>
        </div>
        </div>
        

    </div>
  )
}
