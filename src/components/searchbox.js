import React from "react";

const Searchbox = ({searchfield,searchchange}) =>{
    return(
        <div>
            <input
            type = 'search'
            placeholder = 'Contests'
            onChange = {searchchange}
            />
        </div>
    );
}

export default Searchbox;