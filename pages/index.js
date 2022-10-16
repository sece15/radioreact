import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home({ children }) {


  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <div>
      <Head>
        <title>Radio Doble C</title>
      </Head>
      <Layout />
    </div >

  )
}
