import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Animes from "./pages/Animes";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="bg-main-color max-w-[1200px] min-w-[300px]  mx-auto py-[2.5rem] grid sm:grid-cols-[_30%_65%] grid-cols-1 gap-10 font-size ">
            <BrowserRouter>
                <Header />
                <div className="px-6">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movies" element={<Movies />}></Route>
                        <Route path="/series" element={<Series />}></Route>
                        <Route path="/animes" element={<Animes />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App
