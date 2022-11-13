import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../../style/publishPoolForm.css";
import { toast } from "react-toastify";
import API from "../../API";

const PulishPoolFormCard = () => {
  const [loginUser, setLoginUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [passenger, setpassenger] = useState(0);
  const [goingfrom, setGoingfrom] = useState("");
  const [goingto, setGoingto] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState(loginUser.fullName);
  const [email, setEmail] = useState(loginUser.email);
  const [status, setStatus] = useState("Inactive");
  const [phone, setPhone] = useState(undefined);

  const plus = () => {
    setpassenger(passenger + 1);
  };
  const minus = () => {
    setpassenger(passenger - 1);
  };

  const handleChange = (e) => {
    if (e.target.name === "goingfrom") {
      setGoingfrom(e.target.value);
    } else if (e.target.name === "goingto") {
      setGoingto(e.target.value);
    }
  };

  // when someone click on publish Pool button
  const publishPoolHandle = async (e) => {
    e.preventDefault();
    // axios post request
    try {
      const { data } = await API.post("publishPool", {
        goingfrom: goingfrom,
        goingto: goingto,
        name: name,
        email: email,
        phone: phone,
        status: status,
        passenger: passenger,
        date: date,
      });
      if (data) {
        toast.success("Your Pool published successfully...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div data-aos="fade-left" data-aos-duration="1200">
      <h1 className="text-center my-5">Publish Your Pool</h1>
      <form onSubmit={(e) => publishPoolHandle(e)}>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going from..."
            name="goingfrom"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Going to..."
            name="goingto"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name..."
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email Address..."
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-4 input-group">
          <input
            type="number"
            className="form-control"
            placeholder="Your Phone Number..."
            name="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <label htmlFor="status" className="">
          Your Pool's status must be approved by an Admin.
        </label>
        <div className="mb-4 input-group">
          <select
            type="text"
            className="form-control"
            placeholder="Select Pool status..."
            name="select"
            disabled
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="row">
          <div className="passenger-needed my-4 col-7">
            <span className="me-3">Passenger Needed:</span>
            <AiOutlinePlusCircle className="icon me-3" onClick={plus} />
            <span className="me-3">{passenger}</span>
            <AiOutlineMinusCircle className="me-3 icon" onClick={minus} />
          </div>
          <div className="date col-5 mt-2">
            <input
              type="date"
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary primaryBtn">
          Publish Pool
        </button>
      </form>
    </div>
  );
};

export default PulishPoolFormCard;
