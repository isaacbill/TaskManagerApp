import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, onClick }) => {
  const base = "px-4 py-2 rounded font-medium transition";
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} bg-gray-300 text-gray-800 hover:bg-gray-400`,
    danger: `${base} bg-red-600 text-white hover:bg-red-700`,
  };
  return <button className={styles[variant]} onClick={onClick}>{children}</button>;
};

export default Button;
