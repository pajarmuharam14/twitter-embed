/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import profileImg from "./assets/Ellipse 1.png";
import twitterLogo from "./assets/logo.png";
import heart from "./assets/heart.png";

function App() {
  return (
    <div className="w-full bg-[#ECF8FF]">
      <div className="container flex justify-center items-center h-screen">
        <div className="card border rounded-lg w-[601px] h-[228px] bg-white">
          <div className="flex justify-between">
            <div className="flex items-center mx-7 mt-7">
              <img src={profileImg} />
              <div className="ml-4">
                <p className="font-bold ml-2 text-[18px]">John Doe</p>
                <p className="opacity-60">@realjohndoe</p>
              </div>
            </div>
            <div className="mx-8 mt-[43px]">
              <img src={twitterLogo} />
            </div>
          </div>
          <div className="mx-8 my-5">
            <p className="text-[16px]">
              Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? <span className="text-[#1DA1F2]">#programming #coding #debugging</span>
            </p>
          </div>
          <div className="flex mx-8 mt-2 opacity-60">
            <img src={heart} />
            <span className="mx-3 font-semibold">650</span>
            <span className="ml-3 font-semibold">3:40 PM - Feb 24, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
