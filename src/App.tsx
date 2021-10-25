import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './context/userContext';
import PostsPage from './pages/Posts';
import TodosPage from './pages/Todos';
import AlbumsPage from './pages/Albums';
import UsersPage from './pages/Users/index';
import PhotosPage from './pages/Photos/index';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="posts" />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/todos" component={TodosPage} />
      <Route exact path="/albums" component={AlbumsPage} />
      <Route exact path="/albums/:id" component={PhotosPage} />
      <Route exact path="/posts" component={PostsPage} />
      <Route component={() => <> 404: Page not found </>} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Routes />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
