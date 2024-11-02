import { Link } from "react-router-dom";

function TravelersData(){
    
//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       dispatch(setCurrentPage(currentPage - 1));
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       dispatch(setCurrentPage(currentPage + 1));
//     }
//   };

//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );
//   const handlePageClick = (page) => {
//     dispatch(setCurrentPage(page)); // Dispatch action to update the current page
//   };
    return(
        <>
        <div className="container w-full md:w-[calc(100%-270px)] lg:w-[calc(100%-280px)] pt-16 md:pr-8 pr-2 lg:pr-10 md:ml-2 md:mr-[270px] md:mt-8 lg:mr-[280px]">
        <h2 className="text-2xl font-bold text-right text-primaryTitle mr-2 mb-6 font-sans ">
        تفاصيل بيانات الركاب
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            className="w-full text-sm text-right rtl:text-right text-gray-500 "
            dir="rtl"
          >
            <thead className="md:text-base text-white uppercase  bg-primaryTitle ">
              <tr>
                <th
                  scope="col"
                  className="px-8 py-3  w-10 font-sans "
                >
                  الرحلة
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  font-sans"
                >
             الإيميل الإلكتروني
                </th>
                
                <th scope="col" className="px-6 py-3  font-sans">
                إسم الراكب
                </th>
                <th scope="col" className="px-6 py-3  font-sans">
                رقم الهاتف
                </th>
                <th scope="col" className="px-6 py-3  font-sans">
                السعر
                </th>
                 <th scope="col" className="px-6 py-3  font-sans">
                الكرسي
                </th>

                <th scope="col" className="px-6 py-3  font-sans">
                الاوتوبيس
                </th>
                <th scope="col" className="px-6 py-3  font-sans">
                صور
                </th>
                <th scope="col" className="px-6 py-3  font-sans">
                حالة الحجز
                </th>
                <th scope="col" className="px-6 py-3  font-sans">
                الأوامر
                </th>
                

                
              </tr>
            </thead>
            <tbody>
              {/* {allNews.map((newsItem) => ( */}
                <tr
                //   key={newsItem.id}
                  className="bg-white border-b border-gray "
                >
                  
                  
                  <td className="px-4">
                  شرم الشيخ
                  </td>
                 
                   <td className="px-6 py-4  font-sans">
                   rofa@email.com
                    {/* {newsItem.body} */}
                  </td> 
                  <td className="px-6 py-4  font-sans ">
                  روفائيل ألفونس
                    {/* {newsItem.date} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  01223456789
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  160 LE
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  10 / 9
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  36 راكب
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  36 راكب
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  حالة الحجز
                    {/* {newsItem.pdfs} */}
                  </td>
                  <td className="px-6 py-4  font-sans">
                  36 راكب
                    {/* {newsItem.pdfs} */}
                  </td>
                 
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-start md:ml-8">
        <ul className="flex items-center -space-x-px h-10 text-base " dir="rtl">
          <li>
            <button
              href="#"
              className={`flex items-center justify-center px-2 h-10 leading-tight  rounded-e-lg   `}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <span className="sr-only ">Previous</span>
              <svg
                className={`w-3 h-3 rtl:rotate-180  ${
                  currentPage == 1 ? "text-gray100" : "text-gray400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {pageNumbers.map((pageSlice) => {
            return (
              <li>
                <Link
                  onClick={() => handlePageClick(pageSlice)}
                  href="#"
                  className={`flex items-center justify-center w-10 h-10 leading-tight  border rounded-full md:m-0.5  ${
                    currentPage == pageSlice
                      ? "bg-primary400 text-white"
                      : "bg-gray50 text-gray400"
                  }`}
                >
                  {pageSlice}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight  rounded-e-lg `}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg
                className={`w-3 h-3 rtl:rotate-180  ${
                  currentPage == totalPages ? "text-gray100" : "text-gray400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div> */}
      
      </>
    );
}
export default TravelersData