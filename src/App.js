import React, {useState, useEffect} from 'react';
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import HeroPluniverse from "./components/HeroPluniverse";
import NavBar from './components/NavBar'
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="App">
      {
          loading ?
          <div className = "Loader">
            <DotLoader color={'#36D7B7'} loading={loading} size={60} />
          </div>
        :
        <div className="container">
        <NavBar/>
        <AudioPlayer/>
        <HeroPluniverse />
        <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
