import React from 'react';
import '../styles/VideoData.css'
import {BiDislike, BiLike, BiShare, BiListPlus} from 'react-icons/bi'
import {VscEllipsis} from 'react-icons/vsc'

function VideoData() {
  return (
    <div className='video-data'>
      <section className='video-header'>
        <div className='video-metadata'>
          <h2 className='video-title'>Video Title</h2>
          <p className='video-history'>12,742,555 views * Mar 28, 2018</p>
        </div>
        <div className='interactive-data'>
          <div className='likes'>
            <div className='like-buttons'>
              <BiLike color='white'/>
              <p> 266k </p>
              <BiDislike color='white'/>
              <p> 5k </p>
            </div>
            <div className='line'></div>
          </div>
          <BiShare color='white'/>
          <BiListPlus color = 'white'/>
          <VscEllipsis color = 'white'/>
        </div>
      </section>
      <section className='video-body'>
        <p className='video-author'>Author</p>
        <p className='video-description'>Video Description</p>
      </section>
    </div>
  )
}

export default VideoData;