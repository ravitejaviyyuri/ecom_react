import Clp from '../components/clp/Clp.component'
import fetch from 'axios'

const Index = () => {
    return (
      <Clp />
    )
}

Index.getInitialProps = async function() {

  return {
    products: 'text'
  };
};
export default Index