import {
    BrowserRouter,
    Routes as RouterWrapper,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";

function Routes(){
    return(
        <BrowserRouter>
            <RouterWrapper>
            <Route path="/" element={<Home/>} />
            </RouterWrapper>
        </BrowserRouter>
    )
}


export default Routes;