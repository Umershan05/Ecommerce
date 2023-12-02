import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux/es/hooks/useSelector';
function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer)
  const cart = useSelector((state) => state.cartReducer)
  return (
    <>
      <Navbar style={{ zIndex: '1' }} expand="lg" className="bg-dark position-fixed top-0 w-100 mb-5">
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}><i class="fa-solid fa-truck-fast"></i> TEEREX</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            

            
            <Nav className="ms-auto">
              <Nav.Link className='btn border rounded mb-2'>
                <Link to={'/Wishlist'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold',fontSize:'20px' }}><i class="fa-solid fa-heart text-danger me-2"></i>Wishlist
                  <Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge>
                </Link>
              </Nav.Link>

              <Nav.Link className='btn border rounded ms-3 mb-2' ><Link to={'/Cart'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold',fontSize:'20px' }}><i class="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
                <Badge className='ms-2 rounded' bg="light">{cart?.length}</Badge>
              </Link></Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header