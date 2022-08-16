import * as React from 'react';
import {useState} from "react";

export default function useCountDown(targetDate) {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState( countDownDate - new Date().getTime()
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    return getReturnValues(countDown);
}

const getReturnValues = (countDown) => {
    // calculate time left
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [minutes, seconds];
};