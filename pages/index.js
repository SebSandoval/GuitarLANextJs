import Link from "next/link"
import Layout from "@/components/layout"
import Guitarras from "@/components/guitarras";
import styles from '../styles/grid.module.css'
import Post from "@/components/post";
import Curso from "@/components/curso";
export default function Home({ guitarras, posts, curso }) {

  return (

    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guistarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading"></h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarras
                key={guitarra.id}

                guitarra={guitarra.attributes}
              />

            ))}
          </div>

        </main>

        <Curso
          curso={curso}
        />
        <section>
          <h2 className="heading">Blog</h2>

          <div className={styles.grid}>
            {posts?.map(post => (
              <Post
                key={post.id}

                post={post.attributes}
              />
            ))}

          </div>
        </section>
      </Layout>

    </>

  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarrars, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso)
  ])

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarrars.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      posts,
      curso

    }
  }
}