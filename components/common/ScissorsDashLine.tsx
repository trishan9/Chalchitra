import Image from "next/image";
import { ScissorsIcon } from "lucide-react";

const ScissorsDashLine = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <ScissorsIcon className="w-24 text-black" />

      <Image
        width={200}
        height={200}
        src="https://static.thenounproject.com/png/1729059-200.png"
        alt=""
      />
      <Image
        width={200}
        height={200}
        className="-ml-4"
        src="https://static.thenounproject.com/png/1729059-200.png"
        alt=""
      />
      <Image
        width={200}
        height={200}
        className="-ml-4"
        src="https://static.thenounproject.com/png/1729059-200.png"
        alt=""
      />
      <Image
        width={200}
        height={200}
        className="-ml-4"
        src="https://static.thenounproject.com/png/1729059-200.png"
        alt=""
      />
    </div>
  );
};

export default ScissorsDashLine;
