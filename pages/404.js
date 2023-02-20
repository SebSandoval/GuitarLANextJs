import Layout from '@/components/layout'
import Link from 'next/link'

export default function Pagina404() {
    return (
        <Layout
            title='Pagina no Encontrada'
        >
            <p className='error'>Pagina no encontrada</p>
            <Link className='error-enlace' href='/'>
            Ir a Inicio
            </Link>
        </Layout>
    )
}
