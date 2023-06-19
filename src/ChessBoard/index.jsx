import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

function ChessBoard({num}) {

  const [chessBoard, setChessBoard] = useState([]);

  useEffect(() => {

      const A = [];
      for (let i = 0; i < num; i++) {
          const row = Array.from({ length: num });
          A.push(row);
      }
      setChessBoard(A);
  }, []);

  return (
      <>
          {chessBoard.length > 0 &&
              chessBoard.map((row, row_idx) => {
                  return (
                      <div className="row" key={row_idx}>
                          {row.map((c, column_idx) => {
                              return (
                                  <div
                                      className={`box ${(row_idx + column_idx) % 2 === 0 ? "black" : "white"}`}
                                      key={column_idx}
                                  >
                                  </div>
                              );
                          })}
                      </div>
                  );
              })}
      </>
  )
}



export default ChessBoard