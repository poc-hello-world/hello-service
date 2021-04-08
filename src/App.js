import React, { Fragment, Suspense, lazy } from 'react'
import './App.css'

const Greeting = lazy(() => import('./Greeting'))
const Name = lazy(() => import('./Name'))
const Exclamation = lazy(() => import('./components/exclamation-mark'))

function App() {
  return (
    <Fragment>
      <h1 className="Title">Hello Service</h1>

      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Greeting />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Name />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Exclamation />
        </Suspense>
      </div>
    </Fragment>
  )
}

export default App
