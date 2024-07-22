import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";

function PrivacyPolicy() {
  return (
    <div className="mt-[-2rem] w-full flex items-center justify-center flex-col gap-[1rem] mobile:gap-[2rem]">
      <div className="w-10/12 flex items-center justify-center flex-col  gap-[1rem] mobile:gap-[2rem]">
        <h2 className="text-mainHeading text-seconderyHeading font-semibold">
          Privacy Policy
        </h2>
        <p className="text-start w-full">
          Evaga Entertainment Pvt Ltd "we", are committed to protecting and
          respecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website or use our services. Please read this policy carefully to
          understand our views and practices regarding your personal data and
          how we will treat it.
        </p>
        <div className=" w-full flex flex-col items-start justify-start gap-2">
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Information We Collect
          </h6>
          <p>We may collect and process the following data about you:</p>

          <ol className="text-textColor flex flex-col gap-1">
            <li className="list-disc">
              Personal Identification Information: Name, email address, phone
              number, etc. Event Details: Information related to the events you
              are planning, such as dates, venues, preferences, and budgets.
            </li>
            <li className="list-disc">
              Technical Data: IP address, browser type, operating system,
              referring URLs, and other similar data collected through cookies
              and other tracking technologies. How We Use Your Information
            </li>
          </ol>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            How We Use Your Information
          </h6>
          <p>We use the information we collect in the following ways: </p>

          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              To Provide Services:
            </span>{" "}
            To plan and manage events based on your specifications.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              Communication:
            </span>{" "}
            To contact you regarding our services, your account, or your events.
            Marketing: To send you promotional materials and updates about our
            services, with your consent.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              Improvement:
            </span>{" "}
            To analyze data and improve our website and services. Data Sharing
            and Disclosure.
          </p>

          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except:
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              Service Providers:
            </span>{" "}
            Third-party vendors who assist us in operating our website,
            conducting our business, or providing services to you.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              Legal Obligations:
            </span>{" "}
            When required by law or in response to legal processes. Security of
            Your Information
          </p>
          <p>
            We use administrative, technical, and physical security measures to
            protect your personal information. However, please be aware that no
            security measures are perfect or impenetrable.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Your Data Protection Rights
          </h6>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <p>
            <span className="text-mainHeading font-semibold"> Access:</span> The
            right to access the personal data we hold about you.
          </p>
          <p>
            <span className="text-mainHeading font-semibold"> Correction:</span>{" "}
            The right to have your personal data corrected if it is inaccurate
            or incomplete.
          </p>
          <p>
            <span className="text-mainHeading font-semibold"> Erasure:</span>{" "}
            The right to request the deletion of your personal data.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">Restriction:</span>{" "}
            The right to request the restriction of processing your personal
            data.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">Objection:</span>{" "}
            The right to object to the processing of your personal data.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              Data Portability:
            </span>{" "}
            The right to request that we transfer your data to another
            organization, or directly to you, under certain conditions.
          </p>

          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Changes to This Privacy Policy
          </h6>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>

          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Contact Us
          </h6>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Email:
            <Link to="mailto:info@evagaentertainment.com">
              info@evagaentertainment.com
            </Link>{" "}
          </p>
          <p>
            Phone: <Link to="tel:+918296157611">+91 8296157611</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
