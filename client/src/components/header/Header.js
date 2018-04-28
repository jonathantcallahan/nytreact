import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import './Header.css'

const Header = () => (
    <div>
        <div className='title-cont'>
            <h1>New York Times Article Scrubber</h1>
            <h3>Search for and archive articles!</h3>
        </div>
        <div className='btn-container'>
            <Link to='/favorites' className='btn-link'>
                <Button variant='raised' color='primary'>favorites</Button>
            </Link>
            
            <Link to='/' className='btn-link'>
                <Button variant='raised' color='default'>Home</Button>
            </Link>
        </div>
        
    </div>
        
)

export default Header

