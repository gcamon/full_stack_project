import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Featured = ({ type }) => {
  const [content, setContent] = useState({})
  
  useEffect(() => {
      const getContent = async () => {
          try{
            const res = await axios.get('movies/random',{
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmMwMzRhNDE5Zjg4YTcwZTlkZmNmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTMwNzkzMywiZXhwIjoxNjY1NzM5OTMzfQ.Umz1leX-pCAz_--y4p3qrNPtxB1gyk48Jm0KNPJSFsE"
                }
            })

            setContent(res.data[0])
          } catch(err) {
            console.log(err)
          }
      }
      getContent()
  },[type])


  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'Movies' ? 'Movies' : type}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src={content.img} alt="bg image"/>
        <div className='info'>
            <img 
              src={content.img}
              alt=''
            />
            <span className='desc'>
               {content.desc}
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon  className='icon'/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured