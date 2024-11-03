import { Link } from "react-router-dom";

function TravelersData() {

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
  return (
    <>
      <div className="container w-full md:w-[calc(100%-270px)] lg:w-[calc(100%-280px)] pt-16 md:pr-8 pr-2 lg:pr-10 md:ml-2 md:mr-[270px] md:mt-8 lg:mr-[280px]">
        <div class="flex md:ml-8 ml-2 items-center bg-price rounded-lg p-0.5 w-fit">
          <button
            // onClick={handleLogout}
            class="flex items-center p-2  rounded-lg "
          >
            <span class="flex-1 mr-2  whitespace-nowrap text-white font-sans">
              إضافة راكب
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863ZM13.25 18V13.25H18C18.6861 13.25 19.25 12.6861 19.25 12C19.25 11.3139 18.6861 10.75 18 10.75H13.25V6C13.25 5.31386 12.6861 4.75 12 4.75C11.3139 4.75 10.75 5.31386 10.75 6V10.75H6C5.31386 10.75 4.75 11.3139 4.75 12C4.75 12.6861 5.31386 13.25 6 13.25H10.75V18C10.75 18.6861 11.3139 19.25 12 19.25C12.6861 19.25 13.25 18.6861 13.25 18Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </button>
        </div>
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
                  <label>
                    <input
                      type="file"
                      hidden

                    />
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35788 19.01L3.33788 19.03C3.06788 18.44 2.89788 17.77 2.82788 17.03C2.89788 17.76 3.08788 18.42 3.35788 19.01Z" fill="#8EC640"/>
<path d="M9.77795 10.38C11.0924 10.38 12.1579 9.31443 12.1579 8C12.1579 6.68556 11.0924 5.62 9.77795 5.62C8.46351 5.62 7.39795 6.68556 7.39795 8C7.39795 9.31443 8.46351 10.38 9.77795 10.38Z" fill="#8EC640"/>
<path d="M16.9678 2H8.58783C4.94783 2 2.77783 4.17 2.77783 7.81V16.19C2.77783 17.28 2.96783 18.23 3.33783 19.03C4.19783 20.93 6.03783 22 8.58783 22H16.9678C20.6078 22 22.7778 19.83 22.7778 16.19V13.9V7.81C22.7778 4.17 20.6078 2 16.9678 2ZM21.1478 12.5C20.3678 11.83 19.1078 11.83 18.3278 12.5L14.1678 16.07C13.3878 16.74 12.1278 16.74 11.3478 16.07L11.0078 15.79C10.2978 15.17 9.16783 15.11 8.36783 15.65L4.62783 18.16C4.40783 17.6 4.27783 16.95 4.27783 16.19V7.81C4.27783 4.99 5.76783 3.5 8.58783 3.5H16.9678C19.7878 3.5 21.2778 4.99 21.2778 7.81V12.61L21.1478 12.5Z" fill="#8EC640"/>
</svg>
                  </label>
                  {/* {newsItem.pdfs} */}
                </td>
                <td className="px-6 py-4  font-sans">
                  <div class="flex justify-end">
                    <form class="max-w-sm">
                      <select id="" class=" border border-2 border-primaryTitle text-primaryTitle text-sm rounded-lg focus:ring-primaryTitle focus:border-primaryTitle block w-full p-1 ">
                        <option selected>تم التأكيد</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </form>
                  </div>

                  {/* {newsItem.pdfs} */}
                </td>
                <td className="px-6 py-4  font-sans">
                  <div className="flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z" fill="#05ABEE" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#8EC640" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="#F76570" />
                    </svg>
                  </div>
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