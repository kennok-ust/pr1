import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function Root() {
  return (
    <div className="Root">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default Root;
