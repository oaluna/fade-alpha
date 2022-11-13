import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Navbar from "../Header/Navbar";
import "./search.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import API from "../../API";

const BookingPool = () => {
  const history = useHistory();
  const [PoolDetails, setPoolDetails] = useState(history.location.state);
  const [passenger, setPassenger] = useState(
    history.location.state.formData.passengerNeeded
  );

  useEffect(() => {
    const getPublisherDetails = async () => {
      const { data } = await API.get("user/register");
      data.filter((user) => {
        if (user.email === PoolDetails.email) {
          setPublisherId(user._id);
        }
      });
    };
    getPublisherDetails();
  }, []);

  const [emailSender, setEmailSender] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [publisherId, setPublisherId] = useState("");

  const [formData, setFormData] = useState({
    goingfrom: PoolDetails.goingfrom,
    goingto: PoolDetails.goingto,
    passenger: passenger,
    PoolStatus: PoolDetails.status,
    PoolDate: PoolDetails.date,
    requestStatus: "Pending",
    bookerEmail: emailSender.email,
    // publisherId: publisherUserId,
    bookerId: emailSender._id,
    PoolId: PoolDetails.publishPoolId,
  });

  const handlePoolBooking = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("requestPool", {
        goingfrom: formData.goingfrom,
        goingto: formData.goingto,
        passenger: formData.passenger,
        PoolStatus: formData.PoolStatus,
        bookingDate: formData.PoolDate,
        requestStatus: formData.requestStatus,
        bookerEmail: formData.bookerEmail,
        publisherId: publisherId,
        bookerId: formData.bookerId,
        PoolId: formData.PoolId,
      });
      addBookerToConversation();
      toast.success(data);
      history.push("/user-dashboard/messaging");
    } catch (err) {
      console.log(err);
    }
  };

  const addBookerToConversation = async (e) => {
    await API.post("conversations", {
      senderId: emailSender._id,
      receiverId: publisherId,
    });
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="contact">
            <div className=" contactCol1">
              <h1>Subscribe to Pool</h1>
              <p>
                Send a request to this Pool's driver to subscribe to this route.
              </p>
            </div>
            <div className=" contactCol2">
              {/* Form */}
              <form onSubmit={(e) => handlePoolBooking(e)}>
                <div className="row inputs">
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="publisher email" className="form-label">
                      From:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="goingfrom"
                      onChange={(e) =>
                        setFormData({ ...formData, goingfrom: e.target.value })
                      }
                      value={formData.goingfrom}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      To:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="goingto"
                      onChange={(e) =>
                        setFormData({ ...formData, goingto: e.target.value })
                      }
                      value={formData.goingto}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      passengers
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="passenger"
                      onChange={(e) => setPassenger(e.target.value)}
                      value={passenger}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <label htmlFor="sender email" className="form-label">
                      Pool Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="PoolStatus"
                      onChange={(e) =>
                        setFormData({ ...formData, PoolStatus: e.target.value })
                      }
                      value={formData.PoolStatus}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label htmlFor="Subject" className="form-label">
                      Pool booking Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bookingDate"
                      onChange={(e) =>
                        setFormData({ ...formData, PoolDate: e.target.value })
                      }
                      value={formData.PoolDate}
                    />
                  </div>
                  <div className="col-12 col-lg-12 mb-4">
                    <label htmlFor="Subject" className="form-label">
                      Your email (Your email must be an email that you used for
                      registration)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="bookerEmail"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bookerEmail: e.target.value,
                        })
                      }
                      value={formData.bookerEmail}
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Pool publisher ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="publisherId"
                      onChange={(e) => console.log("Cannot change this field")}
                      value={publisherId}
                      disabled
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Pool Booker ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bookerId"
                      onChange={(e) => console.log("Cannot change this field")}
                      value={formData.bookerId}
                      disabled
                    />
                  </div>
                  <div className="col-12 col-lg-4 mb-4">
                    <label htmlFor="publisher id" className="form-label">
                      Pool ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="PoolId"
                      onChange={(e) => console.log("Can't change id")}
                      value={formData.PoolId}
                      disabled
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary primaryBtn"
                    >
                      Book Pool
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary primaryBtn"
                    >
                      Click to Send Mail to publisher
                    </button>
                  </div>
                  <Link to="/" className="mt-4">
                    <p>
                      <BsArrowLeft /> Go back to Home page
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BookingPool;
