'use client'

import React, { useRef, useState, useEffect } from 'react';
import VolumeControl from './Controls/VolumeControl';
import FullScreenControl from './Controls/FullScreenControl';
import { PlayControl } from './Controls/PlayControl';

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // Default volume (0-100)
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Play button function
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Fullscreen change handler
  const handleFullscreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null;
    setIsFullscreen(isCurrentlyFullscreen);
  };

  // Attach fullscreen change event listener
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('fullscreenchange', handleFullscreenChange);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('fullscreenchange', handleFullscreenChange);
      }
    };
  }, []);

  // Volume change handler
  const onVolumeChange = (value: number) => {
    setVolume(+value);

    if (videoRef.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value * 0.01; // Convert volume to 0-1 range
    }
  };

  // Mute toggle handler
  const toggleMute = () => {
    const isMuted = volume === 0;
    setVolume(isMuted ? 50 : 0);

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  // Set initial volume to 0 (muted)
  useEffect(() => {
    onVolumeChange(0);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] ">
      <div className="absolute inset-0 flex items-center justify-center bg-green-400 " ref={wrapperRef}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={true} // Disable default controls
          autoPlay={true} // Disable auto-play
          loop={true} // Disable looping
          muted={volume === 0} // Mute if volume is 0
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3443839767/preview/stock-footage-motion-timelapse-pov-shot-from-modern-dubai-metro-running-alongside-the-sheikh-zayed-road-at-night.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-between bg-black bg-opacity-50 px-4">
                <PlayControl isPlaying={isPlaying} onToggle={handlePlay}/>
                <VolumeControl  onChange={onVolumeChange} value={volume} onToggle={toggleMute}/>
                <FullScreenControl isFullScreen={isFullscreen} onToggle={handleFullscreenChange}
                />
        </div> */}
      </div>
    </div>
  );
};

