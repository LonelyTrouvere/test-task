import Footer from "./components/footer/Footer"
import OrderCard from "./components/order-card/OrderCard"
import PaymentArea from "./components/payment-area/PaymentArea"
import ContentLayout from "./layouts/content-layout/ContentLayout"

function App() {

  return (
    <>
        <ContentLayout> 
          <PaymentArea />
          <OrderCard />
        </ContentLayout>
        <Footer />
    </>
  )
}

export default App
