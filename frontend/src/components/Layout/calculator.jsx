import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Operators from "../Operators";

export default function Calculator() {
  return (
    <>
      <div id="parent-calc" className="h-1/2 w-1/2">
        <Card className="h-3/4 gap-0 clean-margin">
          <CardHeader className="clean-margin">
            <div id="output-result" className="flex rounded-t-xl p-5 justify-end bg-black/90">
            <p className="text-2xl text-white">56</p>
            </div>
          </CardHeader>
          <CardContent className="clean-margin">
            <Operators/>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
