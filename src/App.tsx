import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center bg-base-background">
      <Header />
      <Outlet />
    </div>
  )
}
