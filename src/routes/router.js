import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Home from '../pages/home';
import Page404 from '../pages/page404';
import MainPage from '../pages/main';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} >
                    <Route index element={<Home />} />
                    <Route path='*' element={<Page404 />} /> {/*404 Page Not Found*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
