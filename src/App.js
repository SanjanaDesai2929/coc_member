import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js"
import "./assets/css/style.css"
import "./assets/css/styles.css"
import "./assets/css/main.css"

// import "./assets/css/style_.css"
import "./assets/css/all.css"
import {
  BrowserRouter as Router,

} from "react-router-dom";
import MainRoute from "./routes/MainRoute";
function App() {
  return (
   <>
      <Router>
        {/* Main Routing */}
        <MainRoute />

      </Router>
   </>
  );
}

export default App;
