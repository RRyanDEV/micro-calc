import { Button } from "@/components/ui/button";
import { FaDivide } from "react-icons/fa";

export default function Operators() {
  return (
    <>
      <div id="parent-operators" className="flex flex-col justify-end h-20 clean-margin">
        <Button className="p-10" size="sm">
          <FaDivide />
        </Button>
      </div>
    </>
  );
}
