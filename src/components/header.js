import React from "react";
import {connect, styled} from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import Logoimg from './images/360-Kompakt-logo.png';


const Header = ({state}) => {
    const {title, description} = state.frontity;
    const {headerBg} = state.theme.colors;


    return (
        <PageHeader bg={headerBg} id="site-header">
            <HeaderInner>
                <TitleWrapper>

                    <MobileMenuButton/>
                    <MobileMenuModal/>
                    {/* Heading and Description of the site */}
                    <TitleGroup>
                        <StyledLink link="/">
                            <SiteTitle><img src={Logoimg} alt="360Kompakt"/></SiteTitle>
                        </StyledLink>
                    </TitleGroup>

                    {/* Mobile menu button and modal */}
                    {/* Search button on mobile */}
                    {state.theme.showSearchInHeader && <MobileSearchButton/>}
                </TitleWrapper>

                <HeaderNavigationWrapper>
                    {/* Desktop navigation links */}
                    <Navigation/>
                    {/* Desktop search button */}
                    {state.theme.showSearchInHeader && <SearchButton/>}
                </HeaderNavigationWrapper>
            </HeaderInner>
            {/* Global search modal */}
            <SearchModal/>

        </PageHeader>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    //margin: -1rem 0 0 -2.4rem;
  }
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 2rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: black;
  width: 100%;
  height: 14vh;
  background: white;

  @media (max-width: 998px) {
    background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #f9f9f9 50%, #f9f9f9 100%);
    box-shadow: 0px 0px 3px #c1c1c1;
    height: 70px;
  }
`;

const HeaderInner = styled.div`

  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0rem 5%;
  max-width: 100%;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  @media (min-width: 700px) {
    width: calc(100% - 2rem);
  }
`;

const SiteTitle = styled.h1`
  img {
    max-width: 180px;
  }
  
  @media(min-width: 1200px) {
    img {
      max-width: 300px;
    }
  }

  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    //margin: 1rem 9rem 0rem 9rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.8rem;
  font-weight: 500;
  display: none;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;

  @media (min-width: 1000px) {
    //margin: 1rem 0 0 2.4rem;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;


  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;

