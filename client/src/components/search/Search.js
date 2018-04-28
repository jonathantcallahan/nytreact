import React from 'react'
import Button from 'material-ui/Button'
class Search extends React.Component {

    render(){
        return(
            <div>
                This will be the search page
                <div>
                    <input 
                        type='text' 
                        name='topic' 
                        value={this.props.state.topic}
                        onChange={this.props.set}
                        placeholder='Search Term'/>
                    <label htmlFor='start'>Start Date</label>    
                    <input 
                        id='start'
                        type='text'
                        name='start'
                        placeholder='YYYYMMDD'
                        value={this.props.state.start}
                        onChange={this.props.set}
                        />
                    <label htmlFor='end'>End Date</label>
                    <input 
                        id='end'
                        type='text'
                        name='end'
                        placeholder='YYYYMMDD'
                        value={this.props.state.end}
                        onChange={this.props.set}/>
                    <Button variant='raised' color='primary' onClick={this.props.update}>Search</Button>

                </div>    
            </div>
        )
    }
}

export default Search