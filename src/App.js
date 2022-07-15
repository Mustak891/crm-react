import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Logout from './components/Logout/Logout';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from './components/Navbar/Navbar';
import { Navigate } from 'react-router-dom';
import Error from './components/404 error/Error';
import UpdateTable from './components/Dashboard/UpdateTable/UpdateTable';
import AddTable from './components/Dashboard/addtable/Addtable';
import { API_URL } from './components/api/api';

function App() {

  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <div className="app">
      <ResponsiveAppBar auth={auth1} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Protectedroute auth={auth1}> <Login /> </Protectedroute>} />
        <Route path='/register' element={<Protectedroute auth={auth1}> <Register /> </Protectedroute>} />
        <Route path='/dashboard' element={<Protectedroute auth={auth}> <Dashboard /> </Protectedroute>} />
        <Route path='/logout' element={<Protectedroute auth={auth}> <Logout /> </Protectedroute>} />
        <Route path='/dashboard/:id' element={<Protectedroute auth={auth}> <UpdateTable /> </Protectedroute>} />
        <Route path='/dashboard/addcustomer' element={<Protectedroute auth={auth}> <AddTable /> </Protectedroute>} />
        <Route path='/404-error' element={<Error />} />
        <Route path='*' element={<Navigate to='/404-error' replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Contact />
    </>
  )
}

export default App;
