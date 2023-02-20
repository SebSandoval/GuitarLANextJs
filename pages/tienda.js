import Layout from "@/components/layout"
import Guitarras from "@/components/guitarras"
import styles from '../styles/grid.module.css'

export default function Tienda({ guitarras }) {

  console.log(guitarras);
  return (
    <div>
      <Layout
        title={'Tienda'}
        description={'Tienda virtual, venta de guitarras, instrumentos GuitarLA'}
      >

        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarras
                key={guitarra.id}

                guitarra={guitarra.attributes}
              />

            ))}
          </div>
        </main>
      </Layout>

    </div>
  )
}

/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }

}
 */
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }

}