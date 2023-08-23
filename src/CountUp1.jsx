import { useEffect, useState } from "react"


// This solution is not correct, though I am creating an interval to increase the count every
// delay seconds but there is more delay (about 7-8 ms) which is happening in rerendering the component
// which is resulting in about 1 sec delay output i.e. it is counting upto 1000 in 6 second instead of 5.
const CountUp = ({totalCount, duration}) => {
    const [count, setCount] = useState(1);
    const [time, setTime] = useState(0);
    const delay = (duration * 1000)/totalCount;

    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(prevCount => prevCount + 1);
        }, 1000);

        const newIntervalId = setInterval(() => {
            setCount((prevCount) => { return prevCount < totalCount ? prevCount + 1 : prevCount })
        }, delay)

        return () => {
            clearInterval(intervalId);
            clearInterval(newIntervalId);
        };
    }, []);


    return (
        <>
          <div>End Count: {count}</div>
          <br/>
          <div>Duration: {time}</div>
        </>
    )
}

export default CountUp