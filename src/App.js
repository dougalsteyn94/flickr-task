import { useState, useEffect } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import './App.css';

function App() {
  const BACKEND_URL = 'http://localhost:5000/items'
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()

  }, [])

  const fetchPosts = async() => {
    const res = await fetch(BACKEND_URL)
    const data = await res.json()
    return data
  }


  return (
    <div className="App">
    <Header />
    <>
      {posts.length > 0 ? <Posts posts={posts} /> : 'No Posts to Show'}  
    </>
    </div>
  );
}

export default App;
