import React, { useContext, useRef, useState } from 'react'
import './Modal.css'
import { ThemeContext } from '../themeContext/Theme';

const Modal = ({ isActive, open_close, setPomoTime, setShortTime, setLongTime }) => {
    const fontOneSelected = {
        backgroundColor: 'black',
        color: '#EDF1FA',
        fontFamily: "'Ubuntu', sans-serif"
    }
    const fontTwoSelected = {
        backgroundColor: 'black',
        color: '#EDF1FA',
        fontFamily: "'Roboto Slab', serif"
    }
    const fontThreeSelected = {
        backgroundColor: 'black',
        color: '#EDF1FA',
        fontFamily: "'Nunito', sans-serif"
    }

    const [{ color, colorTheme, fontTheme, setFontTheme, setColorTheme}, setColorScheme, setFontScheme] = useContext(ThemeContext);
    const [isSet, setIsSet] = useState(true);
    const inputOne = useRef(null);
    const inputTwo = useRef(null);
    const inputThree = useRef(null);

    const checkColor = (number) => {
        if (number === 1) {
            setColorTheme(1)
        } else if (number === 2) {
            setColorTheme(2)
        } else {
            setColorTheme(3)
        }
    }

    const checkFont = (number) => {
        if (number === 1) {
            setFontTheme(1)
        } else if (number === 2) {
            setFontTheme(2)
        } else {
            setFontTheme(3)
        }
    }

    const apply = () => {
        let pomoTime;
        let shortTime;
        let longTime;

        if (Number(inputOne.current.value) === 0) {
            pomoTime = 30;
        } else {
            pomoTime = Math.floor(Number(inputOne.current.value))
        }

        if (Number(inputTwo.current.value) === 0) {
            shortTime = 5;
        } else {
            shortTime = Math.floor(Number(inputTwo.current.value))
        }

        if (Number(inputThree.current.value) === 0) {
            longTime = 15;
        } else {
            longTime = Math.floor(Number(inputThree.current.value))
        }

        if (!((pomoTime < 61 && pomoTime > 0) && 
            (shortTime < 61 && shortTime > 0) &&
            (longTime < 61 && longTime > 0))) {
            setIsSet(false);
        } else {
            setIsSet(true);
            setPomoTime(pomoTime);
            setShortTime(shortTime);
            setLongTime(longTime);
            setFontScheme();
            setColorScheme();
            inputOne.current.value = '';
            inputTwo.current.value = '';
            inputThree.current.value = '';
            open_close();
        }
       
    }

    return (
        <div className="pop-up" style={isActive ? { display: "initial" } : { display: "none" }}>
            <div className="modal">
                {/* title of the settings */}
                <div className="title">
                    <div>Settings</div>
                </div>
                <hr />

                {/* time setting section */}
                <div className="time-setting">
                    <div>Time (minutes)</div>
                    <div className="inputs">
                        <div>
                            <label>pomodoro</label><br />
                            <input ref={inputOne} type="number" name="pomodoro" min="1" max="60" placeholder="30" step="1" />
                        </div>
                        <div>
                            <label>short-break</label><br />
                            <input ref={inputTwo} type="number" name="short-break" min="1" max="60" placeholder="5" step="1" />
                        </div>
                        <div>
                            <label>long-break</label><br />
                            <input ref={inputThree} type="number" name="long-break" min="1" max="60" placeholder="15" step="1" />
                        </div>
                    </div>
                    { isSet ? <div></div> : <div className="warning">Please Choose Between 1-60</div>}
                </div>
                <hr />

                {/* font setting section */}
                <div className="font-setting">
                    <div>Fonts</div>
                    <div className="fonts">
                        {   
                            fontTheme === 1 ? 
                            <div onClick={() => checkFont(1)} style={ fontOneSelected }>Aa</div> : 
                            <div onClick={() => checkFont(1)} style={{ fontFamily: "'Ubuntu', sans-serif"}}>Aa</div>
                        }
                        {
                            fontTheme === 2 ? 
                            <div onClick={() => checkFont(2)} style={ fontTwoSelected }>Aa</div> : 
                            <div onClick={() => checkFont(2)} style={{ fontFamily: "'Roboto Slab', serif"}}>Aa</div>
                        }
                        {
                            fontTheme === 3 ? 
                            <div onClick={() => checkFont(3)} style={ fontThreeSelected }>Aa</div> : 
                            <div onClick={() => checkFont(3)} style={{ fontFamily: "'Nunito', sans-serif"}}>Aa</div>
                        }
                    </div>
                </div>
                <hr />

                {/* theme setting section */}
                <div className="theme-setting">
                    <div>Themes</div>
                    <div className="themes">
                        {colorTheme === 1 ? <div onClick={() => checkColor(1)}>&#10003;</div> : <div onClick={() => checkColor(1)}></div>}
                        {colorTheme === 2 ? <div onClick={() => checkColor(2)}>&#10003;</div> : <div onClick={() => checkColor(2)}></div>}
                        {colorTheme === 3 ? <div onClick={() => checkColor(3)}>&#10003;</div> : <div onClick={() => checkColor(3)}></div>}
                    </div>
                </div>

                {/* apply button */}
                <div className="apply-button">
                    <button style={ color } onClick={apply}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

