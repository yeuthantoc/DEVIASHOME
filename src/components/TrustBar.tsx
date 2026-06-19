import { useTranslations } from "next-intl";

// Certifications + retailer wordmarks. Sits inside the hero section.
export default function TrustBar() {
  const t = useTranslations("trust");
  return (
    <div className="trustbar">
      <div className="wrap">
        <div className="certs">
          <span className="cert">
            <b>FSC</b>
          </span>
          <span className="cert">
            <b>ISO</b> 9001
          </span>
          <span className="cert">SMETA</span>
          <span className="cert">GSV</span>
          <span className="cert">
            <b>Food</b> Safe
          </span>
        </div>
        <span className="trust-label">{t("label")}</span>
        {/* Retailer wordmarks — replace with official authorized logos if permitted */}
        <div className="retailers">
          <span>Coupang</span>
          <span>Gmarket</span>
          <span>LOTTE</span>
        </div>
      </div>
    </div>
  );
}
