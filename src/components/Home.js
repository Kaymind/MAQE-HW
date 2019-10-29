import React, { Component } from 'react';
import PostList from './PostList';
import axios from 'axios';
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
            this.setState({loading:true});
            //get posts
            const resPost = await axios.get('http://maqe.github.io/json/posts.json');
            this.setState({posts: resPost.data});
            //get authors
            const restAuth = await axios.get('http://maqe.github.io/json/authors.json');
            this.setState({authors: restAuth.data});
            //load completed
            this.setState({loading:false})
        }
        fetchPost();
    }

    changedPage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });
    }

    prevPage = (pageNumber) => {
        if(pageNumber - 1 > 0) {
            this.setState({
                currentPage: pageNumber - 1
            });
        }
    }

    nextPage = (pageNumber, numOfPages) => {
        if(pageNumber + 1 <= numOfPages) {
            this.setState({
                currentPage: pageNumber + 1
            });
        }
    }

    render(){
        const { posts, authors, postPerpage, currentPage, loading } = this.state;
        return(
            <div className='home-app my-3'>
                <div className="container">
                    <h1 className="my-4 font-weight-bold">MAQE Forums</h1>
                    <h2 className="my-4 font-weight-bold">Subtitle</h2>
                    <h3 className="my-4 font-weight-bold">Posts</h3>
                    <PostList posts={posts} authors={authors} postPerpage={postPerpage} currentPage={currentPage} loading={loading}/>
                </div>
                <Pagination 
                    postPerpage={postPerpage} 
                    totalPost={posts.length} 
                    changedPage={this.changedPage} 
                    currentPage={currentPage}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}
                />
            </div>
        )
    }
}

export default Home;