import { useTranslation } from "react-i18next";
import { getRandomImage } from "../../utils/randomImage";

const PaymentMethods = () => {
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
          <h1 style={{ textShadow: "0 2px 2px black" }} className="font-bold mb-2">{i18n.t("paymentMethods.title")}</h1>
          <p style={{ textShadow: "0 2px 2px black" }} className="text-lg text-gray-600 mb-2">{i18n.t("paymentMethods.text")}</p>
        </section>
      </header>
      <article className="space-y-10 max-w-4xl mx-auto pb-16 px-4">
        {/* 1. Online Payment */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("paymentMethods.sections.onlinePayment.title")}
          </h2>
          <p className="italic">{i18n.t("paymentMethods.sections.onlinePayment.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="bold">{i18n.t("paymentMethods.sections.onlinePayment.items.0.title")}
              <span className="italic">{i18n.t("paymentMethods.sections.onlinePayment.items.0.text")}</span>
            </li>
            <li className="bold">{i18n.t("paymentMethods.sections.onlinePayment.items.1.title")}
              <span className="italic">{i18n.t("paymentMethods.sections.onlinePayment.items.1.text")}</span>
            </li>
            <li className="bold">{i18n.t("paymentMethods.sections.onlinePayment.items.2.title")}
              <span className="italic">{i18n.t("paymentMethods.sections.onlinePayment.items.2.text")}</span>
            </li>
          </ul>

          <p className="bold">{i18n.t("paymentMethods.sections.onlinePayment.note")}
            <span className="italic">{i18n.t("paymentMethods.sections.onlinePayment.subText")}</span>
          </p>
        </section>

        {/* 2. Banck Transfer */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("paymentMethods.sections.bankTransfer.title")}
          </h2>
          <p className="italic">{i18n.t("paymentMethods.sections.bankTransfer.text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">{i18n.t("paymentMethods.sections.bankTransfer.items.0")}</li>
            <li className="italic">{i18n.t("paymentMethods.sections.bankTransfer.items.1")}</li>
            <li className="italic">{i18n.t("paymentMethods.sections.bankTransfer.items.2")}</li>
          </ul>
        </section>

        {/* 3. Book With US */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("paymentMethods.sections.bookWithUs.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="italic">{i18n.t("paymentMethods.sections.bookWithUs.items.0")}</li>
            <li className="italic">{i18n.t("paymentMethods.sections.bookWithUs.items.1")}</li>
            <li className="italic">{i18n.t("paymentMethods.sections.bookWithUs.items.2")}</li>
          </ul>
          <p className="italic">{i18n.t("paymentMethods.sections.bookWithUs.text")}</p>
        </section>
      </article>
    </main >
  )
};

export default PaymentMethods;