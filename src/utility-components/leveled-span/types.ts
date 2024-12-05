import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react"

export const levels = ['first', 'second', 'third'] as const

type SpanLevels = typeof levels[number]
export type LeveledSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    level: SpanLevels
}

type LevelStyles = Record<SpanLevels, CSSProperties>

export const levelStyles: LevelStyles = {
    first: {
        color: '#363A43',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '24px'
    },
    second: {
        color: '#363A43',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '24px'
    },
    third: {
        color: '#797E8B',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px'
    }
}
