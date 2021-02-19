/**
 * Index
 *
 * - Logic
 * - State
 */
import React, { useState } from "react";
import { NOTES, TABLE_WIDTH, TABLE_HEIGHT } from "./constants";
import { inversion, retrograde, retrogradeInversion } from "./ttoneFuncs";

export const RowEditor = () => {
  // index is the column up next to be filled
  const [index, setIndex] = useState(0);
  // an array of numbers representing the prime row
  const [primeRow, setPrimeRow] = useState([]);

  const chooseNote = (noteIndex) => {
    /**
     * Event handler for note buttons to assemble tone row
     */
    setPrimeRow([...primeRow, noteIndex]);
    setIndex(index + 1);
  };

  const resetChart = () => {
    /**
     * Event handler to restore original application state
     */
    setPrimeRow([]);
    setIndex(0);
  };

  // poulate rows with data
  // TODO: refactor into nested array.map() calls
  const rows = [];
  for (let row = 0; row < TABLE_HEIGHT; row++) {
    const column = [];
    for (let col = 0; col < TABLE_WIDTH; col++) {
      if (row === 0 && col < index) {
        column.push(<td>{NOTES[primeRow[col]]}</td>);
      } else {
        column.push(<td>{col}</td>);
      }
    }
    rows.push(<tr>{column}</tr>);
  }
  return (
    <div>
      <table>{rows}</table>;
      {NOTES.map((note, i) => (
        <button
          key={i}
          disabled={primeRow.includes(i)}
          onClick={() => chooseNote(i)}
        >
          {note}
        </button>
      ))}
      <button onClick={resetChart}>Reset</button>
      <button>Submit</button>
    </div>
  );
};
