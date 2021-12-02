import './App.css';
import { Route, Routes } from 'react-router-dom';
import store from './redux/store/store';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EditProfile from './pages/EditProfile';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="/checkout" element={<Cart />} />
      </Routes>
    </Provider>
  );
};

export default App;
