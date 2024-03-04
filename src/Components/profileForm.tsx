// /src/components/UserProfile.tsx

import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useUserProfile } from '../ComponentControllers/userProfileController'

const UserProfile = () => {
  const {
    userData,
    editMode,
    handleChange,
    handleEditToggle,
    handleSaveChanges,
  } = useUserProfile();

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Profile Info</Text>
      <FormControl isRequired mb={4}>
        <FormLabel>Profile Name</FormLabel>
        <Input
          name="profileName"
          value={userData.profileName}
          onChange={handleChange}
          isReadOnly={!editMode}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
          isReadOnly={!editMode}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          name="address" // Note: Corrected the field name to match the state's property
          value={userData.address}
          onChange={handleChange}
          isReadOnly={!editMode}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          name="phoneNumber"
          type="tel"
          value={userData.phoneNumber}
          onChange={handleChange}
          isReadOnly={!editMode}
        />
      </FormControl>

      {editMode ? (
        <Button colorScheme="teal" onClick={handleSaveChanges}>Save Changes</Button>
      ) : (
        <Button colorScheme="teal" onClick={handleEditToggle}>Edit Profile</Button>
      )}
    </Box>
  );
};

export default UserProfile;
