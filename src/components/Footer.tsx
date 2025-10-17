import React from "react";

const Footer: React.FC = () => (
  <footer className="text-center py-4 border-t dark:border-gray-700 mt-6">
    © {new Date().getFullYear()} PLP MERN | All rights reserved.
  </footer>
);

export default Footer;
