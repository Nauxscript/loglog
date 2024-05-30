export type BaseTimelineItem = {
  content: string | number 
  timestamp: bigint 
}

export type TimelineProps<T extends BaseTimelineItem> = {
  items: readonly T[]; 
}