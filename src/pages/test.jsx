import React from "react";

const TestPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(
            45deg,
            hsl(34deg 100% 50%) 0%,
            hsl(38deg 100% 50%) 19%,
            hsl(41deg 100% 50%) 28%,
            hsl(45deg 100% 50%) 37%,
            hsl(49deg 100% 50%) 47%,
            hsl(52deg 100% 50%) 57%,
            hsl(56deg 100% 50%) 67%,
            hsl(60deg 100% 50%) 78%,
            hsl(63deg 100% 50%) 89%,
            hsl(67deg 100% 50%) 100%
          )`,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          height: "100vh",
        }}
      >
        <h2>First Container</h2>
      </div>
      <div style={{ height: "100vh", backgroundColor: "blue" }}>
        <h2>Second Container</h2>
      </div>
      <div style={{ height: "100vh" }}>
        <h2>Third Container</h2>
      </div>
    </div>
  );
};

export default TestPage;
