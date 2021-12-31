import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product}) => {
    return(
        <div style={cardStyle}>
            <div
                style={{flex:1.5}}
            >
            <span style={{
                fontWeight:"800",
                display: "block"
            }}>{product.title}</span>
            <span style={{
                fontWeight:"300",
                display: "block",
                maxHeight: "100px",
                overflow: 'hidden'
            }}>{product.description.split(' ').slice(0,20).join(" ")}...</span>
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
                        <div><Image src={product.image} width="100" height="100" /></div>
                
                <div><Link href={`/products/${product.id}`} ><button 
                className='btn btn-primary m-3'
                >See more</button>
                </Link></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

const cardStyle = {
    display: "flex",
    flexDirection: 'column',
    width: "400px",
    backgroundColor: "white",
    boxSizing: "border-box",
    borderRadius: 10,
    height: "300px",
    padding: "10px",
    elevation: 10
}