import React, { useState, useEffect } from "react";
import axios from 'axios'





const SearchWiki = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search)
        };

        if (term) { search() }

    }, [term])


    return (
        <div className="ui container">
            <div className="field">
                <div className="field">
                    <label>Search in Wikipedia</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => {
                            setTerm(e.target.value);
                            console.log(e.target.value)
                        }}
                    />
                </div>
            </div>

        </div>
    )
}
export default SearchWiki