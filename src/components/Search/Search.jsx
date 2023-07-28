import React, { useState } from "react";
import SearchData from "./SearchData";

const SearchSection = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <section className="search-section">
        <div className="custom-container">
          <form className="auth-form search-head">
            <div className="form-group">
              <div className="form-input">
                <input
                  type="text"
                  className="form-control search"
                  id="inputusername"
                  placeholder="Restaurant, item & more"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{ width: "400px",marginLeft :"50px" }}
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <SearchData />
      </section>
    </>
  );
};

export default SearchSection;
