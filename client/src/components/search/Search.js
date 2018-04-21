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
                        onChange={this.props.set}/>
                </div>    
            </div>
        )
    }
}

export default Search