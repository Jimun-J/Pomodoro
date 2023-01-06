import React, { useEffect, useState } from 'react'
import './Watch.css'
import Clock from '../../audio/clock.mp3'

const Watch = ({ state, pomoTime, shortTime, longTime }) => {
    const [minute, setMinute] = useState(pomoTime);
    const [second, setSecond] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [audio] = useState(new Audio(Clock));
    const [playing, setPlaying] = useState(false);

    const handleRefresh = (e) => {
        e.stopPropagation();
        if (state === 1) {
            setMinute(pomoTime);
            setSecond(0);
        } else if (state === 2) {
            setMinute(shortTime);
            setSecond(0);
        } else {
            setMinute(longTime);
            setSecond(0);
        }
        setIsActive(false);
    }

    useEffect(() => {
        if (state === 1) {
            setMinute(pomoTime);
            setSecond(0);
            setIsActive(false);
        } else if (state === 2) {
            setMinute(shortTime);
            setSecond(0);
            setIsActive(false);
        } else {
            setMinute(longTime);
            setSecond(0);
            setIsActive(false);
        }
    }, [state, pomoTime, shortTime, longTime]);

    useEffect(() => {
        if (playing) {
            audio.loop = true;
            audio.play()
        }
    }, [playing, audio])

    useEffect(() => {
        let intervalId;
        let time = new Date();
        time.setSeconds(second);
        if (second === 0) {
            setSecond('00');
        }

        if (isActive) {
            intervalId = setInterval(() => {
                if (minute === 0 && time.getSeconds() === 0) {
                    setIsActive(false);
                    if (state === 1) {
                        setMinute(pomoTime);
                        setSecond(0);
                    } else if (state === 2) {
                        setMinute(shortTime);
                        setSecond(0);
                    } else {
                        setMinute(longTime);
                        setSecond(0);
                    }
                    setPlaying(true);
                    setTimeout(() => {
                        setPlaying(false);
                        audio.pause();
                    }, 2500)
                } else if (time.getSeconds() === 0) {
                    time.setSeconds(59);
                    setSecond(time.getSeconds());
                    setMinute(minute - 1);
                } else {
                    if (time.getSeconds() < 11) {
                        time.setSeconds(time.getSeconds() - 1);
                        setSecond('0' + time.getSeconds());
                    } else {
                        setSecond(time.getSeconds() - 1);
                        time.setSeconds(time.getSeconds() - 1)
                    }
                }
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive, minute, second, pomoTime, shortTime, longTime, state, audio])

    return (
        <div className="watch" onClick={() => setIsActive(!isActive)}>
            <div className="time">{minute}:{second}</div>
            <div className="start-pause-button">
                {isActive ? "pause" : "start"}
            </div>
            {isActive ? <div className="refresh" onClick={handleRefresh}>&#x21bb;</div> : <div></div>}
        </div>
    )
}

export default Watch