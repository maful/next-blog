import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article className="mt-16">
        <h1 className="text-4xl leading-super-loose mb-8 mx-0 mt-0 text-center">
          {props.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </DefaultLayout>
  )
}
