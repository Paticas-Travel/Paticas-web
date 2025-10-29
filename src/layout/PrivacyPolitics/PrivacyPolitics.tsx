import { useTranslation } from "react-i18next";
import { getRandomImage } from "../../utils/randomImage";

const PrivacyPolitics = () => {
  const { i18n } = useTranslation();
  return (
    <main className="pt-7 text-gray-800 leading-relaxed">
      <header className="text-center mb-10 relative">
        <img
          src={getRandomImage()}
          alt="Traveling with Paticas"
          className="object-center object-cover w-full h-[500px]"
        />
        <section className="max-w-4xl mx-auto text-white absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("privacyPolicyView.title")}</h1>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg text-gray-600 mb-2">{i18n.t("privacyPolicyView.text")}</p>
        </section>
      </header>
      <article className="space-y-10 max-w-4xl mx-auto pb-16 px-4">
        {/* 1. Information Collection */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("privacyPolicyView.sections.informationWeCollect.title")}
          </h2>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.informationWeCollect.text")}
          </span>
          <ul className="list-disc pl-8 space-y-2 pt-1">
            <li className="italic">{i18n.t("privacyPolicyView.sections.informationWeCollect.items.0")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.informationWeCollect.items.1")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.informationWeCollect.items.2")}</li>
          </ul>
        </section>
        {/* 2. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("privacyPolicyView.sections.howWeUseYourInformation.title")}
          </h2>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.howWeUseYourInformation.text")}
          </span>
          <ul className="list-disc pl-8 space-y-2 pt-1">
            <li className="italic">{i18n.t("privacyPolicyView.sections.howWeUseYourInformation.items.0")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.howWeUseYourInformation.items.1")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.howWeUseYourInformation.items.2")}</li>
          </ul>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.howWeUseYourInformation.subText")}
          </span>
        </section>
        {/* 3. Data Protection & Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("privacyPolicyView.sections.dataProtection&Security.title")}
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li className="italic">{i18n.t("privacyPolicyView.sections.dataProtection&Security.items.0")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.dataProtection&Security.items.1")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.dataProtection&Security.items.2")}</li>
          </ul>
        </section>
        {/* 4. Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("privacyPolicyView.sections.yourRights.title")}
          </h2>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.yourRights.text")}
          </span>
          <ul className="list-disc pl-8 space-y-2">
            <li className="italic">{i18n.t("privacyPolicyView.sections.yourRights.items.0")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.yourRights.items.1")}</li>
            <li className="italic">{i18n.t("privacyPolicyView.sections.yourRights.items.2")}</li>
          </ul>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.yourRights.subText")} <a href={`mailto:` + i18n.t("paticasEmail")}>{i18n.t("paticasEmail")}</a>
          </span>
        </section>
        {/* 5. Our Commitment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("privacyPolicyView.sections.ourCommitment.title")}
          </h2>
          <span className="italic p">
            {i18n.t("privacyPolicyView.sections.ourCommitment.text")}
          </span>
        </section>
      </article>
    </main>
  )
}

export default PrivacyPolitics;