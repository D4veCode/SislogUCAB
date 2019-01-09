import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <section className="banner-area" id="home">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center justify-content-center">
                            <div className="banner-content col-lg-7">
                                <h1>
                                    Bienvenido SisLogUCAB
							</h1>
                                <p className="pt-20 pb-20">
                                    Puerta a Puerta
							</p>
                            </div>
                        </div>
                    </div>
                </section>
           
                <section className="home-video-area" id="mision">
                    <div className="container-fluid">
                        <div className="row justify-content-end align-items-center">
                            <div className="col-lg-4 no-padding video-right mr-5">
                                <h1 className="mr-5">Nuestra Mision<br />
                                </h1>
                                <p className="mr-5"><span>La finalidad o razón de ser de LogUCAB</span></p>
                                <p className="text-justify">
                                   se orienta en aportar soluciones para hacer ganar tiempo uniendo personas y distancias, comprometidos con un mundo
                                   más sostenible.
							</p>
                            </div>
                            <section className="video-area col-lg-6">
                                <div className="overlay overlay-bg"></div>
                                <div className="container">
                                    <div className="video-content">
                                        
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>


                <section className="home-aboutus-area">
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center ml-5">
                            <div className="col-lg-8 no-padding about-left">
                                <img className="img-fluid" src="/image/about-bg.jpg" alt="" />
                            </div>
                            <div className="col-lg-4 no-padding about-right">
                                
                                <h1 className="text-white ml-5">Nuestra Vision<br /> </h1>
                                <p>
                                desea ser percibida como la marca líder preferida por ofrecer las soluciones más innovadoras y de valor añadido en el transporte y la logística.
							</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="protfolio-area section-gap" id="project">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-10">
                                <div className="title text-center">
                                    <h1 className="mb-10">Our Offered Services</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 single-portfolio">
                                <img className="image img-fluid" src="/image/p1.jpg" alt="" />
                                <a href="/image/p1.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 single-portfolio">
                                <img className="image img-fluid" src="/image/p2.jpg" alt="" />
                                <a href="/image/p2.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 single-portfolio">
                                <img className="image img-fluid" src="/image/p3.jpg" alt="" />
                                <a href="/image/p3.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-8 single-portfolio">
                                <img className="image img-fluid" src="/image/p4.jpg" alt="" />
                                <a href="/image/p4.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 single-portfolio">
                                <img className="image img-fluid" src="/image/p5.jpg" alt="" />
                                <a href="/image/p5.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 single-portfolio">
                                <img className="image img-fluid" src="/image/p6.jpg" alt="" />
                                <a href="/image/p6.jpg" className="img-pop-up">
                                    <div className="middle">
                                        <div className="text"><span className="lnr lnr-frame-expand"></span></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="callto-action-area relative section-gap">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content col-lg-9">
                                <div className="title text-center">
                                    <h1 className="mb-10 text-white">Got Impressed to our features</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    <a className="primary-btn" href="">Request Free Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="price-area section-gap" id="price">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-10">Choose the Perfect Plan for you</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-price">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Standard</h4>
                                            <p>For the <br />individuals</p>
                                        </div>
                                        <div className="top-right">
                                            <h1>£199</h1>
                                        </div>
                                    </div>
                                    <div className="bottom-sec">
                                        <p>
                                            “Few would argue that, despite the advancements
									</p>
                                    </div>
                                    <div className="end-sec">
                                        <ul>
                                            <li>2.5 GB Free Photos</li>
                                            <li>Secure Online Transfer Indeed</li>
                                            <li>Unlimited Styles for interface</li>
                                            <li>Reliable Customer Service</li>
                                            <li>Manual Backup Provided</li>
                                        </ul>
                                        <button className="primary-btn price-btn mt-20">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-price">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Business</h4>
                                            <p>For the <br />small Company</p>
                                        </div>
                                        <div className="top-right">
                                            <h1>£399</h1>
                                        </div>
                                    </div>
                                    <div className="bottom-sec">
                                        <p>
                                            “Few would argue that, despite the advancements
									</p>
                                    </div>
                                    <div className="end-sec">
                                        <ul>
                                            <li>2.5 GB Free Photos</li>
                                            <li>Secure Online Transfer Indeed</li>
                                            <li>Unlimited Styles for interface</li>
                                            <li>Reliable Customer Service</li>
                                            <li>Manual Backup Provided</li>
                                        </ul>
                                        <button className="primary-btn price-btn mt-20">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-price">
                                    <div className="top-sec d-flex justify-content-between">
                                        <div className="top-left">
                                            <h4>Ultimate</h4>
                                            <p>For the <br />large Company</p>
                                        </div>
                                        <div className="top-right">
                                            <h1>£499</h1>
                                        </div>
                                    </div>
                                    <div className="bottom-sec">
                                        <p>
                                            “Few would argue that, despite the advancements
									</p>
                                    </div>
                                    <div className="end-sec">
                                        <ul>
                                            <li>2.5 GB Free Photos</li>
                                            <li>Secure Online Transfer Indeed</li>
                                            <li>Unlimited Styles for interface</li>
                                            <li>Reliable Customer Service</li>
                                            <li>Manual Backup Provided</li>
                                        </ul>
                                        <button className="primary-btn price-btn mt-20">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="testomial-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-10">Testimonial from our Clients</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="active-tstimonial-carusel">
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t1.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t2.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t3.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t1.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t2.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t3.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t1.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t2.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                                <div className="single-testimonial item">
                                    <img className="mx-auto" src="/image/t3.png" alt="" />
                                    <p className="desc">
                                        Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory
								</p>
                                    <h4>Mark Alviro Wiens</h4>
                                    <p>
                                        CEO at Google
								</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="latest-blog-area section-gap" id="blog">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="menu-content pb-60 col-lg-8">
                                <div className="title text-center">
                                    <h1 className="mb-10">Latest News from our Blog</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 single-blog">
                                <img className="img-fluid" src="/image/b1.jpg" alt="" />
                                <ul className="tags">
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Life style</a></li>
                                </ul>
                                <a href=""><h4>Portable latest Fashion for young women</h4></a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
							</p>
                                <p className="post-date">31st January, 2018</p>
                            </div>
                            <div className="col-lg-6 single-blog">
                                <img className="img-fluid" src="/image/b2.jpg" alt="" />
                                <ul className="tags">
                                    <li><a href="">Travel</a></li>
                                    <li><a href="">Life style</a></li>
                                </ul>
                                <a href=""><h4>Portable latest Fashion for young women</h4></a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
							</p>
                                <p className="post-date">31st January, 2018</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-area section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  col-md-12">
                                <div className="single-footer-widget">
                                    <h6>Top Products</h6>
                                    <ul className="footer-nav">
                                        <li><a href="">Managed Website</a></li>
                                        <li><a href="">Manage Reputation</a></li>
                                        <li><a href="">Power Tools</a></li>
                                        <li><a href="">Marketing Service</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3  col-md-12">
                                <div className="single-footer-widget mail-chimp">
                                    <h6 className="mb-20">Instragram Feed</h6>
                                    <ul className="instafeed d-flex flex-wrap">
                                        <li><img src="/image/i1.jpg" alt="i1" /></li>
                                        <li><img src="/image/i2.jpg" alt="i2" /></li>
                                        <li><img src="/image/i3.jpg" alt="i3" /></li>
                                        <li><img src="/image/i4.jpg" alt="i4" /></li>
                                        <li><img src="/image/i5.jpg" alt="i5" /></li>
                                        <li><img src="/image/i6.jpg" alt="i6" /></li>
                                        <li><img src="/image/i7.jpg" alt="i7" /></li>
                                        <li><img src="/image/i8.jpg" alt="i8" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row footer-bottom d-flex justify-content-between">
                            <div className="col-lg-4 col-sm-12 footer-social">
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-dribbble"></i></a>
                                <a href=""><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}