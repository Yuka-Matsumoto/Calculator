'use client'; // クライアントコンポーネント

import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState(''); // 入力値
  const [result, setResult] = useState(''); // 計算結果

  // 数値と演算子を入力
  const handleInput = (value: string) => {
    setInput(input + value);
  };

  // 計算結果を表示
  const handleCalculate = () => {
    try {
      // 四則演算、べき乗、平方根、剰余をevalで処理
      const res = eval(input.replace('^', '**').replace('√', 'Math.sqrt'));
      setResult(res.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  // 入力クリア
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator p-4">
      <div className="output mb-4">
        <input
          type="text"
          className="input p-2 border"
          value={input}
          readOnly
        />
        <div className="result p-2">{result}</div>
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
