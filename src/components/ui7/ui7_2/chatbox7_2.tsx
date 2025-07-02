import { motion } from "framer-motion";
import chatIcon from "../../../assets/chatIcon.png";
import logo2 from "../../../assets/logo2.png";

const Chatbox7_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-24 bg-transparent right-7 rounded-full">
      <div className="relative w-80 py-8 px-10 border-2 border-gray-500 rounded-lg  bg-white text-sm flex flex-col gap-5">
        <div>
          <img src={chatIcon} className="h-10"></img>
        </div>
        <div>
          <p className="break-words text-black font-medium">
            Need support? <br />
            Liliya.io is always here for you.
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="bg-[#25D366] w-full px-6 py-2 rounded-xl relative  flex flex-row justify-center items-center gap-3">
              <img src={logo2} className="h-5 w-5"></img>
              <p className="text-base font-semibold  text-white">
                Chat On WhatsApp
              </p>
            </div>
          </div>
        </div>
        {/* chat arrow */}
        <div className="absolute -bottom-[27px] right-2 w-[21px] h-[27px] bg-white border-r-2 border-r-gray-500"></div>
        <div className="absolute -bottom-[14.5px] right-[3px] w-[33px] h-0 bg-white border-t-2 border-t-gray-500 transform rotate-[50deg] "></div>
      </div>
    </motion.div>
  );
};

export default Chatbox7_2;
