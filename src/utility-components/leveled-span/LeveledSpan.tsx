import { Props, levelStyles } from "./types"


function LeveledSpan({ level, children, style }: Props) {
    return <span style={{
        opacity: 1,
        ...levelStyles[level],
        ...style,
    }}>{children}</span>
}

export default LeveledSpan