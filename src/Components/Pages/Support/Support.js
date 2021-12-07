import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Support() {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/support.json")
            .then((res) => res.json())
            .then((products) => {
                setProducts(() => products.products);
            });
    }, []);

console.log(products);
let order = 1;
    return (
        <div>
            <section className="internal-page-wrapper top-50">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="title-wraper bold mt-5">Support</div>
                        </div>
                    </div>
                    {products.map((product) => {
                        let id = product.product_url;
                        let title = product.product_name;
                        

                        let order1 = 1;
                        let order2 = 2;
                        if (order !== 1) {
                            order1 = 2;
                            order2 = 1;
                            order--;
                        } else {
                            order++;
                        }

                        let productDiv = (
                            <div
                                key={id}
                                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
                            >
                                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                                    <div className="product-title">{title}</div>
                                </div>
                            </div>
                        );
                        return productDiv;
                    })}
                </div>
            </section>
        </div>
    );
}

export default Support;