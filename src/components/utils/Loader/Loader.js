import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner">
          <div className="spinner">
            <div className="spinner">
              <div className="spinner">
                <div className="spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
