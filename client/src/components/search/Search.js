import React from 'react'
import Button from 'material-ui/Button'
import './search.css'


class Search extends React.Component {

    render(){
        return(
            <div>
                <div className='search-cont'>
                    <label htmlFor='term'>Search Term</label>
                    <input 
                        className='in'
                        id='term'
                        type='text' 
                        name='topic' 
                        value={this.props.state.topic}
                        onChange={this.props.set}/>
                    <br />
                    <label htmlFor='start'>Start Date</label>    
                    <input 
                        className='in'
                        id='start'
                        type='text'
                        name='start'
                        placeholder='YYYYMMDD'
                        value={this.props.state.start}
                        onChange={this.props.set}
                        />
                    <br />    
                    <label htmlFor='end'>End Date</label>
                    <input 
                        className='in'
                        id='end'
                        type='text'
                        name='end'
                        placeholder='YYYYMMDD'
                        value={this.props.state.end}
                        onChange={this.props.set}/>
                    <br />    
                    <Button className='btn' variant='raised' color='primary' onClick={this.props.update}>Search</Button>

                </div>    
            </div>
        )
    }
}

export default Search