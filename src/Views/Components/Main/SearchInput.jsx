import React from "react";
import Typed from "react-typed";

const SearchInput = ({ onSubmit, onChange, value }) => {
    return (
        <>
            <form className="search_form" onSubmit={onSubmit}>
                <Typed
                    strings={[
                        "Search for Foods",
                        "Search for Vegetables",
                        "Search for Fruits",
                        "Search ...",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    attr="placeholder"
                    // loop
                >
                    <input
                        className="search_bar"
                        value={value}
                        onChange={onChange}
                        type="text"
                    />
                </Typed>

                <button type="submit" className=" btn btn-warning">
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchInput;
