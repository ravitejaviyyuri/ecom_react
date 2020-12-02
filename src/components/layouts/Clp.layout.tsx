import Head from 'next/head'
import HeaderNavbar from '../shared/header/Navbar.component'


function ClpLayout(props: any) {
  
  return (
    <div className="top_margin_fix_header">
      <Head>
        <title>Edureka - Devpops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HeaderNavbar/>

      {props.children}

      {/* <Footer/> */}
    </div>
  )
}
export default ClpLayout