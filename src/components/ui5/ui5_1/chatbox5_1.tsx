// import "./chatbox.css";
import background from "../../../assets/background.png";
import EmmaImage from "../../../assets/EmmaAvatar.png";
import harshpatel from "../../../assets/harshpatel.png";
import priyapatel from "../../../assets/priyapatel.png";
import { motion } from "framer-motion";

const Chatbox5_1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-20 bg-transparent right-6 rounded-full">
      <div
        className={`sm:bottom-[70px] right-6 z-50 h-auto w-auto  rounded-2xl border-secondary border overflow-hidden`}>
        <nav className="flex items-center px-5 py-3 bg-[#075E54]">
          <button
            className="rounded-full w-10 h-10 bg-white ml-2 overflow-hidden"
            // onClick={() => toggel(false)}
          >
            <img className="h-full w-full" src={EmmaImage} alt="Image" />
          </button>
          <div className="flex flex-col px-5 gap-[2px]">
            <h2 className="text-base text-white font-semibold">
              Liliya Support
            </h2>
            <p className=" text-xs text-gray-200">AI Chatbot Assistant</p>
          </div>
        </nav>
        <div
          className={`w-full py-5 `}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}>
          <div className="flex flex-col items-center w-80  gap-2 rounded-lg">
            {/* Left-aligned message */}
            {/* <div className="flex justify-start">
            <div className="bg-white max-w-60 px-3 py-2 pb-5 rounded-md relative">
              <p className="text-sm">Good morning, how can I help you</p>
              <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">
                09:41 AM
              </span>
            </div>
          </div> */}

            {/* Right-aligned message */}
            {/* <div className="flex justify-end">
            <div className="bg-[#d8fcd2] max-w-60 px-3 py-2 pb-5 rounded-md relative">
              <p className="text-sm mr-5">Hello</p>
              <span className="text-[10px] text-gray-500 absolute bottom-1 right-2">
                09:42 AM
              </span>
            </div>
          </div> */}

            <div className="h-[60px] w-[90%] bg-white/20 flex items-center justify-center rounded-lg px-3 cursor-pointer backdrop-blur-[1px] border border-white/30 p-4 border-l-4 rounded-tl-lg rounded-bl-lg border-l-green-500">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden">
                <img src={harshpatel} className="h-full w-full" />
              </div>
              <div className="w-[80%] px-5">
                <h4 className="text-sm">Harsh Patel</h4>
                <p className="text-xs text-gray-500">Software Engineer</p>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                  <p className="text-xs text-green-500 ">Online</p>
                </div>
              </div>
            </div>
            <div className="h-[60px] w-[90%] bg-white/20 flex items-center justify-center rounded-lg px-3 cursor-pointer backdrop-blur-[1px] border border-white/30 p-4 border-l-4 rounded-tl-lg rounded-bl-lg border-l-green-500">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden">
                <img src={priyapatel} className="h-full w-full" />
              </div>
              <div className="w-[80%] px-5">
                <h4 className="text-sm">Harsh Patel</h4>
                <p className="text-xs text-gray-500">Software Engineer</p>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                  <p className="text-xs text-green-500 ">Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbox5_1;
