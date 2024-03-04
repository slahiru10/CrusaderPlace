import React from 'react';
import { ChakraProvider, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PaymentPage from './pages/PaymentPage';
import AddEmailPage from './pages/AddEmailPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/home';
import CreatePost from './pages/createPost'
import Profile from './pages/profile'
//import UserListing from './pages/Listings';
import Listings from './pages/Listings';

const App: React.FC = () => {
    return (
        <ChakraProvider>
            <Router>
              <Routes>
                <Route path="/" Component={LoginPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/signup" Component={SignUpPage} />
                <Route path="/payment" Component={PaymentPage} />
                <Route path="/addemail" Component={AddEmailPage} />
                <Route path="/deleteaccount" Component={DeleteAccountPage} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Home" Component={Listings} />
              </Routes>
            </Router>
        </ChakraProvider>
    );
};



export default App;
