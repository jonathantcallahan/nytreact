import React from 'react'

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
                        type='date'
                        min='1800-01-01'
                        name='start'
                        value={this.props.state.start}
                        onChange={this.props.set}
                        />
                    <label htmlFor='end'>End Date</label>
                    <input 
                        id='end'
                        type='date'
                        name='end'
                        value={this.props.state.end}
                        onChange={this.props.set}/>
                    <button onClick={this.props.update}>Search</button>

                </div>    
            </div>
        )
    }
}

export default Search