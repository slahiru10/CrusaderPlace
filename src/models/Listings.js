/*const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    Category: {type: String, reuqired: true},
    state: { type: String, required: true },
    payment: { type: [String], default: [] },
    imageUrl: { type: String, default: '' }, // Optional image URL property
});*/
/*
import axios from 'axios';

async function fetchListings() {
  try {
    const response = await axios.get('/api/listings'); // Assuming your backend API endpoint for fetching listings is /api/listings
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}
*/

import fs from 'fs';
import path from 'path';

const dummyListingsPath = path.resolve(__dirname, '../DummyData/dummyListings.json');

function fetchListings() {
  try {
    const data = fs.readFileSync(dummyListingsPath, 'utf8');
    const listings = JSON.parse(data);
    return listings;
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}

export default fetchListings;