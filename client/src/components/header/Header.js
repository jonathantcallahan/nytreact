import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

const Header = () => (
    <div>
        <h1>New York Times Article Scrubber</h1>
        <h3>Search for and archive articles!</h3>
        <Link to='/favorites'>
            <Button variant='raised' color='primary'>favorites</Button>
        </Link>
        
        <Link to='/'>
            <Button variant='raised' color='default'>Home</Button>
        </Link>
    </div>
        
)

export default Header

