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

    articleGet(){
        axios
            .get('/api/article')
            .then(data => this.setState({ savedArticles:data.data }))
            .catch(err => console.log(err))
    }   

    componentDidMount(){
        this.articleGet()
    }
    
    deleteArticle = (title, url, date, id) => {
        axios
            .delete(`/api/article/${id}`)
            .then(data => {
                console.log(data)
                this.articleGet()
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {
                    this.state.savedArticles.map(e => {
                            return <SearchItems 
                                save={this.deleteArticle} 
                                buttonT='Remove from Favorites' 
                                snippet={e.title} 
                                _id={e._id} 
                                web_url={e.href}/>
                    })
                }
            </div>          
        )
    }
}

export default Favorites