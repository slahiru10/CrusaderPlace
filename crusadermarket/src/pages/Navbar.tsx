import React from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={8}
      py={4}
      bg="blue.500"
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      width="100%"
    >
      {/* Left side - Logo or Brand */}
      <Box>Logo</Box>

      {/* Middle - Search Bar */}
      <Input
        placeholder="Search..."
        variant="filled"
        size="md"
        bg="white"
        _hover={{ bg: 'white' }}
        _focus={{ bg: 'white' }}
      />

      {/* Right side - Profile Button */}
      <Button variant="outline" colorScheme="whiteAlpha">Profile</Button>
    </Flex>
  );
};

export default Navbar;
