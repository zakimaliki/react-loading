import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import "./App.css";
import axios from 'axios';

const App = () => {
  const [lyricsItem, setLyricsItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const lyricsFunction = async () => {
    try {
      const data = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          console.log(res.data);
          setLyricsItem(res.data);
        })
        setLoading(true);
    } catch (e) {
      console.log(e)
    }finally{
      setLoading(true);
    }
  }

  useEffect(() => {
    lyricsFunction()
  }, [])
  return (
    <div className="App">
    <ul>
    {}
    </ul>


    {loading 
    ? 
    lyricsItem.map((item)=>(
      <li>{item.name}</li>
    )) 
    : <Spinner animation="border" />
    }
    </div>
    )
}

export default App;