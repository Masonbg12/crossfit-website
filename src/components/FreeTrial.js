import React from 'react';

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
            <h4 className="poppins-900-sub">Start Your Free Trial</h4>
            <p>
                Join us today and get a free trial to experience our amazing CrossFit programs. No commitments, just results!
            </p>
            <button
                style={{
                    backgroundColor: "#007bff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                onClick={() => alert('Free Trial Started!')}
            >
                Start Now
            </button>
        </div>
    );
};

export default FreeTrial;