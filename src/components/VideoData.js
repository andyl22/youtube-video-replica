import React from 'react';
import '../styles/VideoData.css'
import {BiDislike, BiLike, BiShare, BiListPlus} from 'react-icons/bi'
import {VscEllipsis} from 'react-icons/vsc'

function VideoData(props) {
  return (
    <div className='video-data'>
      <section className='video-header'>
        <div className='video-metadata'>
          <h2 className='video-title'>COSTA RICA IN 4K 60fps HDR (ULTRA HD)</h2>
          <p className='subfont'>12,742,555 views • Mar 28, 2018</p>
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
        <figcaption className='author'>
          <img src={props.profileImgURL} alt={props.authorName + "profile image"} className='profile-img'/>
          <div>
            <p className='author-name'>{props.authorName}</p>
            <p className='subfont'>{props.subscribers} subscribers</p>
          </div>
        </figcaption>
        <p className='video-description'>We've re-mastered and re-uploaded our favorite video in HDR!</p>
      </section>
    </div>
  )
}

export default VideoData;