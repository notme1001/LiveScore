import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, } from '@fortawesome/free-solid-svg-icons'
const Home = lazy(() => import('../container/pages/home'));
const AllScore = lazy(() => import('../container/pages/allScore'));
const Details = lazy(() => import('../container/pages/details'));

const NotFound = () => {
  return <Redirect to="/" />;
};

const FrontendRoutes = () => {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-screen h-screen bg-primeSand">
						<FontAwesomeIcon icon={faSpinner} className="animate-spin text-xl text-blue-500 outline-none"/>		
					</div>
        }
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/allscore" component={AllScore} />
        <Route exact path="/detail/:id" component={Details} />
        {/* <Route exact path="*" component={NotFound} /> */}
      </Suspense>
    </Switch>
  );
};

export default FrontendRoutes;
