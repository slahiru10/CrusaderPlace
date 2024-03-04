const Listing = require('../models/Listing');

// Example function to fetch listings from the database
async function getAllListings() {
  try {
    const listings = await Listing.find(); // Assuming you're using Mongoose for interacting with MongoDB
    return listings;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}

module.exports = {
  getAllListings,
};
