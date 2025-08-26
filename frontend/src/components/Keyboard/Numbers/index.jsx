import { Button } from "@/components/ui/button";
import { Diff, Percent } from "lucide-react";

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

export default function NumericKeypad() {
  return (
    <>
      <div id="parent-numericpad">
        <div className="bg-blue-800">
          <div id="buttons-header" className="flex justify-around flex-row">
            <Button className="cursor-pointer hover:bg-blue-500" size="sm">
              AC
            </Button>
            <Button className="cursor-pointer hover:bg-blue-500" size="sm">
              <Diff />
            </Button>
            <Button className="cursor-pointer hover:bg-blue-500" size="sm">
              <Percent />
            </Button>
          </div>
        </div>
        <div
          id="parent-numberpad"
          className="flex flex-col h-full bg-red-500 items-center justify-center">
          <Button>
            <Bs1Circle />
          </Button>
          <Button>
            <Bs2Circle />
          </Button>
          <Button>
            <Bs3Circle />
          </Button>
          <Button>
            <Bs4Circle />
          </Button>
          <Button>
            <Bs5Circle />
          </Button>
          <Button>
            <Bs6Circle />
          </Button>
          <Button>
            <Bs7Circle />
          </Button>
          <Button>
            <Bs8Circle />
          </Button>
          <Button>
            <Bs9Circle />
          </Button>
          <Button>
            <Bs0Circle />
          </Button>
        </div>
      </div>
    </>
  );
}
