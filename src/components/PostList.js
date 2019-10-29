import React, { Component } from 'react';
import { distanceInWordsStrict } from 'date-fns';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import Post from './Post';

class PostList extends Component{
    
    render(){
        // add fontawesome library
        library.add(fas,far);
        // get derived props 
        const { posts, authors, postPerpage, currentPage, loading } = this.props
        let postList = []
        let author = null
        let postDuration = null;
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
    
                postDuration = distanceInWordsStrict(
                    new Date(),
                    new Date(post.created_at),
                    {addSuffix: true}
                )
                
                postList.push(
                    <Post key={post.id} post={post} author={author} postDuration={postDuration}/>
                )
            })
         } else {
            postList.push(
                <div className="post" key="no-post">
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

export default PostList;

