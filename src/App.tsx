import { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState<number>(0);

  const handleClick = () => {
    if (number === 0 || number === 3) {
      return setNumber(1)
    } else if (number === 1) {
      return setNumber(2)
    } else {
      return setNumber(3)
    }
  };

  useEffect(() => {
    console.log("Number", number)
  }, [number]);

  return (
    <main className="mainContainer">
      <h1>Stoplight</h1>
      <div className="contentContainer">
        <div className="stoplight">
          <div className={number === 1 ? "red" : "circle"} />
          <div className={number === 2 ? "yellow" : "circle"} />
          <div className={number === 3 ? "green" : "circle"} />
        </div>
        <div className="interactables">
          <button onClick={handleClick}>CHANGE</button>
          <div className="modes">
            <div>
              <input type="radio" name="mode" value="random" />
              <label htmlFor="random">Random</label>
            </div>
            <div>
              <input type="radio" name="mode" value="ordered" />
              <label htmlFor="ordered">Ordered</label>
            </div>            
          </div>
        </div>        
      </div>
    </main>
  )
};

export default App;