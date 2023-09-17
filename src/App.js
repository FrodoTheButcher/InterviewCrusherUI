import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import {ContextProvider} from './Context/ContextProvider';
import {CustomAuthProvider } from './Context/LoginContext';
import IntroductionPage from './pages/MainPage/IntroductionPage';
import Header from './components/Navbar';
import LoginPage from './pages/LoginSigninPage/LoginPage';
import RoadMapPage from './pages/RoadMapPage/RoadMapPage';
import SignUp from './pages/SignUpPage/SignUp'
import Course from './pages/VideoRoadMapPage/Course';

function App() {
  return (
    <CustomAuthProvider>
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={IntroductionPage} src />
          <Route path='/RoadMapPage' Component={RoadMapPage} src />
          <Route path='/login' Component={LoginPage} src />
          <Route path='/login/signUp/' Component={SignUp} src />
            <Route path='/:roadmapName/:roadmapId/:chapterId/:type?/:contentId?' Component={Course}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
    </CustomAuthProvider>
   
  );
}

export default App;
