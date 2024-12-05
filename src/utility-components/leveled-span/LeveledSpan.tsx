import { LeveledSpanProps, levelStyles } from "./types"


function LeveledSpan({ level, children, style, ...rest }: LeveledSpanProps) {
    return <span 
        style={{
            ...levelStyles[level],
            ...style,
        }}
        {...rest}
    >
        {children}
    </span>
}

export default LeveledSpan