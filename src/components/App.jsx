import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from './FallbackRender'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

function App() {

  return <div className='bg-base min-h-screen flex flex-col gap-2 text-primary relative'>
   <ErrorBoundary fallbackRender={FallbackRender}>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Homepage}/>
    </Routes>
    </ErrorBoundary>
  </div>
}

export default App
