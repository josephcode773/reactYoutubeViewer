import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem video={video} />
	});
	// added javascript value of 'videoItems' to store the results of the map function

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};
// made list using Map instead of for loop

export default VideoList;
