import { EyeClosed } from "lucide-react";
import { Button } from "./components/atoms";
import { ButtonColor } from "./types/enums";

function App() {
  return (
    <div className="p-40">
      <Button icon={EyeClosed} color={ButtonColor.BLUE} tooltip="hallo" />
    </div>
  );
}

export default App;
