import "./_home-start-in-seconds.scss"
import StartInSecondsBG from "../../resources/start-in-seconds-background.webp"

function StartInSeconds() {
    return ( 
        <div className="container-MySect d-flex">

            <div className="backgr">
                <img src={StartInSecondsBG} alt="sfondo_radial" />
            </div>


            <div className="box-img-animated-1">
                <div className="img-down" id="img-down-res">
                    <picture>
                        <img className="first-img" src="https://pancakeswap.finance/images/home/flying-pancakes/1-bottom@2x.webp"/>
                    </picture>
                </div>
                <div className="img-middle" id="img-middle-res">
                    <picture>
                        <img className="second-img" src="https://pancakeswap.finance/images/home/flying-pancakes/1-left@2x.webp"/>
                    </picture>
                </div>
                <div className="img-up" id="img-up-res">
                    <picture>
                        <img className="third-img" src="https://pancakeswap.finance/images/home/flying-pancakes/1-top@2x.webp"/>
                    </picture>
                </div>
            </div>


            <div className="box-img-animated-2">
                <div className="img-down-2" id="img-down-res-2">
                    <picture>
                        <img className="first-img-2" src="https://pancakeswap.finance/images/home/flying-pancakes/2-bottom@2x.webp"/>
                    </picture>
                </div>
                <div className="img-middle-2" id="img-middle-res-2">
                    <picture>
                        <img className="second-img-2" src="https://pancakeswap.finance/images/home/flying-pancakes/2-top@2x.webp"/>
                    </picture>
                </div>
                <div className="img-up-2" id="img-up-res-2">
                    <picture>
                        <img className="third-img-2" src="https://pancakeswap.finance/images/home/flying-pancakes/2-right@2x.webp"/>
                    </picture>
                </div>
            </div>



            <div className="text d-flex">
                <h2 className="head" id="head-res">Start in seconds.</h2>
                <div className="p-1">
                    Connect your crypto wallet to start using the app in seconds.
                </div>
                <div className="p-2">
                    No registration needed.
                </div>
                <a href="https://docs.pancakeswap.finance" target="_blank" className="link-a">Learn how to start</a>
                <div className="container-btn">
                </div>
                <button className="connectWallet">Connect Wallet</button>
            </div>
        </div>
     );
}

export default StartInSeconds;