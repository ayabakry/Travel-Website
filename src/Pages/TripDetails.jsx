import React, { useState } from "react";
import { Link } from "react-router-dom";

function TripDetails({ totalSeats }) {
  const initialSeats = Array.from({ length: totalSeats }, (_, index) => ({
    number: index + 1,
    status: "available",
  }));

  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (seatNumber) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.number === seatNumber
          ? {
              ...seat,
              status: seat.status === "available" ? "selected" : "available",
            }
          : seat
      )
    );
  };

  const isSmallBus = totalSeats === 14;
  const isLargeBus = totalSeats > 14;

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full md:max-w-[80%]">
          <div className=" flex space-x-5">
            <div className="bg-white rounded-lg shadow p-2 m-5 w-[90%] order-1 ">
              <h5 className="mb-2 md:text-4xl font-bold text-secondarybutton text-right ">
                شرم الشيخ
              </h5>
              <p className="mb-5 text-base text-primaryTitle md:mt-4 sm:text-lg text-right">
                فندق تونس بيراميدز
              </p>
            </div>
            <div className="bg-primaryTitle rounded-lg shadow p-2 m-5 md:w-[10%] w-[50%] text-2xl">
              <h5 className="mb-2 md:text-4xl font-bold text-white text-center">
                80
              </h5>
              <p className="mb-5 text-base text-white md:mt-4 sm:text-lg text-center">
                جنية مصري
              </p>
            </div>
          </div>

          <div className=" bg-white  rounded-lg shadow p-4 m-5 ">
            <p className="mb-5 text-base text-bodycolor md:mt-4 sm:text-lg  text-right">
              رحلتي إلى شرم الشيخ كانت تجربة لا تُنسى. بدأت المغامرة بالطيران
              إلى هذا الجمال الساحر المطل على البحر الأحمر. بمجرد وصولي،
              استقبلني مناظر الطبيعة الخلابة والشواطئ الرملية البيضاء. استمتعت
              بالغوص وسط الشعاب المرجانية الملونة ورؤية الأسماك المتنوعة. كما
              قضيت أوقاتاً رائعة في زيارة السوق المحلي وتجربة المأكولات البحرية
              الشهية. في المساء، استمتعت بحفلات الشاطئ والأجواء الاحتفالية التي
              تضفي سحراً خاصاً على المدينة. كانت الرحلة مزيجاً من الاسترخاء
              والمغامرة، وأتطلع للعودة مرة أخرى.
            </p>
          </div>

          <div className=" bg-white  rounded-lg shadow p-4 m-5 ">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 text-right">
              السعر يشمل
            </h2>
            <div class="flex justify-end">
              <ul
                class="max-w-md mr-8 text-gray-500 list-disc list-outside"
                style={{ direction: "rtl" }}
              >
                <li>الاقامة 3 ايام ليلتين</li>
                <li>اقامة وافطار</li>
                <li>الاستمتاع بجميع مزايا الفندق</li>
              </ul>
            </div>
          </div>

          <div className=" bg-white  rounded-lg shadow p-4 m-5 ">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 text-right">
              ملاحظات
            </h2>
            <div class="flex justify-end">
              <ul
                class="max-w-md mr-8 text-gray-500 list-disc list-outside"
                style={{ direction: "rtl" }}
              >
                <li>
                  {" "}
                  لاطفال من 6 سنوات حتي 11.99 سنه يتم دفع 50 % من سعر الفرد 
                </li>
                <li>
                  هذة الاسعار غير  ساريه في الاعياد والمناسبات والاجازات الرسمية
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center  space-y-5 md:space-y-0 md:space-x-8 p-4">
            <div className="p-4 m-2 bg-white rounded-3xl shadow w-80 order-1">
              <div className="bg-gray mt-4 rounded-lg ">
                <div class="flex items-center justify-end">
                  <div className="flex flex-col pb-2 pr-2 order-1">
                    <div className="text-right order-1 p-2 items-center inline-flex">
                      <p className="inline-flex items-center mr-2 text-sm">
                        <svg
                          className="order-1 ml-2"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.5"
                            y="1"
                            width="22"
                            height="22"
                            rx="3"
                            fill="white"
                          />
                          <rect
                            x="1.5"
                            y="1"
                            width="22"
                            height="22"
                            rx="3"
                            stroke="#05ABEE"
                            stroke-width="2"
                          />
                        </svg>
                        متحدد
                      </p>
                      <p className="inline-flex items-center ml-12 text-sm">
                        <svg
                          className="order-1 ml-1"
                          width="24"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            width="24"
                            height="24"
                            rx="4"
                            fill="#05ABEE"
                          />
                        </svg>
                        متاح
                      </p>
                    </div>
                    <div className="text-right order-1 p-1 items-center inline-flex">
                      <p className="inline-flex items-center  text-sm ">
                        <svg
                          className="order-1 ml-1"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            width="24"
                            height="24"
                            rx="4"
                            fill="#C8C8C8"
                          />
                          <path
                            d="M11.588 12.424L7.148 6.136H9.548L12.86 10.984L16.148 6.136H18.524L14.084 12.424L18.764 19H16.364L12.86 13.864L9.308 19H6.932L11.588 12.424Z"
                            fill="white"
                          />
                        </svg>
                        غير متاح
                      </p>
                      <p className="inline-flex items-center text-sm  ml-[8%]">
                        <svg
                          className="order-1 ml-1"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            width="24"
                            height="24"
                            rx="4"
                            fill="#FAB341"
                          />
                        </svg>
                        في الانتظار
                      </p>
                    </div>
                  </div>

                  <div class="p-2 bg-white mr-6 ">
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_254_1747" fill="white">
                        <path d="M40.5 20C40.5 14.6957 38.3929 9.60859 34.6421 5.85786C30.8914 2.10714 25.8043 4.00466e-07 20.5 0C15.1957 -4.00466e-07 10.1086 2.10714 6.35787 5.85786C2.60714 9.60859 0.500001 14.6957 0.5 20L20.5 20H40.5Z" />
                      </mask>
                      <path
                        d="M40.5 20C40.5 14.6957 38.3929 9.60859 34.6421 5.85786C30.8914 2.10714 25.8043 4.00466e-07 20.5 0C15.1957 -4.00466e-07 10.1086 2.10714 6.35787 5.85786C2.60714 9.60859 0.500001 14.6957 0.5 20L20.5 20H40.5Z"
                        stroke="#8EC640"
                        stroke-width="6"
                        mask="url(#path-1-inside-1_254_1747)"
                      />
                      <mask id="path-2-inside-2_254_1747" fill="white">
                        <path d="M40.5 20C40.5 16.0444 39.327 12.1776 37.1294 8.8886C34.9318 5.59961 31.8082 3.03616 28.1537 1.52241C24.4991 0.00865667 20.4778 -0.38741 16.5982 0.384294C12.7186 1.156 9.15491 3.06081 6.35786 5.85786C3.56081 8.65491 1.656 12.2186 0.884294 16.0982C0.11259 19.9778 0.508657 23.9991 2.02241 27.6537C3.53616 31.3082 6.09961 34.4318 9.3886 36.6294C12.6776 38.827 16.5444 40 20.5 40V20H40.5Z" />
                      </mask>
                      <path
                        d="M40.5 20C40.5 16.0444 39.327 12.1776 37.1294 8.8886C34.9318 5.59961 31.8082 3.03616 28.1537 1.52241C24.4991 0.00865667 20.4778 -0.38741 16.5982 0.384294C12.7186 1.156 9.15491 3.06081 6.35786 5.85786C3.56081 8.65491 1.656 12.2186 0.884294 16.0982C0.11259 19.9778 0.508657 23.9991 2.02241 27.6537C3.53616 31.3082 6.09961 34.4318 9.3886 36.6294C12.6776 38.827 16.5444 40 20.5 40V20H40.5Z"
                        stroke="#8EC640"
                        stroke-width="6"
                        mask="url(#path-2-inside-2_254_1747)"
                      />
                      <mask id="path-3-inside-3_254_1747" fill="white">
                        <path d="M0.5 20C0.5 16.0444 1.67298 12.1776 3.87061 8.8886C6.06824 5.59961 9.19181 3.03616 12.8463 1.52241C16.5009 0.00865667 20.5222 -0.38741 24.4018 0.384294C28.2814 1.156 31.8451 3.06081 34.6421 5.85786C37.4392 8.65491 39.344 12.2186 40.1157 16.0982C40.8874 19.9778 40.4913 23.9991 38.9776 27.6537C37.4638 31.3082 34.9004 34.4318 31.6114 36.6294C28.3224 38.827 24.4556 40 20.5 40V20H0.5Z" />
                      </mask>
                      <path
                        d="M0.5 20C0.5 16.0444 1.67298 12.1776 3.87061 8.8886C6.06824 5.59961 9.19181 3.03616 12.8463 1.52241C16.5009 0.00865667 20.5222 -0.38741 24.4018 0.384294C28.2814 1.156 31.8451 3.06081 34.6421 5.85786C37.4392 8.65491 39.344 12.2186 40.1157 16.0982C40.8874 19.9778 40.4913 23.9991 38.9776 27.6537C37.4638 31.3082 34.9004 34.4318 31.6114 36.6294C28.3224 38.827 24.4556 40 20.5 40V20H0.5Z"
                        stroke="#8EC640"
                        stroke-width="6"
                        mask="url(#path-3-inside-3_254_1747)"
                      />
                      <circle
                        cx="7"
                        cy="7"
                        r="5"
                        transform="matrix(-1 0 0 1 27.5 13)"
                        fill="#F76570"
                        stroke="#8EC640"
                        stroke-width="4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <br></br>
              <div className="flex justify-end bg-gray rounded-lg">
                <div
                  className={`grid gap-y-2 gap-x-40 justify-center mr-6 md:text-xl p-4  ${
                    isSmallBus || isLargeBus ? "grid-cols-2" : "grid-cols-2"
                  }`}
                >
                  {seats.map((seat, index) => {
                    const seatClass =
                      seat.status === "available"
                        ? "bg-primaryTitle text-white" // Blue background for available seats
                        : seat.status === "pending"
                        ? "bg-orange-500 text-white" // Orange background for pending seats
                        : "border border-2 border-primaryTitle bg-white text-primaryTitle"; // Gray background for selected seats

                    return (
                      <React.Fragment key={`seat-${index}`}>
                        <div
                          className={`flex items-center justify-center m-2 w-12 h-12 rounded-md cursor-pointer font-bold ${seatClass}`}
                          onClick={() => handleSeatClick(seat.number)}
                        >
                          {seat.number}
                        </div>
                        {/* Aisle space after every 2 seats */}
                        {/* {(index + 1) % 2 === 0 && <div className="w-[30px] h-1" />} */}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">
            Confirm Booking
          </button> */}
            </div>
            <div className="flex flex-col-reverse md:flex-col items-start space-y-5 md:space-y-4 p-4 ">
              <div className="bg-white rounded-3xl shadow w-80 mt-4 order-1 ">
                <p className="mb-5 text-base text-black mt-4  text-center">
                  سعر الكرسي <span className="text-price">80</span> جنيه مصري
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow  w-80  order-2 md:mb-8  ">
                <p className="mb-5 text-sm text-black mt-4 text-center">
                  تم تحديد كرسي
                </p>
                <div className="grid grid-cols-5 ml-20">
                  <svg
                    className="w-8 h-8 mt-1 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22Z"
                      stroke="#F76570"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.8301 14.8299L9.17008 9.16992"
                      stroke="#F76570"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.17008 14.8299L14.8301 9.16992"
                      stroke="#F76570"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="w-10 h-10 flex items-center justify-center rounded-md text-primaryTitle border border-2 border-primaryTitle">
                    10
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center rounded-md text-primaryTitle border border-2 border-primaryTitle">
                    9
                  </div>
                </div>

                <p className="mb-5 text-lg text-black md:mt-4 text-center font-bold">
                  السعر الإجمالي <br></br>
                  <span className="text-price ">160</span> جنيه مصري
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow p-4 w-80 border md:mt-2 border-price md:order-3 pt-4 ">
                <h5 className="mb-2 md:text-lg font-bold text-primaryTitle text-right">
                  تأكيد الحجز
                </h5>

                <form className="max-w-sm mx-auto">
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      className="text-right rounded-3xl bg-gray text-gray-900 pr-12 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-gray-500 focus:text-price focus:border focus:border-price focus:outline-none focus:bg-white"
                      placeholder="name@email.com"
                    />
                    <span className="absolute right-3 flex items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 20.5H17.5C20.5 20.5 22.5 19 22.5 15.5V8.5C22.5 5 20.5 3.5 17.5 3.5H7.5C4.5 3.5 2.5 5 2.5 8.5V15.5C2.5 19 4.5 20.5 7.5 20.5Z"
                          stroke="#8EC640"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 9L10.63 11.5C11.66 12.32 13.35 12.32 14.38 11.5L17.5 9"
                          stroke="#8EC640"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                    </span>
                  </div>

                  <br />
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      className="text-right rounded-3xl bg-gray text-gray-900 pr-12 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-gray-500 focus:text-price focus:border focus:border-price focus:outline-none focus:bg-white"
                      placeholder="إدخل رقم الهاتف الخاص بك هنا"
                    />
                    <span className="absolute right-3 flex items-center">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z"
                          stroke="#8EC640"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </span>
                  </div>

                  <br />
                  <Link to="/payment">
                    <button
                      type="submit"
                      className="w-full text-white bg-price font-medium rounded-3xl text-lg px-5 py-2.5 text-center"
                    >
                      سجل الان
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default TripDetails;
