import React, { useState, useCallback } from "react";
import "./styles.css";

function Main() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");
  const [error, setError] = useState(false);

  function verifyBinary(e) {
    setError(false);
    const { value } = e.target;
    if (bin.length > 0) {
      let valueReal = value[value.length - 1];
      if (valueReal !== "0" && valueReal !== "1") {
        setError(true);
        setBin(value.slice(0, value.length - 1));
      }
    }
    if (e.keyCode === 13) {
      bin2Dec();
    }
  }

  const bin2Dec = useCallback(() => {
    const decimal = bin.split("").reduce((acc, cur, i, arr) => {
      acc += parseInt(cur) * Math.pow(2, arr.length - 1 - i);
      return acc;
    }, 0);

    setDec(decimal);
    setBin("");
  }, [bin]);

  return (
    <div className="container">
      <p className="title">Bin2Dec Converter</p>
      <div className="wrapper">
        <p>Binary:</p>
        <div className="input-container">
          <input
            className="input-text"
            onChange={(e) => setBin(e.target.value)}
            value={bin}
            type="text"
            onKeyUp={verifyBinary}
          />
          {error && <p class="error">Only binaries are allowed</p>}
        </div>
      </div>

      <div className="wrapper">
        <p>Decimal:</p>
        <div className="input-container">
          <input className="input-text" type="text" readOnly value={dec} />
        </div>
      </div>

      <div>
        <button className="actions" onClick={bin2Dec}>
          Converter
        </button>
      </div>
    </div>
  );
}

export default Main;
