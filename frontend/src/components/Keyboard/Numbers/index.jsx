import { Button } from "@/components/ui/button";
import { Diff, Percent } from "lucide-react";

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
      </div>
    </>
  );
}
