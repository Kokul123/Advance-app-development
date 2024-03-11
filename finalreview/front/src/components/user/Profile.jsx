import React, { useState } from "react";

const UserProfileCard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ width: "20%", position: "relative" }}>
        <div
          className={`card mb-4${isMenuVisible ? " show-dropdown" : ""}`}
          style={{ height: "45vh", position: "relative", zIndex: 2,marginLeft:600,marginTop:150,marginBottom:50  }}
        >
          <div className="card-body text-center">
            <h5 className="my-3">Dhanush Tharan</h5>
            <p className="text-muted mb-1">Front End Developer</p>
            <p className="text-muted mb-4">Austin City, Bangalore North, Bangalore-560047</p>

            <button
              className="btn btn-primary"
              type="button"
              onClick={toggleMenu}
            >
              Actions
            </button>

            {isMenuVisible && (
              <div className="dropdown-menu" style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
                <button type="button" className="btn btn-secondary" onClick={toggleMenu}>
                  Close
                </button>
                {/* Add more dropdown items as needed */}
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfileCard;
