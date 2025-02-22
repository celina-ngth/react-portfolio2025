import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="mx-auto mb-10 min-h-screen">
        <div className="col-span-2 w-full">{children}</div>
      </main>

      <Footer />
    </>
  )
}

export default Layout
