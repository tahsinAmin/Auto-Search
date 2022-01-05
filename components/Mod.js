import React from "react";

export default function Mod() {
  return (
    <div>
      <div
        className="
        hero
        flex flex-col
        justify-between
        h-[645px]
        p-10
      "
        style={{
          backgroundImage: "url(/img/agadir.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="badge flex justify-end text-white">
          <div
            className="
            badge
            flex
            bg-gray-800
            text-white text-xs
            font-light
            py-1.5
            px-3
            items-center
            space-x-1
            rounded-full
          "
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="font-semibold rounded"> Agadir | Morocco</span>
          </div>
        </div>
        <div className="input-form flex justify-left w-1/2">
          <div
            className="
            input
            p-4
            px-8
            field
            bg-white
            rounded-lg
            text-black
            flex flex-col
            space-y-10
          "
          >
            <h1 className="text-4xl font-bold">
              <strike>
                Uncover best flights with RentByOwner
                <sup className="text-sm">TM</sup>
              </strike>
            </h1>
            <div className="grid grid-cols-2 gap-1">
              {/* <input
              type="text"
              placeholder="Going from?"
              className="p-1 border-gray-600 border-b-2 outline-none"
            />
            <input
              type="text"
              placeholder="Going to?"
              className="p-1 border-gray-600 border-b-2 outline-none"
            /> */}
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
                  class="p-1 border-gray-600 border-b-2 outline-none"
                  placeholder="Depart date  &amp; Return Date"
                  required
                />
              </div>

              {/* <input
              type="text"
              placeholder="Return Date"
              className="p-1 border-gray-600 border-b-2 outline-none"
            /> */}
            </div>
            <div>
              <button
                className="bg-gray-700 text-white font-semibold p-2 rounded-lg hover:scale-105 hover:bg-gray-900
              transform
              transition
              duration-300
              ease-out"
                style={{ fontFamily: "Montserrat" }}
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 bg-opacity-50 absolute inset-0">
        <div className="bg-gray-200">This is the modal</div>
      </div>
    </div>
  );
}
