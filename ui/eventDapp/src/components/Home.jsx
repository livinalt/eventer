import React from 'react'
// import Footer from './sub-componenets/Footer';
import movie from "../assets/events/movie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div className="">
      {/* Hero section */}
      <section className="bg-[#3D70FF] h-[90vh]">
        <div className="">
          <h1 className="text-center text-6xl font-medium pt-40">
            Block Event
          </h1>
          <h4 className="text-center text-2xl">
            Are you ready to attend the next event?
          </h4>
          <p className="text-center text-lg mt-4">
            Block Event is your gateway to schedules onchain- Create, schedule
            and manage your events
          </p>
          <div className="flex justify-between mx-auto py-1 bg-white w-4/12 rounded-full mt-10">
            <input
              className=" p-3 ml-4 outline-none"
              type="text"
              name=""
              id=""
              placeholder="search for any event, location and creator"
            />
            <button className="bg-[#3D70FF] py-3 px-8 mr-1 rounded-full text-white">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-center font-semibold text-2xl m-10">
          Explore Categories
        </h3>
        <div className="flex justify-center mx-auto w-auto">
          <div>
            <img src="" alt="entertainment" />
            <span className="text-sm">Entertainment</span>
          </div>
          <div>
            <img src="" alt="entertainment" />
            <span className="text-sm">Entertainment</span>
          </div>
          <div>
            <img src="" alt="culture" />
            <span className="text-sm">Cultural & Arts</span>
          </div>
          <div>
            <img src="" alt="sport" />
            <span className="text-sm">Sports & Fitness</span>
          </div>
          <div>
            <img src="" alt="tech" />
            <span className="text-sm">Technology & Innovation</span>
          </div>
          <div>
            <img src="" alt="leisure" />
            <span className="text-sm">Travel & Adventure</span>
          </div>
        </div>
      </section>

      <section className="bg-[#ECF1FF] p-16">
        <h3 className="text-center font-semibold text-2xl m-10">
          Popular Events
        </h3>
        {/* rows */}
        <div className="">
          <div className="flex justify-center items-center gap-6">
            {/* event card */}
            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="px-40 py-4 mt-5 text-sm font-regular ml-[426px] rounded-full bg-[#3D70FF] text-white">
          See More
        </button>
      </section>

      <section className="bg-[#ECF1FF] p-8 m-10 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-3xl ml-10">
            Create Your events and <br />
            conferences with Block Event
          </h4>
          <p className="ml-10 text-lg">
            Got a show, event, activity or a great experience?
            <br /> Partner with us & get listed on Eventer
          </p>
        </div>
        <div>
          <button className="px-10 py-3 text-sm font-regular rounded-full bg-[#3D70FF] text-white">
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            Create Event
          </button>
        </div>
      </section>

      {/* happening today */}

      <section className="bg-[#ECF1FF] p-16">
        <h3 className="text-center font-semibold text-2xl m-10">
          Happening Today
        </h3>
        {/* rows */}
        <div className="">
          <div className="flex justify-center items-center gap-6">
            {/* event card */}
            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[300px] h-72 shadow-slate-400 flex flex-col justify-center align-middle">
              <div className="w-[280px]">
                <img
                  src={movie}
                  alt="leisure"
                  className="w-[250px] mx-6 pr-3"
                />
                <div className="flex justify-center items-center gap-2 mx-4 mt-2">
                  <div className="ml-1 flex flex-col items-center justify-start">
                    <p className="text-lg font-semibold text-[#53B052]">Nov</p>
                    <p className="text-lg font-semibold text-[#53B052]">28</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Ethereum Foundation Meet up
                    </p>
                    <p className="text-[10px] font-medium text-[#2D2D2D]">
                      Cockrane Center Main Lounge, Zurich
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        8:00 GMT
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        100 Attending
                      </p>
                      <p className="text-[10px] text-[#999393]">
                        <span className="ml-1">
                          <FontAwesomeIcon icon={faTicket} />
                        </span>
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer card */}

      <section className="bg-[#282A31] text-white p-8 m-10 flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-3xl ml-10">
            Subscribe to our Newsletter
          </h4>
          <p className="ml-10 text-lg">
            Receive our weekly newsletter & updates with new events from your{" "}
            <br />
            favourite organizers & venues.
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="enter your email address"
            className=" p-3 ml-4 outline-none text-black"
          />
          <button className="px-10 py-3 text-sm font-regular rounded-full bg-[#3D70FF] text-white">
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home