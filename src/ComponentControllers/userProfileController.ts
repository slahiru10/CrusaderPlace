// /src/ComponentController/UserProfileController.ts

import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

// Placeholder user data
const fakeUserData = {
  profileName: 'John Doe',
  email: 'john.doe@example.com',
  address: '1025 fox ridge rd',
  phoneNumber: '+1234567890',
};

export const useUserProfile = () => {
  const [userData, setUserData] = useState(fakeUserData);
  const [editMode, setEditMode] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = () => {
    // Here you would typically update the data back to your backend
    console.log('Updated User Data:', userData);
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been successfully updated.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setEditMode(false);
  };

  return {
    userData,
    editMode,
    handleChange,
    handleEditToggle,
    handleSaveChanges,
  };
};
