import React from "react";
import "./TimeLineSection.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "#333",
  },
}));

export default function TimeLineSection() {
  const classes = useStyles();
  return (
    <div className="container mt-5 mb-5">
      <br />
      <br />
      <h1 className="text-white text-center">IMPORTANT DATES</h1>
      <br />
      <br />
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">1st July 2021</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">PAPER SUBMISSION (OPEN)</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">1st September 2021</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">PAPER SUBMISSION (CLOSE)</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">25th October 2021</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">ACCEPTANCE NOTIFICATION</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">25th October 2021</span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">REGISTRATION (ATTENDEE)</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">25th November 2021 </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">REGISTRATION (CLOSED)</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>
              <span className="timeLineEventDate">
                9th, 10th, 11th December 2021
              </span>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              <span className="timeLineEvent">CONFERENCE</span>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
