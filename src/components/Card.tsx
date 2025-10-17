import React from "react";

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
    <h3 className="font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

export default Card;
