
import cairoimg from "../Imgs/Cairo.png"
import aswanimg from "../Imgs/Aswan.png"
import sinaimg from "../Imgs/Sinai.png"
import sharmimg from "../Imgs/Sharm.png"
function ExampleofTravels() {
    return (<>
<h1 className="text-right pr-20 text-3xl mt-10 text-price mb-[-50px] font-bold">
بعض من الواجهات الخاصة بنا
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 p-20 " >

            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                <img
                    src={cairoimg}
                    alt="Desert landscape with travelers on camels in Salalah"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <h2 className="text-white text-3xl font-semibold">Cairo</h2>

                </div>
            </div>


            <div className="relative group overflow-hidden rounded-2xl">
                <img
                    src={aswanimg}
                    alt="Beach with camels in Nizwa"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <h2 className="text-white text-2xl font-semibold">Aswan</h2>

                </div>
            </div>


            <div className="relative group overflow-hidden rounded-2xl">
                <img
                    src={sinaimg}
                    alt="Night sky view in Muscat"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <h2 className="text-white text-2xl font-semibold">Sina</h2>

                </div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                <img
                    src={sharmimg}
                    alt="Winding road through green landscape in Sohar"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                    <h2 className="text-white text-2xl font-semibold">Sharm</h2>

                </div>
            </div>
        </div>
        </>);
}
export default ExampleofTravels