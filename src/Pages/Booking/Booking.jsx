import toast, { Toaster } from "react-hot-toast";

const Booking = () => {
    const handleAddToBuy = () => {
        toast.success("Thanks For Buy Ticket")
    }
    return (
        <div className="lg:h-screen  justify-center items-center">
            <div className="lg:h-[80vh] flex justify-center items-center">
                <div className="flex-1 mr-2 ml-6">
                    <img className="w-full h-96" src="../../../public/1.jpg" alt="" />
                </div>
                <div className="flex-1 ml-2">
                    <h1 className="text-5xl font-bold">World of Business Opportunities Management</h1>
                    <p className="text-5xl font-bold mt-4">$100</p>
                    <p className="text-xl mt-4">
                        World of Business Opportunities Management offers a comprehensive approach to identifying, evaluating, and seizing opportunities, fostering innovation, and achieving sustainable growth in today's dynamic and competitive business landscape.
                    </p>
                    <button onClick={handleAddToBuy} className="btn px-4 py-2 bg-blue-600 text-white mt-4">Buy The Ticket</button>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Booking;