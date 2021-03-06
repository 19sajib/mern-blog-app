import { useState, useEffect } from 'react'
import { useLocation } from "react-router";
import axios from 'axios'
import './home.css';
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Home() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()

    useEffect(() => {
      const fetchPosts = async () => {
          const res = await axios.get('/posts' + search)
          setPosts(res.data)
          console.log(res.data);
        }
        fetchPosts();
    },[search])

    return (
        <>
            <Header />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar />
        </div>
        </>
    )
}
