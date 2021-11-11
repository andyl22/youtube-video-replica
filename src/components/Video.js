import React from 'react';
import '../styles/Video.css';
import VideoData from './VideoData.js';

function Video() {
  return (
    <section className='video-content'>
      <div className='video-player'>
        <iframe width="1600" src="https://www.youtube.com/embed/LXb3EKWsInQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>
      </div>
      <VideoData authorName='Jacob + Katie Schwarz' subscribers='654k' profileImgURL='https://yt3.ggpht.com/ytc/AKedOLSPtKcLqZXLU4y_QsYBpTYs2fCBZzXIWxbl3pkC=s48-c-k-c0x00ffffff-no-rj'/>
    </section>
  )
}

export default Video;