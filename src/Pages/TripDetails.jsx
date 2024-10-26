function TripDetails() {
    return (


        <>

            <div className="flex space-x-5">
                <div className="bg-white rounded-lg shadow p-2 m-5 w-[90%] order-1">
                    <h5 className="mb-2 md:text-4xl font-bold text-secondarybutton text-right ">شرم الشيخ</h5>
                    <p className="mb-5 text-base text-primaryTitle md:mt-4 sm:text-lg text-right">فندق تونس بيراميدز</p>
                </div>
                <div className="bg-primaryTitle rounded-lg shadow p-2 m-5 md:w-[10%] w-[50%] text-2xl">
                    <h5 className="mb-2 md:text-4xl font-bold text-white text-center">80</h5>
                    <p className="mb-5 text-base text-white md:mt-4 sm:text-lg text-center">جنية مصري</p>
                </div>
            </div>

            <div className=" bg-white  rounded-lg shadow p-4 m-5 ">
                <p className="mb-5 text-base text-bodycolor md:mt-4 sm:text-lg  text-right">رحلتي إلى شرم الشيخ كانت تجربة لا تُنسى. بدأت المغامرة بالطيران إلى هذا الجمال الساحر المطل على البحر الأحمر. بمجرد وصولي، استقبلني مناظر الطبيعة الخلابة والشواطئ الرملية البيضاء. استمتعت بالغوص وسط الشعاب المرجانية الملونة ورؤية الأسماك المتنوعة. كما قضيت أوقاتاً رائعة في زيارة السوق المحلي وتجربة المأكولات البحرية الشهية. في المساء، استمتعت بحفلات الشاطئ والأجواء الاحتفالية التي تضفي سحراً خاصاً على المدينة. كانت الرحلة مزيجاً من الاسترخاء والمغامرة، وأتطلع للعودة مرة أخرى.</p>

            </div>

            <div className=" bg-white  rounded-lg shadow p-4 m-5 ">

                <h2 class="mb-2 text-lg font-semibold text-gray-900 text-right">السعر يشمل</h2>
                <div class="flex justify-end">
                    <ul class="max-w-md mr-8 text-gray-500 list-disc list-outside" style={{ direction: 'rtl' }}>
                        <li>الاقامة 3 ايام ليلتين</li>
                        <li>اقامة وافطار</li>
                        <li>الاستمتاع بجميع مزايا الفندق</li>
                    </ul>

                </div>




            </div>

            <div className=" bg-white  rounded-lg shadow p-4 m-5 ">

                <h2 class="mb-2 text-lg font-semibold text-gray-900 text-right">ملاحظات</h2>
                <div class="flex justify-end">
                    <ul class="max-w-md mr-8 text-gray-500 list-disc list-outside" style={{ direction: 'rtl' }}>
                        <li> لاطفال من 6 سنوات حتي 11.99 سنه يتم دفع 50 % من سعر الفرد </li>
                        <li>هذة الاسعار غير  ساريه في الاعياد والمناسبات والاجازات الرسمية</li>
                    </ul>

                </div>


            </div>
            <div className=" bg-white  rounded-lg shadow p-4 m-5 ">
                <h5 className="mb-2 md:text-lg font-bold text-black text-right ">تسجيل البيانات</h5>



                <form class="max-w-sm mx-auto">
                <div class="flex items-center relative">
    <input type="text" id="website-admin" class="text-right rounded-3xl border border-gray-300 text-gray-900 pr-12 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="email@email.com" />
    <span class="absolute right-3 flex items-center">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 20.5H17.5C20.5 20.5 22.5 19 22.5 15.5V8.5C22.5 5 20.5 3.5 17.5 3.5H7.5C4.5 3.5 2.5 5 2.5 8.5V15.5C2.5 19 4.5 20.5 7.5 20.5Z" stroke="#8EC640" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 9L10.63 11.5C11.66 12.32 13.35 12.32 14.38 11.5L17.5 9" stroke="#8EC640" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </span>
</div>

                    <br></br>
                    <div class="flex items-center relative">
    <input type="text" id="website-admin" class="text-right rounded-3xl border border-gray-300 text-gray-900 pr-12 block flex-1 min-w-0 w-full text-sm p-2.5 text-form" placeholder="إدخل رقم الهاتف الخاص بك هنا" />
    <span class="absolute right-3 flex items-center">
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z" stroke="#8EC640" stroke-width="1.5" stroke-miterlimit="10" />
                            </svg>
    </span>
</div>
<br></br>
<button type="submit" class=" w-full text-white bg-primaryTitle  font-medium rounded-3xl  text-lg px-5 py-2.5 text-center">سجل الان</button>

                </form>


            </div>
<br></br>
<br></br>
<br></br>
        </>
    );
}
export default TripDetails