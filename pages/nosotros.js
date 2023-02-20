
import Image from "next/image"
import Layout from "@/components/layout"
import Link from "next/link"
import styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
  return (
   
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros. GuitarLA tienda de música'}
      >

        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>

            <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris in molestie tellustae erllis mi. In facilisis vel quam vehicula feugiat. In ac lectus mollis, bibendum metus in, pharetra arcu. Suspendisse potenti. Nulla leo neque, euismod et nulla vel, gravida fringilla tortor. Vestibulum vestibulum bibendum eros non laoreet. Aenean a purus semper, porta ex non, placerat metus. Donec odio mi, commodo ut dictum ut, facilisis vehicula nibh. Nullam ornare malesuada magna.
              </p>
              <p>Duis malesuada const, vus dui auctor. In aliquam nisi id metus venenatis, in posuere felis pulvinar. Nullam quis tortor lorem. Cras id sapien a dui aliquet laoreet in non velit. Etiam egestas lorem eu augue porttitor, sed ultricies nisl ullamcorper. Donec facilisis metus et sagittis consectetur. Morbi tincidunt sit amet felis semper dapibus. Curabitur non erat nibh. Suspendisse et auctor ante, vitae rhoncus enim.</p>
            </div>
          </div>
        </main>

      </Layout>

   
  )
}
