import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Post = ({ post, author, postDuration }) => {
  const { title, body, image_url } = post;
  const { name, role, avatar_url, place } = author;

  return (
    <div className="post row p-3 my-4 border shadow-sm rounded">
      <div className="pic col-2 p-0">
        <img className="pic-post w-100" src={image_url} alt="pic-post" />
      </div>
      <div className="content col-8">
        <h4 className="post-title post-font-weight-bold">{title}</h4>
        <p className="post-body font-weight-bold text-secondary">{body}</p>
        <p className="post-duration text-black-50 mt-3 font-weight-bold font-italic">
          <FontAwesomeIcon icon={["far", "clock"]} /> {postDuration}
        </p>
      </div>
      <div className="author col-2 border-left text-center">
        <img
          className="avatar rounded-circle w-75 mb-3"
          src={avatar_url}
          alt="Avatar"
        />
        <h5 className="name text-danger">{name}</h5>
        <h5 className="role">{role}</h5>
        <h6 className="place">
          <FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {place}
        </h6>
      </div>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  postDuration: PropTypes.string.isRequired
};

export default Post;
