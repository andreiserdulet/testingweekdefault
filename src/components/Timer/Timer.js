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
            <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={minutes < 29}/>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes < 29}/>
        </div>
    )
}

function DateTimeDisplay({value,type, isDanger}) {

    return (
        <div className={isDanger ? 'timer__container-countdown danger' : 'timer__container-countdown'}>
            <p>{isDanger ? 'NaN': value}</p>
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