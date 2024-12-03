import Image from 'next/image';
import { useEffect, useState } from 'react';
import BrandData from '../../data/Brands.json';
import SectionTitle from '../common/SectionTitle';
import Link from "next/link";

const BrandOne = ({
  title = "We’ve built solutions for...",
  subtitle = "Top Clients",
  description = "Our diverse clientele includes some of the world’s most innovative and forward-thinking brands. We pride ourselves on delivering tailored solutions that meet their unique challenges and drive their success.",
  bgColor = "bg-color-white"
}) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandArray = BrandData.slice(0, 6);
    setBrands(brandArray);
  }, []);

  return (
    <div className={`axil-brand-area ax-section-gap ${bgColor}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-8 col-12">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              description={description}
              color="extra06-color"
              alignment="left"
            />
          </div>
          <div className="col-xl-8 col-lg-8 mt_md--40 mt_sm--40">
            <div className="axil-brand-logo-wrapper">
              {/* <ul className="brand-list liststyle d-flex flex-wrap justify-content-center">
                {brands?.map((brand, index) => (
                  <li key={`brand-${index}`}>
                    <Link href="#">
                      <a>
                        <Image
                            width={brand.image.width}
                            height={brand.image.height}
                            src={brand.image.src}
                            alt="Brand Logo Images"
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul> */}
              <Image src='/images/bg/clientProject.png' height={500} width={1000} alt='client projects'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
