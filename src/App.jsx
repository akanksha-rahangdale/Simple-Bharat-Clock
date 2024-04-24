import ClockHeading from "./component/ClockHeading";
import ClockSlogan from "./component/ClockSlogan";
import CurrentTime from "./component/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return(
  <center>
  <div>
   <ClockHeading></ClockHeading>
   <ClockSlogan></ClockSlogan>
   <CurrentTime></CurrentTime>

  </div>
  </center>
  );
}

export default App;

