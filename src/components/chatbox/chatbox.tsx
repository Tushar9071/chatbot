const Chatbox = ({ toggel }: { toggel:any }) => {
  return (
    <div
      className="fixed sm:bottom-4 sm:right-4 z-50 bg-blue-500 text-white p-4 sm:h-[500px] sm:w-[350px] h-screen w-screen"
      onClick={() => toggel(false)}
    >
      <div className=""></div>
    </div>
  );
};

export default Chatbox;
