import React from 'react';

class StopWatch extends React.Component {

    state = {
        isRunning: false,
        previousTime: 0,
        elapsedTime: 0
    };

    componentDidMount() {
        this.intervalID = setInterval(
            () =>  this.tick(), 100
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState(prevState => (
                {
                    previousTime: now,
                    elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
                }
            ));
        }
    };

    handleStopWatch = () => {
        this.setState( prevState => (
            {
                isRunning: !prevState.isRunning
            }
        ));
        if(!this.state.isRunning){
            this.setState({ previousTime: Date.now() });
        }
    };

    handleReset = () => {
        this.setState( prevState => (
            {
                elapsedTime: 0
            }
        ));
    };

    render = () => {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { Math.floor(this.state.elapsedTime / 1000) } 
                </span>
                <button 
                onClick={ this.handleStopWatch }
                 >{this.state.isRunning ? 'Stop' : 'Start'}</button>                
                <button 
                onClick={ this.handleReset }
                 >Reset</button>
            </div>
        );
    };
}

export default StopWatch;