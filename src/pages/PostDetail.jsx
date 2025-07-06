import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
  const {id} = useParams();

  const [post, setPost] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className='container flex flex-col gap-y-6 mx-auto mt-10' >
      <img src="https://picsum.photos/400/300" className='mx-auto mb-6 w-1/2 rounded-md' />
      <p className='mb-6 text-2xl font-bold text-center text-white uppercase'>{post.title}</p>
      <p className='text-white'>{post.body}</p>
    </div>
  )
}

export default PostDetail
