import './App.css';
import React from "react";
import TestOne from './components/TestOne';
import TestTwo from './components/TestTwo';
import TestThree from './components/TestThree';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div>
    <React.Fragment>
      <ErrorBoundary>
        <TestOne/>
      </ErrorBoundary>

      <ErrorBoundary>
        <TestTwo/>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <TestThree/>
      </ErrorBoundary>
    </React.Fragment>
    </div>
    /*<div className="App">
      <TestOne/>
      <TestTwo/>
      <TestThree/>
    </div>*/
  );
}

export default App;