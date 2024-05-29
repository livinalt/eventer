import React from 'react'
// import Footer from './sub-componenets/Footer';

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section>
        <h1>Block Event</h1>
        <h4>Are you ready to attend the next event?</h4>
        <p>
          Block Event is your gateway to schedules onchain- Create, schedule and
          manage your events
        </p>
        <input type="search" name="" id="" />
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
        <div className='flex justify-center items-center'>
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
      </section>

      {/* <Footer/> */}
    </div>
  );
}

export default Home