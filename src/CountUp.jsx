import { useEffect, useRef, useState } from "react"

const CountUp = ({totalCount, duration}) => {
    const [count, setCount] = useState(1);
    const [time, setTime] = useState(0);
    const startTime = Date.now()

    //ref just for stop current time counter.
    const timeIntervalRef = useRef(null);

    // increasing counter using requestAnimationFrame
    const updateCounter = () => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - startTime;

        // fraction to calculate how much part of time is elapsed
        const timeElapsedFraction = timeElapsed/(duration * 1000);

        // based on the fraction setting the count state and again calling request animation frame
        if(timeElapsedFraction === 1 || timeElapsedFraction > 1) {
            setCount(totalCount);
            return;
        }
        else {
            const countToIncrease = Math.floor(timeElapsedFraction * totalCount);
            setCount(countToIncrease);
            requestAnimationFrame(updateCounter)
        }
    }

    useEffect(() => {
        requestAnimationFrame(updateCounter)

        // Below code is just for maintaining current time in seconds elapsed
        timeIntervalRef.current = setInterval(() => {
        if (time <= duration) {
            setTime(prevTime => prevTime + 1);
        }
        }, 1000);

        return () => {
            clearInterval(timeIntervalRef.current);
        };
    }, []);


    // for clearing out the interval when duration seconds are elapsed
    useEffect(() => {
        if(time === duration)
        {
            clearInterval(timeIntervalRef.current)
        }
    }, [time])

    return (
        <>
          <div>End Count: {count}</div>
          <br/>
          <div>Duration: {time}</div>
        </>
    )
}

export default CountUp
