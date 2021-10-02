import React, { Component } from 'react';
import Timer from './Timer';
import TimerControl from './TimerButton';

class TimerPannel extends Component {
    constructor() {
        super();
        this.state = {
            activated: false,
            paused : false,
            remained : 1500
        };
    }
    
    handleStartTimer = () => {
        this.interval= setInterval(() => {
            this.setState((prev)=> {
                return {
                    activated : true,
                    paused: false,
                    remained: prev.remained -1
                };
            });
        }, 1000);
    }

    handleResumeTimer = () => {
        this.interval= setInterval(() => {
            this.setState((prev)=> {
                return {
                    paused: true,
                    remained: prev.remained -1
                };
            });
        }, 1000);
    }

    handleStopTimer = () => {
        console.log('stop');
        this.setState(() => {
            clearInterval(this.interval);
            return {
                activated: false,
                paused: false,
                remained: 1500
            };  
            
        });
    };

    handlePauseTimer = () => {
        console.log('on');
        this.setState(() => {
            clearInterval(this.interval);
                return {
                    paused: true
                };
        });
    }

    render() {
        let {remained, activated, paused} = this.state;
        return (
            <div>
                <Timer remained={remained} />
                <TimerControl 
                    activated= {activated}
                    paused ={paused}
                    handleStopTimer={this.handleStopTimer}
                    handleStartTimer={this.handleStartTimer}
                    handlePauseTimer={this.handlePauseTimer}
                    handleResumeTimer={this.handleResumeTimer}
                />
            </div>
        );
    }
}

export default TimerPannel;