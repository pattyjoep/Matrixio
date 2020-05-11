import React, { useState, useEffect } from "react";
import "./style.css";

export default function NewMatrix(props) {
  console.log("NewMatrix props", props);

  const [mergeTableHead, setMergeTableHead] = useState();

  useEffect(() => {
    setMergeTableHead(props.columns + 1);
  }, [props]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={mergeTableHead} className="text-center">
            {props.newMatrixTitle}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          {props.columnsArray.map(column => (
            <th contentEditable="true" placeholder="Enter Here"></th>
          ))}
        </tr>
        {props.rowsArray.map(row => {
          return (
            <tr>
              <th contentEditable="true" placeholder="Enter Here"></th>
              {props.columnsArray.map(column => (
                <td>
                  <div className="status-card">
                    <div
                      className="status-card-front"
                      onClick={props.changeStatus}
                    >
                      X
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
