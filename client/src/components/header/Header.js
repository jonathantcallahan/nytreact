import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>New York Times Article Scrubber</h1>
        <h3>Search for and archive articles!</h3>
        <Link to='/favorites'>favorites</Link>
        <Link to='/'>Home</Link>
    </div>
        
)

export default Header