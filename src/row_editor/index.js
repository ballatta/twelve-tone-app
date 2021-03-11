/**
 * Index
 *
 * - Logic
 * - State
 */
import React, { useState } from "react";
import _ from "lodash";
import { NOTES, TABLE_WIDTH, TABLE_HEIGHT } from "./constants";
import {
  inversion,
  retrograde,
  retrogradeInversion,
  populateMatrix,
} from "./ttoneFuncs";

export const RowEditor = () => {
  // index is the column up next to be filled
  const [index, setIndex] = useState(0);
  // an array of numbers representing the prime row
  const [primeRow, setPrimeRow] = useState([]);
  const [rootNote, setRootNote] = useState(null);

const subOffset = (num) => (num - rootNote + 12) % 12;
const addOffset = (num) => (num + rootNote) % 12;

  const chooseNote = (noteIndex) => {
    /**
     * Event handler for note buttons to assemble tone row
     */
    if (_.isNil(rootNote)) {
      setRootNote(noteIndex);
      setPrimeRow([...primeRow, 0]);
    } else {
      setPrimeRow([...primeRow, noteIndex]);
      setIndex(index + 1);
    }
  };

  const resetChart = () => {
    /**
     * Event handler to restore original application state
     */
    setPrimeRow([]);
    setIndex(0);
  };
// TODO: make populateMatrix populate entire Matrix
const fullMatrix = populateMatrix(primeRow)

  // poulate columns with data
  // TODO: refactor into nested array.map() calls
  const columns = [];
  for (let row = 0; row < TABLE_HEIGHT; row++) {
    const myRow = [];
    for (let col = 0; col < TABLE_WIDTH; col++) {
      if (row === 0 && col < index) {
        myRow.push(<td>{NOTES[addOffset(primeRow[col], rootNote)]}</td>);
      } else if (!_.isNil(fullMatrix[row][col])) {
        myRow.push(<td>{NOTES[addOffset(fullMatrix[row][col])]}</td>);
      } else {
        myRow.push(<td>{col}</td>);
      }
    }
    columns.push(<tr>{myRow}</tr>);
  }
  return (
    <div>
      <table>{columns}</table>;
      {NOTES.map((note, i) => {
        const noteIndex = subOffset(i, rootNote || 0)
        return <button
          key={noteIndex}
          disabled={primeRow.includes(noteIndex)}
          onClick={() => chooseNote(noteIndex)}
        >
          {note}
        </button>;
      })}
      <button onClick={resetChart}>Reset</button>
      <button onClick={() => {}}>Submit</button>
    </div>
  );
};
