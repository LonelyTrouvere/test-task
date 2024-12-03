import Footer from "./components/footer/Footer"
import OrderCard from "./components/order-card/OrderCard"
import ContentLayout from "./layouts/content-layout/ContentLayout"

function App() {

  return (
    <>
        <ContentLayout> 
          <div style={{width: '100%', backgroundColor: 'red', height: '400px'}}></div>
          <OrderCard />
        </ContentLayout>
        <Footer />
    </>
  )
}

export default App
