import React, { useState } from "react";

const HigherOrderComponent = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [fontSize, setFontSize] = useState(10);
    const increaseFont = () => {
      setFontSize((size) => size + props.number);
    };

    return (
      <WrappedComponent
        fontSize={fontSize}
        increaseFont={increaseFont}
        {...props}
      />
    );
  };
  return NewComponent;
};

export default HigherOrderComponent;
