import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const AddEmailPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can implement logic to send the new email to the server
    console.log('New email added:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} placeholder="example@example.com" />
      </FormControl>

      <Button mt={6} colorScheme="blue" onClick={handleSubmit}>
        Add Email
      </Button>
    </Box>
  );
};

export default AddEmailPage;
