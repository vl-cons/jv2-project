import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

export default function Home() {


    const [posts, setPosts] = useState([])

    const {id}=useParams()

    useEffect(() => {
        console.log("Everytime page is loading");
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:8080/posts")
        setPosts(result.data);
    }

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:8080/post/${id}`)
        loadPosts()
    }

  return (
    //comment
    <div class='container'>
        <div class='py-4'>
            <table class="table border shadow ">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">URL</th>
                    <th scope="col">Topics</th>
                    <th scope="col">Year</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index) => (
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.url}</td>
                            <td>{post.topics}</td>
                            <td>{post.year}</td>
                            <td>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/editpost/${post.id}`}
                                >Edit</Link>

                                <button className='btn btn-danger mx-2'
                                onClick={()=>deletePost(post.id)}
                                >Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
