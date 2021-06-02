import React, {useState, useEffect} from 'react'
import {connect, styled} from 'frontity'
import axios from 'axios'
import Link from './link2'
import {ExternalLink} from 'react-external-link';


function NavMenu({state}) {

    const [category, setcategory] = useState([''])
    let array = [];
    const data = state.source.get(state.router.link);
    const categoryLength = state.source.category

    useEffect(() => {
        axios.get('https://api.360kompakt.de/wp-json/menus/v1/menus/footer-menu')
            .then(res => {
                for (let i = 0; i < res.data.items.length; i++) {
                    // console.log(res.data.items[i].title)
                    array.push(res.data.items[i].title)

                }
                setcategory(array)


            })
            .catch(err => console.log(err))
    }, [])


    return (

        <MenuStyle>
            <div className="container">
                <ul className="hide-scrollbar">
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

  .container {
    margin: auto;
    padding: 0rem 5%;
    max-width: 100%;
    @media (min-width: 700px) {
      width: calc(100% - 2rem);
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
  }

  li {
    margin: 0;
    list-style: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: #999;
    font-size: 14px;
    padding: 1rem 0.75rem;
    white-space: nowrap;
  }

  a:hover {
    background-color: #ddd;
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;