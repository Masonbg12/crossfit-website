import React from "react";
import FreeTrialButton from "./FreeTrialButton";

const FreeTrial = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <h4 className="poppins-900-sub" style={{color: "var(--bg-black)"}}>Start Your Free Trial</h4>
      <p style={{color: "var(--bg-black)"}}>
        Join us today and get a free trial to experience our amazing CrossFit community.
      </p>
      <FreeTrialButton />
    </div>
  );
};

export default FreeTrial;