import topLeftshape from "../../assets/images/topLeftshape.png";
import all_shape from "../../assets/images/all-shape3.png";
import all_shape5 from "../../assets/images/all_shape5.png";
import glob from "../../assets/images/testimonial_map.png";
import white_dot from "../../assets/images/white_dot.png";
import rightBottomshape from "../../assets/images/rightBottomshape.png";
import all_shape4 from "../../assets/images/all_shape4.webp";
import all_shape6 from "../../assets/images/all_shape6.png";
import all_shapeRed from "../../assets/images/all_shape_red.webp";
import main1 from "../../assets/images/main1.webp";
import main2 from "../../assets/images/main2.webp";
import main3 from "../../assets/images/main3.webp";
import G1 from "../../assets/images/a.png";
import G2 from "../../assets/images/b.png";
import G3 from "../../assets/images/c.png";
import service_icon1 from "../../assets/images/service_icon1.png";
import service_icon2 from "../../assets/images/service_icon2.webp";
import service_icon3 from "../../assets/images/service_icon3.webp";
import service_icon4 from "../../assets/images/service_icon4.webp";
import enquiry from "../../assets/images/about_US.webp";
import sider from "../../assets/images/sider.png";
import whyChooseUs from "../../assets/images/why-choose1.webp";
import { Header } from "../../components";
import { IoSettingsOutline } from "react-icons/io5";
import { BsArrowRightCircle, BsPlus } from "react-icons/bs";
import { useState } from "react";
import { SlCallIn } from "react-icons/sl";

