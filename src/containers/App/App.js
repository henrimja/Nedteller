import React, { Component } from 'react';
import './App.css';
import Button from '../../components/Button/Button';

export default class App extends Component {

    state = {
        timerVal: '0',
    }

    startTimer = () => {
        this.timerInterval = setInterval(() => {
            if (this.state.timerVal === 0) {
                clearInterval(this.timerInterval);
                return;
            }
            this.setState({ timerVal: this.state.timerVal - 1 })
        }, 1000);
    }

    klikkeFunksjon = (num) => {
        console.log(num)
        if (this.state.timerVal === '0') this.setState({ timerVal: num.toString() });
        else this.setState({ timerVal: this.state.timerVal + num });
    }

    render() {

        const tekst = ['Dub', 'Shawdi'];
        const tall = Array.from(Array(10).keys());
        const buttons = tall.map((el) => <Button klikkeFunksjon={(event) => this.klikkeFunksjon(el)}> {el}</Button >)
        return (
            <>
                <div className="App">
                    <h1 className="AppTitle">{this.state.timerVal}</h1>
                    <div className="Container">
                        {buttons}
                    </div>
                    <button className="Start" onClick={this.startTimer}>Start</button>
                </div>
                <h2>Dab</h2>
            </>
        );
    }
}

