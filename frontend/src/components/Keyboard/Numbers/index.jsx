import { Button } from "@/components/ui/button";
import { Diff, Percent } from "lucide-react";
// import numbers from "@/data/number-value";

// Icons
import {
  Bs0Circle,
  Bs1Circle,
  Bs2Circle,
  Bs3Circle,
  Bs4Circle,
  Bs5Circle,
  Bs6Circle,
  Bs7Circle,
  Bs8Circle,
  Bs9Circle,
} from "react-icons/bs";
//

const numbersIcon = {
  0: Bs0Circle,
  1: Bs1Circle,
  2: Bs2Circle,
  3: Bs3Circle,
  4: Bs4Circle,
  5: Bs5Circle,
  6: Bs6Circle,
  7: Bs7Circle,
  8: Bs8Circle,
  9: Bs9Circle,
};

export default function NumericKeypad() {
  return (
    <>
      <div id="parent-numericpad">
        <div className="bg-blue-800">
          <div id="buttons-header" className="flex justify-around flex-row">
            <Button className="cursor-pointer hover:bg-blue-500" size="sm">
              <Diff />
            </Button>
            <Button className="cursor-pointer hover:bg-blue-500" size="sm">
              <Percent />
            </Button>
          </div>
        </div>
        <div id="parent-numberpad" className="flex flex-col h-full bg-red-500 items-center justify-center">
          <button className="bg-gray-900 hover:bg-gray-600 hover:cursor-pointer p-2 rounded-sm">
            <Bs0Circle />
          </button>
        </div>
      </div>
    </>
  );
}
