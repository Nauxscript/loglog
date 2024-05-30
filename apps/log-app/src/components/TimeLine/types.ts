export interface BaseTimelineItem {
 content: string | number 
 timestamp: string
}

export type TimelineProps<T extends BaseTimelineItem> = {
  items: T[]; 
}