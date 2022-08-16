import * as React from 'react';
import useCountDown from "../../hooks/useCountDown";
import './index.css';
export default function Timer() {
    const THIRTY_MINUTES = 30 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThirtyMinutes = THIRTY_MINUTES + NOW_IN_MS;

    return (
        <div className='timer'>
            <CounterDownTimer targetDate={dateTimeAfterThirtyMinutes}/>
        </div>
    )

}

function CounterDownTimer({targetDate}) {
    const [minutes, seconds] = useCountDown(targetDate);

    if (minutes + seconds <= 0) return <TimeOut/>
    return (
        <ShowCounter
            minutes={minutes}
            seconds={seconds}
        />
    )
}

function ShowCounter({minutes, seconds}) {

    return (
        <div className='timer__container'>
            <DateTimeDisplay value={minutes} type={'Minutes'}/>
            <DateTimeDisplay value={seconds} type={'Seconds'}/>
        </div>
    )
}

function DateTimeDisplay({value,type}) {

    return (
        <div className='timer__container-countdown'>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
}

function TimeOut() {
    return (
        <div className='timeout__container'>
            <div className='timeout__title'>
                <h1>Game Over!</h1>
            </div>
        </div>
    )
}