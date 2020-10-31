import Head from 'next/head'
import Header from '@includes/header'
import Footer from '@includes/footer'
import Author from '@includes/author'
import { useRouter } from 'next/router'

export default function DefaultLayout(props) {
  const router = useRouter()
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div className="bg-white">
        <Header />
        {router.pathname === '/' ? <Author /> : null}
        <div className="md:w-2/3 mx-auto false">
          <div>
            <div className="posts-wrapper">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
