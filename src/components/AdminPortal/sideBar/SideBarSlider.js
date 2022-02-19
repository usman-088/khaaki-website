import React ,{useState}from 'react';
import './slider.css'
import { Link } from 'react-router-dom'

function SideBarSlider() {

        const [toggle ,setToggle]=useState(false)
    return (
        <div>
            <div className="viewport">
                <div className="sidebar">
                    <header onClick={()=>setToggle(true)}>
                        <a href="#">Khaaki</a>
                    </header>
                    <ul class="nav">
                        <li>
                            <Link className='Link' to='/'>ADD PRODUCTS</Link>
                        </li>
                        <li>
                            <Link className='Link' to='/viewProduct'> VIEW PRODUCTS  </Link>
                        </li>
                        <li>
                            <Link className='Link' to='/updateProduct'> UPDATE PRODUCTS </Link>
                        </li>
                        <li>
                            <Link className='Link' to='/addProduct'> DELETE PRODUCTS  </Link>
                        </li>
                        <li>
                            <Link className='Link' to='/addCatagory'> ADD CATEGORY </Link>
                        </li>
                        {/* <li>
                            <Link className='Link' to='updateCatagory'> UPDATE CATEGORY </Link>
                        </li> */}
                        <li>
                            <Link  className='Link' to=''> Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="content">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
                                    </a>
                                </li>
                                <li><a href="#">Test User</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        <h1>Simple Sidebar</h1>
                        <p>
                            Make sure to keep all page content within the
                            <code>#content</code>.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default SideBarSlider;