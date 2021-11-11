import React from 'react';
import '../styles/Video.css';
import VideoData from './VideoData.js';

function Video() {
  return (
    <section className='video-content'>
      <div className='video-player'>
        <iframe width="1600" src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
      </div>
      <VideoData />
    </section>
  )
}

export default Video;