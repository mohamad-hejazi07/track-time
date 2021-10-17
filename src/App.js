import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Timertracker from "./TimeTracker";
import Overview from "./Overview";
import Statistic from "./Statistic";

function App() {
  /*Get the Data from localStorage if exist and save it in the List if not return empty list */
  const [timeList, setTimeList] = useState(() => {
    const storagedData = localStorage.getItem("timeList");
    return storagedData ? JSON.parse(storagedData) : [];
  });

  const history = useHistory();
  const location = useLocation();

  /*Update The data in the Local Storage after every change that happend on it */
  useEffect(() => {
    localStorage.setItem("timeList", JSON.stringify(timeList));
  }, [timeList]);

  return (
    <div className="App">
      <div className="container box">
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            {/* Add the Path for each List item */}
            <li>
              <a onClick={() => history.push("/timetracker")}>Timertracker</a>
            </li>
            <li>
              <a onClick={() => history.push("/overview")}>Overview</a>
            </li>
            <li>
              <a onClick={() => history.push("/statistic")}>Statistic</a>
            </li>
          </ul>
        </nav>
        {/* Check the Path name and Render only the needed Component */}
        {location.pathname === "/timetracker" && <Timertracker onEndTime={(time) => setTimeList([...timeList, time])} />}
        {location.pathname === "/overview" && <Overview timeList={timeList} onUpdate={(records) => setTimeList(records)} />}
        {location.pathname === "/statistic" && <Statistic timeList={timeList} />}
      </div>
    </div>
  );
}

export default App;
