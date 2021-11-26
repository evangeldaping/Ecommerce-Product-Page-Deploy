import { Container } from '../styles/Home.styles'
import { useState } from "react";
import Head from 'next/head'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const Home = () => {
  const [isNumberToCart, isSetNumberToCart] = useState(0)
  const [isCartItem, setIsCartItem] = useState([]);
  return (
    <Container>
      <Head>
        <title>E-commerce product page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isCartItem={isCartItem} setIsCartItem={setIsCartItem} isNumberToCart={isNumberToCart} isSetNumberToCart={isSetNumberToCart}/>
      <Main isCartItem={isCartItem} setIsCartItem={setIsCartItem} isNumberToCart={isNumberToCart} isSetNumberToCart={isSetNumberToCart}/>
    </Container>
  )
}

export default Home;