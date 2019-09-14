import React, { Component } from 'react';
import axios from 'axios';
import { distanceInWordsStrict } from 'date-fns';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostList extends Component{
    
    render(){
        // add fontawesome library
        library.add(fas,far);
        // get derived props 
        const { posts, authors, postPerpage, currentPage, loading } = this.props
        let postList = []
        let author = null
        let result = null;
        // get current posts
        let indexOfLastPost = postPerpage * currentPage;
        let indexOfFirstPost = indexOfLastPost - postPerpage;
        let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

        if(loading){
            return <h2>Loading...</h2>
        }else{
            if (currentPosts.length && authors.length) {
            
                currentPosts.forEach((post) => {
                
                author = authors.find((author) => {
                    return post.author_id === author.id
                })
    
                result = distanceInWordsStrict(
                    new Date(),
                    new Date(post.created_at),
                    {addSuffix: true}
                )
                
                postList.push(
                    <div className="post row p-3 my-3 border shadow-sm" style={{minHeight: "300px"}} key={post.id}>
                        <div className="pic col-2 p-0">
                            <img className="pic-post border-0 w-100" src={post.image_url} alt="post image"/>
                        </div>
                        <div className="content col-8">
                            <div className="title">
                                <h4>{post.title}</h4>
                            </div>
                            <div className="body font-weight-bold text-secondary">
                                {post.body}
                                <p className="text-black-50 mt-3 font-weight-bold font-italic" style={{opacity: '0.7'}}>
                                    <FontAwesomeIcon icon={['far', 'clock']} /> {result}
                                </p>
                            </div>
                        </div>
                        <div className="author col-2 border-left text-center">
                            <img className="avatar rounded-circle w-75 mb-3" src={author.avatar_url} alt="Avatar"/>
                            <h5 className="name text-danger">{author.name}</h5>
                            <h5 className="role">{author.role}</h5>
                            <h6 className="place">
                                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> {author.place}
                            </h6>
                        </div>
                    </div>
                )
            })
         } else {
            postList.push(
                <div className="post" id="no-post">
                    No post yet.
                </div>
            )
        }
            return(
                <div className='posts'>
                    {postList}
                </div>
            )
        }
    }   
}

export default PostList

