import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { mars, searchTerm } }) => {
    const filteredCars = mars.filter((mar) => {
      return mar.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;

    return filteredCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
