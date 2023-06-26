interface ProductsProps {
    params:{

        id:string
    }
}



const Product  = ({params}:ProductsProps) => {
    return(
        <div>
            <h1>Login: {params.id}</h1>

        </div>
    )
}

export default Product;