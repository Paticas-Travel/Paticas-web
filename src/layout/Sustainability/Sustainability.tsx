import { useTranslation } from "react-i18next";
import { getRandomImage } from "../../utils/randomImage";

const Sustainability = () => {
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
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("sustainability.title")}</h1>
          <h2 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("sustainability.subTitle")}</h2>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg text-gray-600 mb-2">{i18n.t("sustainability.text")}</p>
        </section>
      </header>
      <article className="space-y-10 max-w-4xl mx-auto pb-16 px-4">
        {/* 1. sustainability Commitment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.sustainabilityCommitment.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.sustainabilityCommitment.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="bold">
              {i18n.t("sustainability.sections.sustainabilityCommitment.items.0.title")}
              <span className="pl-1 italic">
                {i18n.t("sustainability.sections.sustainabilityCommitment.items.0.text")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("sustainability.sections.sustainabilityCommitment.items.1.title")}
              <span className="pl-1 italic">
                {i18n.t("sustainability.sections.sustainabilityCommitment.items.1.text")}
              </span>
            </li>
            <li className="bold">
              {i18n.t("sustainability.sections.sustainabilityCommitment.items.2.title")}
              <span className="pl-1 italic">
                {i18n.t("sustainability.sections.sustainabilityCommitment.items.2.text")}
              </span>
            </li>
          </ul>
          <p className="italic">{i18n.t("sustainability.sections.sustainabilityCommitment.subText")}</p>
        </section>
        <hr />
        {/* 2. Environmental Responsibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.environmentalResponsibility.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.text")}</p>
          <h3 className="text-xl font-semibold mb-4">
            {i18n.t("sustainability.sections.environmentalResponsibility.subTitle")}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.0")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.1")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.2")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.3")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.4")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.5")}</li>
            <li className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.items.6")}</li>
          </ul>
          <p className="italic">{i18n.t("sustainability.sections.environmentalResponsibility.subText")}</p>
        </section>
        <hr />
        {/* 3. Community Commitment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.communityCommitment.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.communityCommitment.text")}</p>
          <article>
            <h3 className="text-2xl font-semibold mb-4">
              {i18n.t("sustainability.sections.communityCommitment.subTitle")}
            </h3>
            <p className="italic mb-4">
              {i18n.t("sustainability.sections.communityCommitment.subText")}
            </p>
            <h3 className="text-xl font-semibold mb-4">
              {i18n.t("sustainability.sections.communityCommitment.itemsTitle")}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="bold">
                {i18n.t("sustainability.sections.communityCommitment.items.0.title")}
                <span className="pl-1 italic">
                  {i18n.t("sustainability.sections.communityCommitment.items.0.text")}
                </span>
              </li>
              <li className="bold">
                {i18n.t("sustainability.sections.communityCommitment.items.1.title")}
                <span className="pl-1 italic">
                  {i18n.t("sustainability.sections.communityCommitment.items.1.text")}
                </span>
              </li>
              <li className="bold">
                {i18n.t("sustainability.sections.communityCommitment.items.2.title")}
                <span className="pl-1 italic">
                  {i18n.t("sustainability.sections.communityCommitment.items.2.text")}
                </span>
              </li>
              <li className="bold">
                {i18n.t("sustainability.sections.communityCommitment.items.3.title")}
                <span className="pl-1 italic">
                  {i18n.t("sustainability.sections.communityCommitment.items.3.text")}
                </span>
              </li>
            </ul>
            <p className="italic mb-4">
              {i18n.t("sustainability.sections.communityCommitment.subText2")}
            </p>
          </article>
          <hr />
          <article>
            <h3 className="text-2xl font-semibold mb-4">
              {i18n.t("sustainability.sections.communityCommitment.subTitle2")}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="italic">{i18n.t("sustainability.sections.communityCommitment.items2.0")}</li>
              <li className="italic">{i18n.t("sustainability.sections.communityCommitment.items2.1")}</li>
              <li className="italic">{i18n.t("sustainability.sections.communityCommitment.items2.2")}</li>
              <li className="italic">{i18n.t("sustainability.sections.communityCommitment.items2.3")}</li>
              <li className="italic">{i18n.t("sustainability.sections.communityCommitment.items2.4")}</li>
            </ul>
            <p className="italic mb-4">
              {i18n.t("sustainability.sections.communityCommitment.subText3")}
            </p>
          </article>
        </section>
        <hr />
        {/* 4. Economic and Social Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.economicAndSocialImpact.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.items.0")}</li>
            <li className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.items.1")}</li>
            <li className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.items.2")}</li>
            <li className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.items.3")}</li>
          </ul>
          <p className="italic">{i18n.t("sustainability.sections.economicAndSocialImpact.subText")}</p>
        </section>
        <hr />
        {/* 5. Our Results and Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.ourResultsAndImpact.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.text")}</p>
          <article>
            <h3 className="text-2xl font-semibold mb-4">
              {i18n.t("sustainability.sections.ourResultsAndImpact.subTitle")}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items.0")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items.1")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items.2")}</li>
            </ul>
          </article>
          <article>
            <h3 className="text-2xl font-semibold mb-4">
              {i18n.t("sustainability.sections.ourResultsAndImpact.subTitle1")}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items1.0")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items1.1")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items1.2")}</li>
            </ul>
          </article>
          <article>
            <h3 className="text-2xl font-semibold mb-4">
              {i18n.t("sustainability.sections.ourResultsAndImpact.subTitle2")}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items2.0")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items2.1")}</li>
              <li className="italic">{i18n.t("sustainability.sections.ourResultsAndImpact.items2.2")}</li>
            </ul>
          </article>
        </section>
        <hr />
        {/* 6. Our Promise */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("sustainability.sections.ourPromise.title")}
          </h2>
          <p className="italic">{i18n.t("sustainability.sections.ourPromise.text")}</p>

        </section>
      </article>
    </main>
  )
};

export default Sustainability;