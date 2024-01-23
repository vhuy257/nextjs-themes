import React from "react";
import Image from "next/image";

import "./SMenu.scss";
import ButtonComponent from "../../Button/Button";

const SMenu = () => {
  return (
    <section className="s-menu w-svw">
      <div
        className="shape aos-init aos-animate"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <Image
          src="/images/basilico/shape-menu.png"
          alt=""
          width={324}
          height={298}
        />
      </div>
      <div className="container max-w-8xl">
        <div className="menu-content">
          <div className="block-text text-center style-2">
            <p
              className="subtitle aos-init mb-12"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Taste the Best that Surprise you
            </p>
            <h3
              className="title aos-init mb-6"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              our special menu
            </h3>
            <p
              className="text aos-init"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              We always give our customers a feeling of peace of mind and
              comfort when dining at our restaurant <br />
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium
            </p>
          </div>

          <div
            className="flat-tabs aos-init mt-16"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <ul className="menu-tab flex justify-center mb-11 text-center">
              <li className="">
                <h5>sperical menu</h5>
              </li>
              <li className="active">
                <h5>drinks</h5>
              </li>
              <li className="">
                <h5>seafood</h5>
              </li>
              <li className="">
                <h5>desserts</h5>
              </li>
            </ul>

            <div className="content-tab">
              <div className="content-inner" style={{ display: "none" }}>
                <div className="container_inner">
                  <div className="left-img">
                    <Image src="/images/basilico/menu.jpg" alt="" width={411} height={411}/>
                  </div>
                  <div className="right-img">
                    <Image src="/images/basilico/menu1.jpg" alt="" width={411} height={411}/>
                  </div>
                  <ul className="menu-list">
                    <li>
                      <h5 className="name">
                        {" "}
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Purple Corn Tostada</span>
                        <span className="price">$36</span>
                      </h5>
                      <p>Ricotta, goat cheese, beetroot and datterini.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Bruno&apos;s Scribble</span>
                        <span className="price">$59</span>
                      </h5>
                      <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Wild Mushroom Arancini</span>
                        <span className="price">$18</span>
                      </h5>
                      <p>Porcini purée, parmesan, basil.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Crispy Skin Chicken </span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>

                    <div className="mt-10">
                        <ButtonComponent btnText="View all Menu" btnTypeClass="btnHeader"/>
                    </div>
                    
                  </ul>
                </div>
              </div>

              <div className="content-inner active">
                <div className="container_inner">
                  <div className="left-img">
                    <Image src="/images/basilico/menu.jpg" alt="" width={411} height={411}/>
                  </div>
                  <div className="right-img">
                    <Image src="/images/basilico/menu1.jpg" alt="" width={411} height={411}/>
                  </div>
                  <ul className="menu-list">
                    <li>
                      <h5 className="name">
                        {" "}
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Purple Corn Tostada</span>
                        <span className="price">$36</span>
                      </h5>
                      <p>Ricotta, goat cheese, beetroot and datterini.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Bruno&apos;s Scribble</span>
                        <span className="price">$59</span>
                      </h5>
                      <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Wild Mushroom Arancini</span>
                        <span className="price">$18</span>
                      </h5>
                      <p>Porcini purée, parmesan, basil.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Crispy Skin Chicken </span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>

                    <div className="mt-10">
                        <ButtonComponent btnText="View all Menu" btnTypeClass="btnHeader"/>
                    </div>

                  </ul>
                </div>
              </div>

              <div className="content-inner" style={{ display: "none" }}>
                <div className="container_inner">
                  <div className="left-img">
                    <Image src="/images/basilico/menu.jpg" alt="" width={411} height={411} />
                  </div>
                  <div className="right-img">
                    <Image src="/images/basilico/menu1.jpg" alt="" width={411} height={411} />
                  </div>
                  <ul className="menu-list">
                    <li>
                      <h5 className="name">
                        {" "}
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Purple Corn Tostada</span>
                        <span className="price">$36</span>
                      </h5>
                      <p>Ricotta, goat cheese, beetroot and datterini.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Bruno&apos;s Scribble</span>
                        <span className="price">$59</span>
                      </h5>
                      <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Wild Mushroom Arancini</span>
                        <span className="price">$18</span>
                      </h5>
                      <p>Porcini purée, parmesan, basil.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Crispy Skin Chicken </span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>

                    <div className="mt-10">
                        <ButtonComponent btnText="View all Menu" btnTypeClass="btnPrimary"/>
                    </div>

                  </ul>
                </div>
              </div>

              <div className="content-inner" style={{ display: "none" }}>
                <div className="container_inner">
                  <div className="left-img">
                    <Image src="/images/basilico/menu.jpg" alt="" width={411} height={411}/>
                  </div>
                  <div className="right-img">
                    <Image src="/images/basilico/menu1.jpg" alt="" width={411} height={411}/>
                  </div>
                  <ul className="menu-list">
                    <li>
                      <h5 className="name">
                        {" "}
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Purple Corn Tostada</span>
                        <span className="price">$36</span>
                      </h5>
                      <p>Ricotta, goat cheese, beetroot and datterini.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Bruno&apos;s Scribble</span>
                        <span className="price">$59</span>
                      </h5>
                      <p>Culatello, Spalla Cotta, Mortadella, Culacciona.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Wild Mushroom Arancini</span>
                        <span className="price">$18</span>
                      </h5>
                      <p>Porcini purée, parmesan, basil.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Crispy Skin Chicken </span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Ricotta, radicchio, prosciutto salad, cabernet.</p>
                    </li>
                    <li>
                      <h5 className="name">
                        <span className="txt">Tender Octopus and Fennel</span>
                        <span className="price">$25</span>
                      </h5>
                      <p>Citrus, wild rocket condiment.</p>
                    </li>
                    
                    <div className="mt-10">
                        <ButtonComponent btnText="View all Menu" btnTypeClass="btnPrimary"/>
                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMenu;
