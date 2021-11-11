import React from 'react';
import '../styles/Comments.css';
import ProfilePic from "../assets/images/profile.jpg";
import Comment from './Comment';

function Comments() {
  return (
    <section className='comments'>
      <h2>Comments</h2>
      <div className='comments-container'>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
        <Comment profileIconSource={ProfilePic} author='Andy Lau' date='3 months ago' comment='This is a test comment!' likes='26K'/>
      </div>
    </section>
  )
}

export default Comments;