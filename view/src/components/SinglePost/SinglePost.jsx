import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './singlePost.css'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const result = await axios.get("/posts/" + path);
            setPost(result.data);
        }
        getPost();
    },[path])

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                    width="100%"
                    src={post.photo}
                    alt="postImage" 
                    className="singlePostImg"
                    />
                )}
                 <h1 className="singlePostTitle">
                     {post.title}
                     <div className="singlePostEdit">
                     <i className="singlePostIcon far fa-edit"></i>
                     <i className="singlePostIcon far fa-trash-alt"></i>
                     </div>
                 </h1>
                 <div className="singlePostInfo">
                     <Link to={`/?user=${post.username}`} className="link" >
                     <span className="singlePostAuthor"> Author: <b>{post.username}</b>
                      </span>
                      </Link>
                      <span className="singlePostDate">
                      {new Date(post.createdAt).toDateString()}
                          </span>
                 </div>
                 <p className="singlePostDesc">
                   {post.description}
                 </p>
            </div>
        </div>
    )
}
