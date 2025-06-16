import { useTheme } from "../../context/theme.context";
const Chatbox = ({ toggel }: { toggel: any }) => {
  const { currentTheme } = useTheme();
  return (
    <div
      className={`fixed sm:bottom-4 sm:right-4 z-50 bg-[${currentTheme?.color}] text-[${currentTheme?.font}] p-4 sm:h-[500px] sm:w-[350px] h-screen w-screen`}
      onClick={() => toggel(false)}
    >
      <div className=""></div>
    </div>
  );
};

export default Chatbox;
