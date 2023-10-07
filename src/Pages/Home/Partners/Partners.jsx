import { useEffect, useState } from "react";


const Partners = () => {
    const [partner, setPartner] = useState([])
    useEffect(() => {
        fetch('/Partners.json')
            .then(res => res.json())
            .then(data => setPartner(data))
    }, [])
    return (
        <div className="mb-12">
            <div className="mb-12 text-center">
                <h1 className="text-7xl font-bold  underline mb-6 ">Eventpro Partners</h1>
                <p className="text-xl w-[50%] mx-auto">Proudly supported by our valued sponsors who make our event possible. Thank you for your generous contributions and commitment to excellence.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {partner?.map((sponsor) => (
                    <div key={sponsor.id} className="flex flex-col items-center">
                        <img src={sponsor.imgUrl} alt={sponsor.name} className="max-w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;