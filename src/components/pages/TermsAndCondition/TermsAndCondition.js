import React from "react";
import Footer from "../../layout/Footer/Footer";
import { Link } from "react-router-dom";

function TermsAndCondition() {
  return (
    <div className="mt-[-2rem] w-full flex items-center justify-center flex-col gap-[1rem] mobile:gap-[2rem]">
      <div className="w-10/12 flex items-center justify-center flex-col  gap-[1rem] mobile:gap-[2rem]">
        <h2 className="text-mainHeading text-seconderyHeading font-semibold">
          Terms And Condition
        </h2>
        <p className="text-start w-full">
          These Terms & Conditions ("Terms") govern your use of our website and
          services. By accessing or using our services, you agree to be bound by
          these Terms.
        </p>
        <div className=" w-full flex flex-col items-start justify-start gap-2">
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Services
          </h6>
          <p>
            Evaga Entertainment Pvt Ltd provides event management services
            including but not limited to weddings, corporate events, and other
            special occasions. Specific terms and conditions related to each
            service will be provided at the time of booking.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            User Obligations
          </h6>
          <p>By using our services, you agree to:</p>
          <ol className="text-textColor flex flex-col gap-1">
            <li className="list-disc">
              Provide accurate and up-to-date information.
            </li>
            <li className="list-disc">
              Comply with all applicable laws and regulations.
            </li>
            <li className="list-disc">
              Not use our services for any unlawful or unauthorized purpose.
            </li>
          </ol>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Booking and Payment
          </h6>
          <p>
            <span className="text-mainHeading font-semibold">Booking:</span> To
            book our services, you must provide all necessary information and
            agree to our service terms.
          </p>
          <p>
            <span className="text-mainHeading font-semibold"> Payment:</span>{" "}
            Payment terms will be specified at the time of booking. Payments are
            non-refundable unless otherwise stated in the specific service
            terms.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Cancellation and Refunds
          </h6>
          <p>
            <span className="text-mainHeading font-semibold">
              {" "}
              Cancellation by You:
            </span>{" "}
            You may cancel your event booking according to the cancellation
            policy provided at the time of booking.
          </p>
          <p>
            <span className="text-mainHeading font-semibold">
              Cancellation by Us:
            </span>{" "}
            We reserve the right to cancel your booking for any reason,
            including but not limited to force majeure events. In such cases, we
            will provide a full refund.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Limitation of Liability
          </h6>
          <p>
            To the fullest extent permitted by law, Evaga Entertainment Pvt Ltd
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <p>Your use or inability to use our services.</p>
          <p>
            Any unauthorized access to or use of our servers and/or any personal
            information stored therein.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Intellectual Property
          </h6>
          <p>
            {" "}
            All content included on our website, such as text, graphics, logos,
            images, and software, is the property of Evaga Entertainment Pvt Ltd
            and protected by applicable intellectual property laws. You may not
            use, reproduce, or distribute any content without our prior written
            permission.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Governing Law
          </h6>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of [India/ Karnataka]. Any disputes arising out of or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of [India/Karnataka].
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Changes to These Terms
          </h6>
          <p>
            We may update these Terms from time to time. We will notify you of
            any changes by posting the new Terms on this page. Your continued
            use of our services after any modifications indicates your
            acceptance of the new Terms.
          </p>
          <h6 className="text-normalHeading text-mainHeading font-semibold">
            Contact Us
          </h6>
          <p>
            If you have any questions about these Terms, please contact us at:
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

export default TermsAndCondition;
