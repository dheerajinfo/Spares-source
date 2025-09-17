import React from 'react';
import Timeline from '../../library/components/Timeline/Timeline';
import TimelineItem from '../../library/components/Timeline/TimelineItem';
import TimelineSeparator from '../../library/components/Timeline/TimelineSeparator';
import TimelineDot from '../../library/components/Timeline/TimelineDot';
import TimelineLine from '../../library/components/Timeline/TimelineLine';
import TimelineContent from '../../library/components/Timeline/TimelineContent';
import TimelineTitle from '../../library/components/Timeline/TimelineTitle';
import TimelineDescription from '../../library/components/Timeline/TimelineDescription';
import TimelineMeta from '../../library/components/Timeline/TimelineMeta';

function TimelineDemo() {
  return (
    <Timeline className="text-white">
      <TimelineItem className='my-2'>
        <TimelineSeparator>
          <TimelineDot className="border border-white w-3 h-3" />
          <TimelineLine className="bg-white/70 h-12 my-2" />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Project Kickoff</TimelineTitle>
          <TimelineDescription>Initial planning and team setup</TimelineDescription>
          <TimelineMeta>Jan 2025</TimelineMeta>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className='my-2'>
        <TimelineSeparator>
          <TimelineDot className="bg-white" />
          <TimelineLine className="bg-white/70 h-12 my-2" />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Design Phase</TimelineTitle>
          <TimelineDescription>Wireframes and UI design</TimelineDescription>
          <TimelineMeta>Feb 2025</TimelineMeta>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className="border border-white" />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Launch</TimelineTitle>
          <TimelineDescription>Final deployment and release</TimelineDescription>
          <TimelineMeta>Mar 2025</TimelineMeta>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineDemo;
