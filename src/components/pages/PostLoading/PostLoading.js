import React from 'react';
import './PostLoading.css';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<>
				<div className="loading">Loading&#8230;</div>
				<p className='waiting_datato_load'>
				loading data...
			</p>
			</>
			
		);
	};
}
export default PostLoading;

