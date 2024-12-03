import OrderCard from "./components/order-card/OrderCard"
import ContentLayout from "./layouts/content-layout/ContentLayout"

function App() {

  return (
    <>
        <ContentLayout> 
          <div style={{width: '100%', backgroundColor: 'red', height: '100px'}}></div>
          <OrderCard />
        </ContentLayout>
        <div style={{width: '100%', backgroundColor: 'green', height: '100px'}}></div>
    </>
  )
}

export default App
