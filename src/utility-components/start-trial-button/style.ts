import { CSSProperties } from "react";
import { MouseStates } from "./type";

export const stateButtonStyle: Record<MouseStates, CSSProperties> = {
    down: {
        backgroundColor: 'hsl(144 97 23)',
        bottom: '-2px',
    },
    up: {
        backgroundColor: 'hsl(144 97 31)',
        bottom: '2px',
    },
    enter: {
        backgroundColor: 'hsl(144 97 31)',
        bottom: '2px',
    },
    leave: {
        backgroundColor: 'hsl(144 97 27)',
        bottom: '0',
    },
    neutral: {
        backgroundColor: 'hsl(144 97 27)',
        bottom: '0',
    },
}

export const commonLabelStyle: CSSProperties = {
    transition: 'all 120ms ease-out',
    fontSize: '16px', 
    color: 'white',
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    right: 0,
    marginInline: 'auto',
}