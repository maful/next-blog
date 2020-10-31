import DefaultLayout from '@layouts/default'
import Link from 'next/link'
import { getConfig, getAllPosts } from '@api'

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      {props.posts.map((post, index) => {
        return (
          <div className="post mb-6 px-4 lg:px-16" key={index}>
            <section className="flex flex-wrap items-start flex-row">
              <div className="w-full">
                <h1 className="text-2xl lg:text-3xl font-bold mb-1 leading-tight tracking-tight">
                  <Link href={`/posts/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h1>
                <div className="mb-4 text-sm flex flex-row items-center text-gray-700 font-medium">
                  {post.date}
                </div>
                <p className="leading-snug text-base break-words w-full block text-gray-700">
                  I have an Instagram profile. If you like what I write, you'd
                  like what I share on Instagram too! You can check it here One
                  thing that put me off from writing articles was the myth that
                  articles should be 2000 words long or more. I believe you have
                  s...
                </p>
              </div>
            </section>
          </div>
        )
      })}
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  }
}
