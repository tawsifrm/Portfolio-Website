import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import LoadingSite from "./components/Pages/LoadingSite";
import ResumePDF from "/Resume-public/Tawsif_Resume.pdf";

function App() {
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    // artificial loading time
    const load = async ( time ) => {
      setTimeout( () => {
        setLoading( false );
      }, time );
    };

    // load(0)
    load( 1250 );
  }, [] );

  return (
    <>
      { loading ? (
        <LoadingSite />
      ) : (
        <Navbar
          mainText="Tawsif Mayaz."
          menuItems={ {
            Home: "#",
            About: "#about",
            Experience: "#experiences",
            Contact: "#contact",
            Resume: ResumePDF,
          } }
          special={ [ "Resume" ] }
        />
      ) }
      <Home isLoaded={ !loading } />
    </>
  );
}

export default App;
