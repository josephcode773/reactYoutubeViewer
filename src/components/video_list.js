import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} 
			/>
		);
	});
	// added unique key for each element in list. key={video.etag}. etag is provided by youtube api

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};


export default VideoList;
