import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="main_container">
      <Navbar />
      <div className="container">
        <div className="container_one">
          <div>
            <h1>Mariachi</h1>
            <p>
              Definition and Usage. The lorem tag inserts a specified amount of
              random text. The "random" text is the famous{" "}
            </p>
            <button>ORDER NOW</button>
          </div>
        </div>
        <div className="container_two">
          <div>
            <h2>Don't Miss our Menu!</h2>
            <p>
              Definition and Usage. The lorem tag inserts a specified amount of
              random text. The "random" text is the famous{" "}
            </p>
            <div>
              <button>SEE MENU</button>
            </div>
          </div>
        </div>
        <div className="container_three"></div>
        <div className="container_two">
          <div>
            <h2>Get our Latest Offers!</h2>
            <p>
              Definition and Usage. The lorem tag inserts a specified amount of
              random text. The "random" text is the famous{" "}
            </p>
            <div className="input">
              <input placeholder="Your Email" />
              <button>SEE MENU</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
