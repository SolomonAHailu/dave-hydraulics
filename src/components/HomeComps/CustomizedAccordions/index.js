import * as React from "react";
import { styled } from "@mui/material/styles";
import { FaAngleRight } from "react-icons/fa6";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import accordImg from "../../../assets/accord.png";
import "./index.scss";
import HeroBG from "../../../assets/home-assets/hero-bg.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
    fontSize: "2rem",
    transition: "ease-in-out 0.6s",
  },
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#ecf0f1",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<FaAngleRight sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    color: "#000",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#f8f8f8",
  color: theme.palette.mode === "dark" ? "#fff" : "#333",
  textAlign: "justify",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <img className="bg-shape" src={HeroBG} alt="bg-shape" />

      <div className="image-container">
        <img src={accordImg} alt="" />
      </div>
      <div className="accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            fontSize: "2rem",
          }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                fontSize: "1.8rem",
              }}
            >
              Tailored Services for Projects, Consultancy, and Engaging Lectures
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "1.5rem",
              }}
            >
              We specialize in providing a comprehensive range of services,
              including meticulous project planning, expert consultancy, and
              engaging lectures that delve into the intricacies of hydraulics
              and hydrology. Our dedicated team is well-equipped to assist you
              in every stage of your project, ensuring a thorough and efficient
              approach to meet your specific needs. Whether it's developing
              detailed project plans, offering insightful consultancy services,
              or conducting informative lectures, we are committed to delivering
              excellence in the realms of hydraulics and hydrology.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            fontSize: "2rem",
          }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                fontSize: "1.8rem",
              }}
            >
              Explore a Spectrum of Complimentary Services Tailored to Enhance
              Your Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Feel free to immerse yourself in the diverse range of
              complimentary services that we proudly provide. We believe in
              extending valuable support to our clients, and to avail yourself
              of these free offerings, all you need to do is connect with us
              through our various social media platforms or any other convenient
              means of communication. Our commitment to your satisfaction goes
              beyond the services you engage with, as we are dedicated to
              fostering a relationship that values your needs. Whether you're
              looking for guidance, information, or additional resources, our
              team is ready to assist you with the wealth of free services we
              have on offer. Don't hesitate to reach out, and let us enhance
              your experience with our comprehensive suite of complimentary
              offerings.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            fontSize: "2rem",
          }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                fontSize: "1.8rem",
              }}
            >
              A Commitment to Swift and Attentive Feedback Responses
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Your feedback is of utmost importance to us, and we genuinely
              appreciate it in advance. At our core, we prioritize the value
              your insights bring to our continuous improvement. Rest assured,
              we are committed to delivering a swift response, aiming to address
              your input with the utmost promptness and attentiveness. Your
              thoughts and suggestions play a vital role in shaping our
              services, and we look forward to the opportunity to respond
              promptly and effectively.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
