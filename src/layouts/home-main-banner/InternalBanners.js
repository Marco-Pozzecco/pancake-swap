import React from "react";
import "./_home-main-banner.scss";
import { Button } from "../../components/buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import { MainBannerCounterLottery } from "./MainBannerCounterLottery";
import "../../abstracts/_theme.scss";

// PRIMO BANNER - BANNER-A
export function BannerA() {
  return (
    <div className="mbssc banner-a" id="banner1">
      {/* <!-- -----BANNER A------------------------------ --> */}
      <div className="main-banner-content-container banner-a1">
        {/* <!--- -- -- -- -- Titles Content-- -- -- -- -- ---- -- -- -- --> */}
        <h2 className="main-banner-title-a mbt-a1">Perpetual Futures</h2>
        <h2 className="main-banner-title-a mbt-a2">Up to 100x Leverage</h2>

        <Button
          text="Trade Now"
          type={"fullButton"}
          style={{ color: "var(--background-primary)" }}
        >
          <FaArrowRight />
        </Button>
      </div>

      {/* <!-- -- IMAGE Container A -- -- -- --> */}
      <div className="bunny-container-a banner-a1">
        <picture>
          <source
            media="(max-width: 968px)"
            srcset="
                    https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&w=640&q=75
                "
          />
          <img
            src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperpetual.fd0aa080.png&w=828&q=75"
            alt="Panckake Swap Bunny"
          />
        </picture>
      </div>
    </div>
  );
}

//--------------------------

// SECONDO BANNER - BANNER-B  ---> woth Counter
export function BannerB() {
  const TheDate = 3 * 24 * 60 * 60 * 1000;
  const NowDate = new Date().getTime();

  const StartCountdown = NowDate + NowDate;

  return (
    <div className="mbssc banner-b" id="banner2">
      {/* <!-- -----BANNER B------------------------------ --> */}
      <div className="main-banner-content-container banner-b2">
        {/* <!--- -- -- -- -- Titles Content-- -- -- -- -- ---- -- -- -- --> */}
        <h2 className="main-banner-title-b mbt-b1">
          Win <span>$102.181</span> in Lottery
        </h2>

        {/* <!--- -- -- -- -- Titles Content - COUNTER Lottery-- -- -- -- -- ---- -- -- -- --> */}

        <MainBannerCounterLottery targetDay={StartCountdown} />

        <Button
          text="Play Now"
          type={"fullButton"}
          style={{ color: "var(--background-primary)" }}
        >
          <FaArrowRight />
        </Button>
      </div>

      {/* <!-- -- IMAGE Container B-- -- -- -- -- -- -- -- --> */}
      <div className="bunny-container-b banner-b2">
        <picture>
          <source
            media="(max-width: 968px)"
            srcset="
                        https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlotteryMobile.7ad41ede.png&w=384&q=75
                    "
          />
          <img
            src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flottery.77a09738.png&w=3840&q=75"
            alt="Panckake Swap Bunny B"
          />
        </picture>
      </div>
    </div>
  );
}

//--------------------------

// TERZO BANNER - BANNER-C
export function BannerC() {
  return (
    <div className="mbssc banner-c" id="banner3">
      {/* <!-- -----BANNER C----------------------------- --> */}
      <div className="main-banner-content-container banner-c1">
        {/* <!-- -- -- Titles Content-- -- -- -- -- ---- --> */}
        <h2 className="main-banner-title-c mbt-c1">Soon</h2>
        <h2 className="main-banner-title-c mbt-c2">HOOP IFO</h2>

        <Button
          text="Go to IFO"
          type={"fullButton"}
          style={{ color: "var(--background-primary)" }}
        >
          <FaArrowRight />
        </Button>
      </div>

      {/* <!-- -- IMAGE Container C-- -- -- -- --> */}
      <div className="bunny-container-c">
        <div className="bc-internalwrapper-c">
          <div className="bunny-container-c1 banner-c1">
            <picture>
              <source
                media="(max-width: 576px)"
                srcset="
                                https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIFOMobile.a93e96d8.png&w=384&q=75
                            "
              />
              <img
                src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIFO.7b008469.png&w=640&q=75"
                alt="Panckake Swap Bunny"
              />
            </picture>
          </div>

          <div className="bunny-container-c2 banner-c1">
            <picture>
              <img
                src="https://pancakeswap.finance/images/tokens/0xF19cfb40B3774dF6Eed83169Ad5aB0Aaf6865F25.png"
                alt="Panckake Swap Bunny"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
