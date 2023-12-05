"use client"
import React, { useState, useEffect } from 'react';
import FadeUp from '../components/fadeEffect';
// import NFTCard from '../components/NFTCard'; // Assume this is a component you'll create for displaying NFTs
// import { fetchNFTs } from '../services/nftService'; // A mock function to fetch NFT data

const ExplorePage = () => {
  const [nfts, setNfts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  // useEffect(() => {
  //   fetchNFTs().then(data => setNfts(data)); // Fetch NFT data on component mount
  // }, []);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   // Implement search logic or API call
  // };

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  //   // Implement filtering logic or API call
  // };

  // const handleSortChange = (e) => {
  //   setSortBy(e.target.value);
  //   // Implement sorting logic or API call
  // };

  return (
    <FadeUp>
      <div className="mx-auto p-4 backdrop-blur-sm">
        <div className="search-bar">
          <div className="flex items-center max-w-md mx-auto bg-white rounded-full">
            <input
              type="search"
              placeholder="Search NFTs"
              className="w-full px-4 py-2 rounded-full focus:outline-none"
              value={searchTerm}
              // onChange={handleSearch}
            />
            <button className="w-6 h-6 mr-4">🔍</button>
          </div>
        </div>

        <div className="filters mb-8">
          <div className="flex justify-between">
            <select className="p-2 border rounded"> 
            {/*onChange={handleCategoryChange}*/}
            <option value="">All Categories</option>
            <option value="">Real Estate</option>
            <option value="">Jewelries</option>
            <option value="">Automobiles</option>
              
              {/* ... other options ... */}
            </select>
            <select className="p-2 border rounded">
            {/*onChange={handleSortChange}*/}
              <option value="">Sort By</option>
              {/* ... other options ... */}
            </select>
            {/* ... more dropdowns as needed ... */}
          </div>
        </div>

        <div className="nft-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* {nfts.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))} */}
        </div>
      </div>
    </FadeUp>
  );
}

export default ExplorePage;
