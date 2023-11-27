import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4">
    <div className="mb-8">
      <div className="flex items-center max-w-md mx-auto bg-white rounded-full">
        <input
          type="search"
          placeholder="Search NFTs"
          className="w-full px-4 py-2 rounded-full focus:outline-none"
        />
        <input className="w-6 h-6 mr-4"/>
      </div>
    </div>

    <div className="mb-8">
      {/* Dropdowns for filtering */}
      <div className="flex justify-between">
        <select className="p-2 border rounded">
          <option value="">All Categories</option>
          {/* ... other options ... */}
        </select>
        <select className="p-2 border rounded">
          <option value="">Sort By</option>
          {/* ... other options ... */}
        </select>
        {/* ... more dropdowns as needed ... */}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Map through your NFT data and render items */}
      {/* This is a placeholder for where your NFT items would be rendered */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* NFT Item */}
      </div>
      {/* ... other NFT items ... */}
    </div>
  </div>

  )
}

export default page