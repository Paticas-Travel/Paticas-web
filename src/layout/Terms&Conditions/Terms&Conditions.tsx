import { useTranslation } from "react-i18next";
import { getRandomImage } from "../../utils/randomImage";

const TermsConditions = () => {
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
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("termsAndConditionsView.title")}</h1>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg text-gray-600 mb-2">{i18n.t("termsAndConditionsView.intro")}</p>
        </section>
      </header>
      <article className="space-y-10 max-w-4xl mx-auto pb-16 px-4">
        {/* 1. Reservations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("termsAndConditionsView.sections.reservations.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">{i18n.t("termsAndConditionsView.sections.reservations.items.0")}</li>
            <li className="italic">{i18n.t("termsAndConditionsView.sections.reservations.items.1")}</li>
            <li className="italic">{i18n.t("termsAndConditionsView.sections.reservations.items.2")}</li>
          </ul>
        </section>

        {/* 2. Modifications and Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="bold">
              {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.0.title")}
              <span className="italic">
                {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.0.info")}
              </span>
            </li>

            <li className="bold">
              {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.1.title")}
              <span className="italic">
                {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.1.info")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.2.title")}
              <span className="italic">
                {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.2.info")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.title")}
              <span className="italic">
                {i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.info")}
              </span>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.0")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.1")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.2")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.3")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.4")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.5")}</li>
                <li className="italic">{i18n.t("termsAndConditionsView.sections.modificationsAndLiability.items.3.subItems.6")}</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 3. General Conditions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("termsAndConditionsView.sections.generalConditions.title")}
          </h2>
          <p className="italic">{i18n.t("termsAndConditionsView.sections.generalConditions.text")}</p>
        </section>

        {/* 4. Our Commitment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("termsAndConditionsView.sections.ourCommitment.title")}
          </h2>
          <p className="italic">{i18n.t("termsAndConditionsView.sections.ourCommitment.text")}</p>
        </section>
      </article>
    </main>
  );
};

export default TermsConditions;
