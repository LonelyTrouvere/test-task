import { Props, levelStyles } from "./types"


function LeveledSpan({ level, children }: Props) {
    return <span style={levelStyles[level]}>{children}</span>
}

export default LeveledSpan