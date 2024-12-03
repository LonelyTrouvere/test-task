import { CSSProperties, ReactNode } from "react"

export const levels = ['first', 'second', 'third'] as const

type SpanLevels = typeof levels[number]
export type Props = {
    children: ReactNode
    level: SpanLevels
}

type LevelStyles = Record<SpanLevels, CSSProperties>

export const levelStyles: LevelStyles = {
    first: {
        color: '#363A43',
        fontWeight: '600',
        fontSize: '18px'
    },
    second: {
        color: '#363A43',
        fontWeight: '500',
        fontSize: '14px'
    },
    third: {
        color: '#797E8B',
        fontWeight: '400',
        fontSize: '12px'
    }
}
