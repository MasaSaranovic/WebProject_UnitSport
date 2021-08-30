import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { InfoData } from '../../data/InfoData'

const Section1 = styled.section`
   width: 100%;
   height: 100%;
   padding: 4rem 0rem;
   margin-bottom: -90px;
   margin-top: -20px;
   
`;
const Container1 = styled.div`
   padding: 3rem calc((100vw - 1300px) / 2);
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 450px;

   @media screen and (max-width: 768px) {
       grid-template-columns: 1fr;
       grid-template-rows: 800px;
   }
`;
const ColumnLeft1 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   text-align: justify;
   line-height: 1.4;
   padding: 1rem 2rem;
   order: ${({ reverse }) => (reverse ? '2' : '1')};

   h1 {
       margin-bottom: 1rem;
       font-size: clamp(1.5rem, 6vw, 2rem);
   }

   p {
       margin-bottom: 2rem;
   }
`;
const ColumnRight1 = styled.div`
   padding: 1rem 2rem;
   order: ${({ reverse }) => (reverse ? '1' : '2')};
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
   }

   img {
       width: 120%;
       height: 120%;
       object-fit: contain;

       @media screen and (max-width: 768px) {
           width: 90%;
           height: 90%;
       }
   }
`;

const HomeSection = ({

}) => {
    return (
        <Section1>
            <Container1 >
                <ColumnLeft1>
                    <h1>Noviteti za ovu godinu</h1>
                    <p>Pogledajte neke od najnovijih modela za ovu sezonu i odaberite model koji vam odgovara. Nudimo širok asortiman za pojedince i za klubove. Modeli se mogu izrađivati po želji kupaca u drugu boju i dizajn.</p>
                    <p>Poručeni proizvodi koje imamo na stanju dolaze na vašu adresu za par dana od dana naručivanja. Ako niste sportista a želite da izgledate fenomenalno u sportskoj elegenciji izaberite najbolje.</p>
                    <p>Sva naša sportska oprema je gotova sa komplet štampom logoa, grbova, brojeva i sponzora.
                        Za kupce-klubove ovo je veoma važno, jer u drugačijem slučaju, morate računati naknadne troškove štampanja sportske opreme i izgubljeno vreme. UNIT danas nose snagatori Strongmen lige šampiona širom sveta, većina odbojkaških i većina rukometnih klubova u zemlji, a sledeći sportovi za osvajanje jesu košarka i fudbal, gde već oblače Ženski fudbalski klub Spartak, koji igra UEFA Ligu šampiona za dame.</p>
                    <Button to="/shop" primary='true'>{InfoData.buttonLabel}</Button>
                </ColumnLeft1>
                <ColumnRight1 reverse={InfoData.reverse}>
                    <img src="/images/katalog1.jpg" alt="onama" />
                </ColumnRight1>
            </Container1>
        </Section1>
    );
};

export default HomeSection;
