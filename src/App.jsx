import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const page = [1, 2, 3, 4, 5];

  const [active, setActive] = useState(3);

  useEffect(() => {}, [active]);

  return (
    <div className="App">
      <section className="empty"></section>
      <section className="main">
        <div className="nums">
          <div className="num-grp">
            <div className="num-1">
              <div className="num">8.4M</div>
              <div className="num-text-cont">
                <p className="num-text">
                  Lorem ipsum dolor elit amet Ut enim ad consectetur adipiscing
                  sit minim veniam.
                </p>
              </div>
            </div>
            <div className="num-1">
              <div className="num">7.9M</div>
              <div className="num-text-cont">
                <p className="num-text">
                  Lorem ipsum Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit.
                </p>
              </div>
            </div>
          </div>
          <div className="num-2">
            <div className="num">33.6M</div>
            <div className="num-text-cont">
              <p className="num-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
        <div className="dis">
          <div className="dis-text">
            <h4 className="dis-heading">Our Footprints</h4>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus nisl tincidunt eget nullam non nisi est. Ipsum dolor sit
              amet consectetur adipiscing elit.
            </p>
            <p className="para">
              Viverra tellus in hac habitasse platea dictumst. Purus sit amet
              volutpat consequat mauris nunc congue nisi vitae. Neque laoreet
              suspendisse interdum consectetur libero.
            </p>
            <p className="para">
              In mollis nunc sed id. Molestie at elementum eu facilisis sed. Eu
              augue ut lectus arcu bibendum at. Sit amet mauris commodo quis
              imperdiet massa. Nunc eget lorem dolor sed.
            </p>
          </div>
          <div className="dis-num-cont">
            <div className="empty-num "></div>
            <div className="dis-num">
              <div className="num">8,679</div>
              <div className="dis-num-text">
                Eget mi proin sed libero enim sed officia deserunt mollit.
              </div>
            </div>
            <div className="dis-num">
              <div className="num">373.73</div>
              <div className="dis-num-text">
                Facilisi etiam dignissim proin sed libero diam quis.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page">
        <div className="dec" />

        <ul className="btn-hldr">
          <div className="page-heading">Dui hac ornare</div>
          {page.map((e) => {
            return e === active ? (
              <li key={e} className={"btn active"} onClick={() => setActive(e)}>
                <div>{e}</div>
              </li>
            ) : (
              <li key={e} className={"btn"} onClick={() => setActive(e)}>
                <div>{e}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
