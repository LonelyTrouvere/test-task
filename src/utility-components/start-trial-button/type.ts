export const mouseStates = ['up', 'down', 'neutral', 'enter', 'leave'] as const

export type MouseStates = typeof mouseStates[number]