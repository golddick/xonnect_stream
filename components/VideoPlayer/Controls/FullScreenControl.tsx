'use client'


import { Hint } from "@/components/hint";
import { Maximize, Minimize } from "lucide-react";


import { useState } from "react";


interface  FullScreenControlProps {
    isFullScreen: boolean;
    onToggle: () => void;
    // onFullScreenChange: (isFullScreen: boolean) => void;
}

const FullScreenControl = ({isFullScreen, onToggle}: FullScreenControlProps) => {

    const Icon = isFullScreen ? Minimize : Maximize;
    const label = isFullScreen ? 'Minimize' : 'Maximize';

  return (
    <div className="flex items-center justify-center gap-4">
        <Hint label={label} asChild>
            <button onClick={onToggle} className="text-white p-1.5 hover:bg-white/10 rounded-lg">
                <Icon className="h-5 w-5"/>
            </button>


        </Hint>
    </div>
  )
}

export default FullScreenControl