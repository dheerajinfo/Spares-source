import React from "react";
import Card from "../../library/components/Card/Card";
import Timeline from "../../library/components/Timeline/Timeline";
import TimelineItem from "../../library/components/Timeline/TimelineItem";
import TimelineSeparator from "../../library/components/Timeline/TimelineSeparator";
import TimelineDot from "../../library/components/Timeline/TimelineDot";
import TimelineLine from "../../library/components/Timeline/TimelineLine";
import TimelineContent from "../../library/components/Timeline/TimelineContent";
import TimelineTitle from "../../library/components/Timeline/TimelineTitle";
import TimelineDescription from "../../library/components/Timeline/TimelineDescription";
import TimelineMeta from "../../library/components/Timeline/TimelineMeta";

function Activityblock() {
  const timelineData = [
    {
      id: 1,
      title: "Order #227",
      description: "Order is being prepared",
      meta: "Sep 3, 2025 • 10:45 AM",
    },
    {
      id: 2,
      title: "Low Stock Alert",
      description: "Shoes Inventory falls below threshold",
      meta: "Sep 2, 2025 • 08:15 PM",
    },
    {
      id: 3,
      title: "Out for Delivery",
      description: "Scheduled for customer delivery today",
      meta: "Sep 2, 2025 • 02:00 PM",
    },
  ];

  return (
    <Card className="bg-surface text-white p-8 border border-white/10 rounded-8 w-fit">
      <h3 className="text-xl pb-10">Order Alerts</h3>
      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <TimelineDot className="border border-white" />
              {index < timelineData.length - 1 && (
                <TimelineLine className="bg-white/70 h-12 my-2" />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDescription>{item.description}</TimelineDescription>
              <TimelineMeta className="text-xs text-white/60 mt-1">
                {item.meta}
              </TimelineMeta>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
}

export default Activityblock;
