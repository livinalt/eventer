import React from 'react'
// import Footer from './sub-componenets/Footer';

const Home = () => {
  return (
    <div className="">
      {/* Hero section */}
      <section className="bg-[#3D70FF] h-[100vh]">
        <div className="">
          <h1 className="text-center text-6xl font-medium pt-40">
            Block Event
          </h1>
          <h4 className="text-center text-2xl">
            Are you ready to attend the next event?
          </h4>
          <p className="text-center text-lg">
            Block Event is your gateway to schedules onchain- Create, schedule
            and manage your events
          </p>
          <div className='flex justify-between mx-auto py-1 bg-white w-4/12 rounded-full'>
            <input
              className=" p-3 ml-4 outline-none"
              type="search"
              name=""
              id=""
              placeholder="search for any event, location and creator"
            />
            <button className='bg-[#3D70FF] py-3 px-8 mr-1 rounded-full text-white'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <h3>Explore Categories</h3>
        <div>
          <div>
            <img src="" alt="entertainment" />
            <span>Entertainment</span>
          </div>
          <div>
            <img src="" alt="entertainment" />
            <span>Entertainment</span>
          </div>
          <div>
            <img src="" alt="culture" />
            <span>Cultural & Arts</span>
          </div>
          <div>
            <img src="" alt="sport" />
            <span>Sports & Fitness</span>
          </div>
          <div>
            <img src="" alt="tech" />
            <span>Technology & Innovation</span>
          </div>
          <div>
            <img src="" alt="leisure" />
            <span>Travel & Adventure</span>
          </div>
        </div>
      </section>

      <section>
        <h3>Popular Events</h3>
        {/* rows */}
        <div className="flex justify-center items-center">
          {/* event card */}
          <div>
            <div>
              <img src="" alt="leisure" />
              <div>
                <div>
                  <p>Nov</p>
                  <p>28</p>
                </div>
                <div>
                  <p>Ethereum Foundation Meet up</p>
                  <p>Cockrane Center Main Lounge, Zurich </p>
                  <div>
                    <p>
                      <span>
                        <img src="" alt="calendar" />
                      </span>
                      8:00 GMT
                    </p>
                    <p>
                      <span>
                        <img src="" alt="group" />
                      </span>
                      100 Attending
                    </p>
                    <p>
                      <span>
                        <img src="" alt="ticket" />
                      </span>
                      Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="leisure" />
              <div>
                <div>
                  <p>Nov</p>
                  <p>28</p>
                </div>
                <div>
                  <p>Ethereum Foundation Meet up</p>
                  <p>Cockrane Center Main Lounge, Zurich </p>
                  <div>
                    <p>
                      <span>
                        <img src="" alt="calendar" />
                      </span>
                      8:00 GMT
                    </p>
                    <p>
                      <span>
                        <img src="" alt="group" />
                      </span>
                      100 Attending
                    </p>
                    <p>
                      <span>
                        <img src="" alt="ticket" />
                      </span>
                      Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="leisure" />
              <div>
                <div>
                  <p>Nov</p>
                  <p>28</p>
                </div>
                <div>
                  <p>Ethereum Foundation Meet up</p>
                  <p>Cockrane Center Main Lounge, Zurich </p>
                  <div>
                    <p>
                      <span>
                        <img src="" alt="calendar" />
                      </span>
                      8:00 GMT
                    </p>
                    <p>
                      <span>
                        <img src="" alt="group" />
                      </span>
                      100 Attending
                    </p>
                    <p>
                      <span>
                        <img src="" alt="ticket" />
                      </span>
                      Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>See More</button>
      </section>

      <section>
        <div>
          <h4>Create Your events and conferences with Block Event</h4>
          <p>
            Got a show, event, activity or a great experience? Partner with us &
            get listed on Eventify
          </p>
        </div>
        <div>
          <button>
            <span>
              <img src="" alt="create-icon" />
            </span>
            Create Event
          </button>
        </div>
      </section>

      <section>
        <div>
          <h3>Happening Today</h3>
          <div>
            <div>
              <img src="" alt="leisure" />
              <div>
                <div>
                  <p>Nov</p>
                  <p>28</p>
                </div>
                <div>
                  <p>Ethereum Foundation Meet up</p>
                  <p>Cockrane Center Main Lounge, Zurich </p>
                  <div>
                    <p>
                      <span>
                        <img src="" alt="calendar" />
                      </span>
                      8:00 GMT
                    </p>
                    <p>
                      <span>
                        <img src="" alt="group" />
                      </span>
                      100 Attending
                    </p>
                    <p>
                      <span>
                        <img src="" alt="ticket" />
                      </span>
                      Free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer card */}
      <section>
        <div>
          <h4>Subscribe to our Newsletter</h4>
          <p>
            Receive our weekly newsletter & updates with new events from your
            favourite organizers & venues.
          </p>
        </div>
        <div>
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* <Footer/> */}
    </div>
  );
}

export default Home