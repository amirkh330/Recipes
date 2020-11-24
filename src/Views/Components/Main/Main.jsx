import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Foods from "./Foods";
import { Spinner } from "react-bootstrap";

const Main = () => {
    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const request = async () => {
            setLoading(true);
            try {
                const app_Key = "26bdfef52e1642d1db5646aeb23c9251";
                const app_Id = "08a733f4";
                const request = await axios.get(
                    `https://api.edamam.com/search?q=${query}&app_id=${app_Id}&app_key=${app_Key}`
                );
                const data = request.data.hits;
                setRecipe(data);
                setLoading(false);
            } catch (e) {
                setLoading(true);
            }
        };
        request();
    }, [query]);

    const handleSubmite = (e) => {
        e.preventDefault();
        setQuery(search);
    };
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    console.log(loading);
    return (
        <>
            <div className="main">
                <SearchInput
                    onSubmit={handleSubmite}
                    onChange={handleChange}
                    value={search}
                />
                {loading === true ? (
                    <div className="spin">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                ) : null}
                <Foods recipes={recipes} />
            </div>
        </>
    );
};

export default Main;
