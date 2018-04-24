import React from 'react'
import axios from 'axios';
import SearchItems from './../components/searchItems/SearchItems'

class Favorites extends React.Component {
    
    constructor(){
        super()
        this.state = {
            savedArticles: []
        }
    }

    componentDidMount(){
        axios
            .get('/api/article')
            .then(data => {
                console.log(data.data)
                this.setState({ savedArticles:data.data })
            })
            .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>This will be the favorites page</div>
            {
                this.state.savedArticles.map(e => {
                    <SearchItems save={this.deleteArticle}
                })
            }
        )
    }
}

export default Favorites