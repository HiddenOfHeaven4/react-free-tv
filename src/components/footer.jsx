import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

const FooterPage = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white fixed-bottom'>
      <div className='text-center p-2'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://vk.com/hiddenofheaven1'>
          by Gennady 'Hidden' Otto 
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;