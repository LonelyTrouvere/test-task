import Footer from "./components/footer/Footer"
import OrderArea from "./components/order-area/OrderArea"
import PaymentArea from "./components/payment-area/PaymentArea"
import ContentLayout from "./layouts/content-layout/ContentLayout"

function App() {

  return (
    <>
        <ContentLayout> 
          <PaymentArea />
          <OrderArea />
        </ContentLayout>
        <Footer />
    </>
  )
}

export default App
