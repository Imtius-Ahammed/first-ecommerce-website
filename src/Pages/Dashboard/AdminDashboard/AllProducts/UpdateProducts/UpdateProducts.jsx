import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../../Hooks/useAxiosSecure';
import ProductsForm from '../AddProducts/ProductsForm';
import useAllProducts from '../../../../../Hooks/useAllProducts';
import Swal from 'sweetalert2';

const UpdateProducts = () => {

  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useAllProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    image: '',
    rating: '',
    price: '',
    option: '',
    category: '',
    product_code: '',
    tag: '',
    brand_name: '',
    brand_description: '',
    brand_logo: '',
    description: '',
    delivery_policies: '',
    sample_img1: '',
    sample_img2: '',
    sample_img3: '',
    color1: '',
    color2: '',
    color3: '',
    size1: '',
    size2: '',
    size3: '',
  });

  useEffect(() => {
    try {
      axiosSecure.get(`/products/${id}`)
        .then((data) => {
          setProduct(data.data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axiosSecure.put(`/update-product/${id}`, product)
      .then(res => {
        if (res.data.modifiedCount>0) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: 'Item Updated',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/dashboard/all-products')
        }
      })
  }

  return (
    <div>
      <ProductsForm
        product={product}
        setProduct={setProduct}
        handleSubmit={handleUpdate} />
    </div>
  );
};

export default UpdateProducts;