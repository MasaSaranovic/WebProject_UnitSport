import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>O Nama</Footer.Title>
                    <Footer.Link href="/aboutus">Unit Sport</Footer.Link>
                    <Footer.Link href="/news">Vesti</Footer.Link>
                    <Footer.Link href="/reference">Reference</Footer.Link>
                    <Footer.Link href="/shop">Prodavnica</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Pratite nas</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Radno vreme</Footer.Title>
                    <Footer.Link href="#">Ponedeljak 8:00-16:00</Footer.Link>
                    <Footer.Link href="#">Utorak 8:00-16:00</Footer.Link>
                    <Footer.Link href="#">Sreda 8:00-16:00</Footer.Link>
                    <Footer.Link href="#">Četvrtak 8:00-16:00</Footer.Link>
                    <Footer.Link href="#">Petak 8:00-16:00</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Kontaktiraj nas</Footer.Title>
                    <Footer.Link href="#">vukunitsport@gmail.com</Footer.Link>
                    <Footer.Link href="#">milosunitsport@gmail.com</Footer.Link>
                    <Footer.Link href="#">sasaunitsport@gmail.com</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Copy>
                <p>
                    &copy;{new Date().getFullYear()} Masa Saranovic, Inc. All rights reserved. 
                </p>
            </Footer.Copy>
            </Footer.Wrapper>
        </Footer>
    )
}