import React from "react";

interface HtextProps {
  children: React.ReactNode;
}
const Htext = ({ children }: HtextProps) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
      {typeof children === "string"
        ? children?.toLocaleString().toLocaleUpperCase()
        : children}
    </h1>
  );
};

export default Htext;
