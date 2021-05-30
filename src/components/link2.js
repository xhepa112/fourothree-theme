import React from "react";
import { connect, useConnect } from "frontity";
// import Link from "@frontity/components/link";

const Link = ({href, actions, children}) =>{

return(
  <div>
    <a href={href} onClick={ e =>{
      e.preventDefault();
      actions.router.set(href)
    }}>

      {children}
    </a>
  </div>
)


}

export default connect(Link)