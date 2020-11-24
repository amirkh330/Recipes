import React from "react";

const SearchInput = ({ onSubmit, onChange, value }) => {
    return (
        <>
            <div className="search_form ">
                <h2 className="header">Amir Food ;)</h2>
                <div className="inp">

                    <input
                        className="search_bar col-10"
                        value={value}
                        onChange={onChange}
                        type="text"
                    />
                    <button
                        className=" btn btn-warning search_button "
                        type="submit"
                        onClick={onSubmit}
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchInput;
