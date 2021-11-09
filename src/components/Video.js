import React from 'react';
import '../styles/Video.css';
import VideoMetaData from './VideoMetaData.js';

function Video() {
  return (
    <section className='video-content'>
      <div className='video-player'>
        <iframe width="1280px" height="720px" src="https://www.youtube.com/embed/lJIrF4YjHfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
      </div>
      <VideoMetaData />
    </section>
  )
}

export default Video;