import { useRef } from "react";
import Cards from "./Cards";

function Forground() {
    const ref = useRef();

  const cardData = [
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore excepturi facere.",
        fileSize: ".8mb",
        close: true,
        tag: { isOpen: false, tagTitle: "DownloadNow", tagColor: "green" },
      },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore excepturi facere.",
        fileSize: ".8mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore excepturi facere.",
        fileSize: ".8mb",
        close: false,
        tag: { isOpen: true, tagTitle: "DownloadNow", tagColor: "blue" },
      },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4">
        {cardData.map((item, index) => (
          <Cards data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Forground;
