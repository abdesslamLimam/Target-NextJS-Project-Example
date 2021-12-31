import ProductCard from "../components/ProductCard"
import styles from "../styles/Products.module.css"

const products = ({products}) => {
    return (
        <div className={styles.container}>
            {products.map( (product) => 
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
                )}
        </div>
    )
}

export default products

export async function getStaticProps () {
    const req = await fetch("https://fakestoreapi.com/products")
    const products = await req.json()
    return {
        props: {products}
    }
}