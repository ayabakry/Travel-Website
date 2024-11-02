import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

function AddTravel() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const [newsTitle, setnewsTitle] = useState("");
  const [newsTitleEn, setnewsTitleEn] = useState("");
  const [newsBody, setnewsBody] = useState("");
  const [newsBodyEn, setnewsBodyEn] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedPDFNames, setSelectedPDFNames] = useState([]);
  const [PDFTitles, setPDFTitles] = useState([]);
  const [Params, setParams] = useState("");
  //   const token = useSelector((state) => state.auth.token);
  const [loading, setLoading] = useState(true);

  //   const formatDate = (date) => {
  //     const d = new Date(date);
  //     const day = d.getDate();
  //     const month = d.getMonth() + 1; // Months are 0-based, so add 1
  //     const year = d.getFullYear();
  //     return `${day}/${month}/${year}`;
  //   };

  //   const handleDateChange = (e) => {
  //     const formattedDate = formatDate(e.target.value);
  //     setSelectedDate(formattedDate);
  //   };

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];

  //     // Check if the file size is less than or equal to 5MB
  //     if (file && file.size <= 5 * 1024 * 1024) {
  //       // 5MB in bytes
  //       setSelectedFile(file); // Store the selected file
  //     } else {
  //       alert("File size must be 5MB or less.");
  //       // Optionally, you could clear the file input if size is exceeded
  //       e.target.value = "";
  //     }
  //   };
  //   const handlePDFChange = (index) => (e) => {
  //     const file = e.target.files[0]; // Get the selected file from the specific input
  //     if (file) {
  //       const fileName = file.name; // Get the file name

  //       // Update the selectedPDFNames array by replacing/adding the file name at the specific index
  //       setSelectedPDFNames((prevPDFNames) => {
  //         const updatedPDFNames = [...prevPDFNames];
  //         updatedPDFNames[index] = fileName; // Store the new file name at the specified index
  //         return updatedPDFNames;
  //       });
  //     }
  //     if (file && file.size <= 10 * 1024 * 1024) {
  //       // 5MB in bytes
  //       setSelectedFile(file); // Store the selected file
  //     } else {
  //       alert("File size must be 10MB or less.");
  //       // Optionally, you could clear the file input if size is exceeded
  //       e.target.value = "";
  //     }
  //   };
  //   const handleTITLEChange = (index) => (e) => {
  //     const title = e.target.value; // Get the input value (string)
  //     setPDFTitles((prevTitles) => {
  //       const updatedTitles = [...prevTitles];
  //       updatedTitles[index] = title; // Update the title at the specific index
  //       return updatedTitles;
  //     });
  //   };
  //   const newsData = {
  //     title: newsTitle,
  //     titleEn: newsTitleEn,
  //     body: newsBody,
  //     bodyEn: newsBodyEn,
  //     date: selectedDate,
  //     imgUrl: selectedFile,
  //     pdfs: selectedPDFNames,
  //     pdfTitles: PDFTitles,
  //     params: Params,
  //     studentNews: false,
  //   };

  //   const handleInputChange = (e) => {
  //     const value = e.target.value;
  //     // Regex to allow only English letters, numbers, spaces, and basic punctuation
  //     const englishOnly = /^[A-Za-z0-9 .,!?'"-]*$/;

  //     if (englishOnly.test(value)) {
  //       setParams(value);
  //     }
  //   };

  //   useEffect(() => {
  //     const checkToken = async () => {
  //       const isValidToken = await validateToken();
  //       if (!isValidToken) {
  //         navigate("/sign-in"); // Redirect to sign-in if token is invalid
  //       }
  //     };

  //     checkToken();
  //   }, [navigate]);

  //   useEffect(() => {
  //     const fetchNews = async () => {
  //       try {
  //         const result = await dispatch(addNews(newsData));

  //         if (result.meta.requestStatus === "rejected") {
  //           navigate("/sign-in"); // Navigate to sign-in page if rejected
  //         } else if (result.meta.requestStatus === "fulfilled") {
  //           setLoading(false); // Allow rendering only after the request is successful
  //         }
  //       } catch (error) {
  //         console.error("Error fetching news:", error);
  //         navigate("/sign-in"); // Handle any unexpected errors by navigating to sign-in
  //       }
  //     };

  //     fetchNews();
  //   }, [dispatch, navigate]);

  //   const handleAddNews = async (e) => {
  //     e.preventDefault();

  //     console.log("newsData to be sent:", newsData);

  //     const result = await dispatch(addNews(newsData));

  //     // Check if the news was successfully added
  //     if (result.meta.requestStatus === "fulfilled") {
  //       console.log("News added successfully!", result.payload);
  //       navigate("/thank-you"); // Navigate to the thank you page
  //     } else {
  //       console.error("Failed to add news", result.error.message);
  //     }
  //   };

  return (
    <div className="relative flex flex-col md:flex-row justify-between ">
      <div className="container w-full md:w-[calc(100%-270px)] lg:w-[calc(100%-280px)] pt-10 pr-8 lg:pr-10 md:mr-[270px] lg:mr-[280px]">
        <h2 className="mt-10 text-right md:text-3xl font-bold leading-9 tracking-tight text-primaryTitle font-sans">
          إضافة بطاقة رحلات
        </h2>
        <p className="text-backbutton text-right mt-4 font-bold">
          تفاصيل بطاقة الرحلات
        </p>
        <form
          className="rounded-3xl mx-auto  pl-10 ml-8 pt-5  pb-5  "
        //   onSubmit={handleAddNews}
        >
          <div className=" flex ">
            <div className=" rounded-lg  md:w-[40%] ml-4 order-1 ">
              <label
                htmlFor="title-en"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                العنوان
              </label>
              <input
                required
                type="text"
                id="title-en"
                className="block shadow w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2 h-10"
                value={newsTitleEn}
                onChange={(e) => setnewsTitleEn(e.target.value)}
              />
            </div>
            <div className="  md:w-[100%] w-[50%] text-2xl">
              <label
                htmlFor="another-input"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                الوصف
              </label>
              <input
                required
                type="text"
                id="another-input"
                className="block shadow w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2 h-10"
              />
            </div>
          </div>
          <div className="md:flex justify-end mb-5">
            <div className="md:w-[28%] order-1">
              <label
                htmlFor="content-ar"
                className="block mb-2  font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                السعر
              </label>
              <input
                required
                type="text"
                id="content-ar"
                className="block w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2"
                value={newsBody}
                onChange={(e) => setnewsBody(e.target.value)}
              />
            </div>

            <div className="md:w-1/4 mr-4">
              <label
                htmlFor="additional-params"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                نوع العملة
              </label>
              <select
                id="countries"
                dir="rtl"
                className="p-2 border border-primaryTitle font-bold text-sm rounded-lg block w-full text-right"
              >
                <option>جنية مصري</option>
                {/* <option>Canada</option>
      <option>France</option>
      <option>Germany</option> */}
              </select>
            </div>
          </div>


          
        </form>

        <p className="text-backbutton text-right  font-bold">
        تفاصيل الرحلات
        </p>
        <form
          className="rounded-3xl mx-auto  pl-10 ml-8 pt-5  pb-5  "
        //   onSubmit={handleAddNews}
        >
          <div className="  ">
            <div className=" rounded-lg  mb-2 order-1 justify-end ">
              <label
                htmlFor="title-en"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
               إسم المكان
              </label>
              <input
                required
                type="text"
                id="title-en"
                className="block shadow w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2 h-10"
                value={newsTitleEn}
                onChange={(e) => setnewsTitleEn(e.target.value)}
              />
            </div>
            <div className="  md:w-[100%] w-[50%] text-2xl">
              <label
                htmlFor="another-input"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                الوصف
              </label>
              <input
                required
                type="text"
                id="another-input"
                className="block shadow w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2 h-10"
              />
            </div>
          </div>
          <div className="md:flex justify-end mb-5">
            <div className="md:w-[28%] ">
              <label
                htmlFor="content-ar"
                className="block mb-2  font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
                المميزات
              </label>
              <input
                required
                type="text"
                id="content-ar"
                className="block w-full p-2 rounded-lg text-xs focus:border focus:border-primaryTitle focus:outline-none text-right bg-white2"
                value={newsBody}
                onChange={(e) => setnewsBody(e.target.value)}
              />
            </div>

            <div className="md:w-1/4 ml-4 order-1">
              <label
                htmlFor="additional-params"
                className="block mb-2 font-medium text-right text-primaryTitle md:text-xl font-sans"
              >
               عدد الركاب - الاوتوبيس
              </label>
              <select
                id="countries"
                dir="rtl"
                className="p-2 border border-primaryTitle font-bold text-sm rounded-lg block w-full text-right"
              >
                <option>جنية مصري</option>
                {/* <option>Canada</option>
      <option>France</option>
      <option>Germany</option> */}
              </select>
            </div>
          </div>


          <div className="m-5 flex justify-end">
            <button
              type="submit"
              className="flex h-10 mr-[-20px] rounded-md bg-primaryTitle font-sans md:pl-40 md:pr-40 pr-4 pl-4 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-primaryTitle "
            >
              نشر
              <svg
                width="22"
                height="22"
                viewBox="0 0 33 32"
                fill="none"
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16L24.5 16"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 24L16.5 8"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTravel;
