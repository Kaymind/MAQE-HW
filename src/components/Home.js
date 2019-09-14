import React, { Component } from 'react'
import PostList from './PostList'
import axios from 'axios'
import Pagination from './Pagination';

class Home extends Component {
    state = {
        posts: [],
        authors: [],
        loading: false,
        postPerpage: 6,
        currentPage: 1,
    }

    componentDidMount = () => {
        
        const fetchPost = async () => {
            //load started
            this.setState({loading:true})
            console.log(this.state.loading)
            //get posts
            const resPost = await axios.get('post.json')
            // const resPost = await axios.get('http://maqe.github.io/json/posts.json')
            this.setState({posts: resPost.data})
            console.log(resPost.data)
            //get authors
            const restAuth = await axios.get('author.json')
            // const restAuth = await axios.get('http://maqe.github.io/json/authors.json')
            this.setState({authors: restAuth.data})
            console.log(restAuth.data)
            //load completed
            this.setState({loading:false})
        }
        fetchPost();
    }

    changedPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    render(){
        const { posts, authors, postPerpage, currentPage, loading } = this.state;
        return(
            <div className='home-app my-3'>
                <div className="container">
                    <h1>MAQE Forums</h1>
                    <h2>Subtitle</h2>
                    <h3>Posts</h3>
                    <PostList posts={posts} authors={authors} postPerpage={postPerpage} currentPage={currentPage} loading={loading}/>
                </div>
                <Pagination postPerpage={postPerpage} totalPost={posts.length} changedPage={this.changedPage} currentPage={currentPage}/>
            </div>
        )
    }
}

export default Home