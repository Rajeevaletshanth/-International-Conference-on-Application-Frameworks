import React, { Component } from "react";
import Countdown from "react-countdown";

export class CountDownSection extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Countdown
          date={Date.now() + 1000000000}
          intervalDelay={0}
          precision={3}
          renderer={(props) => (
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-2 countDownDiv">
                  <div className="row">
                    <div className="col-lg-12 countDownData">{props.days}</div>
                    <div className="col-lg-12 countDownTitle">DAYS</div>
                  </div>
                </div>
                <div className="col-lg-2 countDownDiv">
                  <div className="row">
                    <div className="col-lg-12 countDownData">{props.hours}</div>
                    <div className="col-lg-12 countDownTitle">HOURS</div>
                  </div>
                </div>
                <div className="col-lg-2 countDownDiv">
                  <div className="row">
                    <div className="col-lg-12 countDownData">
                      {props.minutes}
                    </div>
                    <div className="col-lg-12 countDownTitle">MINUTES</div>
                  </div>
                </div>
                <div className="col-lg-2 countDownDiv">
                  <div className="row">
                    <div className="col-lg-12 countDownData">
                      {props.seconds}
                    </div>
                    <div className="col-lg-12 countDownTitle">SECONDS</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default CountDownSection;
