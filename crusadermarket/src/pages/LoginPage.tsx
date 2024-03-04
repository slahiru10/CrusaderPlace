import React, { useState } from 'react';
import { Box, Button, Input, Heading, Checkbox, Link, Divider, Alert, AlertIcon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState<string | null>(null); // State to manage login error

    const handleLogin = async () => {
        try {
            // Make a POST request to your backend server to handle login
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            // Handle successful login
            console.log('Logged in successfully:', response.data);
            window.location.href = '/Home';
        } catch (error) {
            // Handle login error
            console.error('Error logging in:', error);
            setError('Invalid email or password.'); // Set error message
        }
    };

    return (
        <Box
            maxW="400px"
            mx="auto"
            mt="20vh"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
        >
            <Heading mb="4" textColor="#4194F2">Crusader Market</Heading>
            <Heading mb="4" fontSize="larger">Login</Heading>
            {error && (
                <Alert status="error" mb="4">
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            <Input
                mb="4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                mb="4"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Checkbox mb="4" isChecked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
                Remember Me
            </Checkbox>
            <div>  </div>
            <Button mb="4" onClick={handleLogin}>Login</Button>
            <Divider mb="4" borderColor="gray.400"/>
            <Link as={RouterLink} to="/signup" color="blue.500">
                Create Account
            </Link>
        </Box>
    );
};

export default LoginPage;
