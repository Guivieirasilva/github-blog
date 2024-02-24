import { Outlet } from 'react-router-dom'
import Background from './styles/Background'

export function App() {
  return (
    <div className="relative">
      <Background />
      <div className="relative z-10 flex items-center justify-center w-screen mt-48 ">
        <Outlet />
      </div>
    </div>
  )
}
