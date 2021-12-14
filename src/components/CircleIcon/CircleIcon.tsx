
export interface CircleIconProps {
    color: string;
}

export function CircleIcon({color}:CircleIconProps) {
    return(
        <svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="CircleIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle id="Oval" stroke={color} strokeWidth="2" cx="32" cy="32" r="22"></circle>
                <line x1="2.5" y1="32.5" x2="60.5" y2="32.5" id="Line" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
            </g>
        </svg>
    );
}