import './App.css'
import Startseite from './Components/Startseite/Startseite'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Analyse from './Components/Analyse/Analyse'
import Strategien from './Components/Strategien/Strategien'


/* === Für die Navigierung */
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/startseite',
    element: <div><Startseite/></div>
  },
  {
    path: '/analyse',
    element: <div><Analyse/></div>
  },
  {
    path: '/strategien',
    element: <div><Strategien/></div>
  },
])

function App() {

  return (
    
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App


/* 
=== Befehle für Hosten, stoppen, dev starten === 
1. firebase deploy --only hosting
2. npm run dev  
3. Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass (für windows)
4. firebase hosting:disable
=== Github ===
git add .
git commit -m "was ist neu?"
git push
---------
git pull 
*/