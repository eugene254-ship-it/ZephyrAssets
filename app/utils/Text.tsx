'use client'
import React, { ReactNode } from 'react';

// Define TypeScript interface for Typography props
interface TypographyProps {
  title: string;
  className?: string;
  children: ReactNode;
}

// Reusable component with TypeScript props
const Typography: React.FC<TypographyProps> = ({ title, className = '', children }) => {
  return (
    <div className={`p-4 ${className} text-black rounded-lg justify-end shadow-md hover:shadow-xl ring-1 ring-red-500 ring-opacity-30 transition-all duration-300 ease-in-out`}>
      <h2 className="text-2xl font-bold ">{title}</h2>
      <p className="mt-2">{children}</p>
     
    </div>
  );
};

// Usage components remain the same, no props are passed to them so no TypeScript changes are needed
const PurposePart1: React.FC = () => (
  <div>
    <Typography title="Bridging the Gap Between Physical and Digital">
    Real-world token assets represent a revolutionary shift in how we interact with tangible goods and commodities. By utilizing blockchain technology,
     these tokenized assets forge an unbreakable connection   between a physical item and its digital representation.
     
  </Typography>
  <Typography title="Immutability and Transparency">
  One of the key benefits is the immutable nature of blockchain records.
  Once a real-world asset is tokenized, its history, ownership, and important characteristics are recorded in a transparent and 
  unalterable manner. This eliminates the risks associated with counterfeiting and fraud.
  </Typography>
  <Typography title="Democratizing Investment">
    Tokenization can divide a high-value physical asset into smaller, 
    more affordable shares. This process democratizes investment and
      ownership, allowing a broader range of individuals to participate in markets that may have 
    been inaccessible due to high entry costs, such as real estate or fine art.
  </Typography>
  </div>
);

const Why1: React.FC = () => (
  <div>
    <ul>
      <li>
        <Typography className="text-left text-black" title="Unlock Global Wealth with a Click">
        Imagine buying a beachfront villa in Bali or a chic Parisian apartment—no middlemen, no paperwork,
        just seamless international transactions. With tokenized real estate, borders vanish!
        </Typography>
      </li>
      <li>
        <Typography className="text-left" title="Invest Like a Millionaire, Spend Like a Student">
        Ever wanted a slice of the luxury real estate pie but lacked the big bucks? 
        Tokenization lets you own premium properties for the price of your morning coffee!
        </Typography>
      </li>
      <li>
        <Typography className="text-left" title="Zero Fraud, Total Freedom">
          Say goodbye to dodgy dealers and counterfeit scams. Our blockchain tech makes ownership tamper-proof and transparent. 
          Your property, your rules!
        </Typography>
      </li>
      <li>
      <Typography className="text-left" title="Instant Buys, Immediate Profits">
        Tired of slow sales and bulky contracts? Tokenized assets can be sold in seconds, turning your property into instant cash. 
        Flip it fast, rake in the profit!
      </Typography>
      </li>
    </ul>
  </div>
);

const Question: React.FC = () => (
  <div>
    <div className="black-container text-white">
          <h1 className="text-3xl font-semibold mb-4">Most Common Questions</h1>
          <div className="rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">1. How does tokenization of real-world assets work?</h2>
            <p className="red mb-4">
              Tokenization involves converting ownership rights of real-world assets into digital tokens on a blockchain. Each token represents a share of the asset.
            </p>

            <h2 className="text-xl font-semibold mb-2">2. What are the benefits of tokenizing assets as <span>NFTs?</span></h2>
            <p className="red mb-4">
              Tokenization provides liquidity, fractional ownership, and transparency. NFTs enhance uniqueness and provenance tracking.
            </p>
            <h2 className="text-xl font-semibold mb-2">3. How do I buy tokens representing real-world assets?</h2>
            <p className="red mb-4">
              Simply browse through our platform's asset listings, select the asset you're interested in, and purchase the corresponding tokens using your preferred cryptocurrency. The process is instant and seamless.
            </p>

            <h2 className="text-xl font-semibold mb-2">4. What types of assets can be tokenized?</h2>
            <p className="red mb-4">
              Our platform supports a wide range of assets including real estate, cars, art, diamonds, and more. Each asset is carefully vetted for authenticity and legal compliance.
            </p>

            <h2 className="text-xl font-semibold mb-2">5. Is my investment secure?</h2>
            <p className="red mb-4">
              Security is our top priority. All tokenized assets are backed by legal contracts and undergo regular audits. The blockchain technology ensures transparency and immutability.
            </p>

            <h2 className="text-xl font-semibold mb-2">6. How do I sell my tokens?</h2>
            <p className="red mb-4">
              You can list your tokens on our platform's marketplace for sale. Alternatively, you can trade them on secondary markets that support our tokens.
            </p>

            <h2 className="text-xl font-semibold mb-2">7. What are the transaction fees?</h2>
            <p className="red mb-4">
              Our platform charges a minimal fee for token purchases and sales. The fee structure is transparent and can be viewed on our website.
            </p>

            <h2 className="text-xl font-semibold mb-2">8. Can I tokenize my own asset?</h2>
            <p className="red mb-4">
              Yes, you can! Our platform offers a user-friendly interface for asset owners to tokenize and list their assets for investment.
            </p>

            <h2 className="text-xl font-semibold mb-2">9. How does the platform ensure the authenticity of assets?</h2>
            <p className="red mb-4">
              Each asset undergoes a rigorous vetting process, including legal checks and physical inspections, to ensure its authenticity and ownership.
            </p>

            <h2 className="text-xl font-semibold mb-2">10. What happens if the asset gets damaged or lost?</h2>
            <p className="red mb-4">
              Our assets are insured to protect against unforeseen circumstances. Token holders will be compensated in such events as per the terms of the insurance policy.
            </p>
          </div>
        </div>
  </div>
);

export { PurposePart1, Why1, Question };




