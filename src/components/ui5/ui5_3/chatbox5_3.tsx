// import "./chatbox.css";
import background from "../../../assets/background.png";
// import EmmaImage from "../../../assets/EmmaAvatar.png";
import harshpatel from "../../../assets/harshpatel.png";
import priyapatel from "../../../assets/priyapatel.png";
import { motion } from "framer-motion";

const Chatbox5_3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-20 bg-transparent right-6 rounded-full">
      <div
        className={`sm:bottom-[70px] right-6 z-50 h-auto w-auto  rounded-2xl shadow-lg overflow-hidden`}>
        <nav className="flex items-center px-5 py-3 bg-[#075E54] justify-center flex-col">
          <p className=" font-semibold text-white text-sm">Need support?</p>
          <p className="text-[#D1D5DB] text-xs">
            Click below to connect with our team instantly
          </p>
        </nav>
        <div
          className={`w-full py-5 `}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}>
          <div className="flex flex-wrap justify-center w-80 gap-x-5 gap-y-5 rounded-lg py-3">
            <div className="w-[35%] flex flex-col items-center justify-center rounded-lg px-3 py-2 cursor-pointer  bg-white/20 backdrop-blur-[1px] border border-white/30 p-4 border-t-4 rounded-tl-lg rounded-bl-lg border-t-[#25CF43]">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden mb-2">
                <img src={harshpatel} className="h-full w-full" />
              </div>
              <h4 className="text-sm font-medium">Harsh Patel</h4>
              <p className="text-xs text-gray-500 text-center">
                Technical Department
              </p>
              <div className="flex flex-row items-center gap-1 mt-1">
                <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>

            <div className="w-[35%] flex flex-col items-center justify-center rounded-lg px-3 py-2 cursor-pointer  bg-white/20 backdrop-blur-[1px] border border-white/30 p-4 border-t-4 rounded-tl-lg rounded-bl-lg border-t-[#25CF43]">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden mb-2">
                <img src={priyapatel} className="h-full w-full" />
              </div>
              <h4 className="text-sm font-medium">Priya Patel</h4>
              <p className="text-xs text-gray-500 text-center">
                Sales Department
              </p>
              <div className="flex flex-row items-center gap-1 mt-1">
                <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <div className="w-[35%] flex flex-col items-center justify-center rounded-lg px-3 py-2 cursor-pointer  bg-white/20 backdrop-blur-[1px] border border-white/30 p-4 border-t-4 rounded-tl-lg rounded-bl-lg border-t-[#25CF43]">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden mb-2">
                <img src={harshpatel} className="h-full w-full" />
              </div>
              <h4 className="text-sm font-medium">Harsh Patel</h4>
              <p className="text-xs text-gray-500 text-center">
                Technical Department
              </p>
              <div className="flex flex-row items-center gap-1 mt-1">
                <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>

            <div className="w-[35%] flex flex-col items-center justify-center rounded-lg px-3 py-2 cursor-pointer  bg-white/20 backdrop-blur-[1px] border border-white/30 p-4 border-t-4 rounded-tl-lg rounded-bl-lg border-t-[#25CF43]">
              <div className="rounded-full h-[40px] w-[40px] overflow-hidden mb-2">
                <img src={priyapatel} className="h-full w-full" />
              </div>
              <h4 className="text-sm font-medium">Priya Patel</h4>
              <p className="text-xs text-gray-500 text-center">
                Sales Department
              </p>
              <div className="flex flex-row items-center gap-1 mt-1">
                <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbox5_3;
