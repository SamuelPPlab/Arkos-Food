import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EditProfile from './pages/EditProfile';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/main" element={<MainPage />} />
      <Route exact path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
