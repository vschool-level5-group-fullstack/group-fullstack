import React from 'react'

function Search() {
    return(
        <div>
            <form>
                <label>Today is</label>
                <input
                    type="date"
                    id="start"
                    value="2021-14-04"
                />
                <div className="ingredients">
                    <p>Search By Ingredients</p>
                    <input
                        type="text"
                        placeholder="enter ingredients here"
                    />
                    <p>
                        or
                    </p>
                    <h4>CHOOSE RANDOM</h4>
                </div>
            </form>
        </div>
    )
}

export default Search