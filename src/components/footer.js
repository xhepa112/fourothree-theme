import React, {useEffect, useState} from 'react'
import {connect, styled} from 'frontity'
import Link from '../../../../../node_modules/@fourothreepage/fourothree-theme/src/components/link2'
/*import 'bootstrap/dist/css/bootstrap.min.css'*/
{/*import fb_favicon from './img/favicon.ico'*/}
{/*import lightweb_favicon from './img/lightweb.ico'*/}


function Footer() {
    return (
        <FooterStyle>
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                  <div className = "lists">
                    <div className="text-right">
                        <h3>Übersicht</h3>
                        <ul>
                          <li>
                            <Link href='/ueber-uns/'>Über Uns</Link>
                          </li>
                          <li>
                            <Link href='/unsere-autoren/'>Autoren</Link>
                          </li>
                          <li>
                            <Link href='/kontakt/'>Kontakt</Link>
                          </li>
                          <li>
                            <Link href='/impressum/'>Impressum</Link>
                          </li>
                          <li>
                            <Link href='/datenschutz/'>Datenschutz</Link>
                          </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3>Kategorien</h3>
                        <ul>
                          <li>
                            <Link href='/finanzen/'>Finanzen</Link>
                          </li>
                          <li>
                            <Link href='/technologie/'>Technologie</Link>
                          </li>   
                          <li>
                            <Link href='/lifestyle/'>Lifestyle</Link>
                          </li>  
                          <li>
                            <Link href='/management/'>Management</Link>
                          </li> 
                          <li>
                            <Link href='/marketing/'>Marketing</Link>
                          </li>
                          <li>
                            <Link href='/technologie/'>Technologie</Link>
                          </li> 
                          <li>
                            <Link href='/recht/'>Recht</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="px-8 text-center my-8">
                        
                        <p>360kompakt.de - 2021 - Präsentiert von Lightweb Media</p>
                    </div>
                </div> 
                <p className="copyright">Lightweb Media © 2021</p>
            </div>
        </footer>
    </div>
    </FooterStyle>
    )
}

export default connect(Footer)

const FooterStyle = styled.div`
.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.px-8 {
  padding: 0 2rem;
}

.text-center {
  text-align: center;
}

.footer-dark {
  width: 100%;
    padding:50px 0;
    color:#f0f9ff;
    background-color:#282d32;
  }
  .text-right {
    text-align: right;
  }
  .lists{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 280px;
    margin: 0 auto;
    
  }
  
  .footer-dark h3 {
    // margin-left: 40px;
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
  }
  
  .footer-dark ul {
    margin:0;
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }

  .footer-dark ul li {
    margin: 0;
    margin-bottom: 0.5rem;
  }
  
  .footer-dark ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.6;
  }
  
  .footer-dark ul a:hover {
    opacity:0.8;
  }

  .col-md-6-item-text{
    padding-top: 50px;
    display: flex;
    justify-content: center;
  }

  .col-sm-6 > ul {
float: left;
  }
  
  @media (max-width:767px) {
    .footer-dark .item:not(.social) {
      text-align:center;
      padding-bottom:20px;
    }
  }
  
  .footer-dark .item.text {
    margin-bottom:36px;
  }
  
  @media (max-width:767px) {
    .footer-dark .item.text {
      margin-bottom:0;
    }
  }

  @media (max-width: 700px){
    .col-md-6-item-text{
      margin-left: 18px;
    }
  }
  
  .footer-dark .item.text p {
    opacity:0.6;
    margin-bottom:0;
  }
  
  .footer-dark .item.social {
    text-align:center;
  }
  
  @media (max-width:991px) {
    .footer-dark .item.social {
      text-align:center;
      margin-top:20px;
    }
  }
  
  .footer-dark .item.social > a {
    font-size:20px;
    width:36px;
    height:36px;
    line-height:36px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    box-shadow:0 0 0 1px rgba(255,255,255,0.4);
    margin:0 8px;
    color:#fff;
    opacity:0.75;
  }
  
  .footer-dark .item.social > a:hover {
    opacity:0.9;
  }
  
  .footer-dark .copyright {
    text-align:center;
    padding-top:24px;
    opacity:0.3;
    font-size:13px;
    margin-bottom:0;
  }
  `
