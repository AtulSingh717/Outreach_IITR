import React from "react";
import "./Footer.css";
import facebook from "./Assets/facebook.svg";
import linkedin from "./Assets/linkedin.svg";
import outreach_logo from "./Assets/outreach_logo.svg";
import quora from "./Assets/quora.svg";
import youtube from "./Assets/youtube.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <div className="section-one">
          <div className="flex-item-left quick-links-div">
            <h3 id="footer-quick-links">Quick&#160;Links</h3>
            <ul className="footer-column">
              <li className="footer-column-item">
                <a href="https://iitr.ac.in/" className="footer-item">
                  IITR Official Page
                </a>
              </li>
              <li className="footer-column-item">
                <a href="https://acad.iitr.ac.in/" className="footer-item">
                  ACADS
                </a>
              </li>
              <li className="footer-column-item">
                <a href="https://scsp.iitr.ac.in/" className="footer-item">
                  SCHOLARSHIPS
                </a>
              </li>
              <li className="footer-column-item">
                <a
                  href="https://www.iitr.ac.in/departments/DM/pages/Activities+Annual_Events.html"
                  className="footer-item"
                >
                  Annual Events
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-item-left academics-div">
            <h3 id="footer-academics">Academics</h3>
            <ul className="footer-column">
              <li className="footer-column-item">
                <a href="/academics/#Scholarships" className="footer-item">
                  Scholarships
                </a>
              </li>
              <li className="footer-column-item">
                <a
                  href="/academics/#Departments_heading"
                  className="footer-item"
                >
                  Departments
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/academics/#minors" className="footer-item">
                  Minors and Honors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-two">
          <div className="flex-item-left life-div">
            <h3 id="footer-life">Life&#160;at&#160;IIT&#160;R</h3>
            <ul className="footer-column">
              <li className="footer-column-item">
                <a href="/lifeatiitr/#Events" className="footer-item">
                  Events
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/lifeatiitr/#CampusGroups" className="footer-item">
                  Campus Groups
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/lifeatiitr/#InsideCampus" className="footer-item">
                  Inside Campus
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/lifeatiitr/#OutsideCampus" className="footer-item">
                  Outside Campus
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-item-left about-us-div">
            <h3 id="footer-about-us">About&#160;Us</h3>
            <ul className="footer-column">
              <li className="footer-column-item">
                <a href="/about/#AboutOutreach" className="footer-item">
                  About Outreach
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/about/#AboutIITR" className="footer-item">
                  About IIT Roorkee
                </a>
              </li>
              <li className="footer-column-item">
                <a href="/about/#OurTeam" className="footer-item">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-three">
          <div className="right-section">
            <img alt="img" id="outreach_logo" src={outreach_logo} />
            <div className="icons icons-mobile-view">
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={facebook} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={quora} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={linkedin} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={youtube} />
              </a>
            </div>
            <p className="footer-right-text">
              <br />
              +91&#160;0123456789
              <br />
              <br />
              outreach@iitr.ac.in
              <br />
              <br />
              SAC Building, IIT Roorkee,
              <br />
              Roorkee, Uttrakhand, India - 247667
            </p>
            <div className="icons icons-desktop-view">
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={facebook} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={quora} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={linkedin} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img alt="img" src={youtube} />
              </a>
            </div>
            <p className="footer-right-text" id="copy-right">
              <br />
              2021 Copyright, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
