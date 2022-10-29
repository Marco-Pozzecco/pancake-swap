import React from "react";
import { WinPrizes } from "../../layouts/home-win-prizes/WinPrizes";
import Subnav from '../../components/subnav/Subnav';
import { FloatingBunny } from "../../layouts/home-floating-bunny/FloatingBunny";

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
            <FloatingBunny />
            <WinPrizes />
            
        </>
        
  
    ) ;
}