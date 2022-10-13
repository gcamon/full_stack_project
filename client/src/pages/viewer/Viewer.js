import React from 'react'
import './viewer.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { Link, useLocation } from 'react-router-dom'


const Viewer = () => {
  const location = useLocation()
  console.log(location)
  const { movie } = location.state
  return (
    <div className='watch'>
        <Link to="/">
          <div className='backBtn'>
              <ArrowBackOutlinedIcon />
              Home
          </div>
        </Link>
        <video 
            src={movie.video} 
            className='video' 
            progress
            controls 
            autoPlay
        />
    </div>
  )
}

export default Viewer