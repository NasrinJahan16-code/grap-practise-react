import PriceOpt from "../PriceOpt/PriceOpt";

const PriceOption = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 free personal training session"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group classes",
            "2 free personal training sessions",
            "Access to sauna"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 69.99,
          "features": [
            "24/7 gym access",
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group classes",
            "5 free personal training sessions",
            "Access to sauna and steam room",
            "Free guest pass (once per month)"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": 99.99,
          "features": [
            "24/7 gym access",
            "Access to gym equipment",
            "Priority locker room access",
            "Unlimited group and specialty classes",
            "Unlimited personal training sessions",
            "Access to VIP sauna, steam room, and pool",
            "Free guest pass (unlimited)",
            "Monthly nutrition consultation"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl text-center mb-4">Best Price in the town</h2>
       <div className="grid md:grid-cols-4 gap-40">
       {
            priceOptions.map (option => <PriceOpt key ={option.id} option
            ={option}> </PriceOpt>)
        }
       </div>
        </div>
    );
};

export default PriceOption;