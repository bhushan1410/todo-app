import React from 'react'
import LOGO from './../Jaway copy.svg'


const menu = [
  { name:'About', path:'/about', child: []}, 
  {name :'solutions', path :'/about',child:[
    {name: 'test'}
  ]},
  {name :'Services', path :'/about',child:[
    {name:'test'}
  ]},
  { name:'Testimonial', path:'/about', child: []}, 
  { name:'Careers', path:'/about', child: []}, 
  { name:'Blogs', path:'/about', child: []}, 
  { name:'Contact', path:'/about', child: []}, 
]

const Navbar = () => {  


    return (  
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <img src ={LOGO}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {menu.map((item)=>(
           <>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{item.name}</a>
          </li>
         
                {
                item.child.length > 0 
                }
          </>
        ))}

    
        </ul>
    </div>
  </div>
</nav>
    );
}
 
export default Navbar;

