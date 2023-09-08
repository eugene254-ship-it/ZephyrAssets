'use client'
import React from 'react'

const PurposePart1 = () => {
  return (
    <div>
        <h2 className="purpose-win">Bridging the Gap Between Physical and Digital</h2>
            <p className="p-2">Real-world token assets represent a revolutionary shift in how we interact with tangible goods and commodities. By utilizing blockchain technology, these tokenized assets forge an unbreakable connection 
                between a physical item and its digital representation.</p>
    </div>)};


const PurposePart2 = () => {
  return (
    <div>
        <h2 className="purpose-win">Immutability and Transparency</h2>
        <p className="p-2">One of the key benefits is the immutable nature of blockchain records.
             Once a real-world asset is tokenized, its history, ownership, and important characteristics are recorded in a transparent and 
            unalterable manner. This eliminates the risks associated with counterfeiting and fraud.</p>
    </div>
  )
}



const PurposePart3 = () => {
  return (
    <div className="p-2">
        <h2 className="purpose-win ring-fuchsia-600 bg-cyan-400 text-white">Democratizing Investment</h2>
        <p className="p-2">Tokenization can divide a high-value physical asset into smaller, 
            more affordable shares. This process democratizes investment and
             ownership, allowing a broader range of individuals to participate in markets that may have 
            been inaccessible due to high entry costs, such as real estate or fine art.</p>
    </div>
  )
}

export {PurposePart1, PurposePart2, PurposePart3}; 
