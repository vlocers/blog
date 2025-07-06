import React,{useState} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function PostsCard({post}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className='flex relative flex-col gap-y-6 p-4 bg-black rounded-md border transition-all duration-300 hover:scale-105 hover:border-orange-500'>
      <img src="https://picsum.photos/600/300" alt="" />
      <h1 className='text-lg font-bold text-white uppercase'>{post.title}</h1>
      <p className='text-sm text-gray-400 mb-3.5'>{post.body}</p>
      <button className='flex absolute bottom-1 right-2 gap-x-2 items-center text-orange-500 cursor-pointer' onClick={handleClick}>Blogu İncele <AiOutlineArrowRight />
      </button>
    </div>
  )
}

export default PostsCard
