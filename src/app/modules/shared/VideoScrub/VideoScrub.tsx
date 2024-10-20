import React, { useRef } from 'react';

const VideoScrub = ({src, handleDoubleClick, width, height}: any) => {
  const videoRef: any = useRef(null);
  const lineRef: any = useRef(null);
  const containerRef: any = useRef(null);

  const handleMouseMove = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left; // Mouse X position relative to container
    const percentage = xPos / containerRef.current.offsetWidth; // Percentage position across video width

    // Update the position of the vertical line
    lineRef.current.style.left = `${xPos}px`;
    lineRef.current.style.display = 'block';

    // Update the video current time based on mouse position
    if (videoRef.current) {
      const videoDuration = videoRef?.current?.duration;
      videoRef.current.currentTime = videoDuration * percentage;
    }
  };

  const handleMouseLeave = () => {
    if (lineRef.current) {
      lineRef.current.style.display = 'none'; // Hide the line when the mouse leaves the video area
    }
  };

  return (
    <div className="video-container" ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ position: 'relative', width: width || '325px', margin: 'auto' }}>
      <video
        onDoubleClick={handleDoubleClick}
        ref={videoRef}
        src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}
        // src={src}
        preload="metadata"
        style={{ width: width || '295px', height: height || '200px' }}
      />
      <div
        ref={lineRef}
        className="line"
        style={{
          position: 'absolute',
          top: 15,
          bottom: 0,
          height: width ? 370 : 170,
          width: '2px',
          backgroundColor: 'red',
          pointerEvents: 'none',
          display: 'none',
        }}
      ></div>
    </div>
  );
};

export default VideoScrub;
