// import "./chatbox.css";
import background from "../../../assets/background.png";
import harshpatel from "../../../assets/harshpatel.png";
import priyapatel from "../../../assets/priyapatel.png";
import { motion } from "framer-motion";

const Chatbox4_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-20 bg-transparent right-6 rounded-full">
      <div
        className={`sm:bottom-[70px] right-6 z-50 h-auto w-auto  rounded-2xl border-secondary border overflow-hidden`}>
        <nav className="flex items-center px-5 py-3 bg-[#075E54] justify-center flex-col">
          <p className="font-semibold text-white text-sm">Need support?</p>
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
          <div className="flex flex-col items-center w-80  gap-2 rounded-lg">
            <div className="h-[60px] w-[90%] bg-white flex items-center justify-center rounded-lg px-3 cursor-pointer">
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
            <div className="h-[60px] w-[90%] bg-white flex items-center justify-center rounded-lg px-3 cursor-pointer">
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

export default Chatbox4_2;
