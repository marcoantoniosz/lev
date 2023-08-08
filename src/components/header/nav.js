import React from "react";


const Navbar = ({navClass, linkClassName}) =>(
  <NavComponent navClass={navClass}
                linkClassName = {linkClassName}
  />
);

export const NavComponent = ({onClick, navClass, linkClassName})=>(
<nav className={navClass}>
    {["A Lev", "Os Nossos Produtos", "Nossos Clientes", "Mais"].map(section=>
      <a
            key={section}
            href={section}
            smooth={true}
            className={linkClassName}
            onClick={onClick}>
          {section}
      </a>
    )}
</nav>
)
export default Navbar;