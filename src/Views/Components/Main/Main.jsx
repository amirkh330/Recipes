import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import Foods from "./Foods";


const Main = () => {
    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        const request = async () => {
            const app_Key = "26bdfef52e1642d1db5646aeb23c9251";
            const app_Id = "08a733f4";
            const request = await axios.get(
                `https://api.edamam.com/search?q=${query}&app_id=${app_Id}&app_key=${app_Key}`
            );
            const data = request.data.hits;
            setRecipe(data);
        };
        request();
    }, [query]);

    // const request = async () => {
    //     const app_Key = "26bdfef52e1642d1db5646aeb23c9251";
    //     const app_Id = "08a733f4";
    //     const request = await axios.get(
    //         `https://api.edamam.com/search?q=${query}&app_id=${app_Id}&app_key=${app_Key}`
    //     );
    //     const data = request.data.hits;
    //     setRecipe(data);
    // };

    const handleSubmite = (e) => {
        e.preventDefault();
        setQuery(search);
    };
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <SearchInput
                onSubmit={handleSubmite}
                onChange={handleChange}
                value={search}
            />

            

            <Foods recipes={recipes} />
        </>
    );
};

export default Main;
