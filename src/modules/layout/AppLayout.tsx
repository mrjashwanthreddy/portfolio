import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
// import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  )
}


