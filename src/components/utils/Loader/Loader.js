import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center ">
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
    </div>
  );
}

export default Loader;
