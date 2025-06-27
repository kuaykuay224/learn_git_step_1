
const ProdctCard =({prodct , onViewDetail}) =>{
  return (
 <dev className="product-card">

<img
src="{product.thumbnail}"
 alt="{product.title}"
 className="prouct-imge"
 />
 <dev className="clasprouct-info">
    <h3 className="product.title">{product.title}</h3>
    <p className="product-price">{product-price}</p>
    <p className="product-rating">{product-rating}</p>
    <button onClick={()=> onViewDetail(useProduct.id)}>
        ดูรายละเอียดสินค้า
    </button>
 </dev>
 </dev>
  )
}