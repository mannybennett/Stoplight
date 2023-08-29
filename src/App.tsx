import { useState } from 'react';

enum Numbers {
  One = 1,
  Two = 2,  
  Three = 3
}

enum Mode {
  Random = "random",
  Ordered = "ordered"
}

function App() {
  const [number, setNumber] = useState<Numbers>(Numbers.One);
  const [mode, setMode] = useState<Mode>(Mode.Random)

  const orderedClick = (): void => {
    if (number === Numbers.Three) {
      return setNumber(Numbers.One)
    } else if (number === Numbers.One) {
      return setNumber(Numbers.Two)
    } else {
      return setNumber(Numbers.Three)
    };
  };

  const randomClick = (): void => {
    let randomNumber: number = Math.random();
    if (randomNumber <= 0.33 && number !== Numbers.One) {
      return setNumber(Numbers.One)
    } else if (randomNumber > 0.33 && randomNumber <= 0.66 && number !== Numbers.Two) {
      return setNumber(Numbers.Two)
    } else if (number !== Numbers.Three) {
      return setNumber(Numbers.Three)
    } else {
      return setNumber(Numbers.One)
    }
  };

  const modeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as Mode)
  }

  return (
    <main className="mainContainer">
      <h1>Stoplight</h1>
      <div className="contentContainer">
        <div className="stoplight">
          <div className={number === Numbers.One ? "red" : "circle"} />
          <div className={number === Numbers.Two ? "yellow" : "circle"} />
          <div className={number === Numbers.Three ? "green" : "circle"} />
        </div>
        <div className="interactables">
          <button onClick={mode === Mode.Random ? randomClick : orderedClick}>CHANGE</button>
          <div className="modes">
            <div className="inputGroup random">
              <input onChange={modeChange} type="radio" name="mode" value={Mode.Random} checked={mode === Mode.Random} />
              <label htmlFor="random">Random</label>
            </div>
            <div className="inputGroup ordered">
              <input onChange={modeChange} type="radio" name="mode" value={Mode.Ordered} checked={mode === Mode.Ordered} />
              <label htmlFor="ordered">Ordered</label>
            </div>            
          </div>
        </div>        
      </div>
    </main>
  )
};

export default App;