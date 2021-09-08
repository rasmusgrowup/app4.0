import Meta from './Meta'
import Title from './Title'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from '../components/Cursor'
import css from '../styles/main.module.scss'

export default function Layout({ children }) {
  return (
    <>
        <Meta />
        <Title />
        <Navbar />
        <main className={css.mainLayout}>{children}</main>
        <Footer />
    </>
  )
}
