import "./index.css";
import { SmarterTruncate } from "./SmartTruncate";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center ">
      <SmarterTruncate className="text-gray-900">
        Smart Truncate
      </SmarterTruncate>
    </div>
  );
}

export default App;
