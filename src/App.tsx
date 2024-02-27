import { Outlet } from 'react-router-dom'
import Background from './styles/Background'

export function App() {
  return (
    <div className="relative">
      <Background />
      <div className="relative z-10 mt-48 flex w-screen items-center justify-center ">
        <Outlet />
      </div>
    </div>
  )
}
