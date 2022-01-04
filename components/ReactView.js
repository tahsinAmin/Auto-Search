import React from "react";

import { FaPlaneDeparture, FaWarehouse } from "react-icons/fa";

export default function ReactView() {
  return (
    <div className=''>
      <nav className='bg-blue-900 text-white flex justify-between items-center px-4 py-4'>
        <div className='logo'>
          <img
            className='max-w-full nav-row-logo'
            loading='lazy'
            src='/img/header_logo.svg'
            alt='rentByOwner'
            width='182'
            height='26'
          />
        </div>

        <div className='others sm:block flex space-x-4'>
          <a href='' className='tracking-wider font-regular text-lg'>
            Rentals
            <i className='fas fa-chevron-down'></i>
          </a>
          <a href='' className='tracking-wider font-regular text-lg'>
            Nearby <i className='fas fa-chevron-down'></i>
          </a>
          <a href='' className='tracking-wider font-regular text-lg'>
            Destinations <i className='fas fa-chevron-down'></i>
          </a>
          <button
            className='
            bg-[#00CD92]
            py-2
            px-3
            rounded-lg
            font-regular
            text-white text-lg
          '
          >
            Find a Vacation Rental
          </button>
        </div>
        <svg
          className='block h-6 w-6 sm:hidden'
          xmlns='https:www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4
        6h16M4 12h16M4 18h16'
          />
        </svg>
      </nav>
      {/* bg-[url('img/agadir.jpg')] bg-cover bg-center */}
      <div
        className='
        hero
        flex flex-col
        justify-between
        h-[645px]
        bg-gray-800
        p-10
      '
      >
        <div className='badge flex justify-end text-white'>
          <div
            className='
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
          '
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              ></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
            </svg>
            <span className='font-semibold rounded'> Agadir | Morocco</span>
          </div>
        </div>
        <div className='input-form flex justify-left w-1/2'>
          <div
            className='
            input
            p-4
            px-8
            field
            bg-white
            rounded-lg
            text-black
            flex flex-col
            space-y-10
          '
          >
            <h1 className='text-4xl font-bold'>
              <strike>
                Uncover best flights with RentByOwner
                <sup className='text-sm'>TM</sup>
              </strike>
            </h1>
            <div className='grid grid-cols-2 gap-1'>
              <input
                type='text'
                placeholder='Going from?'
                className='p-1 border-gray-600 border-b-2 outline-none'
              />
              <input
                type='text'
                placeholder='Going to?'
                className='p-1 border-gray-600 border-b-2 outline-none'
              />
              <input
                type='text'
                placeholder='Depart date?'
                className='p-1 border-gray-600 border-b-2 outline-none'
              />
              <input
                type='text'
                placeholder='Return Date'
                className='p-1 border-gray-600 border-b-2 outline-none'
              />
            </div>
            <div>
              <button
                className='bg-gray-700 text-white font-semibold p-2 rounded-lg hover:scale-105 hover:bg-gray-900
              transform
              transition
              duration-300
              ease-out'
                style={{ fontFamily: "Montserrat" }}
              >
                Search Flights
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className='container max-w-7xl mx-auto mt-10'>
        <section className='weather'>
          <h1 className='text-xl font-bold'>
            <strike>Select departing flights</strike>
          </h1>
          <div className='flex space-x-8 mt-4 items-center'>
            <div className='flex space-x-4'>
              <FaPlaneDeparture />
              <h2>
                <b>Hong Kong</b> to <b>Las Vegas</b>
              </h2>
            </div>
            <span>
              Wed <b>17 Nov</b>
            </span>
          </div>
          <div
            className='
            display-weather
            
            rounded-lg
            h-[245px]
            grid grid-cols-4
            gap-4
            p-4
            drop-shadow-xl
          '
          >
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Morning</div>
              </div>
              <div className='temp text-[100px] font-light'>14°</div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <img src='/svg/cloud.svg' alt='' />
                </div>
                <div className='text-2xl font-semibold'>Afternoon</div>
              </div>
              <div className='temp text-[100px] font-light'>4°</div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <div className='icon'>
                    <img src='/svg/cloud-drizzle.svg' alt='' />
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Evening</div>
              </div>
              <div className='temp text-[100px] font-light'>27°</div>
            </div>
            <div
              className='
              rounded-lg
              flex
              justify-between
              px-8
              bg-gray-100
              p-auto
              items-center
              space-x-1
            '
            >
              <div className='icon-text flex flex-col items-center'>
                <div className='icon'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    ></path>
                  </svg>
                </div>
                <div className='text-2xl font-semibold'>Overnight</div>
              </div>
              <div className='temp text-[100px] font-light'>9°</div>
            </div>
          </div>
        </section>
        <section className='filter-flights flex mb-20'>
          <div className='filter w-4/12 mt-4  border-r-2 mr-4 sticky top-0'>
            <div className='flex items-center space-x-2'>
              <svg
                class='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                ></path>
              </svg>
              <h2 className='text-2xl font-medium'>
                <strike>Filter by:</strike>
              </h2>
            </div>
            <div className='mt-6 text-lg'>
              <h3 className='font-medium'>Airports</h3>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span className='truncate'>
                  Hazrat Shahjalal International Airport (DAC)
                </span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span className='truncate'>
                  Hazrat Shahjalal International Airport (DAC)
                </span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span className='truncate'>
                  Hazrat Shahjalal International Airport (DAC)
                </span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span className='truncate'>
                  Hazrat Shahjalal International Airport (DAC)
                </span>
              </div>
            </div>
            <div className='mt-6 text-lg'>
              <h3 className='font-medium'>Airlines</h3>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span>Bangladesh Biman</span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span>Qatar Airways</span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span>Kuwait Airways</span>
              </div>
              <div className='flex space-x-2 items-center mt-2'>
                <input type='checkbox' id='scales' name='scales' />{" "}
                <span>Emirates</span>
              </div>
            </div>
          </div>
          <div className='all-flights w-8/12 flex flex-col space-y-4 mt-4 border-gray-200 text-lg'>
            <div className='flights-found'>5 flights found</div>
            <div className='sort-flights flex space-x-6'>
              <span className='text-gray-600'>Sort by: </span>
              <div className='flex space-x-10 text-blue-600'>
                <div className='flex space-x-1'>
                  <span className=' active text-gray-700 font-semibold'>
                    <strike>Pricing</strike>
                  </span>
                  <div
                    className='h-10 rounded-lg flex cursor-pointer hover:scale-105
              transform
              transition
              duration-300
              ease-out'
                  >
                    <svg
                      class='down-price price-toggle w-7 h-7 text-gray-800 font-semibold'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 17l-4 4m0 0l-4-4m4 4V3'
                      ></path>
                    </svg>
                    <svg
                      class='up-price hidden price-toggle w-7 h-7 text-gray-800 font-semibold'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M8 7l4-4m0 0l4 4m-4-4v18'
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* <span>Duration</span>
                <span>Cheapest</span> */}
              </div>
            </div>

            <div className='flight-lists flex flex-col pl-4 pr-5 drop-shadow-xl'>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div
                className='
              flight-list-item cursor-pointer hover:scale-[102%]
              transform
              transition
              duration-300
              ease-out
              flex
              justify-between
              bg-gray-100
              rounded-lg
              p-3
            '
              >
                <div className='flex flex-col space-y-5'>
                  <div className='badge flex justify-left text-white'>
                    <div
                      className='badge
                    flex space-x-4 items-center
                    bg-gray-700
                    text-white text-xs
                    font-light
                    py-1.5
                    px-3
                    rounded-full
                  '
                    >
                      <FaWarehouse className='h-3 w-3' />
                      <span
                        className='font-bold text-gray-100 text-sm rounded'
                        style={{ fontFamily: "Montserrat" }}
                      >
                        Hazrat Shahjalal International Airport (DAC)
                      </span>
                    </div>
                  </div>
                  <div className='flight-item-info pl-5 flex justify-between items-center'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:15</div>
                      <div className='text-3xl font-light'>DAC</div>
                    </div>
                    <div>
                      <img
                        className='max-w-full nav-row-logo'
                        loading='lazy'
                        src='/img/car-direction.png'
                        alt='rentByOwner'
                        width='182'
                        height='26'
                      />
                    </div>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-5xl font-regular'>00:50</div>
                      <div className='text-3xl font-light'>VAN</div>
                    </div>
                  </div>
                </div>
                <div
                  className='
                flex flex-col
                items-center
                space-y-4
                border-l-2
                px-4
                justify-center
                py-2
              '
                >
                  <div className='text-4xl font-semibold'>
                    $<span style={{ fontFamily: "Catamaran" }}>910</span>
                  </div>
                  <button
                    className='bg-gray-700 text-white font-semibold p-2 px-4 rounded-lg'
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
