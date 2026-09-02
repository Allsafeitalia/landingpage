import Hero from './components/Hero.jsx'
import Product from './components/Product.jsx'
import Cocktails from './components/Cocktails.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Product />
        <Cocktails />
      </main>
      <Footer />
    </>
  )
}
