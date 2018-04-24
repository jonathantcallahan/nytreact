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
    
    deleteArticle = (title, url, id) => {
        axios
            .delete(`/api/article/${id}`)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <div>This will be the favorites page</div>
                {
                    this.state.savedArticles.map(e => {
                            return <SearchItems 
                                save={this.deleteArticle} 
                                buttonT='Remove from Favorites' 
                                snippet={e.title} 
                                key={e._id} 
                                web_url={e.href}/>
                    })
                }
            </div>          
        )
    }
}

export default Favorites