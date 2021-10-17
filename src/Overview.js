import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import { convertTime, getTotalSum, convertToDateTime } from "./helper";

export default function Overview({ timeList, onUpdate }) {
  const [records, setRecords] = useState(timeList);

  useEffect(() => {
    onUpdate(records);
  }, [records]);

  /*Delete Record*/
  function deleteRecord(id) {
    setRecords(records.filter((record) => record.id !== id));
  }

  /*Get The wanted Edited Record*/
  function editRecord(id) {
    const index = records.findIndex((record) => record.id === id);
    const newRecords = [...records];
    newRecords[index].edit = !newRecords[index].edit;
    setRecords(newRecords);
  }

  /*Edit Start Time*/
  function editStartTime(id, value) {
    console.log(value);
    const index = records.findIndex((record) => record.id === id);
    const newRecords = [...records];
    newRecords[index].start = value;
    setRecords(newRecords);
  }

  /*Edit End Time*/
  function editEndTime(id, value) {
    const index = records.findIndex((record) => record.id === id);
    const newRecords = [...records];
    newRecords[index].end = value;
    setRecords(newRecords);
  }

  return (
    <div className="container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Sum</th>
            <th>Options</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>{getTotalSum(records)}</th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>
          {records.map(({ id, start, end, edit }) => (
            <tr key={id}>
              <td>
                {!edit ? (
                  convertToDateTime(start)
                ) : (
                  <Datetime
                    initialValue={start}
                    dateFormat={"DD.MM.yyyy"}
                    timeFormat={"HH:mm:ss"}
                    onChange={(value) => editStartTime(id, value._d)}
                  />
                )}
              </td>
              <td>
                {!edit ? (
                  convertToDateTime(end)
                ) : (
                  <Datetime initialValue={end} dateFormat={"DD.MM.yyyy"} timeFormat={"HH:mm:ss"} onChange={(value) => editEndTime(id, value._d)} />
                )}
              </td>
              <td>{convertTime(end - start)}</td>
              <td>
                <p className="buttons">
                  <button className={`button is-small ${!edit ? "is-success" : "is-info"}`} onClick={() => editRecord(id)}>
                    {!edit ? "Edit" : "Finish"}
                  </button>
                  <button className="button is-danger is-small" onClick={() => deleteRecord(id)}>
                    Delete
                  </button>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
