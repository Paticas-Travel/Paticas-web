import { useTranslation } from "react-i18next";
import { getRandomImage } from "../../utils/randomImage";

const CommunityImpact = () => {
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
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("communityImpact.title")}</h1>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg text-gray-600 mb-2">{i18n.t("communityImpact.text")}</p>
        </section>
      </header>
      <article className="space-y-10 max-w-4xl mx-auto pb-16 px-4">
        {/* 1. Supporting Local Businesses */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("communityImpact.sections.supportingLocalBusinesses.title")}
          </h2>
          <p className="italic">{i18n.t("communityImpact.sections.supportingLocalBusinesses.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">
              {i18n.t("communityImpact.sections.supportingLocalBusinesses.items.0")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.supportingLocalBusinesses.items.1")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.supportingLocalBusinesses.items.2")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.supportingLocalBusinesses.items.3")}
            </li>
          </ul>
          <p className="italic">{i18n.t("communityImpact.sections.supportingLocalBusinesses.subText")}</p>
        </section>

        {/* 2. Sustainable And Responsible */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.title")}
          </h2>
          <p className="italic">{i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="bold">
              {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.0.title")}
              <span className="pl-1 italic">
                {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.0.text")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.1.title")}
              <span className="pl-1 italic">
                {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.1.text")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.2.title")}
              <span className="pl-1 italic">
                {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.2.text")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.3.title")}
              <span className="pl-1 italic">
                {i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.items.3.text")}
              </span>
            </li>
          </ul>
          <p className="italic">{i18n.t("communityImpact.sections.sustainableAndResponsibleTourism.subText")}</p>
        </section>

        {/* 3. Luxury With Purpose */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("communityImpact.sections.luxuryWithPurpose.title")}
          </h2>
          <p className="italic">{i18n.t("communityImpact.sections.luxuryWithPurpose.text")}</p>
        </section>

        {/* 4. Our Commitment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("communityImpact.sections.ourCommitment.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">
              {i18n.t("communityImpact.sections.ourCommitment.items.0")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.ourCommitment.items.1")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.ourCommitment.items.2")}
            </li>
            <li className="italic">
              {i18n.t("communityImpact.sections.ourCommitment.items.3")}
            </li>
          </ul>
          <p className="italic">{i18n.t("communityImpact.sections.ourCommitment.text")}</p>
        </section>
      </article>
    </main>
  )
};

export default CommunityImpact;