import { Button } from "../../Components/Reusable/Buttons/Button";
import { useTranslation } from "react-i18next";

import "./hero2.0.css"

export const Hero = () => {
  const { t } = useTranslation()

  return ( 
    <section className="hero-section">

      <div className="heading-text-wrapper">
        <h1 className="hero-heading-h1">{t("Hero.h1")}</h1>
        <h2 className="hero-heading-h2">{t("Hero.h2")}</h2>
        </div>
        <div className="join-button-container">
        <Button buttonText={t("Hero.button")} buttonClass={"join-button"}/>
        </div>
       
    </section>
  )
}
