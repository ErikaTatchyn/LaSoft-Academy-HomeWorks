import React from "react";
import DescriptionText from "../components/DescriptionText";
import MainTitle from "../components/MainTitle";

export default function About() {
  return (
    <main>
      <div className="about-container">
        <MainTitle text="Who we are?" />
        <DescriptionText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu sollicitudin massa senectus eu diam pharetra. Sit nisl quisque eget arcu cursus scelerisque. Aliquam et urna tellus blandit sit nulla nec. Ultricies sapien sit lorem aliquet. Phasellus enim feugiat sed parturient elementum varius ut in vel. Neque egestas magna sed orci, consequat. Sit magnis nunc consequat id proin tortor egestas arcu ac. At faucibus leo et, nisi, sollicitudin. Malesuada sagittis massa, viverra tempor etiam hendrerit eget amet. Odio magna ultrices diam, facilisis. Habitant diam eros molestie pretium.
        Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat orci tristique. Sit eleifend donec bibendum sed fermentum. Amet, sagittis, libero, at nullam vestibulum. Fusce et sit maecenas urna orci felis sodales. Dignissim aliquam at id duis gravida. Nunc sit arcu lectus lorem libero vel vitae adipiscing amet. In cras sed tristique nisl, amet accumsan urna quis. Condimentum laoreet a convallis sit pellentesque laoreet at fringilla. Porttitor ut mi nec cras. Nunc, sit non ipsum aliquam enim. Blandit dictum nunc duis ac faucibus neque feugiat vitae. Quis ac malesuada pulvinar ac cras mollis dictum ullamcorper pretium. Pellentesque ac nunc, eu fermentum erat nunc vel natoque volutpat.
        Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut massa, praesent viverra integer massa justo. Vitae pellentesque quis sit neque. Facilisis aliquam dolor habitant commodo ultricies. Lacus pellentesque ultricies viverra curabitur at fermentum tincidunt aliquet. Mi congue sed turpis ligula egestas odio tincidunt libero vitae. Amet pellentesque aliquam quam viverra proin urna vitae egestas turpis. Enim, dictum nisl, dictum sed velit. Aliquam dignissim orci auctor ipsum ac ultrices at. Et, nisl, egestas id eget. Nisl diam et scelerisque at consectetur."
        />
      </div>
      <div className="contacts-container">
        <img src="./img/map.jpg" alt="map" />
        <p className="address">2464 Royal Ln. Mesa, New Jersey 45463</p>
        <p className="phone">(208) 555-0112</p>
        <ul className="socials">
          <li className="footer-social">
            <a href="" className="footer-social-link link">
              <svg className="team-social-svg">
                <use href="./images/svg/symbol-defs.svg#icon-instagram-2"></use>
              </svg>
            </a>
          </li>
          <li className="footer-social">
            <a href="" className="footer-social-link link">
              <svg className="team-social-svg">
                <use href="./images/svg/symbol-defs.svg#icon-twitter-1"></use>
              </svg>
            </a>
          </li>
          <li className="footer-social">
            <a href="" className="footer-social-link link">
              <svg className="team-social-svg">
                <use href="./images/svg/symbol-defs.svg#icon-facebook-1"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
