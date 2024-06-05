import React from 'react'

const Footer = () => {
  return (
      <div className="flex justify-between items-center">
          <ul className="flex space-x-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/policy">Policy</a>
              </li>
          </ul>
        </div>
  );
}

export default Footer