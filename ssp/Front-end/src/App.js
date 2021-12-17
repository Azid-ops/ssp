//Importing App.css
import './App.css';

// Importing Home's Component
import HomeC from './Home/Components/HomeC';

//Importing BrowserRouter,Routes and Route
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import MaterialProviderCS from './Login/materialProvider/Components/materialProviderCS';
import MaterialProviderC from './Login/materialProvider/Components/materialProviderC';
import UserServiceProvider from './User/ServiceProvider/Pages/ServiceProvider';
import UserServiceSeeker from './User/ServiceSeeker/Pages/ServiceSeeker';
import Auth from './Auth/Components/Auth';
import Forgot from './Forgot/Pages/forgotPassword';
import Google from './Google/Login/Pages/google';
import Setting from './User/MaterialProvider/Settings/Components/setting';
import ServiceSeeker from './User/ServiceSeeker/Components/serviceSeeker';

//App Function
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeC />}/>
      </Routes>
      <Routes>
        <Route path="/google" element={<Google />}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<MaterialProviderCS />}/>
      </Routes>
      <Routes>
        <Route path="/signupMaterial" element={<MaterialProviderC />}/>
      </Routes>
      <Routes>
        <Route path="/Auth" element={<Auth />}/>
      </Routes>
      <Routes>
        <Route path="/UserServiceSeeker" element={<ServiceSeeker />}/>
      </Routes>
      <Routes>
        <Route path="/UserServiceProvider" element={<UserServiceProvider />}/>
      </Routes>
      <Routes>
        <Route path="/UserMaterialProvider" element={<Setting />}/>
      </Routes>
      <Routes>
        <Route path="/forgot" element={<Forgot />}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<Setting />}/>
      </Routes>
    </Router>
  );
}

export default App;
