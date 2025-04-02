import { Link } from "react-router-dom";

const About = () => {

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
  return (
    <div className="min-h-screen  bg-white">
      {/* Hero Section */}
      <div
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://kalsarppoojainujjain.com/assets/images/PageTitle/Banner-trimbak.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative  text-start   mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl text-white font-bold sm:text-xl md:text-3xl">
            About Guruji
          </h1>
          <div className="flex place-items-start gap-x-3  mt-3">
            <span className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </span>
            <span className="flex items-center  ">
              <Link
                to="/"
                className="text-lg font-semibold no-underline  hover:primary-col text-white "
              >
                Home
              </Link>
            </span>
          </div>
          <button className="primary-col  rounded-md  p-2 w-44 mt-3   text-white ">
            +917067771773
          </button>
        </div>
      </div>

      <div className=" flex gap-3 mt-7 ">
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
          <span className="text-[#FF5003]  text-sm font-semibold">
            ABOUT GURUJI
          </span>
          <h3 className="text-[#730000] text-3xl font-semibold ">
            Authorized Pandit In Ujjain, Pandit Gajanan Guruji
          </h3>
          <p className=" text-gray-500 text-md">
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

      <div className="mt-5">
        <span className="text-[#FF5003] text-sm  font-semibold mt-3">
          UJAIN POOJA
        </span>
        <h3 className="text-[#730000] text-4xl font-semibold">
          All Puja Performed ByPandit Gajanan Guruji
        </h3>
      </div>
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

export default About;
