import React from 'react';
import '../styles/VideoMetaData.css'

function VideoMetaData() {
  return (
    <div className='video-metadata'>
      <section>
        <h2 className='video-title'>Video Title</h2>
        <p className='video-history'>12,742,555 views * Mar 28, 2018</p>
      </section>
      <section>
        <p className='video-author'>Author</p>
        <p className='video-description'>Video Description</p>
      </section>
    </div>
  )
}

export default VideoMetaData;