import React from "react";

var year = new Date().getFullYear();
console.log(year)
function FOOTER(){
    return(
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    )
}export default FOOTER;