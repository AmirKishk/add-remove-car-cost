import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleNameChange = function (event) {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = function (event) {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    dispatch(addCar({ name, cost }));

    // disptach(changeCost(0));
    // disptach(changeName(""));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>

        <div className="field">
          <button className="butoon is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
