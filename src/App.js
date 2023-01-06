import { useState, useContext } from 'react';
import './App.css'
import Modal from './components/modal/Modal'
import State from './components/state/State';
import Watch from './components/watch/Watch';
import { ThemeContext } from './components/themeContext/Theme';

import settingIcon from './img/image-settings.svg';

function App() {
  const [isActive, setIsActive] = useState(false);
  
  const open_close = () => {
    setIsActive(!isActive);
  }

  const [{ font }] = useContext(ThemeContext);
  const [state, setState] = useState(1);
  const [pomoTime, setPomoTime] = useState(30);
  const [shortTime, setShortTime] = useState(5);
  const [longTime, setLongTime] = useState(15);

  return (
    <div className="App" style={ font }>
      <Modal 
        isActive={isActive} open_close={open_close} 
        setPomoTime={setPomoTime} 
        setShortTime={setShortTime} 
        setLongTime={setLongTime}
      />
      
      <div className="pomodoro">
        <h1>pomodoro</h1>

        <State state={state} setState={setState} />
        <Watch state={state} pomoTime={pomoTime} shortTime={shortTime} longTime={longTime} />

        <div className="setting">
          <img src={settingIcon} alt="setting icon" onClick={open_close} />
        </div>
      </div>

    </div>
  );
}

export default App;
