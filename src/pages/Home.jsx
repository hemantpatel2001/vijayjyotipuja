import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { setFormData } from "../store/slices/formSlice";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  service: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required"),
});

const Home = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(setFormData(values));
    // Here you would typically make an API call to submit the form
    console.log("Form submitted:", values);
    setSubmitting(false);
    resetForm();
  };
  const ujjianPooja = [
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Team/kalsarp-home-blog.jpg",
      heading: "Kalsarp Shanti Puja",
      title: "Pandit Gajanan Guruji",
    },
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Team/pitra-shanti-home-blog.jpg",
      heading: "Pitru Shanti puja",
      title: "Pandit Gajanan Guruji",
    },
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Team/narayan-nagbali-home-blog.jpg",
      heading: "Narayan Nagbali Puja ",
      title: "Pandit Gajanan Guruji",
    },
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Team/mahamritunjay-jaap-home-blog.jpg",
      heading: "Maha Mrityunjay Jaap ",
      title: "Pandit Gajanan Guruji",
    },
  ];
  const poojaGellery = [
    {
      image:
        "	http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/1.jpg",
    },
    {
      image:
        "	 http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/2.jpg ",
    },
    {
      image:
        "	http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/3.jpg",
    },
    {
      image:
        "		http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/4.jpg",
    },
    {
      image:
        "	 http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/5.jpg ",
    },
    {
      image:
        "	http://kalsarppoojainujjain.com/assets/images/Portfolio/Portfolio/6.jpg",
    },
  ];
  const slideUjjianPooja = [
    {
      image:
        "	http://kalsarppoojainujjain.com/assets/images/Service/Services/kalsarp-1.jpg",
    },
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Service/Services/kalsarp-2.jpg",
    },
    {
      image:
        "http://kalsarppoojainujjain.com/assets/images/Service/Services/kalsarp-3.jpg",
    },
  ];
  const slides = [
    {
      image: "http://kalsarppoojainujjain.com/assets/images/Home/slider-1.jpg",
      heading: "UJJAIN  FAMOUS PANDIT",
      title: "Pandit Gajanan Guruji",
      text: "30+ Years of Experience pandit who can perform all type of Ujjain pooja like kalsarp shanti, pitra shanti,narayan nagbali,maha mrityunjay jaap.",
    },
    {
      image: "http://kalsarppoojainujjain.com/assets/images/Home/slider-2.jpg",
      heading: "UJJAIN  FAMOUS PANDIT",
      title: "Perform Traditional Pujas",
      text: "30+ Years of Experience pandit who can perform all type of Ujjain pooja like kalsarp shanti, pitra shanti,narayan nagbali,maha mrityunjay jaap.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen ">
      <div className="relative w-full   h-[500px] overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full  transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  bg-black   bg-opacity-50 gap-3 flex flex-col items-start justify-center text-white ">
              <div className="flex  flex-col items-start ml-24 gap-3">
                <h3 className="text-[#FF5003]   text-xl">{slide.heading}</h3>
                <h1 className="text-xl font-bold  sm:text-xl md:text-5xl">
                  {slide.title}
                </h1>
                <p className=" text-lg  sm:text-xl">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900"
        >
          ❯
        </button>
      </div>

      {/* Services Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose from our wide range of puja services
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["Ganesh Puja", "Lakshmi Puja", "Durga Puja"].map((service) => (
              <div
                key={service}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service}
                </h3>
                <p className="mt-2 text-gray-500">
                  Experience divine blessings through our sacred{" "}
                  {service.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="mt-2 flex  ">
        <div className="w-[617px] h-[338px] relative">
          <img
            src="http://kalsarppoojainujjain.com/assets/images/About/about-guruji.jpg"
            alt="About Guruji"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex bg-[#730000]  h-24 w-80">
            <p className="text-white text-7xl font-bold items-center p-3">
              30+
            </p>
            <span className="text-3xl mt-auto mb-auto font-semibold text-white">
              Years of <br />
              <span>experience</span>
            </span>
          </div>
        </div>
        <div className="flex-1 items-start  text-start flex flex-col p-4 gap-3">
          <span className="text-[#FF5003] font-semibold">ABOUT GURUJI</span>
          <h3 className="text-[#730000] text-5xl font-semibold ">
            Authorized Pandit In Ujjain, Pandit Gajanan Guruji
          </h3>
          <p className=" text-gray-500">
            काल सर्प दोष के प्रकार १२ होते है। आपकी कुंडली में कौनसे प्रकार का
            काल सर्प दोष है यह जानकर उस प्रकार की काल सर्प पूजा की जाती है।
            इसलिए यह जानना जरुरी हो जाता है की आपकी कुंडली में कौनसा काल सर्प
            दोष है। कुंडली जांचने के लिए पंडित गजानन गुरुजी से संपर्क करे।
            कुंडली में काल सर्प दोष होने के कारण कई प्रकार की समस्याएं जीवन में
            आती है। जैसे के विवाह में विलम्ब होना, विवाह टूटना , घर में अशांति,
            व्यापार में नुकसान, शारीरिक समस्याएं आदि।उज्जैन में काल सर्प पूजा
            करने से यह सारी समस्याएं दूर हो जाती है। काल सर्प पूजा के लिए पंडित
            गजानन गुरुजी से संपर्क करे। गजानन गुरुजी उनके पूजा करने के बाद मिलने
            वाले अच्छे परिणामो की वजह से त्रयम्बकेश्वर में विख्यात है। गुरूजी से
            काल सर्प पूजा करने से ४१ दिन में १०० प्रतिशत अच्छे परिणाम की
            प्राप्ति होती है। काल सर्प पूजा का खर्चा और मुहूर्त जानने के लिए
            गुरूजी से संपर्क करे। धन्यवाद्।
          </p>
          <button className="primary-col border  rounded-md p-3 w-44  mt-6 text-white ">
            +917067771773
          </button>
        </div>
      </div>

      <div className="mt-10 ">
        <span className="text-[#FF5003] text-xl font-semibold">
          UJJIAN POOJA
        </span>
        <h3 className="text-[#730000] text-5xl font-semibold ">
          Kaal Sarp Puja In Ujjain
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {slideUjjianPooja.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  gap-2 items-center p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <h2 className="text-xl  mt-2 border rounded-lg  px-10  py-1 font-semibold  text-white bg-[#730000] ">
              {item.heading}
            </h2>
            <p className="text-gray-700 text-start">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="flex-1 flex flex-col items-start text-start p-4 gap-3">
          <span className="text-[#FF5003] text-xl font-semibold">
            Pandit Gajanan Guruji
          </span>
          <h3 className="text-[#730000] text-5xl font-semibold">
            Kaal Sarp Puja in Ujjain
          </h3>
          <p className="text-gray-700">
            Kalsarp Dosh Nivaran is formed when all the planets are situated
            between Rahu &amp; Ketu. When all the planets are hemmed between
            Rahu and Ketu i.e., the moon’s north node and the moon’s south node
            Kalsarp Yog is formed. Complete Kalsarp Yog is formed only when half
            of the chart is unoccupied by planets.
          </p>
          <p className="text-gray-700">
            कालसर्प एक ऐसा योग है जो जातक के पूर्व जन्म के किसी जघन्य अपराध के
            दंड या शाप के फलस्वरूप उसकी जन्मकुंडली में परिलक्षित होता है।
            व्यावहारिक रूप से पीड़ित व्यक्ति आर्थिक व शारीरिक रूप से परेशान तो
            होता ही है, मुख्य रूप से उसे संतान संबंधी कष्ट होता है। या तो उसे
            संतान होती ही नहीं, या होती है तो वह बहुत ही दुर्बल व रोगी होती है।
          </p>
          <div className="flex gap-4">
            <button className="primary-col border  rounded-md p-3 w-44  mt-6 text-white ">
              +917067771773
            </button>
            <button className="primary-col border  rounded-md p-3 w-44  mt-6 text-white ">
              READ MORE
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 w-[617px] h-[338px] ">
          <img
            src="http://kalsarppoojainujjain.com/assets/images/About/kalsarp-section.jpg"
            alt="About Guruji"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div
        className="relative flex flex-1 inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('http://kalsarppoojainujjain.com/assets/images/Background/ujjain-background.jpg')",
          
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white  flex text-start justify-center flex-col gap-2    p-6">
          <h2 className="text-white text-4xl font-bold ">
            Pandit Gajanan Guruji
          </h2>
          <p className="font-semibold">
            REDRESSES IN EVERY TYPE OF WORSHIP AT LOW RATES. BOOK PANDIT JI NOW!
          </p>
          <button className="primary-col   rounded-md p-3 w-44  mt-6 text-white ">
            CONTACT GURUJI
          </button>
        </div>

        <div className="relative z-10">
          <img
            src="http://kalsarppoojainujjain.com/assets/images/Banner/mahakal.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <span className="text-[#FF5003] text-xl font-semibold">
          PANDIT GAJANAD GURUJI
        </span>
        <h3 className="text-[#730000] text-5xl font-semibold">Puja Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {poojaGellery.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Form Section */}
      <div className=" bg-gray-50 border rounder-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="">
            <span className="text-[#FF5003] text-xl font-semibold">
              Pandit Gajanan Guruji
            </span>
            <h3 className="text-[#730000] text-5xl font-semibold">
              Check Your Kundali and get Best Remedies for Puja
            </h3>

            <Formik
              initialValues={{
                name: "",
                email: "",
                mobile: "",
                service: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          className="p-2 border rounded w-full"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm mt-1 text-start"
                        />
                      </div>
                      <div>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="p-2 border rounded w-full"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1 text-start"
                        />
                      </div>
                      <div>
                        <Field
                          name="mobile"
                          type="text"
                          placeholder="Mobile"
                          className="p-2 border rounded w-full"
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-red-500 text-sm mt-1 text-start"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="sr-only">
                        Service
                      </label>
                      <Field
                        as="select"
                        id="service"
                        name="service"
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="ganesh">Ganesh Puja</option>
                        <option value="lakshmi">Lakshmi Puja</option>
                        <option value="durga">Durga Puja</option>
                      </Field>
                      <ErrorMessage
                        name="service"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-start"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows="4"
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Your message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-start"
                      />
                    </div>
                  </div>

                  <div className="flex justify-start mb-2 w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="py-2 px-4 border text-lg rounded-md text-white mb-2 primary-col focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* ujian pooja */}
      <div>
        <span className="text-[#FF5003] text-xl font-semibold">
          UJAIN POOJA
        </span>
        <h3 className="text-[#730000] text-5xl font-semibold">
          All Puja Performed ByPandit Gajanan Guruji
        </h3>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {ujjianPooja.map((pooja, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 p-2">
              <h2 className="text-xl font-semibold text-center">
                {pooja.heading}
              </h2>
              <p className="text-gray-600 text-center">{pooja.title}</p>
            </div>
            <img
              src={pooja.image}
              alt={pooja.heading}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {ujjianPooja.map((pooja, index) => (
          <div>
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={pooja.image}
                alt={pooja.heading}
                className="w-full h-58 object-cover"
              />
            </div>
            <div className=" absolute bg-white border shadow-lg rounded-lg h-24  ">
              <h2 className="text-xl font-semibold text-center">
                {pooja.heading}
              </h2>
              <p className="text-gray-600 text-center">{pooja.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
