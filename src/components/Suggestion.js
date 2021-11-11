import React from 'react';
import '../styles/Suggestion.css';

function Suggestion(props) {
  const {previewURL, title, author, views, time} = props;

  return (
    <div className='suggestion'>
      <img src={previewURL} alt={title} className='thumbnail'></img>
      <div className='metadata'>
        <p className='title'>{title}</p>
        <p className='author'>{author}</p>
        <p className='history'>{views} views • {time} ago</p>
      </div>
    </div>
  )
}

export default Suggestion;