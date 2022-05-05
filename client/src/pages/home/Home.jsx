import Header from '../../header/Header';
import Posts from '../../components/posts/Posts';
import Sidbar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import axios from "axios";
import './home.css';
import { useEffect, useState } from 'react';

export default function Home() {
 const [posts,setPosts] = useState([]);
   useEffect (()=>{
    const fetchPosts = async ()=>{
     const res = await axios.get("/posts")
      console.log(res);
     }
     fetchPosts()

   },[])

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidbar />
      </div>
      <Footer />
    </>
  );
}
