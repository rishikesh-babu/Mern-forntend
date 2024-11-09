import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout/RootLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Auth, AvoidLogin } from './FeAuth/Auth';
import Notfound from './Pages/Notfound/Notfound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<AvoidLogin />}>
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                    </Route>
                    <Route element={<Auth />}>
                        <Route path='/*' element={<RootLayout />}>
                            <Route index element={<Home />} />
                            <Route path='*' element={<Notfound />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
