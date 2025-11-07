import React, { useRef, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Frontend() {
  const nameRef = useRef();
  const amountRef = useRef();
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    const name = nameRef.current.value;
    const amount = amountRef.current.value;

    if (name == "" || amount == "") {
      alert("Please fill both fields");

    } else {

      setExpenses([...expenses, { id:Date.now(), name, amount }]);
      nameRef.current.value = "";
      amountRef.current.value = "";
    }
    
  };
// delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses?.filter(item=>item.id !=id));
  };
// total expense
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="row" >
      <div className='col-md-2' ></div>

      <div className="col-md-8 text-center  mt-5 border rounded-4 p-5 shadow">
        <h2>Expense Tracker</h2>

        <div className="d-flex justify-content-center  mt-3">
          <input ref={nameRef} placeholder="Expense Name" className="form-control me-2" style={{ width: "40%" }} />
          <input ref={amountRef} placeholder="Amount" className="form-control me-2" style={{ width: "15%" }} />
        </div>
        <button style={{ marginLeft: "47%" }} onClick={addExpense} className="btn btn-primary mt-3 mb-3">Add</button>


        <div>
          {
            expenses.map((exp) => (
              <div className="border rounded ">
                <button className="btn  my-2 fw-bold fs-5 px-5 py-2">{exp.name}:₹{exp.amount}</button>
                <RiDeleteBin5Fill className="text-danger ms-3 fs-3" onClick={() => deleteExpense(exp.id)} />
              </div>
            ))}
          <div className=" d-flex align-items-center justify-content-evenly">
            <h4 className="mt-4 ">Expenses</h4>
            <h4 className="mt-4 ">Total: ₹{total}</h4>


          </div>
        </div>
      </div>
      <div className='col-md-2' ></div>

    </div>
  );
}

export default Frontend;
