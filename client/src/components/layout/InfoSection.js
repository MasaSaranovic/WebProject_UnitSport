import React from 'react';
import styled from 'styled-components';
import { InfoData } from '../../data/InfoData'

const Section2 = styled.section`
   width: 100%;
   height: 100%;
   padding: 4rem 0rem;
`;
const Container2 = styled.div`
   padding: 3rem calc((100vw - 1300px) / 2);
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 450px;

   @media screen and (max-width: 768px) {
       grid-template-columns: 1fr;
       grid-template-rows: 800px;
   }
`;
const ColumnLeft2 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: justify;
   align-items: flex-start;
   line-height: 1.4;
   padding: 1rem 2rem;
   order: ${({reverse}) => (reverse ? '2' : '1')};

   h1 {
       margin-bottom: 1rem;
       font-size: clamp(1.5rem, 6vw, 2rem);
   }

   p {
       margin-bottom: 2rem;
   }
`;
const ColumnRight2 = styled.div`
   padding: 1rem 2rem;
   order: ${({reverse}) => (reverse ? '1' : '2')};
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
   }

   img {
       width: 100%;
       height: 100%;
       object-fit: contain;

       @media screen and (max-width: 768px) {
           width: 90%;
           height: 90%;
       }
   }
`;

const InfoSection = ({
  
}) => {
    return (
        <Section2>
            <Container2 className="top">
                <ColumnLeft2 >
                <h1>{InfoData.heading}</h1>
                <p>{InfoData.paragraphOne}</p>
                <p>{InfoData.paragraphTwo}</p>
                </ColumnLeft2>
                <ColumnRight2 reverse={InfoData.reverse}>
                <img src={InfoData.image} alt="onama" />
                </ColumnRight2>
            </Container2>
        </Section2>
    );
};

export default InfoSection;
