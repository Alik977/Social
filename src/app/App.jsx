
import { Provider } from 'react-redux'


import { store } from '../store/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'


import './styles/App.css'

Provider
function App() {


  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
