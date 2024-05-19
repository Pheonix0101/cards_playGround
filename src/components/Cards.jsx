import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        // whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/80 text-white px-5 py-10 overflow-hidden cursor-pointer"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full left-0 ">
          <div className="flex justify-between items-center mb-3 px-8 py-5">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoCloseSharp />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
