import Head from 'next/head'
import Footer from '../shared/Footer.component'
import Navbar from '../shared/Navbar.component'

function ClpLayout(props: any) {
  return (
    <div>
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/> */}
      </Head>

      <Navbar/>

      <div className="container-fluid">{props.children}</div>

      <Footer/>
    </div>
  )
}
export default ClpLayout