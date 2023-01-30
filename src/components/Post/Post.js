import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const{id,title, body} = post;

    const nevigate = useNavigate();

    const handleNevigate =()=>{
        nevigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>vist:{id}</Link>
            <Link to={`/post/${id}`}>
              <button>Show Deatils</button>
            </Link>
            <button onClick={handleNevigate}>Show Deatils 2</button>
        </div>
    );
};

export default Post;