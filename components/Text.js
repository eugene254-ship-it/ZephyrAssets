'use client'
import React from 'react'


// Reusable component
const PurposePart = ({ title, className, children }) => {
  return (
    <div className={`p-2 ${className}`}>
      <h2 className="purpose-win-title">{title}</h2>
      <p className="p-2">{children}</p>
    </div>
  );
};

// Usage
const PurposePart1 = () => (
  <PurposePart title="Bridging the Gap Between Physical and Digital">
    Real-world token assets represent a revolutionary shift in how we interact with tangible goods and commodities. By utilizing blockchain technology,
     these tokenized assets forge an unbreakable connection   between a physical item and its digital representation.
  </PurposePart>
);

const PurposePart2 = () => (
  <PurposePart title="Immutability and Transparency">
    One of the key benefits is the immutable nature of blockchain records.
    Once a real-world asset is tokenized, its history, ownership, and important characteristics are recorded in a transparent and 
    unalterable manner. This eliminates the risks associated with counterfeiting and fraud.
  </PurposePart>
);

const PurposePart3 = () => (
  <PurposePart title="Democratizing Investment" className="ring-fuchsia-600 bg-cyan-400 text-white">
    Tokenization can divide a high-value physical asset into smaller, 
    more affordable shares. This process democratizes investment and
      ownership, allowing a broader range of individuals to participate in markets that may have 
    been inaccessible due to high entry costs, such as real estate or fine art.
  </PurposePart>
);

const Why1 = () => (
  <PurposePart title="Unlock Global Wealth with a Click">
    Imagine buying a beachfront villa in Bali or a chic Parisian apartment—no middlemen, no paperwork,
     just seamless international transactions. With tokenized real estate, borders vanish!
  </PurposePart>
)

const Why2 = () => (
  <PurposePart title="Invest Like a Millionaire, Spend Like a Student">
    Ever wanted a slice of the luxury real estate pie but lacked the big bucks? 
    Tokenization lets you own premium properties for the price of your morning coffee!
  </PurposePart>
)

const Why3 = () => (
  <PurposePart title="Zero Fraud, Total Freedom">
    Say goodbye to dodgy dealers and counterfeit scams. Our blockchain tech makes ownership tamper-proof and transparent. 
    Your property, your rules!
  </PurposePart>
)

const Why4 = () => (
  <PurposePart title="Instant Buys, Immediate Profits">
    Tired of slow sales and bulky contracts? Tokenized assets can be sold in seconds, turning your property into instant cash. 
    Flip it fast, rake in the profit!
  </PurposePart>
)





export {PurposePart1, PurposePart2, PurposePart3, Why1, Why2, Why3, Why4}; 
