import React from "react";
import "./Published.css";

const Published = () => {
  return (
    <>
      <div className="Published-uel">
        <h5>NICE PROJECT? GET IN TOUCH! WILL CONTACT YOU SOON</h5>
        <div class="contact-form-area">
          <div class="form-wrap box--shadow">
            <h4 class="title-25 contact-form-title mb-8">Get In Touch</h4>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form class="contact-form-title">
              <div class="Publish-row">
                <div class="col-md-6">
                  <div class="form-inner contact-input ">
                    <label>Your Name</label>
                    <input type="text" name="fname" placeholder="Your name" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-inner contact-input ">
                    <label>Email</label>
                    <input type="text" name="fname" placeholder="Your Email" />
                  </div>
                </div>
                <div class="col-12 mb-40">
                  <div class="form-inner contact-input">
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 pb-3">
                  <a href="#" class="primary--btn contact-btn">
                    Send Message
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
   



    </>
  );
};

export default Published;