const Home = () => {
    const [openQuestion, setOpenQuestion] = useState(null); // Track open question

    // Toggle the visibility of the answer
    const handleToggle = (questionNumber) => {
        setOpenQuestion(openQuestion === questionNumber ? null : questionNumber);
    };
    return (
        <div className="text-center ">


            {/* First Content */}
            <div className="bg-black bg-cover bg-center relative slider2 lg:min-h-screen">
                {/* Centered Container Wrapper */}
                <div className="max-w-webContainer mx-auto text-white text-start">
                    <div className="py-3">
                        <Header />
                    </div>
                </div>

                {/* Content Section */}
                <div className="py-16 px-5 lg:px-16">
                    <div className="max-w-webContainer mx-auto text-white text-start">
                        {/* Header Component */}
                        {/*
                    <div className="lg:flex lg:p-32 lg:mt-40 mt-0 p-0 lg:py-0 py-10">
                     */}
                        <div className="lg:flex mt-0 lg:mt-40">
                            {/* Text Content */}
                            <div className="w-full lg:max-w-[50%]">
                                <h1 className="text-3xl lg:text-5xl font-bold font-poppins mb-7 text-left">
                                    Business Set Up and Consulting Services <span className="text-custome-orange"> in Bahrain</span>
                                </h1>
                                <div className="slider-button mt-10 font-firasans">
                                    <a href="/home" className="text-xl flex items-center justify-center">
                                        <i><IoSettingsOutline className="text-2xl mt-1" /></i> Apply Online Now
                                    </a>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full max-w-[50%] flex justify-center mt-10 lg:mt-0">
                                {/* Image component or content here */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Images */}
                <img
                    src={topLeftshape}
                    alt="topLeftshape"
                    className="absolute top-0 -left-20 animate-leftToRight hidden lg:flex"
                />
                <img
                    src={white_dot}
                    alt="white_dot"
                    className="absolute top-32 left-1/2 transform -translate-x-1/2 animate-topToBottom hidden lg:flex"
                />
                <img
                    src={rightBottomshape}
                    alt="rightBottomshape"
                    className="absolute bottom-0 -right-20 animate-bottomToTop hidden lg:flex"
                />

            </div>


            {/* Second Content */}

            <div>
                <div className="mx-5 lg:mx-auto max-w-webContainer mt-24 relative z-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div className="single-feature-box">
                            <div className="feature-box-inner">
                                <div className="feature-icon1">
                                    <div className="relative mb-10 mt-5">
                                        <div className="absolute top-5 left-4 w-16 h-16 bg-custome-white rounded-full"></div>
                                        <img src={main1} alt="main3" className="mb-4 object-contain relative z-10" />
                                    </div>
                                </div>
                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-Rubik mb-3"> How to start business in Bahrain </h3>
                                </div>
                                <div className="feature-text">
                                    <p className="text-base text-custome-gray font-Rubik"> In Bahrain, a person must obtain a Commercial Registration (CR) in order to open for business. </p>
                                </div>

                                <div className="animated-border mt-8">
                                    <div className="moving-dot"></div>
                                </div>
                            </div>

                            <div className="sydney-feature-back">
                                <div className="feature-back-title">
                                    <h3> We are professionals in </h3>
                                    <h2><a href="company-formation-bahrain.php"> Business Registration </a></h2>
                                </div>
                                <div className="feature-back-icon">
                                </div>
                            </div>


                        </div>

                        <div className="single-feature-box">
                            <div className="feature-box-inner">
                                <div className="feature-icon1">
                                    <div className="relative mb-10 mt-5">
                                        <div className="absolute top-5 left-4 w-16 h-16 bg-custome-white rounded-full"></div>
                                        <img src={main3} alt="main3" className="mb-4 object-contain relative z-10" />
                                    </div>
                                </div>
                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-Rubik mb-3"> How to open new branch of CR </h3>
                                </div>
                                <div className="feature-text">
                                    <p className="text-base text-custome-gray font-Rubik"> Open a new branch of your CR to grow your company. Easily enter a new product line and market. </p>
                                </div>

                                <div className="animated-border mt-8">
                                    <div className="moving-dot"></div>
                                </div>
                            </div>

                            <div className="sydney-feature-back">
                                <div className="feature-back-title">
                                    <h3> We will assist you to </h3>
                                    <h2><a href="company-formation-bahrain.php"> Expand your business </a></h2>
                                </div>
                                <div className="feature-back-icon">
                                </div>
                            </div>


                        </div>

                        <div className="single-feature-box">
                            <div className="feature-box-inner">
                                <div className="feature-icon1">
                                    <div className="relative mb-10 mt-5">
                                        <div className="absolute top-5 left-4 w-16 h-16 bg-custome-white rounded-full"></div>
                                        <img src={main2} alt="main2" className="mb-4 object-contain relative z-10" />
                                    </div>
                                </div>
                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-Rubik mb-3"> What are the steps to CR Renewal </h3>
                                </div>
                                <div className="feature-text">
                                    <p className="text-base text-custome-gray font-Rubik"> For a business registration to be effective, a corporation must fulfill the conditions set forth by each ministry. </p>
                                </div>

                                <div className="animated-border mt-8">
                                    <div className="moving-dot"></div>
                                </div>
                            </div>

                            <div className="sydney-feature-back">
                                <div className="feature-back-title">
                                    <h3> In-depth knowledge </h3>
                                    <h2><a href="company-formation-bahrain.php"> Local Expertise </a></h2>
                                </div>
                                <div className="feature-back-icon">
                                </div>
                            </div>


                        </div>

                    </div>

                    <img
                        src={all_shape4}
                        alt="all_shape4"
                        className="absolute bottom-0 -right-72 animate-topToBottom hidden lg:flex"
                    />
                </div>
            </div>






            {/* Third Content */}

            <div className="max-w-webContainer mx-auto">
                <div className="bg-white my-14">
                    <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-10 my-24">
                        {/* Left Side Content */}

                        <div className="w-full lg:max-w-[50%] mt-5 lg:mt-0  h-full flex items-center">
                            <img src={enquiry} alt="EnquiryImage" className="w-full object-cover ml-auto" />
                        </div>


                        {/* Right Side Image */}
                        <div className="flex flex-col items-start max-w-full lg:max-w-[50%] text-center lg:text-left h-full">
                            <div className="flex gap-2 items-center pb-5">
                                <div className="bg-custome-brown h-[2px] w-10"></div>
                                <h4 className="text-custome-brown font-poppins font-semibold text-xl">About Us</h4>
                            </div>
                            <h2 className="text-custome-black text-2xl lg:text-4xl font-bold font-poppins items-start text-left lg:max-w-[80%]"
                                style={{ lineHeight: '3rem' }}
                            >
                                We Are Excellent in Company Formation
                                Over 2000+<span className="text-custome-orange"> Companies </span>
                            </h2>
                            <p className="mt-4 mb-10 text-sm lg:text-base text-custome-gray tracking-wide text-justify">
                                At Sydney Consulting, we provide startup advising and specialist Company formation services to assist our clients in navigating Bahrain's corporate scene. In order to do this, we have a conversation with our clients, find out what they desire, and then tailor our services to meet those needs.
                            </p>

                            <p className="mt-0 mb-10 text-sm lg:text-base text-custome-gray tracking-wide text-justify">
                                Our team of experienced business set-up consultants at Sydney Consulting is dedicated to providing comprehensive <span className="text-custome-red hover:text-custome-blue cursor-pointer">Company formation services </span> to ensure our clients' success in Bahrain. By offering personalised solutions and guidance, we strive to empower entrepreneurs and startups to thrive in the competitive corporate environment of Bahrain.
                            </p>

                            <div className="lg:flex items-center justify-items-start gap-5 space-y-3 lg:space-y-0">
                                <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Professional Consultation</p> </div>
                                <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Continuous Support</p> </div>
                            </div>


                            <div className="lg:flex items-center justify-items-start gap-5 space-y-3 lg:space-y-0 mt-5">
                                <div className="flex items-center justify-items-start gap-2">
                                    {/* 95% Progress Circle */}
                                    <div className="relative h-20 w-20 rounded-full flex items-center justify-center border-[3px] border-white"
                                        style={{
                                            background: "conic-gradient(var(--custome-brown) 0% 95%, #FFEAE3 95% 100%)"
                                        }}>
                                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-custome-black text-xl font-firasans">95%</span>
                                        </div>
                                    </div>
                                    <p className="text-custome-black font-poppins">Clients Satisfaction</p>
                                </div>

                                <div className="flex items-center justify-items-start gap-2">
                                    {/* 100% Progress Circle */}
                                    <div className="relative h-20 w-20 rounded-full flex items-center justify-center border-[3px] border-white"
                                        style={{
                                            background: "conic-gradient(var(--custome-brown) 0% 100%, #FFEAE3 100% 100%)"
                                        }}>
                                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-custome-black text-xl font-firasans">100%</span>
                                        </div>
                                    </div>
                                    <p className="text-custome-black font-poppins">Fast Processing</p>
                                </div>
                            </div>


                            <div className="about-button mt-10 font-firasans z-0">
                                <a href="/home" className="text-xl flex items-center justify-center">
                                    <i><IoSettingsOutline className="text-xl mt-1" /></i> More About
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            {/* Forth Content  */}
            <div className="style-three service-area relative  z-0">
                <div className="max-w-webContainer mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:px-0 px-5">

                        <div className="single-feature-box-2">
                            <div className="feature-box-inner-2">

                                <div className="feature-icon1 flex justify-center mb-4">
                                    <img src={service_icon1} alt="service_icon1" className="block mx-auto" />
                                </div>

                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-poppins mb-3">
                                        Business License Registration
                                    </h3>
                                    <div className="single-feature-box-2-border"></div>
                                </div>

                                <div className="feature-title-2 text-left">
                                    <p className="text-base ">
                                        Starting a business in Bahrain requires obtaining a business license.
                                    </p>
                                </div>

                                <div className="service-button">
                                    <a href="cr-activities-in-bahrain.php">
                                        Read More <i><BsPlus className="text-2xl" /></i>
                                    </a>
                                </div>


                            </div>
                        </div>

                        <div className="single-feature-box-2">
                            <div className="feature-box-inner-2">

                                <div className="feature-icon1 flex justify-center mb-4">
                                    <img src={service_icon2} alt="service_icon2" className="block mx-auto" />
                                </div>

                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-poppins mb-3">
                                        WLL Company Formation
                                    </h3>
                                    <div className="single-feature-box-2-border"></div>
                                </div>

                                <div className="feature-title-2 text-left">
                                    <p className="text-base ">
                                        Forming a WLL Company in Bahrain become simple with our expert assistance.
                                    </p>
                                </div>

                                <div className="service-button">
                                    <a href="cr-activities-in-bahrain.php">
                                        Read More <i><BsPlus className="text-2xl" /></i>
                                    </a>
                                </div>


                            </div>
                        </div>

                        <div className="single-feature-box-2">
                            <div className="feature-box-inner-2">

                                <div className="feature-icon1 flex justify-center mb-4">
                                    <img src={service_icon3} alt="service_icon3" className="block mx-auto" />
                                </div>

                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-poppins mb-3">
                                        Economic Substance Return
                                    </h3>
                                    <div className="single-feature-box-2-border"></div>
                                </div>

                                <div className="feature-title-2 text-left">
                                    <p className="text-base ">
                                        Commercial organizations in Bahrain must submit an annual ESR if they engage in activities
                                    </p>
                                </div>

                                <div className="service-button">
                                    <a href="cr-activities-in-bahrain.php">
                                        Read More <i><BsPlus className="text-2xl" /></i>
                                    </a>
                                </div>


                            </div>
                        </div>

                        <div className="single-feature-box-2">
                            <div className="feature-box-inner-2">

                                <div className="feature-icon1 flex justify-center mb-4">
                                    <img src={service_icon4} alt="service_icon4" className="block mx-auto" />
                                </div>

                                <div className="feature-title">
                                    <h3 className="font-medium text-2xl font-poppins mb-3">
                                        CR Activities in Bahrain
                                    </h3>
                                    <div className="single-feature-box-2-border"></div>
                                </div>

                                <div className="feature-title-2 text-left">
                                    <p className="text-base ">
                                        CR activities in Bahrain follow the International Standard Industrial Classification.
                                    </p>
                                </div>

                                <div className="service-button">
                                    <a href="cr-activities-in-bahrain.php">
                                        Read More <i><BsPlus className="text-2xl" /></i>
                                    </a>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <img
                    src={all_shape}
                    alt="all_shape"
                    className="absolute top-0 -right-1 animate-leftToRight hidden lg:flex opacity-20"
                />
            </div>



            {/* Fifth Content */}
            <div className="relative">
                <div className="max-w-webContainer mx-auto">
                    <div className="bg-white my-14">
                        <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-10 my-24">
                            {/* Left Side Content */}
                            <div className="flex flex-col items-start max-w-full lg:max-w-[50%] text-center lg:text-left h-full">
                                <div className="flex gap-2 items-center pb-5">
                                    <div className="bg-custome-brown h-[2px] w-10"></div>
                                    <h4 className="text-custome-brown font-poppins font-semibold lg:text-xl">Why Choose Us?</h4>
                                </div>
                                <h2
                                    className="text-custome-black text-xl lg:text-4xl lg:max-w-[80%] font-bold font-poppins items-start text-left lg:leading-[3.5rem]"
                                // style={{ lineHeight: '3.5rem' }} // Custom line height
                                >
                                    Extensive industry experience with Highest Quality Business
                                    Consulting <span className="text-custome-orange"> Services. </span>
                                </h2>

                                <p className="mt-4 mb-10 text-sm lg:text-base text-custome-gray tracking-wide text-justify lg:max-w-[90%]">
                                    Our services enable you to set up your business in Bahrain effortlessly, with our consultants assisting you with your needs and creating a tailored plan, having successfully assisted numerous clients in the corporate world.
                                </p>

                                <p className="mt-0 mb-10 text-sm lg:text-base text-custome-gray tracking-wide text-justify lg:max-w-[90%]">
                                    Our team of experts specializes in business strategy consulting, offering <span className="text-custome-red hover:text-custome-blue cursor-pointer">strategic consulting services </span> that are customized to meet your specific needs.
                                </p>

                                <div className="lg:flex items-center justify-items-start gap-5 space-y-3 lg:space-y-0">
                                    <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Professional Consultation</p> </div>
                                    <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Continuous Support</p> </div>
                                </div>

                                <div className="lg:flex items-center justify-items-start gap-5 space-y-3 lg:space-y-0 mt-5">
                                    <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Collaborative Thinking</p> </div>
                                    <div className="flex items-center justify-items-start gap-2"><BsArrowRightCircle className="text-custome-brown text-xl font-bold" /> <p className="text-custome-orange font-firasans">Holistic View</p> </div>
                                </div>



                                <div className="about-button mt-10 font-firasans">
                                    <a href="/home" className="text-xl flex items-center justify-center">
                                        <i><IoSettingsOutline className="text-xl mt-1" /></i> More About
                                    </a>
                                </div>

                            </div>



                            {/* Right Side Image */}

                            <div className="w-full lg:max-w-[50%] mt-5 lg:mt-0  h-full flex items-center">
                                <img src={whyChooseUs} alt="WhyChooseUsImage" className="w-full object-cover ml-auto" />
                            </div>

                        </div>

                    </div>
                </div>
                <img
                    src={all_shape4}
                    alt="all_shape4"
                    className="absolute -top-64 left-10 animate-topToBottom hidden lg:flex z-10"
                />
            </div>




            {/* Sixth Content */}
            <div className="max-w-webContainer mx-auto">
                <div className="bg-white my-14">
                    <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row  justify-between max-w-webContainer gap-10">
                        {/* Left Side Content */}

                        <div className="w-full lg:max-w-[40%] mt-5 lg:mt-0  h-full flex items-center">
                            <img src={sider} alt="SiderImage" className="w-full object-cover ml-auto" />
                        </div>


                        {/* Right Side Image */}
                        <div className="flex flex-col items-start max-w-full lg:max-w-[50%] text-center lg:text-left h-full">
                            <div className="flex gap-2 items-center pb-5">
                                <div className="bg-custome-brown h-[2px] w-10"></div>
                                <h4 className="text-custome-brown font-poppins font-semibold text-xl">We Serve</h4>
                            </div>
                            <h2 className="text-custome-black text-2xl lg:text-4xl font-bold font-poppins items-start text-left lg:max-w-[80%] lg:leading-[3.5rem]"
                            // style={{ lineHeight: '3rem' }}
                            >
                                Expert Business Setup Services from
                                Sydney<span className="text-custome-orange"> Consulting </span>
                            </h2>



                            <p className="mt-10 mb-10 text-sm lg:text-base text-custome-gray tracking-wide text-justify">
                                <span className="text-custome-red hover:text-custome-blue cursor-pointer">Setting up a business in Bahrain </span> can be a drawn-out process, but with the right guidance, it can become an easy affair. Sydney Consultant happens to be one of the best consultancy firms known for offering various business consultancy services intended to help you establish and grow your business here in Bahrain. With our extensive experience and comprehensive approach, we are the preferred consulting company for business setup and strategy in Bahrain.
                            </p>


                        </div>

                    </div>

                    <div className="text-left mx-5 lg:mx-auto">
                        <h2 className="my-3 lg:text-3xl text-2xl font-bold font-poppins text-custome-black">How Sydney Consulting can establish your business in Bahrain?</h2>

                        <p className="text-custome-gray lg:leading-[1.5rem]" style={{ wordSpacing: "0.3rem" }}> Bahrain Market is one of the most attractive destinations for business setup in the Middle East.  <span className="font-bold">With its strategic location, business-friendly environment, and strong regulatory framework, it is appealing to entrepreneurs.</span> At Sydney Consulting, we understand the nuances of the Bahrain market and are committed to delivering business process services that are tailor-made to suit your needs.</p>

                        <p className="text-custome-gray lg:leading-[1.5rem] mt-3" style={{ wordSpacing: "0.3rem" }}> Our business setup consultants in Bahrain offer end-to-end company setup solutions. From understanding legal compliances to finding the perfect location for your office, we shall assist in every step of the process.</p>

                    </div>

                    <div className="about-button mt-10 font-firasans">
                        <a href="/home" className="text-xl flex items-center justify-center">
                            <i><IoSettingsOutline className="text-xl mt-1" /></i> More About
                        </a>
                    </div>
                </div>
            </div>



            {/* Seventh Content */}

            <div className="bg-custome-dark-brown p-4">

                <div className="max-w-webContainer mx-auto">
                    <h2 className="my-3 lg:text-4xl text-3xl font-semibold font-poppins text-white text-left">Business Set-Up & Strategy Consulting in Bahrain    </h2>

                    <p className="mt-10 mb-10 text-sm lg:text-base text-white tracking-wide text-justify opacity-[70%]">
                        We specialize in business setup and consulting in Bahrain, with a professional team that has years of experience in company formation across various sectors. This ensures a smooth and efficient process for <span className="text-custome-red hover:text-custome-blue cursor-pointer">setting up a limited company online </span> for you
                    </p>
                </div>

                <div className="readmore-button my-12 font-firasans ">
                    <a href="/home" className="text-xl flex items-center justify-center">
                        Read More
                    </a>
                </div>
            </div>


            {/* Eight Content  */}
            <div className="relative z-0">
                <div className="style-process process-area ">


                    <div className="max-w-webContainer mx-auto">
                        <div className="my-0">
                            <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-1 my-24">
                                {/* Left Side Content */}
                                <div className="flex flex-col items-start max-w-full  text-center lg:text-left h-full">
                                    <div className="flex gap-2 items-center pb-5">
                                        <div className="bg-custome-brown h-[2px] w-10"></div>
                                        <h4 className="text-custome-brown font-poppins font-semibold text-xl">Why Choose Bahrain for Your Business?</h4>
                                    </div>
                                    <h2 className="text-white text-2xl lg:text-3xl font-bold font-poppins items-start text-left lg:max-w-[80%]"
                                        style={{ lineHeight: '3rem' }}
                                    >
                                        Bahrain is an ideal destination for businesses seeking growth and success in the<span className="text-custome-orange"> Middle East. </span>
                                    </h2>



                                </div>


                                {/* Right Side Image */}
                                <div className="w-full mt-5 lg:mt-0  h-full flex items-center">
                                    <p className="mt-4 mb-10 text-sm lg:text-base text-custome-p-color tracking-wide text-justify">
                                        Our services enable you to set up your business in Bahrain effortlessly, with our consultants assisting you with your needs and creating a tailored plan, having successfully assisted numerous clients in the corporate world.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>


                    <img
                        src={all_shape}
                        alt="all_shape"
                        className="absolute top-0 -right-1 animate-leftToRight hidden lg:flex opacity-20"
                    />
                </div>

                <div className="lg:h-40 md:h-[365px] "></div>

                {/* Glass Effect Container (positioned above the Eight Content ) */}
                <div className="md:absolute lg:bottom-[0.1rem] bottom-[0.1rem] left-0 right-0 z-20 process-bg p-6 rounded-lg  max-w-webContainer mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:px-0 ">

                        <div className="flex flex-col items-center text-center lg:mx-10 space-y-5">
                            <div>
                                <img src={G1} alt="G1" className="mb-0 mt-10" />
                            </div>
                            <div>
                                <h3 className="text-custome-brown font-firasans font-bold text-2xl my-3">Strategic Location</h3>
                                <p className="text-justify">Situated in the heart of the Gulf region, Bahrain offers excellent connectivity to major markets in the Middle East.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center lg:mx-10 space-y-5">
                            <div>
                                <img src={G2} alt="G2" className="mb-0 mt-10" />
                            </div>
                            <div>
                                <h3 className="text-custome-brown font-firasans font-bold text-2xl my-3">Business-Friendly Environment</h3>
                                <p className="text-justify">Bahrain boasts a highly supportive regulatory environment.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center lg:mx-10 space-y-5">
                            <div>
                                <img src={G3} alt="G3" className="mb-0 mt-10" />
                            </div>
                            <div>
                                <h3 className="text-custome-brown font-firasans font-bold text-2xl my-3">Skilled Workforce</h3>
                                <p className="text-justify">Bahrain offers a diverse and skilled workforce.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <img
                    src={all_shape6}
                    alt="all_shape6"
                    className="absolute bottom-20 left-10 animate-topToBottom hidden lg:flex z-10 w-36 h-[32%]"
                />
                <img
                    src={all_shapeRed}
                    alt="all_shapeRed"
                    className="absolute -bottom-5 right-80 animate-topToBottom hidden lg:flex z-30"
                />
            </div>


            {/* Nine Content  */}
            <div className="relative lg:z-40 z-0">
                <div className="testimonial-area py-16 px-6 lg:px-0">
                    <div className="max-w-webContainer mx-auto globback px-5 lg:p-12 rounded-lg shadow-lg bg-opacity-80">
                        <div className="lg:flex gap-20">
                            {/* Left Column (FAQ Section) */}
                            <div className="lg:w-[60%]">
                                <div className="flex gap-2 items-center pb-5">
                                    <div className="bg-custome-brown h-[2px] w-10"></div>
                                    <h4 className="text-custome-brown font-poppins font-semibold text-xl">FAQ</h4>
                                </div>
                                <h2 className="text-white text-2xl lg:text-4xl font-bold font-poppins items-start text-left lg:leading-[3.5rem]">
                                    Frequently Asked <span className="text-custome-orange">Questions</span>
                                </h2>

                                <div className="text-white mt-6 space-y-4">
                                    {/* Question 1 */}
                                    <div
                                        onClick={() => handleToggle(1)}
                                        className="font-firasans cursor-pointer font-semibold flex justify-between items-center gap-4 text-left border border-custome-gray py-4 lg:px-6 px-3 lg:rounded-full rounded-2xl transition duration-200 ease-in-out"
                                    >
                                        <span>What is CR?</span>
                                        <span className="text-xl">{openQuestion === 1 ? "−" : "+"}</span>
                                    </div>
                                    {openQuestion === 1 && (
                                        <p className="text-sm mt-2 pl-6 pr-6 lg:pr-12 transition-all duration-300 ease-in-out text-left">
                                            <span className="text-base ">
                                                CR, or commercial registration, is a type of business license. It permits a person or business to engage in commercial activities in Bahrain.
                                            </span>
                                        </p>
                                    )}

                                    {/* Question 2 */}
                                    <div
                                        onClick={() => handleToggle(2)}
                                        className="font-firasans cursor-pointer font-semibold flex justify-between items-center gap-4 text-left border border-custome-gray py-4 lg:px-6 px-3 lg:rounded-full rounded-2xl transition duration-200 ease-in-out"
                                    >
                                        <span>Documents required to get CR in Bahrain</span>
                                        <span className="text-xl">{openQuestion === 2 ? "−" : "+"}</span>
                                    </div>
                                    {openQuestion === 2 && (
                                        <p className="text-sm mt-2 pl-6 pr-6 lg:pr-12 transition-all duration-300 ease-in-out text-left">

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">1. Power of Attorney :</span>
                                                <span className="text-base ">
                                                    You can create a Power of Attorney with a public or private notary if you are in Bahrain. You can establish a power of attorney from your home nation if you are not in Bahrain.
                                                </span>
                                            </div>

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">2. Reservation of CR Name :</span>
                                                <span className="text-base ">
                                                    At this stage, we'll need three suggested commercial names. We shall request that MOICT reserve your CR's trade and commercial name. Types of Commercial Registration (CR) in Bahrain are categorized based on the obligation of the owner.
                                                </span>
                                            </div>

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">3. Licensing :</span>
                                                <span className="text-base ">
                                                    At this stage, we will need a commercial address for an office, store, or workshop where the company's head office will be located. Shop photos, a copy of the lease, and an electricity bill copy are needed as evidence of address. You will also need clearance from other licensing bodies if your CR is associated with any specialized activity.
                                                </span>
                                            </div>

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">4. Company Memorandum :</span>
                                                <span className="text-base ">
                                                    After receiving your permission, we will draft the articles of association and memorandum of association and submit it to MOIC. 5.Notarization : A public notary or a private notary must notarize the draft memorandum.
                                                </span>
                                            </div>

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">6. Bank Account For Company :</span>
                                                <span className="text-base ">
                                                    Opening a bank account for the business and putting money in is required. We will help you to open a bank account quickly.
                                                </span>
                                            </div>

                                            <div className="py-4">
                                                <span className="mr-2 font-semibold text-lg">7. Approval by MOIC :</span>
                                                <span className="text-base ">
                                                    The bank certificate and notarized memo must be submitted to MOIC for final approval. Your CR is registered after it is accepted.
                                                </span>
                                            </div>

                                        </p>
                                    )}

                                    {/* Question 3 */}
                                    <div
                                        onClick={() => handleToggle(3)}
                                        className="font-firasans cursor-pointer font-semibold flex justify-between items-center gap-4 text-left border border-custome-gray py-4 lg:px-6 px-3 lg:rounded-full rounded-2xl transition duration-200 ease-in-out"
                                    >
                                        <span>What is WLL?</span>
                                        <span className="text-xl">{openQuestion === 3 ? "−" : "+"}</span>
                                    </div>
                                    {openQuestion === 3 && (
                                        <p className="text-sm mt-2 pl-6 pr-6 lg:pr-12 transition-all duration-300 ease-in-out text-left">
                                            <span className="text-base ">
                                                WLL stands for having Limited Liability, which refers to a business having limited liability. A limited liability company is referred to as a "WLL" in Gulf nations. A WLL firm is a limited liability company with an unlimited number of shareholders in the Bahrain.
                                            </span>
                                        </p>
                                    )}

                                    {/* Question 4 */}
                                    <div
                                        onClick={() => handleToggle(4)}
                                        className="font-firasans cursor-pointer font-semibold flex justify-between items-center gap-4 text-left border border-custome-gray py-4 lg:px-6 px-3 lg:rounded-full rounded-2xl transition duration-200 ease-in-out"
                                    >
                                        <span>What are the documents required to open a foreign branch?</span>
                                        <span className="text-xl">{openQuestion === 4 ? "−" : "+"}</span>
                                    </div>
                                    {openQuestion === 4 && (
                                        <p className="text-sm mt-2 pl-6 pr-6 lg:pr-12 transition-all duration-300 ease-in-out text-left">
                                            <span className="text-base ">
                                                <ul className="text-base space-y-4">
                                                    <li>1.Bahrain Company CR</li>
                                                    <li>2.Corporation certificate</li>
                                                    <li>3.Attested Memorandum of association</li>
                                                    <li>4.Attested Audit Report</li>
                                                </ul>







                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Right Column (FAQ Form Section) */}
                            <div className="text-white mt-10 lg:mt-0 lg:w-[40%] lg:px-1">
                                <div className="bg-white bg-opacity-10 rounded-lg shadow-md">
                                    <div className="bg-custome-brown p-6">
                                        <h3 className="text-lg lg:text-2xl font-semibold mb-4">Free Consultant</h3>
                                        <p className="text-sm lg:text-base">We’re here to assist you!</p>
                                    </div>
                                    {/* Placeholder for form */}
                                    <div className="pt-4 space-y-3 p-6 lg:px-14 bg-white text-left text-sm font-firasans text-custome-form-text">
                                        <div>
                                            <p className="mb-1">Name</p>
                                            <input type="text" className="w-full py-2 px-3 rounded-md bg-opacity-20 bg-white border-custome-p-color border-[1px] " />
                                        </div>
                                        <div>
                                            <p className="mb-1">Email Address</p>
                                            <input type="email" className="w-full py-2 px-3 rounded-md bg-opacity-20 bg-white border-custome-p-color border-[1px] " />
                                        </div>
                                        <div>
                                            <p className="mb-1">Phone</p>
                                            <input type="number" className="w-full py-2 px-3 rounded-md bg-opacity-20 bg-white border-custome-p-color border-[1px] " />
                                        </div>
                                        <div>
                                            <p className="mb-1">Your Message</p>
                                            <textarea className="w-full py-2 px-3 rounded-md bg-opacity-20 bg-white  border-custome-p-color border-[1px] h-28"></textarea>
                                        </div>
                                        <button className="bg-custome-brown p-3 rounded-md font-semibold text-white hover:bg-custome-dark-brown transition duration-200 ease-in-out">
                                            Get Free Consultation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={all_shape5}
                        alt="all_shape5"
                        className="absolute top-0 -left-14 animate-leftToRight hidden lg:flex opacity-20"
                    />
                    <img
                        src={glob}
                        alt="glob"
                        className="absolute lg:top-0 top-[20%] lg:left-[30%]  transform -translate-x-1/2 -translate-y-1/2 animate-rotate360 -z-[2]"
                    />
                </div>
            </div>


            {/* Last Content  */}

            <div className="bg-white">
                <div className="max-w-webContainer mx-auto bg-custome-brown p-6 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 py-8">
                        {/* Left Side - Heading */}
                        <div className="flex items-center">
                            <h2 className="text-2xl lg:text-4xl w-full lg:w-2/3 text-white font-bold font-poppins">
                                To Get In Touch With Sydney Consulting
                            </h2>
                        </div>

                        {/* Right Side - Contact Details */}
                        <div className="flex items-center gap-4">
                            {/* Icon Container */}
                            <div className=" border-dashed border-2 border-white rounded-full p-2">
                                <div className="bg-white text-custome-brown rounded-full p-4 flex items-center justify-center">
                                    <SlCallIn className="text-3xl lg:text-5xl" />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="lg:ml-20 ml-6">
                                <p className="font-poppins lg:text-4xl text-2xl font-bold text-white">+973 3451 5517</p>
                                <p className="font-firasans text-white lg:text-2xl text-lg text-left font-semibold">info@sydneyme.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Home;
