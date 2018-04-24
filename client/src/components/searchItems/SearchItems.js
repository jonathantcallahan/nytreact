import React from 'react'

class SearchItems extends React.Component {

    render(){
        return(
            <div id={this.props.key}>
                <a href={this.props.web_url}>
                    <h3>{this.props.snippet}</h3>
                </a>
                <button 
                    onClick={() => this.props.save(this.props.snippet, this.props.web_url, this.props.key)}>
                    {this.props.buttonT}
                </button>
            </div>
        )
    }
}
    

export default SearchItems