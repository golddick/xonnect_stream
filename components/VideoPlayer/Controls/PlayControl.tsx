import { Hint } from '@/components/hint';
import { Pause, Play } from 'lucide-react';
import React from 'react'

interface PlayControlProps {
    onToggle:() => void;
    isPlaying: boolean;

}

export const PlayControl = ({onToggle, isPlaying}:PlayControlProps) => {

    const Icon = isPlaying ? Play : Pause;
    const label = isPlaying ? 'Playing' : 'Play';

  return (
    <div className="flex items-center justify-center gap-4">
        <Hint asChild label={label}>
            <button
                onClick={onToggle}
                className="text-white"
                disabled={isPlaying} // Disable button if video is already playing
                >
                {isPlaying ? 'Playing...' : 'Play'}
            </button>
        </Hint>
    </div>
  )
}
