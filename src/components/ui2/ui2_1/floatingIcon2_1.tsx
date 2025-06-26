interface Props {
  toggel: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
import logo from "../../../assets/logo1.png";

const FloatingIcon2_1 = ({ toggel, setToggle }: Props) => {
  return (
    <button
      className="fixed bottom-4 right-4 z-50 rounded-full duration-300 cursor-pointer w-[40px] h-[40px]"
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className="relative w-full h-full ">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
            toggel ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0z" />
              <path
                fill="#549c46"
                d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
              />
            </g>
          </svg>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            toggel ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <img src={logo} alt="Icon" className="" />
        </div>
      </div>
    </button>
  );
};

export default FloatingIcon2_1;
