import React from 'react'

function Navbar({course, image})
{
    return(
        <div>
            <h2>{course}</h2>
            <img src={image} width="250"/>
        </div>
    )
}

export default Navbar