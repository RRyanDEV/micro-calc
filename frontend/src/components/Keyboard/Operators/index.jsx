import { Button } from "@/components/ui/button";
import {
  CircleDivide,
  CircleEqual,
  CircleMinus,
  CirclePlus,
  CircleX,
} from "lucide-react";

export default function Operators() {
  return (
    <>
      <div
        id="parent-operators"
        className="flex h-full bg-purple-800 justify-end clean-margin"
      >
        <div
          id="operatos"
          className="flex flex-col bg-emerald-400/30 items-center justify-evenly"
        >
          <Button className="hover:cursor-pointer hover:bg-blue-500">
            <CircleDivide />
          </Button>
          <Button className="hover:cursor-pointer hover:bg-blue-500">
            <CircleX />
          </Button>
          <Button className="hover:cursor-pointer hover:bg-blue-500">
            <CircleMinus />
          </Button>
          <Button className="hover:cursor-pointer hover:bg-blue-500">
            <CirclePlus />
          </Button>
          <Button className="hover:cursor-pointer hover:bg-blue-500">
            <CircleEqual />
          </Button>
        </div>
      </div>
    </>
  );
}
