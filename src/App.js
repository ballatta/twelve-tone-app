import React, { useState } from 'react'
import './App.css';

const NOTES = ['A', 'A#/Bb', 'B', 'C', 'C#/Db',
  'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab']
const TABLE_WIDTH = 12
const TABLE_HEIGHT = 12

const App = () => {
  const [index, setIndex] = useState(0);
  const [primeRow, setPrimeRow] = useState([]);

  const chooseNote = (note) => {
    setPrimeRow([...primeRow, note])
    setIndex(index + 1)
  }

  const rows = [];
  for (let row = 0; row < TABLE_HEIGHT; row++) {
    const column = [];
    for (let col = 0; col < TABLE_WIDTH; col++) {
      if (row === 0 && col < index) {
        column.push(<td>{primeRow[col]}</td>)
      } else {
        column.push(<td>{col}</td>);
      }
    }
    rows.push(<tr>{column}</tr>);
  }
  const table = (
    <table>
      {rows}
    </table>
  )
  const buttons = NOTES.map(note =>
    <button disabled={primeRow.includes(note)} onClick={() => chooseNote(note)}>{note}</button>
  );
  const resetChart = () => {
    setPrimeRow([])
    setIndex(0)
  }
  const resetButton = (
    <button onClick={resetChart}>Reset</button>
  )
  const submitButton = (
    <button>Submit</button>
  )
    return (
    <div>
      {table}
      {buttons}
      {resetButton}
      {submitButton}
    </div>
  );
}

export default App;