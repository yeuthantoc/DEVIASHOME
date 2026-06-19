import { useTranslations } from "next-intl";
import { BrandLogo } from "./icons";
import { CONTACT } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="brand">
              <BrandLogo className="leaf" />
              <span>
                DEVIAS HOME
                <small
                  style={{
                    letterSpacing: ".28em",
                    fontSize: ".6rem",
                    fontWeight: 500,
                    display: "block"
                  }}
                >
                  KITCHEN DECO
                </small>
              </span>
            </div>
            <p>{t("tag")}</p>
          </div>
          <div>
            <h4>{t("office")}</h4>
            <p>
              183/14/5 Nguyen Van Khoi, Ward 8,
              <br />
              Go Vap District, Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div>
            <h4>{t("factory")}</h4>
            <p>
              Nghi Lam Commune, Nghi Loc District,
              <br />
              Nghe An Province, Vietnam
            </p>
          </div>
          <div>
            <h4>{t("contact")}</h4>
            <ul>
              <li>
                WhatsApp: <a href={`https://wa.me/${CONTACT.whatsapp}`}>+84 911326989</a>
              </li>
              <li>
                Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>
            © {year} DEVIAS HOME — Kitchen Deco. {t("rights")}
          </span>
          <span>{t("made_in")}</span>
        </div>
      </div>
    </footer>
  );
}
