import NavBar from './components/nav-bar/nav-bar';
import {Switch, Route} from 'react-router-dom';
import AboutPage from "./pages/about-page";
import MainPage from "./pages/main-page";
import './App.scss';
import PortfolioPage from "./pages/portfolio-page";
import AchievementsPage from "./pages/achievements-page";
import ContactsPage from "./pages/contacts-page";


function App() {
    return (
        <div className="App">
            <div className="app-wrapper">
                <NavBar/>
                <section className="main-content">
                    <div className="main-content__wrapper">
                        <div className="main-content__wrapper-inner">
                            <Switch>
                                <Route path='/main-page'>
                                    <MainPage/>
                                </Route>
                                <Route path='/about-page'>
                                    <AboutPage/>
                                </Route>
                                <Route path='/portfolio-page'>
                                    <PortfolioPage/>
                                </Route>
                                <Route path='/achievements-page'>
                                    <AchievementsPage/>
                                </Route>
                                <Route path='/contacts-page'>
                                    <ContactsPage/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
