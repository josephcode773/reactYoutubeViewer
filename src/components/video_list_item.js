import React from 'react';

// const VideoListItem = (props) => {
// 	const video = props.video;
// 	return <li>Video</li>
// };
//Refactored BELOW!!

// const VideoListItem = ({video}) => {
// 	return <li>Video</li>
// };
//The New Refactored Version. Places 'const video = props.video' to VideoListItem = ({video})

const VideoListItem = ({video}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;