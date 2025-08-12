import { Button } from "@/components/ui/button";
import { CircleDivide, CircleEqual, CircleMinus, CirclePlus, CircleX } from "lucide-react";

export default function Operators() {
  return (
    <>
      <div id="parent-operators" className="flex h-full bg-purple-800 clean-margin">
        <div id="operatos" className="flex flex-col w-full items-center h-full justify-evenly">
          <Button className="cursor-pointer hover:bg-blue-500" size="sm">
            <CircleDivide />
          </Button>
          <Button className="cursor-pointer hover:bg-blue-500" size="sm">
            <CircleX />
          </Button>
          <Button className="cursor-pointer hover:bg-blue-500" size="sm">
            <CircleMinus />
          </Button>
          <Button className="cursor-pointer hover:bg-blue-500" size="sm">
            <CirclePlus />
          </Button>
          <Button className="cursor-pointer hover:bg-blue-500" size="sm">
            <CircleEqual />
          </Button>
        </div>
      </div>
    </>
  );
}
