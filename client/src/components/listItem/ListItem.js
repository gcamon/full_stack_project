import { useState, useEffect } from 'react';
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ movie, setMovie] = useState(null) 
 
  useEffect(() => {
    const getMovie = async () => {
        try {
            const res = await axios.get(`movies/find/${item ? item : ""}`,{
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmMwMzRhNDE5Zjg4YTcwZTlkZmNmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTMwNzkzMywiZXhwIjoxNjY1NzM5OTMzfQ.Umz1leX-pCAz_--y4p3qrNPtxB1gyk48Jm0KNPJSFsE"
                }
            })
            setMovie(res.data)
        } catch(err) {
            console.log(err)
        }
    }    
    getMovie();
  },[item])
  
  return (
    <Link to="/watch" state={{movie: movie}}>
        <div 
            className='listItem' 
            style={{left: isHovered && index * 265 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <img 
                src={movie?.img} 
                alt=''
                />
                { isHovered && (
                    <>
                    <video src={movie?.trailer} autoPlay={true} loop/>
                    <div className='itemInfo'>
                        <div className='icons'>
                            <PlayArrowIcon className='icon'/>
                            <AddIcon className='icon'/>
                            <ThumbUpOutlinedIcon className='icon'/>
                            <ThumbDownOutlinedIcon className='icon'/>
                        </div>
                        <div className='itemInfoTop'>
                            <span>{movie?.duration}</span>
                            <span className='limit'>+{movie?.limit}</span>
                            <span>{movie?.year}</span>
                        </div>
                        <div className='desc'>
                        {movie?.desc}
                        </div>
                        <div className='genre'>{movie?.genre}</div>
                    </div>
                    </>
                )}
            </div>
        </div>
    </Link>
  )
}

export default ListItem