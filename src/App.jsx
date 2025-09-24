import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import TVShows from './pages/Shows/Shows'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Play from './pages/Player/Play'
import Movies from './pages/Movies/Movies'
import NewAndPopular from './pages/New & Popular/Popular'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';  //react-toastify
import MyList from './pages/MyList/MyList';
import LanguagePage from './pages/LanguagePage/LanguagePage';
import SearchPage from "./pages/SearchPage/SearchPage";
import GenrePage from './pages/GenrePage/GenrePage'
import AudioDescription from './pages/Footer-Content/AudioDescription/AudioDescription'
import GiftCards from './pages/Footer-Content/GiftCards/GiftCards'
import MediaCentre from './pages/Footer-Content/MediaCentre/MediaCentre'
import InvestorRelations from './pages/Footer-Content/InvestorRelations/InvestorRelations'
import Jobs from './pages/Footer-Content/Jobs/Jobs'
import Terms from './pages/Footer-Content/TermsOfUse/TermsOfUse'
import Privacy from './pages/Footer-Content/Privacy/Privacy'
import Legal from './pages/Footer-Content/LegalNotices/LegalNotices'
import Cookies from './pages/Footer-Content/CookiePreferences/Cookie'
import Corporate from './pages/Footer-Content/CorporateInformation/Corporate'
import Contact from './pages/Footer-Content/ContactUs/Contact'
import Help from './pages/Footer-Content/HelpCentre/HelpCentre'


const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:mediaType/:id' element={<Player />}/>
        <Route path='/play' element={<Play />}/>
        <Route path='/tvshows' element={<TVShows />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/new' element={<NewAndPopular />} />
        <Route path='/mylist' element={<MyList />} />
        <Route path='/languages/:lang' element={<LanguagePage />} />
        <Route path='/search/:query' element={<SearchPage />} />
        <Route path='/genre/:genreId' element={<GenrePage />} />
        <Route path='/audio-description' element={<AudioDescription />} />
        <Route path='/help-centre' element={<Help />} />
        <Route path='/gift-cards' element={<GiftCards />} />
        <Route path='/media-centre' element={<MediaCentre />} />
        <Route path='/investor-relations' element={<InvestorRelations />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/corporate-info' element={<Corporate />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      
    </div>
  )
}

export default App