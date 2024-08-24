import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {ContextProvider} from './Context/ContextProvider';
import {CustomAuthProvider } from './Context/LoginContext';
import IntroductionPage from './pages/MainPage/IntroductionPage';
import Header from './components/Navbar';
import LoginPage from './pages/LoginSigninPage/LoginPage';
import RoadMapPage from './pages/RoadMapPage/RoadMapPage';
import SignUp from './pages/SignUpPage/SignUp'
import Course from './pages/VideoRoadMapPage/Course';
import Interpreter from './pages/Interpreter/Interpreter';
import WrittenCourse from './pages/WrittenCoursePage/WrittenCourse';
import ContentPage from './pages/WrittenCoursePage/Components/ContentPage';
import DocumentationPage from './pages/DocumentationPage/DocumentationPage';
import NotImplementedFeature from './pages/NotImplementedFeature/NotImplementedFeature';
import Redirect from './pages/RedirectPage/Redirect';
import Index from './pages/UserProfile';
import CreateTemplate from './pages/AdminPage/CreateTemplate';

function App() {
  return (
    <CustomAuthProvider>
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/profile_data/' Component={Index} />
          <Route path='/redirect/:chapterid/:templateid/:exercise_type/:algo_id' Component={Redirect} />
          <Route path='/notFound' Component={NotImplementedFeature} src />
          <Route path='/documentation/:pk' Component={DocumentationPage} src />
          <Route path='/' Component={IntroductionPage} src />
          <Route path='/admin/template' Component={CreateTemplate} />
          <Route path='/RoadMapPage' Component={RoadMapPage} src />
          <Route path='/login' Component={LoginPage} src />
          <Route path='/login/signUp/:type?' Component={SignUp} src />
          <Route path='/:roadmapName/:roadmapId/:chapterId/:type?/:contentId?' Component={Course}/>
          <Route path='/interpreter' Component={Interpreter} />
          <Route path="/writtenCourse/:roadmapName/:roadmap/:chapter/" Component={WrittenCourse} />
          <Route path="/writtenCourseLecture/:roadmap/:chapter/:coursePk/:page?" Component={ContentPage} />
        </Routes>
      </Router>
    </ContextProvider>
    </CustomAuthProvider>
   
  );
}

export default App;
