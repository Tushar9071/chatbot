import { motion } from "framer-motion";
import chatIcon from "../../../assets/chatIcon.png";
import logo2 from "../../../assets/logo2.png";

const Chatbox8_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-24 bg-transparent right-8">
      <div className="relative w-80 py-8 px-10 shadow-[0_15px_60px_0_#00000033] rounded-2xl  bg-white text-sm flex flex-col gap-5">
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
      </div>
    </motion.div>
  );
};

export default Chatbox8_2;
