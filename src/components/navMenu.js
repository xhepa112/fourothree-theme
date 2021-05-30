import React, {useState, useEffect} from 'react'
import {connect, styled} from 'frontity'
import axios from 'axios'
import Link from './link2'
import { ExternalLink } from 'react-external-link';


function NavMenu({state}) {

const [category, setcategory] = useState([''])
let array = [];  
const data = state.source.get(state.router.link);
const  categoryLength = state.source.category

    useEffect(()=>{
        axios.get('https://api.360kompakt.de/wp-json/menus/v1/menus/footer-menu')
        .then( res => {
          for(let i = 0; i<res.data.items.length; i++) {
          // console.log(res.data.items[i].title)
          array.push(res.data.items[i].title)
          
             }   setcategory(array)
      
       
      })
          .catch(err=>console.log(err))
        },[])

    

    return (
            
                <MenuStyle>
                    <div>
                    <ul>
                        <li>
                        <Link href='/ueber-uns/'>{category[0]}</Link>
                        </li>
                        <li>
                        <Link href='/unsere-autoren/'>{category[1]}</Link>
                        </li>
                        <li>
                        <Link href='/kontakt/'>{category[2]}</Link>
                        </li>
                        <li>
                        <Link href='/impressum/'>{category[3]}</Link>
                        </li>
                        <li>
                        <Link href='/datenschutz/'>{category[4]}</Link>
                        </li>
                        {/* <li>
                        <Link href='/sitemap/'>{category[5]}</Link>
                        </li> */}
                        <li>
                        <ExternalLink href="https://www.facebook.com/360kompakt.de/">{category[6]}</ExternalLink>
                        </li>
                       
                    </ul>
                    </div>
                </MenuStyle>
            


    )
}


export default connect(NavMenu)



const MenuStyle = styled.div`
display: inline;
flex-direction:row;
justify-content: space-around;
@media(max-width: 700px){
  font-size: smaller;
}
ul {
    list-style-type: none;
    margin: 5px;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #9FA19F;               
  } 
  
  li {
    color: black;
    margin:5px;
    
  }
  li:hover{border-bottom:1px solid #007BB6}
`;