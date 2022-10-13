import { useState, useEffect } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Featured from '../../components/featured/Featured'
import './home.scss'
import List from '../../components/list/List'
import axios from 'axios'

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(`lists${type ? '?type=' + type : ""}${genre ? '&genre=' + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmMwMzRhNDE5Zjg4YTcwZTlkZmNmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTMwNzkzMywiZXhwIjoxNjY1NzM5OTMzfQ.Umz1leX-pCAz_--y4p3qrNPtxB1gyk48Jm0KNPJSFsE"
          }
        })
  
        setLists(response.data)
      } catch(err) {
        alert(err)
      }
    }
    getRandomLists();
  },[type,genre])


  return (
    <div className='home'>
       <NavBar/>
       <Featured type="Series"/>
       { lists.map((list) => (
          <List list={list} key={list._id}/>
       ))}
    </div>
  )
}

export default Home