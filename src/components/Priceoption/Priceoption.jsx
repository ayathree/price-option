import Price from "../Price/Price";


const Priceoption = () => {
    const gymPrices = [
        {
          id: 1,
          price: 50,
          feature: ["Basic access"],
          name: "Basic Plan"
        },
        {
          id: 2,
          price: 80,
          feature: ["Access to gym", "Classes"],
          name: "Standard Plan"
        },
        {
          id: 3,
          price: 120,
          feature: ["Access to gym", "Classes", "Personal trainer session"],
          name: "Premium Plan"
        },
        {
          id: 4,
          price: 150,
          feature: ["Access to gym", "Classes", "Personal trainer", "Nutritionist session"],
          name: "Ultimate Plan"
        },
        {
          id: 5,
          price: 200,
          feature: ["Access to gym", "Classes", "Personal trainer", "Nutritionist", "Spa session"],
          name: "Luxury Plan"
        }
      ];
      
    return (
        <div >
           <h2 className="text-3xl font-semibold text-rose-500">Best price in the town</h2> 
          <div className="grid grid-cols-3 gap-6">
          {
            gymPrices.map(gymPrice=><Price key={gymPrice.id}
            option={gymPrice}></Price>)
           }
          </div>
        </div>
    );
};

export default Priceoption;