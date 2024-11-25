import Head from 'next/head';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';

const PrivacyPolicy = () => {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <Breadcrumb title="Privacy Policy" current="Privacy Policy"/>

            <main className="page-wrappper">
                <div className="privacy-policy-area ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="content">
                                    <div className="inner">
                                        <div className="section-title">
                                            <h4 className="title">
                                                This Privacy policy was published on April 26th&sbquo;
                                                2018.
                                            </h4>
                                        </div>
                                        <h3>GDPR compliance</h3>
                                        <p className="subtitle-2 mb--40">
                                        We are committed to ensuring your data privacy and security. Our policies and processes align with the General Data Protection Regulation (GDPR) to protect personal data, provide transparency, and uphold your rights as a user.
                                        </p>


                                        <h3>About Keystroke</h3>
                                        <p className="subtitle-2 mb--40">
                                        Keystroke is dedicated to building innovative solutions that prioritize user experience and security. For queries or assistance, please contact us at hello@keystroke.com.<a
                                            href="#">hello@keystroke.com</a>
                                        </p>

                                        <h3>When we collect personal data about you</h3>
                                        <ul className="mb--40">
                                            <li>Email is a crucial channel in any marketing.</li>
                                            <li>Curious what to say? How to say it?</li>
                                            <li>Whether you’re kicking off a new campaign.</li>
                                            <li>These interactions help us tailor our offerings to your needs</li>
                                        </ul>

                                        <h3>Why we collect and use personal data</h3>
                                        <p className="subtitle-2">
                                        We collect and use personal data to enhance your experience, provide personalized services, and improve our offerings. This data helps us better understand user preferences, ensuring an optimized and secure experience.
                                        </p>

                                        {/* <ul className="mb--40">
                                            <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut
                                                tempus quam&sbquo; in cursus eros.
                                            </li>
                                            <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi
                                                tristique senectus et netus et.
                                            </li>
                                            <li>Pellentesque ornare nulla est&sbquo; non blandit sapien lacinia nec. Nulla ac
                                                velit id est mattis faucibus.
                                            </li>
                                            <li>Aliquam lacus nisi&sbquo; lobortis non diam eget&sbquo; malesuada bibendum justo.
                                                Praesent fringilla sagittis ex&sbquo; ac molestie ipsum ullamcorper a.
                                            </li>
                                            <li> Vestibulum nulla tortor&sbquo; aliquam at porta in&sbquo; hendrerit sed nibh.</li>
                                        </ul> */}

                                        <h3>Type of personal data collected</h3>
                                        <p className="subtitle-2 mb--40">
                                        We collect personal data such as your name, email address, contact details, IP address, and browsing behavior. This data is used solely for improving our services and ensuring your needs are met efficiently.
                                        </p>

                                        <h3>Information we collect automatically</h3>
                                        <p className="subtitle-2 mb--40">
                                        When you visit our website, we automatically collect technical data, such as browser type, operating system, referral URL, and browsing activities. This information helps us analyze website performance and improve functionality.
                                        </p>

                                        <h3>The use of cookies and web beacons</h3>
                                        <p className="subtitle-2">
                                            We may log information using &quot;cookies.&quot; Cookies are
                                            small data files stored on your hard drive by a website. Cookies help us
                                            make our Site and your visit better.
                                        </p>
                                        <p className="subtitle-2">
                                            We may log information using digital images called web
                                            beacons on our Site or in our emails.
                                        </p>
                                        <p className="subtitle-2 mb--40">
                                            This information is used to make our Site work
                                            more efficiently&sbquo; as well as to provide business and marketing information
                                            to the owners of the Site&sbquo; and to gather such personal data as browser type
                                            and operating system&sbquo; referring page&sbquo; path through site&sbquo; domain of ISP&sbquo; etc.
                                            for the purposes of understanding how visitors use our Site. Cookies and
                                            similar technologies help us tailor our Site to your personal needs&sbquo; as well
                                            as to detect and prevent security threats and abuse. If used alone&sbquo; cookies
                                            and web beacons do not personally identify you.
                                        </p>

                                        <h3>How long we keep your data</h3>
                                        <p className="subtitle-2">
                                            We store personal data for as long as we find it
                                            necessary to fulfill the purpose for which the personal data was collected&sbquo;
                                            while also considering our need to answer your queries or resolve possible
                                            problems. This helps us to comply with legal requirements under applicable
                                            laws&sbquo; to attend to any legal claims/complaints&sbquo; and for safeguarding
                                            purposes.
                                        </p>

                                        {/* <p className="subtitle-2 mb--40">
                                            We store personal data for as long as we find
                                            it necessary to fulfill the purpose for which the personal data was
                                            collected&sbquo; while also considering our need to answer your queries or resolve
                                            possible problems. This helps us to comply with legal requirements under
                                            applicable laws&sbquo; to attend to any legal claims/complaints&sbquo; and for
                                            safeguarding purposes.
                                        </p> */}

                                        <h3>Your rights to your personal data</h3>
                                        <p className="subtitle-2 mb--40">
                                        You have the right to access, correct, delete, or restrict the processing of your personal data. You can also withdraw consent or lodge a complaint with relevant authorities regarding data handling.
                                        </p>

                                        <h3>Hotjar’s privacy policy</h3>
                                        <p className="subtitle-2 mb--40">
                                            We use Hotjar to analyze user interactions on our site, helping us improve functionality and design. Hotjar’s tools comply with privacy laws, ensuring collected data is anonymized and secure. For more details, refer to Hotjar’s privacy policy.
                                        </p>

                                        <h3>Changes to this Privacy Policy</h3>
                                        <p className="subtitle-2">
                                        We may update this privacy policy periodically to reflect changes in our practices or legal requirements. Please review this page regularly to stay informed of any modifications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default PrivacyPolicy;
