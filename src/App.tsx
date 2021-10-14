import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useHistory,
// } from 'react-router-dom';
import Header from '../src/components/blocks/Navbar/navbar';
import Cards from './components/pages/Posts/posts';
import Modal from './components/pages/Posts/modal/modal';

import './App.css';
// import { UserContextProvider } from './context/userContext';

// const Routes = () => {
//   const history = useHistory();
//   const token = localStorage.getItem('token');
//   useEffect(() => {
//     if (!token) {
//       history.push('/signIn');
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token]);
//   return (
//     <Switch>
//       <Route exact path="/posts" component={Cards} />
//       <Route exact path="/modal" component={Modal} />
//       <Route component={() => <>404: Page not found</>} />
//     </Switch>
//   );
// };

function App() {
  return (
    <div className="App">
      <Header />
      {/* <UserContextProvider>
        <Router>
          <Routes />
        </Router>
      </UserContextProvider> */}
      <Cards />
      <Modal />
    </div>
  );
}

export default App;
