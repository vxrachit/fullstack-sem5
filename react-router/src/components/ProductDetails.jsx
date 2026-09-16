import { useParams } from 'react-router-dom'
export default function ProductDetails() {
    const { id } = useParams();
  return (
    <div>       
        <p>Product Id: {id}</p>
      
    </div>
  )
}