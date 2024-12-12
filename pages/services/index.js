import Head from 'next/head';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import BannerSix from '../../components/banners/BannerSix';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceData from '../../data/Services.json';

const Services = () => {
    const [activeServiceSection, setActiveServiceSection] = useState("");
    const [servicesByCategory, setServicesByCategory] = useState([]);

    const getServicesByCategory = () => {
        const filteredServices = ServiceData.reduce((acc, service) => {
            const categoryIndex = acc.findIndex(
                (item) => item.name == service.category
            );

            if (service.category !== "Default" && service.category !== "Our capabilities" && service.category !== "Our ways" && service.category !== "Our values") {
                if (categoryIndex > -1) {
                    acc[categoryIndex].services.push(service);
                } else {
                    acc.push({
                        name: service.category,
                        services: [service],
                    });
                }
            }

            return acc;
        }, []);

        setServicesByCategory(filteredServices);
    };

    const changeActiveSection = (sectionId) => {
        setActiveServiceSection(sectionId);
    };

    const handleStickyNav = () => {
        const scrollNavigationArea = document.querySelector(
                ".axil-scroll-navigation"
            ),
            scrollNav = document.querySelector(".axil-scroll-nav"),
            sticky = scrollNavigationArea?.offsetTop;

        if (window.pageYOffset >= sticky) scrollNav?.classList.add("is-affixed");
        else scrollNav?.classList.remove("is-affixed");
    };

    const removeStickyNav = () => {
        const scrollNav = document.querySelector(".axil-scroll-nav");
        scrollNav?.classList.remove("is-affixed");
    };

    const {ref, inView} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (inView) {
                handleStickyNav();
            } else {
                removeStickyNav();
            }
        });
    }, [inView]);

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Services</title>
            </Head>

            <main className="page-wrapper">
                <BannerSix/>

                <div
                    ref={ref}
                    className="axil-scroll-navigation-area axil-scroll-navigation position-relative bg-color-white"
                >
                    <nav className="axil-scroll-nav navbar navbar-example2">
                        <ul className="nav nav-pills justify-content-center sidebar__inner">
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section1" ? "active" : ""
                                    }`}
                                    href="#section1"
                                >
                                    Design
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section2" ? "active" : ""
                                    }`}
                                    href="#section2"
                                >
                                    Development
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section3" ? "active" : ""
                                    }`}
                                    href="#section3"
                                >
                                    Online marketing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section4" ? "active" : ""
                                    }`}
                                    href="#section4"
                                >
                                    Business
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section5" ? "active" : ""
                                    }`}
                                    href="#section5"
                                >
                                    Technology
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section6" ? "active" : ""
                                    }`}
                                    href="#section6"
                                >
                                    Content strategy
                                </a>
                            </li> */}
                        </ul>
                    </nav>

                    {servicesByCategory?.map((categoryServices, index) => (
                        <ServiceSection
                            key={`service-section-${index}`}
                            sectionId={`section${index + 1}`}
                            sectionTitle={categoryServices.name}
                            sectionSubtitle="services"
                            sectionBg={
                                index % 2 === 0 ? "bg-color-white" : "bg-color-lightest"
                            }
                            serviceType={categoryServices.name}
                            services={categoryServices.services}
                            changeActiveSection={changeActiveSection}
                        />
                    ))}
                </div>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default Services;


