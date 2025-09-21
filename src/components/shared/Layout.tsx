import "../../pages/styles/HomePage.css"
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <Header/>
        <main className="page-wrapper">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout