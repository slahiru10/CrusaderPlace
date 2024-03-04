/*import React from 'react'

const UserListing = () => {
    return (
        <div>UserListing</div>
    );

};
*/

// assginment: install prettier on vs code, so it auto format  the code when saving. 
//export default UserListing;
/*
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Image,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";

async function getListingData() {
    try {
        const listings = await Listings.find();
        return listings as Listing[]; // Cast the result to Listing[] for type safety
    } catch (error) {
        console.error(error);
        // Handle errors gracefully, e.g., display an error message to the user
        return []; // Return an empty array in case of error
    }
}
// Replace with your actual data fetching logic using Mongoose
const UserListing = [
  // ... your listing data here
];

interface Listing {
  // Define the properties of your listing data here
  title: string;
  price: number;
  location: string;
  imageUrl?: string; // Optional image URL property
}

const Listings: React.FC = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Listings For You
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
        {UserListing.map((listing: Listing) => (
          <Box key={listing.title} bg={useColorModeValue("white", "gray.800")} p={4} borderRadius="lg">
            {listing.imageUrl ? (
              <Image src={listing.imageUrl} alt={listing.title} mb={2} />
            ) : (
              <Skeleton height="200px" />
            )}
            <Heading as="h3" size="md" mb={2}>
              {listing.title}
            </Heading>
            <Text isTruncated mb={2}>
              ${listing.price}
            </Text>
            <Text isTruncated>{listing.location}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Listings;
*/

import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Stack, Text, Grid, GridItem  } from '@chakra-ui/react';
import  fetchListings  from '../models/Listings';
import dummyListings from '../models/dummyListings'; // Import dummyListings
import listingImage from '../pages/listingImage.png';
import Navbar from './Navbar';


interface Listing {
  title: string;
  price: number;
  category: string;
  state: string;
  payment: string[];
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]); // Specify Listing type
/*
  useEffect(() => {
    async function fetchData() {
      const fetchedListings = await fetchListings();
      setListings(fetchedListings);
    }
    fetchData();
  }, []);
  */

  useEffect(() => {
    setListings(dummyListings); // Use dummyListings directly
  }, []);

  return (
    <div>
      <Navbar />
      <Box p={4} mt= {16}>
        <Heading as="h2" size="lg" mb={6}>Listings For You</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}> {/* Define grid layout */}
          {listings.map((listing, index) => (
            <GridItem key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={listingImage} alt="Listing Image" boxSize="200px" /> {/* Use the image */}
              <Box p="6">
                <Stack spacing={2}>
                  <Text fontWeight="bold">{listing.title}</Text>
                  <Text>{`$${listing.price}`}</Text> {/* Appending dollar sign */}
                  <Text>{listing.category}</Text>
                  <Text>{listing.state}</Text>
                  <Text>{listing.payment.join(', ')}</Text>
                </Stack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Listings;