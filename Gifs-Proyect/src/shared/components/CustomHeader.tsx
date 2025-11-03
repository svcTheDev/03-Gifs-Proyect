import React from "react";

interface Prop {
  title: string;
  description?: string;
}

const CustomHeader = ({ title, description }: Prop) => {
  return (
    <div>
      <div className="content-center">
         <h1>{title}</h1>
        <p>{description && "Descubre y comparte el gif perfectos"}</p>
      </div>
    </div>
  );
};

export default CustomHeader;
