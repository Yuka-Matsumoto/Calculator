'use client'; // クライアントコンポーネント

import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState(''); // 入力値

  // 数値と演算子を入力
  const handleInput = (value: string) => {
    setInput(input + value);
  };

  // 計算結果を表示
  const handleCalculate = () => {
    try {
      const sqrtMatch = input.match(/√(\d+)/);
      let expression = input;

      if (sqrtMatch) {
        const sqrtValue = Math.sqrt(Number(sqrtMatch[1]));
        expression = input.replace(`√${sqrtMatch[1]}`, sqrtValue.toString());
      }

      const res = eval(expression.replace('^', '**'));
      setInput(res.toString());
    } catch (err) {
      setInput('Error');
    }
  };

  // 入力クリア
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator p-4">
      <div className="output mb-4">
        <input
          type="text"
          className="input p-2 border"
          value={input}  // 計算結果もここに表示
          readOnly
        />
      </div>
      <div className="buttons grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((btn) => (
          <button
            key={btn}
            className="btn p-4 border"
            onClick={() => handleInput(btn)}
          >
            {btn}
          </button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button
            key={btn}
            className="btn p-4 border"
            onClick={() => handleInput(btn)}
          >
            {btn}
          </button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button
            key={btn}
            className="btn p-4 border"
            onClick={() => handleInput(btn)}
          >
            {btn}
          </button>
        ))}
        {['0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            className="btn p-4 border"
            onClick={() =>
              btn === '=' ? handleCalculate() : handleInput(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button className="btn p-4 border" onClick={() => handleInput('^')}>
          べき乗
        </button>
        <button className="btn p-4 border" onClick={() => handleInput('%')}>
          剰余
        </button>
        <button className="btn p-4 border" onClick={() => handleInput('√')}>
          √
        </button>
        <button className="btn p-4 border" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}
