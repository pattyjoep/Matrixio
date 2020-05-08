import React from "react";
import "./style.css";

export default function newMatrix(props) {

  return (
    <div>
      <div>
        <br />
        <br />
      </div>

      <table>
        <th>
          <h4>{props.title}</h4>
        </th>
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
    </div>
  );
}
