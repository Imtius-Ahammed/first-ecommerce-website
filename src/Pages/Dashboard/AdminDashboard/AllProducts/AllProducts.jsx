import useAllProducts from '../../../../Hooks/useAllProducts';
import ProductsList from './ProductsList';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllProducts = () => {

    const [allProducts, refetch] = useAllProducts();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (id) => {
        axiosSecure.delete(`/product/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Item Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    };

    return (
        <div>
            <ProductsList allProducts={allProducts} handleDelete={handleDelete} />
        </div>
    );
};

export default AllProducts;