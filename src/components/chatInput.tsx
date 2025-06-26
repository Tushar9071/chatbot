import { useState, useRef, useEffect } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Grow based on content
    }
  }, [message]);

  return (
    <div className="bottom-0 flex justify-center items-center pb-1">
      <div className="bg-white w-[95%] rounded-2xl overflow-hidden flex items-center px-1 py-1 border border-[#E5E7EB]">
        {/* Add button */}
        <button className="mr-2 hover:bg-gray-200 h-7 w-7 rounded-full flex justify-center items-center duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"
            />
          </svg>
        </button>

        {/* Centered textarea */}
        <div className="flex-grow flex items-center">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            placeholder="Type a message"
            className=" flex items-center placeholder:text-gray-400 w-full resize-none overflow-hidden focus:outline-none placeholder:text-xs leading-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
