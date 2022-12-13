import React from "react";
import { DetailsCard } from "../../components/card/details-card/DetailsCard";
import "./_faq-wp.scss";

export function FAQWP() {
  return (
    <section className="faq-wp-main-container">
      <div className="faq-wp-sub-container">
        <div className="faq-wp-img-container">
          <img src="https://pancakeswap.finance/images/pottery/honey.png" />
        </div>

        <div className="faq-wp-card-container">
          <DetailsCard
            faq_main_title={"FAQ"}
            //------------------
            dc_sub_title_1={"How is odds calculated?"}
            dc_sub_text_1={
              "All CAKE deposits will be locked for the same duration, the odds of your address winning the prize pool is simply proportional to your CAKE deposit over the total CAKE deposit of the whole Pottery. Each week, eight (8) addresses are drawn randomly based on their odds. Simply put, if user A deposited 1 CAKE, user B deposited 2 CAKE, then user B's odds of winning is twice of user A's."
            }
            //------------------

            dc_sub_title_2={
              "Is there any risk associated with depositing and playing Pottery?"
            }
            dc_sub_text_2={
              "You will be locking your CAKE deposit for 10 weeks and you will not be able to withdraw early in any circumstances. Your principal (i.e. your deposit) will be returned to your 100% after 10 weeks. Only the staking rewards of your deposit will be used to fill and operate the Pottery. Simply put, you're only risking the staking rewards of your deposit."
            }
            //------------------

            dc_sub_title_3={
              "Where can I learn more about this new Pottery format?"
            }
            dc_sub_text_3={
              "Please feel free to reach out to us onTelegramorDiscordif you're still unsure about the format! Please also let us know if you have any feedback for us to improve this further."
            }
          />
        </div>
      </div>
    </section>
  );
}
