import { useState } from "react";
import { Link } from "react-router-dom";

const Kalsharppuja = () => {
  const pujaList = [
    {
      name: "kalsharp Shanti Puja",
     
    },
    {
      name: "Pitru Shanti Puja ",
    },
    {
      name: "Narayan Nagbali Puja",
    },
    {
      name: "Maha Mrityunjay Jaap Puja ",
    },
  ];

  const [pujaName , setPujaName]=useState('kalsharp Shanti Puja"')
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://kalsarppoojainujjain.com/assets/images/PageTitle/Banner-trimbak.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative text-start mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
           {pujaName}
            <br /> Ujjian
          </h1>
          <div className="flex place-items-start gap-x-3 mt-3">
            <span className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </span>
            <span className="flex items-center">
              <Link
                to="/"
                className="text-base sm:text-lg font-semibold no-underline hover:primary-col text-white"
              >
                Home
              </Link>
            </span>
          </div>
       
        </div>
      </div>

      <div className=" grid grid-cols-6 gap-5 p-4 sm:p-6 lg:p-10">
        {/* Puja Image */}

        <div className="col-span-4 space-y-4">
          <div className="w-full  h-[400px]">
            <img
              src="/kalsarp-blog-page.png"
              alt="Puja Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="border-b pb-2">
            <div className="text-white w-fit px-8 py-2  bg-[#730000] rounded-md">
              Pandit Vikas Guruji
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="text-2xl font-semibold text-capitalize text-[#730000]">
              Ujjain Kaal Sarp Shanti Puja
            </div>
            <div className="text-sm font-medium text-gray-500">
              Kalsarp Dosh Nivaran is formed when all the planets are situated
              between Rahu & Ketu. When all the planets are hemmed between Rahu
              and Ketu i.e., the moon’s north node and the moon’s south node
              Kalsarp Yog is formed. Complete Kalsarp Yog is formed only when
              half of the chart is unoccupied by planets.
            </div>
         
          </div>
          <div className="space-y-4 ">
            <div className="text-2xl font-semibold text-capitalize text-[#730000]">
              Benefits of Perform Kalsarp Shanti
            </div>
            <div className="text-sm font-medium text-gray-500">
              कालसर्प एक ऐसा योग है जो जातक के पूर्व जन्म के किसी जघन्य अपराध के
              दंड या शाप के फलस्वरूप उसकी जन्मकुंडली में परिलक्षित होता है।
              व्यावहारिक रूप से पीड़ित व्यक्ति आर्थिक व शारीरिक रूप से परेशान तो
              होता ही है, मुख्य रूप से उसे संतान संबंधी कष्ट होता है। या तो उसे
              संतान होती ही नहीं, या होती है तो वह बहुत ही दुर्बल व रोगी होती
              है। उसकी रोजी-रोटी का जुगाड़ भी बड़ी मुश्किल से हो पाता है। धनाढय
              घर में पैदा होने के बावजूद किसी न किसी वजह से उसे अप्रत्याशित रूप
              से आर्थिक क्षति होती रहती है। तरह तरह के रोग भी उसे परेशान किये
              रहते हैं।
            </div>
        
          </div>
          <div className="space-y-4 ">
            <div className="text-2xl font-semibold text-capitalize text-[#730000]">
              Kaal Sarp Puja Dates & Muhurat
            </div>
            <div className="text-sm font-medium text-gray-500">
              जनवरी 2024 1, 2, 5, 6, 7, 8, 9, 12, 13, 14,15, 19, 20, 21, 22, 23,
              24, 26, 27, 8, 29 और 30 <br /> फरवरी 2024 2, 3, 4, 5, 9, 11, 12, 14, 16,
              17, 18, 19, 22, 23, 24, 25, 26 और 27 <br /> मार्च 2024 1, 2, 3, 4, 5, 6,
              7, 8 (महाशिवरात्रि), 9, 10, 11, 12, 16, 17, 18, 19, 23, 24, 25, 30
              और 31 <br /> अप्रैल 2024 1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 20, 21,
              22, 26, 27, 28 और 29 <br /> मई 2024 3, 4, 5, 6, 7, 10, 11, 12, 13, 15,
              17, 18, 19, 20, 23, 25, 26, 27, 30 और 31 <br /> जून 2024 1, 2, 3, 7, 8,
              9, 10, 11, 14, 15, 16, 17, 18, 21, 22, 23, 24, 28, 29 और 30  <br />जुलाई
              2024 1, 2, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24,
              25, 26, 27, 28, 29 30 और 31 <br />अगस्त 2024 1, 2, 3, 4, 5, 6, 7, 8, 9,
              10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25, 26,
              27, 28 29, 30, 31 (संपूर्ण श्रावण मास) <br /> सितंबर 2024 2, 3, 6, 7, 8,
              9, 13, 14, 15, 16, 17, 20, 21, 22, 23, 27, 28, 29 और 30 <br /> अक्टूबर
              2024 1, 2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 20, 21, 22, 23,
              24, 27, 28, 29 और 30 <br />नवंबर 2024 1, 3, 4, 5, 6, 9, 10, 11, 12, 13,
              14, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28 और 30 <br /> दिसंबर 2024 1, 2,
              3, 4, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 28,
              29, 30 और 31.
            </div>
          
          </div>
      
        </div>

        {/* Puja List */}
        <div className="w-full col-span-2  bg-white border shadow-xl p-4 sm:p-6 rounded-lg h-fit">
          <h2 className="text-[#730000] font-semibold text-xl sm:text-2xl mb-4">
            All Puja List
          </h2>

          <div>
            <ul className="space-y-2">
              {pujaList.map((puja, index) => (
                <li key={index} className="pb-2">
                  <div onClick={()=>{setPujaName(puja?.name)}} className="hover:text-white hover:bg-[#FF5003] flex items-center gap-2 w-full p-2 rounded-md transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5003]  hover:text-black   transition-colors"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Link className="text-sm sm:text-base">{puja.name}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex gap-3 mt-7 ml-10 ">
        <div className="w-[617px] h-[338px] relative">
          <img
            src="http://kalsarppoojainujjain.com/assets/images/About/about-guruji.jpg"
            alt="About Guruji"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex bg-[#730000]  h-24 w-80">
            <p className="text-white text-7xl font-bold items-center p-3">
              10+
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
          <p className=" text-gray-500 text-sm capitalize">
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
       
        </div>
      </div>
    </div>
  );
};

export default Kalsharppuja;

