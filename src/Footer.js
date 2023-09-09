import React from 'react';

const Footer = () => {
  return (
    <footer className="sticky bg-dark text-light text-center m-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} ShopFi</p>
        <p>NTR Circle, Vijayawada, India</p>
        <p>Email: chaitu@wipro.com</p>
      </div>
    </footer>
  );
};

export default Footer;
