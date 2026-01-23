import type React from "react";

export interface PlayCursorProps {
    size?: number;          
    color?: string;         
    centerText?: string;    
    ringSpeed?: number;     
    followDuration?: number;
    followEase?: string;    
    zIndex?: number;        
    onClick: () => void;    
    showarrows?:boolean;
    rotatingText?:string;
    Arrow?: React.ComponentType;
}