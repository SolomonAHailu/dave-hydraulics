import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiMailOpen } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import {
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";
import "./index.scss";
import { Button, Tooltip, Fade, Box, Modal } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const style = {
  display: "flex",
  flexDirection: "column",
  // alignItems: "flex-start",
  justifyContent: "space-between",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 300,
  borderRadius: 10,
  padding: "5rem",
  zIndex: 100,
};

function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>
                Got <span>something</span> to share? We're listening!
              </h2>
              <p>
                An innovative company with a mission to impact millions globally
                by providing education to individuals worldwide through various
                platforms. Additionally, the company offers hydraulic and
                hydrological solutions to meet the needs of those seeking
                essential services.
              </p>
              <a href="/">
                <BsFillTelephoneFill /> &nbsp; (+251) 993 - 704 - 033
              </a>
              <a href="/">
                <GrMail /> &nbsp; dawit.asregedew2007@gmail.com
              </a>
              <a href="/">
                <ImLocation />
                &nbsp; Addis Ababa, Ethiopia
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Alex Dave"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="example@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Your Message Here.."></textarea>

                <button type="submit">
                  <HiMailOpen />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-banner">
          <div className="left">
            <Button onClick={handleOpen} variant="contained">
              Donate
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box className="modal-content" sx={{ ...style }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 id="child-modal-title" className="modal__title">
                    Thanks for donating!
                  </h2>
                  <p id="child-modal-description" className="modal__body">
                    You're almost there! Please proceed to your PayPal account
                    to complete the remaining steps. Thank you!
                  </p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    title="Proceed"
                    arrow
                    placement="top"
                    disableFocusListener
                    disableInteractive
                  >
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="success"
                    >
                      Proceed
                    </Button>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                    title="Cancel"
                    arrow
                    placement="top"
                    disableFocusListener
                    disableInteractive
                  >
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="error"
                    >
                      Cancel
                    </Button>
                  </Tooltip>
                </Box>
              </Box>
            </Modal>
          </div>
          <div className="right">
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="YouTube"
              arrow
            >
              <span>
                <FaYoutube />
              </span>
            </Tooltip>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Telegram"
              arrow
            >
              <span>
                <FaTelegramPlane />
              </span>
            </Tooltip>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Instagram"
              arrow
            >
              <span>
                <FaInstagramSquare />
              </span>
            </Tooltip>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Facebook"
              arrow
            >
              <span>
                <FaFacebookF />
              </span>
            </Tooltip>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
