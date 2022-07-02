import { PageSEO } from 'components/SEO';
import siteMetadata from 'lib/sitemetadata';

const TermsOfService = () => {
  return (
    <div className="mx-auto max-w-3xl py-8">
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Terms of Service:</h1>
        <p>Our Terms of Service were last updated on 29th May 2022.</p>
        <p>
          Please read these terms and conditions carefully before using Our
          Service.
        </p>
        <h2 className="text-2xl font-semibold">Interpretation</h2>
        <p>
          The content on the website does to encourage anyone to use the same or
          similar phrases in your daily life. If you happen to use such kindly
          do at your own risk, we would not be held responsible for any
          consequences of any kind.
        </p>
        <h2 className="text-2xl font-semibold">Credits</h2>
        <p>
          The content on the website is inspired from the content creater
          @loewhaley on instagram. The project mentions the credits to her on
          the website as well as the open sourced code repository.
        </p>
        <p>
          This project is independent and is not binded by any affiliation with
          @loewhaley, that being said the content of the website can be updated
          with time.
        </p>
        <h2 className="text-2xl font-semibold">Acknowledgment</h2>
        <p>
          These are the Terms of Service governing the use of this Service and
          the agreement that operates between You and the Project. These Terms
          of Service set out the rights and obligations of all users regarding
          the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms of Service. These Terms
          of Service apply to all visitors, users and others who access or use
          the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms
          of Service. If You disagree with any part of these Terms of Service
          then You may not access the Service.
        </p>
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, You can
          contact us by sending us an email: {siteMetadata.email}
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
