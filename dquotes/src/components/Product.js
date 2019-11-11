import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";
class Product extends Component {
    render() {
        const { id, title, img, price, inCart }= this.props.product;
        return (
           <ProductWrapper className="col-9  mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <ProductConsumer>
                {value => (
                    <div 
                        className="img-container p-5" 
                        onClick={() => 
                            value.handleDetail(id)}
                    >
                        <Link to="/details">
                            <img src ={img} alt="product" className="card-img-top" />
                        </Link>
                        <button 
                            className="cart-btn" 
                            disabled={inCart ? true: false} 
                            onClick={() => {
                                value.addToCart(id);
                                value.openModel(id);
                            }}
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    inCart
                                </p>
                                ) : (
                                <i className="fas fa-cart-plus" />
                            )}
                        </button> 
                    </div>)}
                </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper =styled.div`
.card{
    // border-color:transparent;
    transition:.4s ease-out;
}
.card-footer{
    // background:transparent;
    // border-top:transparent;
    transition:.4s ease-out;
}
&:hover {
    .card{
        border: 0.04rem solid #d5cfcf;
        box-shadow: 2px 2px 5px 0px #d5cfcf;
    }
    .card-footer{
        background:rgba (247,247,247,247);
    }
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:.4s ease-out;
}
.card:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4 rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWR);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition:.4s ease-out;
}

.card:hover .cart-btn{
    transform:none;
}
.cart-btn:hover{
    background:var(--mainWR);
    color:var(--mainBlue);
    cursor:pointer;
}
`
export default Product;