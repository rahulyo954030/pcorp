import ContactFormOne from "../forms/ContactFormOne";

const AboutOne = () => {
  return (
    <div className="axil-about-us-area ax-section-gap bg-color-white axil-shape-position">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-12">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span
                  className="sub-title extra08-color"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                >
                  About Us
                </span>
                <h2
                  className="title"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Innovating Solutions, Delivering Results
                </h2>
                <p
                  className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  We specialize in delivering tailored, innovative solutions that help businesses thrive in an ever-changing digital landscape. Whether it's design, development, or strategy, we provide the expertise to bring your vision to life.
                </p>
                <p
                  className="subtitle-2"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Our team is dedicated to excellence, always striving to push the boundaries of what's possible. Through collaboration, creativity, and cutting-edge technology, we deliver exceptional results that drive success for our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--30 mt_sm--30">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a free consultation now</h3>
                <ContactFormOne />
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="tel:+16473435453">+1 (647) 343-5453</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-shape-group">
        <div className="shape shape-1">
          <i className="icon icon-shape-12"></i>
        </div>
        <div className="shape shape-2">
          <i className="icon icon-shape-03"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
