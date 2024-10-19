import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./allRoutes/Routes";
import './App.css'

const App = (props) => {
    return (
        <Router>
            <Routes {...props} />
        </Router>
    );
};
export default App;