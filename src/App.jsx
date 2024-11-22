import { LandingClub } from "./pages/LandingClub/LandingClub";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/fonts/stylesheet.css";
import "assets/global.scss";
import "swiper/scss/navigation";
import "swiper/css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingClub />} />
                    {/* <Route path="/" element={<LandingClub />} />
                    <Route path="/" element={<LandingClub />} />
                    <Route path="/" element={<LandingClub />} />
                    <Route path="/" element={<LandingClub />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
