import React, { useState } from "react";




const SearchWiki = () => {
    const [term, setTerm] = useState('')


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