// {
//     "id": 26,
//     "imageLayer": "/images/icons/layer.svg",
//     "imageIcon": {
//       "src": "/images/icons/icon-02.svg",
//       "width": "41",
//       "height": "24"
//     },
//     "iconColorClass": "gradient-color-02",
//     "title": "Design develop",
//     "description": "Turn creative concepts into fully developed, user-friendly designs that enhance user experience and support business goals.",
//     "category": "Content strategy",
//     "slug": "design-2",
//     "process": {
//       "title": "Our design process",
//       "description": "Our comprehensive design strategy ensures a perfectly crafted design for your business.",
//       "strategies": [
//         {
//           "id": 1,
//           "title": "Discover",
//           "subtitle": "our four step process",
//           "description": "Dive into research to understand user needs, project goals, and market trends, forming the foundation for an impactful website design.",
//           "highlightColor": "extra04-color",
//           "image": "/images/bg/discover.png"
//         },
//         {
//           "id": 2,
//           "title": "Prototype",
//           "subtitle": "our four step process",
//           "description": "Create wireframes and mockups to visualize the website’s layout, functionality, and user journey, ensuring a seamless experience.",
//           "highlightColor": "extra05-color",
//           "image": "/images/bg/prototype.png"
//         },
//         {
//           "id": 3,
//           "title": "Test",
//           "subtitle": "our four step process",
//           "description": "Conduct usability testing to gather feedback, identify pain points, and refine the design for optimal user satisfaction.",
//           "highlightColor": "extra06-color",
//           "image": "/images/bg/test.png"
//         },
//         {
//           "id": 4,
//           "title": "Build",
//           "subtitle": "our four step process",
//           "description": "Develop the website with clean, responsive, and scalable code, bringing the final design to life while ensuring functionality across devices.",
//           "highlightColor": "extra07-color",
//           "image": "/images/bg/build.png"
//         }
//       ]
//     }
//   },
//   {
//     "id": 27,
//     "imageLayer": "/images/icons/layer.svg",
//     "imageIcon": {
//       "src": "/images/icons/icon-03.svg",
//       "width": "34",
//       "height": "34"
//     },
//     "iconColorClass": "gradient-color-03",
//     "title": "Design delivery",
//     "description": "Ensure timely and efficient delivery of high-quality designs, providing seamless implementation across all platforms and media.",
//     "category": "Content strategy",
//     "slug": "design-3",
//     "process": {
//       "title": "Our design process",
//       "description": "Our comprehensive design strategy ensures a perfectly crafted design for your business.",
//       "strategies": [
//         {
//           "id": 1,
//           "title": "Discover",
//           "subtitle": "our four step process",
//           "description": "Dive into research to understand user needs, project goals, and market trends, forming the foundation for an impactful website design.",
//           "highlightColor": "extra04-color",
//           "image": "/images/bg/discover.png"
//         },
//         {
//           "id": 2,
//           "title": "Prototype",
//           "subtitle": "our four step process",
//           "description": "Create wireframes and mockups to visualize the website’s layout, functionality, and user journey, ensuring a seamless experience.",
//           "highlightColor": "extra05-color",
//           "image": "/images/bg/prototype.png"
//         },
//         {
//           "id": 3,
//           "title": "Test",
//           "subtitle": "our four step process",
//           "description": "Conduct usability testing to gather feedback, identify pain points, and refine the design for optimal user satisfaction.",
//           "highlightColor": "extra06-color",
//           "image": "/images/bg/test.png"
//         },
//         {
//           "id": 4,
//           "title": "Build",
//           "subtitle": "our four step process",
//           "description": "Develop the website with clean, responsive, and scalable code, bringing the final design to life while ensuring functionality across devices.",
//           "highlightColor": "extra07-color",
//           "image": "/images/bg/build.png"
//         }
//       ]
//     }
//   },
// {
//     "id": 25,
//     "imageLayer": "/images/icons/layer.svg",
//     "imageIcon": {
//       "src": "/images/icons/icon-04.svg",
//       "width": "23",
//       "height": "36"
//     },
//     "iconColorClass": "",
//     "title": "Design",
//     "description": "Create visually appealing and functional designs that align with your brand and captivate your audience.",
//     "category": "Content strategy",
//     "slug": "design-1",
//     "process": {
//       "title": "Our design process",
//       "description": "Our comprehensive design strategy ensures a perfectly crafted design for your business.",
//       "strategies": [
//         {
//           "id": 1,
//           "title": "Discover",
//           "subtitle": "our four step process",
//           "description": "Dive into research to understand user needs, project goals, and market trends, forming the foundation for an impactful website design.",
//           "highlightColor": "extra04-color",
//           "image": "/images/bg/discover.png"
//         },
//         {
//           "id": 2,
//           "title": "Prototype",
//           "subtitle": "our four step process",
//           "description": "Create wireframes and mockups to visualize the website’s layout, functionality, and user journey, ensuring a seamless experience.",
//           "highlightColor": "extra05-color",
//           "image": "/images/bg/prototype.png"
//         },
//         {
//           "id": 3,
//           "title": "Test",
//           "subtitle": "our four step process",
//           "description": "Conduct usability testing to gather feedback, identify pain points, and refine the design for optimal user satisfaction.",
//           "highlightColor": "extra06-color",
//           "image": "/images/bg/test.png"
//         },
//         {
//           "id": 4,
//           "title": "Build",
//           "subtitle": "our four step process",
//           "description": "Develop the website with clean, responsive, and scalable code, bringing the final design to life while ensuring functionality across devices.",
//           "highlightColor": "extra07-color",
//           "image": "/images/bg/build.png"
//         }
//       ]
//     }
//   },