import Keyboard from "../Keyboard";

export default function Calculator() {
  return (
    <>
      <div id="parent-calc" className="flex flex-col h-3/4 w-1/2 rounded-2xl bg-gradient-to-tr from-gray-500 to-gray-300">
        <div id="output" className="flex font-bold rounded-t-lg p-3 justify-end bg-yellow-500">
          <h1 className="text-black">109876543211</h1>
        </div>
        <Keyboard/>
      </div>
    </>
  );
}
