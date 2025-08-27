import NumericKeypad from "./Numbers";
import Operators from "./Operators";

export default function Keyboard() {
  return (
    <>
      <div id="parent-keyboard" className="flex flex-row h-full">
        <div id="left" className="bg-green-700 h-full w-11/12">
          <NumericKeypad />
        </div>
        <div id="right" className="bg-red-800 h-full">
          <Operators />
        </div>
      </div>
    </>
  );
}
