import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/ContextProvider";
import { CustomAuthProvider } from "./Context/LoginContext";
import IntroductionPage from "./pages/MainPage/IntroductionPage";
import Header from "./components/Navbar";
import LoginPage from "./pages/LoginSigninPage/LoginPage";
import RoadMapPage from "./pages/RoadMapPage/RoadMapPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Course from "./pages/VideoRoadMapPage/Course";
import Interpreter from "./pages/Interpreter/Interpreter";
import WrittenCourse from "./pages/WrittenCoursePage/WrittenCourse";
import ContentPage from "./pages/WrittenCoursePage/Components/ContentPage";
import DocumentationPage from "./pages/DocumentationPage/DocumentationPage";
import NotImplementedFeature from "./pages/NotImplementedFeature/NotImplementedFeature";
import Redirect from "./pages/RedirectPage/Redirect";
import Index from "./pages/UserProfile";
import CreateTemplate from "./pages/AdminPage/CreateTemplate";
import GenerateTemplate from "./pages/AdminPage/GenerateTemplate/GenerateTemplate";
import Teaching from "./pages/Teaching/Teaching";

function App() {
  return (
    <CustomAuthProvider>
      <ContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/admin/teaching" element={<Teaching />} />
            <Route path="/profile_data/" element={<Index />} />
            <Route
              path="/redirect/:chapterid/:templateid/:exercise_type/:algo_id"
              element={<Redirect />}
            />
            <Route path="/notFound" element={<NotImplementedFeature />} />
            <Route path="/documentation/:pk" element={<DocumentationPage />} />
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/admin/template" element={<CreateTemplate />} />
            <Route path="/RoadMapPage" element={<RoadMapPage />} />
            <Route
              path="/admin/GenerateTemplate"
              element={<GenerateTemplate />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/signUp/:type?" element={<SignUp />} />
            <Route
              path="/:roadmapName/:roadmapId/:chapterId/:type?/:contentId?"
              element={<Course />}
            />
            <Route path="/interpreter" element={<Interpreter />} />
            <Route
              path="/writtenCourse/:roadmapName/:roadmap/:chapter/"
              element={<WrittenCourse />}
            />
            <Route
              path="/writtenCourseLecture/:roadmap/:chapter/:coursePk/:page?"
              element={<ContentPage />}
            />
          </Routes>
        </Router>
      </ContextProvider>
    </CustomAuthProvider>
  );
}

export default App;
