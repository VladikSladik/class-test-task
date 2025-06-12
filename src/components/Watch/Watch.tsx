import React from 'react';
import './watch.css';

interface WatchState {
    time: string;
}

class Watch extends React.Component<unknown, WatchState> {
    timerID?: NodeJS.Timeout;

    state = {
        time: new Date().toLocaleTimeString(),
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if (this.timerID) clearInterval(this.timerID);
    }

    tick() {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    render() {
        return <div className="watch">{this.state.time}</div>;
    }
}

export default Watch;
