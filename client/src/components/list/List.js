import React, { useState, useRef } from 'react'
import './list.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = ({ list }) => {
  const [sliderNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const toggleSlide = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x;

    if(direction === 'left' && sliderNumber > 0){
        setSlideNumber(sliderNumber - 1)
        listRef.current.style.transform = `translateX(${260 + distance}px)`
    } 

    if(direction === 'right' && sliderNumber <= 6){
        setSlideNumber(sliderNumber + 1)
        listRef.current.style.transform = `translateX(${-260 + distance}px)`
    } 
  }
    
  return (
    <div className='list'>
       <div>
           <span className='listTitle'>{list.title}</span>
           <div className='wrapper'>
                <ArrowBackIosOutlinedIcon 
                className='sliderArrow left' 
                onClick={() => toggleSlide('left')}
                style={{display: !isMoved && 'none'}}
                />
                <div className='container' ref={listRef}>
                    { list?.content.map((movie,index) => (
                      <ListItem index={index} item={movie} key={index}/>
                    ))}
                 </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => toggleSlide('right')}/>
           </div>
       </div>
    </div>
  )
}

export default List