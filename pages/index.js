import React from 'react';
import axios from 'axios';

function Home(props) {
  console.log(props);
  React.useEffect(() => {
    getProduct();
  }, []);
  async function getProduct() {
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
    console.log(response.data);
  }

  return <>home</>;
}

Home.getInitialProps = () => {
  //fetch data on server
  //return response data as an object
  // this object will be merged
  return { hello: 'world ' };
};
export default Home;
