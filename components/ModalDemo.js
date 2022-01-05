import { useState } from "react";
import Modal from "react-modal";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

export default function ModalDemo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [dateSaved, setDateSaved] = useState(false);
  const [saveStartDate, setSaveStartDate] = useState("");
  const [saveEndDate, setSaveEndDate] = useState("");
  const [placeDate, setPlaceDate] = useState("");

  const search = () => {
    // console.log(startDate.toLocaleString().split(",")[0]);
    // setModalIsOpen(false);
    // setSaveStartDate(startDate.toLocaleString().split(",")[0]);
    // setSaveEndDate(endDate.toLocaleString().split(",")[0]);
    // setDateSaved(true);
    // setPlaceDate(saveStartDate + " " + saveEndDate);
  };

  return (
    <div>
      <div
        class="flex bg-white items-center"
        onClick={() => setModalIsOpen(true)}
      >
        <svg
          class="w-6 h-6 text-[#00CD92] pl-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        <input
          id="input-id"
          type="text"
          class="border-2 p-2"
          placeholder="Checkin > Checkout"
          required
        />
      </div>
      <input
        type="submit"
        value="Search"
        class="
          bg-[#00cd92]
          text-white
          rounded-lg
          cursor-pointer
          border
          py-2
          px-4
          text-xl
          font-light
          hover:transform hover:scale-105
        "
        onclick="show_alert()"
      />
      {/* <button onClick={() => setModalIsOpen(true)}>Open modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        customStyles={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "blue",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste
          soluta veniam tempore repellat accusantium dolorem ratione, inventore
          optio id?
        </p>
        <button
          className="bg-gray-200 text-gray-800 p-2 text-xl"
          onClick={() => setModalIsOpen(false)}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
}
