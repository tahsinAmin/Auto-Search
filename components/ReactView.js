import React from "react";

export default function ReactView() {
  return (
    <div>
      <nav className="bg-blue-900 text-white flex justify-between items-center px-4 py-4">
        <div className="logo">
          <img
            className="max-w-full nav-row-logo"
            loading="lazy"
            src="/img/header_logo.svg"
            alt="rentByOwner"
            width="182"
            height="26"
          />
        </div>
        <div className="others hidden sm:block flex space-x-4">
          <a href="" className="tracking-wider font-regular text-lg">
            Rentals
            <i className="fas fa-chevron-down"></i>
          </a>
          <a href="" className="tracking-wider font-regular text-lg">
            Nearby <i className="fas fa-chevron-down"></i>
          </a>
          <a href="" className="tracking-wider font-regular text-lg">
            Destinations <i className="fas fa-chevron-down"></i>
          </a>
          <button
            className="
            bg-[#00CD92]
            py-2
            px-3
            rounded-xl
            font-regular
            text-white text-lg
          "
          >
            Find a Vacation Rental
          </button>
        </div>
        <svg
          className="block h-6 w-6 sm:hidden"
          xmlns="https:www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4
        6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
      <div
        className="
        hero
        flex flex-col
        justify-between
        mx-4
        sm:mx-0
        h-[645px]
        bg-[url('/img/agadir.jpg')] bg-cover bg-center
        p-10
      "
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
            <h1 className="text-3xl font-bold">
              Uncover best flights with RentByOwner
              <sup className="text-sm">TM</sup>
            </h1>
            <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                placeholder="Going from?"
                className="
                border
                p-1
                border-3 border-gray-600 border-t-0 border-l-0 border-r-0
              "
              />
              <input
                type="text"
                placeholder="Going to?"
                className="
                border
                p-1
                border-3 border-gray-600 border-t-0 border-l-0 border-r-0
              "
              />
              <input
                type="text"
                placeholder="Depart date?"
                className="
                border
                p-1
                border-3 border-gray-600 border-t-0 border-l-0 border-r-0
              "
              />
              <input
                type="text"
                placeholder="Return Date"
                className="
                border
                p-1
                border-3 border-gray-600 border-t-0 border-l-0 border-r-0
              "
              />
            </div>
            <div>
              <button className="bg-gray-700 text-white font-semibold p-2 rounded-lg">
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="container max-w-7xl mx-auto mt-10">
        <section className="weather">
          <h1 className="text-3xl font-bold">
            Weather forecast today in Vancouvar, Canada
          </h1>
          <div
            className="
            display-weather
            my-5
            rounded-lg
            h-[245px]
            grid grid-cols-4
            gap-4
            p-4
          "
          >
            <div
              className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
            >
              <div className="icon-text flex flex-col items-center">
                <div className="icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl font-semibold">Morning</div>
              </div>
              <div className="temp text-[100px] font-light">14°</div>
            </div>
            <div
              className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
            >
              <div className="icon-text flex flex-col items-center">
                <div className="icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl font-semibold">Afternoon</div>
              </div>
              <div className="temp text-[100px] font-light">4°</div>
            </div>
            <div
              className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
            >
              <div className="icon-text flex flex-col items-center">
                <div className="icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl font-semibold">Evening</div>
              </div>
              <div className="temp text-[100px] font-light">27°</div>
            </div>
            <div
              className="
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            "
            >
              <div className="icon-text flex flex-col items-center">
                <div className="icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                </div>
                <div className="text-2xl font-semibold">OVernight</div>
              </div>
              <div className="temp text-[100px] font-light">9°</div>
            </div>
          </div>
        </section>
        <section className="bflex flex-col space-y-4 border-gray-200 text-xl">
          <div className="sort-flights flex space-x-6">
            <span className="text-gray-600">Sort by: </span>
            <div className="flex space-x-10 text-blue-600">
              <span className="underline active text-gray-700 font-semibold underline">
                Recommended
              </span>
              <span>Duration</span>
              <span>Cheapest</span>
            </div>
          </div>
          <div className="flights-found">5 flights found</div>
          <div className="flight-lists flex flex-col space-y-2">
            <div
              className="
              flight-list-item
              flex
              justify-between
              bg-gray-400
              mb-10
              border border-2
              rounded-xl
              p-4
            "
            >
              <div className="flex flex-col space-y-2">
                <div className="badge flex justify-left text-white">
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span className="font-semibold rounded">
                      {" "}
                      Agadir | Morocco
                    </span>
                  </div>
                </div>
                <div className="flight-item-info px-2.5 flex">
                  <div>Flight 1</div>
                  <div>icon</div>
                  <div>Flight 2</div>
                </div>
              </div>
              <div
                className="
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              "
              >
                <div className="text-4xl font-semibold">৳ 91,000</div>
                <button className="bg-gray-700 text-white font-medium p-2 px-4 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
