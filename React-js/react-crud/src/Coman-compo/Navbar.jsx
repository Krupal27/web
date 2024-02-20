import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Logo</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

            </MDBContainer>
            <MDBCollapse navbar open={openBasic}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            <Link to="/userdata">Userdata</Link>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            <Link to="/useradd">Useradd</Link>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            {/* <Link to="/useredit">Useredit</Link> */}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            {/* <Link to="/userdetails">Userdetails</Link> */}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            {/* <Link to="/userdelet">Userdelet</Link> */}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            <Link to="/usercrud">Usercrud</Link>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            <Link to="/crudtask">Crudtask</Link>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}