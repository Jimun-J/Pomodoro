import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext/Theme';
import './State.css';

const State = ({ state, setState}) => {
    const [{ color }] = useContext(ThemeContext);

    const setCurrentState = (e) => {
        if (e.target.classList.contains('pomo')) {
            setState(1);
        } else if (e.target.classList.contains("short-break")) {
            setState(2);
        } else {
            setState(3);
        }
    }

    return (
        <div className="current-state">
            <div className="pomo" onClick={setCurrentState} style={state === 1 ? color : {}}>pomodoro</div>
            <div className="short-break" onClick={setCurrentState} style={state === 2 ? color : {}}>short break</div>
            <div className="long-break" onClick={setCurrentState} style={state === 3 ? color : {}}>long break</div>
        </div>
    )
}

export default State