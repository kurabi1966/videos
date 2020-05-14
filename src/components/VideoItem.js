import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const imgSrc = video.snippet.thumbnails.medium.url;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui small rounded image" alt={title} src={imgSrc} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
