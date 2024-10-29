// src/components/Spacer.js
import React from "react";

const Spacer = ({ type = "/////" }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "max-content",
        height: "auto",
        display: "flex",
        alignItems: "flex-end",
        padding: "0rem",
      }}
    >
      <pre style={{ fontFamily: "monospace", whiteSpace: "pre", margin: "0" }}>
        {type}
      </pre>
    </div>
  );
};

export default Spacer;
