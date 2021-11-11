import React from 'react';
import {BiLike, BiDislike} from 'react-icons/bi';
import '../styles/Comment.css';
import ProfileIcon from './ProfileIcon';

function Comment(props) {
  return (
    <div className='comment-container'>
      <ProfileIcon className='icons'/>
      <div className='comment'>
        <div className='comment-header'>
          <p className='comment-author'>{props.author}</p>
          <p className='comment-date subfont'>{props.date}</p>
        </div>
        <p className='comment-body'>{props.comment}</p>
        <div className='vote-buttons'>
                <BiLike color='white'/>
                <p className='subfont'> {props.likes} </p>
                <BiDislike color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Comment;