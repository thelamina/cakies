import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import ProductItem from "./ProductItem";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("./data.json").then((res) => setproducts(res.data));
  }, []);

  return (
    <div>
      <div className='Home jumbotron'>
        <div className='container d-flex justify-content-around align-items-center flex-wrap'>
          <div className='Landing-Image'>
            <img src='assets/images/pp.png' alt='' />
          </div>
          <div className='Landing-Content'>
            <h1>Bam-Bam Lala Special Offer</h1>
            <p>Get bambam for your loved ones this season</p>
            <a href='#' className='btn btn-primary'>
              Shop!
            </a>
          </div>
        </div>
      </div>
      <div className='Creamy container'>
        <div className='title text-center'>
          <h2 className='text-primary'>Creamy Cakes</h2>
          <img src='assets/images/line.svg' alt='' />
        </div>
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-4'>
          {products.map((product) => (
            <ProductItem product={product} key={product.id}/>
          ))}
        </div>
      </div>
      <div className='bg-dark'>
        <div className='container py-5'>
          <div className='title text-center'>
            <h2 className='text-white'>Specials</h2>
            <img src='assets/images/line.svg' alt='' />
          </div>
          <div className='d-flex align-items-center flex-wrap justify-content-center w-100 mt-3'>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
            <div className='Special-Item m-2 text-center'>
              <img
                className='rounded-circle'
                src='assets/images/sp.png'
                alt=''
                width='120px'
                height='120px'
              />
              <p className='Special-Item m-2-Name text-primary font-weight-bold mt-2'>
                Ginger Cake
              </p>
              <p className='Special-Item m-2-Price text-white font-weight-bold mt-1'>
                N23,800
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container  py-5'>
          <div className='title text-center'>
            <h2 className='text-primary'>Contact us</h2>
            <img src='assets/images/line.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
