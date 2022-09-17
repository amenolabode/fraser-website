import React, { useState } from "react";
import "./../styles/Waitlist.css";
import IMAGE from "./../images/Homepage.png";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const Waitlist = () => {
  const [modal, openModal] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="logo-container">
            <div className="logo-wrapper">
              <h1 className="logo">Fraser</h1>
            </div>
          </div>
          <div className="waitlist-text">
            <h1 className="header-text">
              Move freely <br /> <span className="cities">between cities.</span>
            </h1>
            <p className="subtitle-text">
              {" "}
              Do you want to travel between cities comfortably, conveniently and
              affordably, use Fraser.
            </p>
          </div>
          <div class="Patterns-dots Landing-dots Patterns_animatedIn__2wrQM">
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Modal */}
          <div>
            <Modal className="form-modal" size="lg" isOpen={modal} toggle={() => openModal(!modal)}>
              <ModalHeader toggle={() => openModal(!modal)}>
                Fill the form
              </ModalHeader>
              <ModalBody>
                <form>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <label htmlFor="name">
                                    First name
                                </label>
                                <input type="text" className="form-control" placeholder="Enter your firstname"/>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <label htmlFor="name">
                                    Last name
                                </label>
                                <input type="text" className="form-control" placeholder="Enter your last/surname"/>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
                        </Col>
                    </Row>
                </form>
                <button
            className="modal-button Button"
            onClick={() => {
              openModal(true);
            }}
          >
            Join Waitlist
          </button>
              </ModalBody>
            </Modal>

            {/* Button */}
          </div>
          <button
            className="Button"
            onClick={() => {
              openModal(true);
            }}
          >
            Get Early Access
          </button>
          <div className="image-container">
            <div className="image-bg-left">
              <div className="image-bg">
                <img className="homepage" src={IMAGE} alt="" />
              </div>
            </div>
          </div>
          {/* <Form /> */}
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
