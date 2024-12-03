import ContentLayout from "./layouts/content-layout/ContentLayout"

function App() {

  return (
    <>
        <ContentLayout>
          <div style={{width: '100%', backgroundColor: 'red', height: '100px'}}></div>
          <div style={{width: '100%', backgroundColor: 'blue', height: '100px'}}></div>
        </ContentLayout>
        <div style={{width: '100%', backgroundColor: 'green', height: '100px'}}></div>
    </>
  )
}

export default App
