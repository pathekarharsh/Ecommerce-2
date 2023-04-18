import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  max-height: 800px;
  margin: auto;
`;

const Image = styled.img`
  width: 200px;
  height:auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const ViewSingleProduct = (props) => {
  const { obj } = props;
  return (
    <>

      <Container className='bg-tailtertiary m-3'>
        <div className='flex-col'>

          <Image className='rounded-lg max-w-md mx-auto border-2 border-black' src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-40284,resizemode-1,msid-94083783/news/sports/virat-kohli-returns-to-the-top-of-the-order-for-the-9th-time-in-t20is.jpg" alt="image" />
          <div className="mx-auto">
          <h2 className='text-black font-bold bg-tailprimary rounded-md text-xl px-3 py-2 mx-2'>{obj.productname}</h2>

           
          </div>
        </div>

        <br />
        <div className='flex-col ml-2'>
          {/* <h2 className='text-black font-bold bg-tailprimary rounded-md text-xl px-3 py-2 mx-2'>{obj.productname}</h2> */}
         <p className='m-2 px-3 py-2 bg-tailtertiary3 rounded-md'>Category : {obj.category}</p>
            <p className='m-2 px-3 py-2 my-2 bg-tailtertiary3 rounded-md'>Subcategory : {obj.subcategory}</p>
         
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>price : {obj.productprice}</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Brand : {obj.brand}</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>UOM : {obj.uom}</p>
          <p className='px-3 m-2 py-1 bg-tailtertiary3 rounded-md'>Offer : {obj.offer} </p>

        </div>

      </Container>
    </>
  );
};

export default ViewSingleProduct;
