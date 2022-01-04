import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

export default function DateDemo() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [dateSaved, setDateSaved] = useState(false);
  const [saveStartDate, setSaveStartDate] = useState("");
  const [saveEndDate, setSaveEndDate] = useState("");
  const [placeDate, setPlaceDate] = useState("");

  const search = () => {
    // console.log(startDate.toLocaleString().split(",")[0]);
    setSaveStartDate(startDate.toLocaleString().split(",")[0]);
    setSaveEndDate(endDate.toLocaleString().split(",")[0]);
    setDateSaved(true);
    setSearchInput("");
    setPlaceDate(saveStartDate + " " + saveEndDate);
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndtDate(ranges.selection.endDate);
    // setDateSaved(true);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeDate || "Start date and end date here"}
        />
      </div>

      {searchInput && (
        <div className="w-[425px] mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#707070"]}
            onChange={handleSelect}
          />
          <div className="flex text-center w-[425px] ">
            <button
              className="flex-grow text-gray-500"
              onClick={(e) => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
      {/* {dateSaved && (
        <p>
          {saveStartDate} and {saveEndDate}
        </p>
      )} */}
    </div>
  );
}
