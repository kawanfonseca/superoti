import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();


const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={CourseListContainer}/>
            <Route exact path="/livro" component={AddOrEditCourseContainer}/>
            <Route path="/livro/:id" component={AddOrEditCourseContainer}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>

      </Router>
    </div>
  );
};


export default App;