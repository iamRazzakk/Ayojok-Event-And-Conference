import moment from 'moment';

const OurServices = () => {
    const formattedDate = moment().format('h:mm:ss a');
    return (
        <div className="grid lg:grid-cols-2 mt-12">
            <div className=" ml-16">
                <img src="../about-1 (1).png" alt="" />
            </div>
            <div className="lg:mt-20">
                <h1 className="text-5xl mb-4 text-blue-600">Welcome!</h1>
                <p className='text-xl'>Motivisional Speach can change your Business.</p>
                <h1 className="font-bold mt-4 text-gray-500">Victoria Carlson / Jonathan Martin </h1>
                <p className="font-bold text-blue-600 underline mt-4">Hosts Of this Program.
                </p>
                <div className="w-[80%]">
                    <p className="font-sm mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <p className="font-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                </div>
                <div className='mt-4'>
                    <p className='text-7xl text-blue-600'>{formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;