import Image from "next/image"
import Link from "next/link"

export default function productPage ({product}) {
    return (
        <div style={{width: "auto", alignItems: "center", marginTop:"20px"}}>
        <div style={cardStyle}>
            <div
                style={{flex:1.5}}
            >
                <span style={{
                fontWeight:"400",
                fontSize:25,
                display: "block"
            }}> {product.category}</span>
            <span style={{
                fontWeight:"800",
                display: "block"
            }}>{product.title}</span>
            <span style={{
                fontWeight:"300",
                display: "block",
                maxHeight: "100px",
                overflow: 'hidden'
            }}>{product.description.split(' ').slice(0,100).join(" ")}.</span>
            <span style={{
                fontWeight:"600",
                display: "block"
            }}>Price: {product.price} $</span>
            
            </div>
            <div
                style={{flex:1}}
                >
                    <div
                        style={{
                            display:"flex",
                            flexDirection: "row",
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                    >
                        <div><Image src={product.image} width="200" height="200" /></div>
                
                <div><Link href={`/products/buy/${product.id}`} ><button 
                className='btn btn-primary m-3'
                >Buy Now</button>
                </Link></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export async function getStaticProps ({params}) {
    const req = await fetch("https://fakestoreapi.com/products/"+ params.id)
    const product = await req.json()
    return {
        props: {product}
    }
}
export async function getStaticPaths () {
    const req = await fetch("https://fakestoreapi.com/products")
    const products = await req.json()
    const paths = products.map(el=>({params: {id: el.id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

const cardStyle = {
    display: "flex",
    flexDirection: 'column',
    margin: "auto",
    width: "60%",
    backgroundColor: "white",
    boxSizing: "border-box",
    borderRadius: 10,
    height: "400px",
    padding: "10px",
    elevation: 10,
    alignSelf: 'center'
}