import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import Subnav from '../../components/subnav/Subnav';

// import { Page } from "../../components/page/Page";
// import Subnav from "../../components/subnav/Subnav";

export default function Home() {
    return (
        // <Page>
        //     {/* <FloatingBunny/> */}
        //     <WinPrizes />
        // </Page>
        <>
            <Subnav/>
            <WinPrizes />
        </>
        
  
    ) ;
}