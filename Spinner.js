import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


const Spinner = (props) => {
  return (
    <>

      {/* <SpinnerCircular  {props.enabled}/> */}
      <div>
       
            {props.isSpinnerVisible && (
              <ReactBootstrap.Spinner animation="border" />
            )}
          </div>
    </>
  );
}

export default Spinner;
