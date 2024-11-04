import React from 'react';

const Button = ({ style, text, onClick }) => {
  const buttonStyles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    success: "text-white bg-green-400 hover:bg-green-500",
    danger: "text-white bg-red-400 hover:bg-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${buttonStyles[style] || buttonStyles.primary}`}
    >
      {text}
    </button>
  );
};

export default Button;