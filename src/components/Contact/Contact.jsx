import React from "react"

import ImageSrc from "./assets/about.jpg"
import "./Contact.scss"
import { Social } from "../"

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact__image">
          <img src={ImageSrc} alt="1" />
        </div>
        <div className="contact__header">Contact Us</div>
        <div className="contact__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          distinctio laudantium eum asperiores culpa quibusdam mollitia
          temporibus doloribus labore quasi suscipit itaque omnis architecto et
          aliquam quisquam, laborum soluta nam. Ipsa illo suscipit sequi
          assumenda odio hic, et minus maxime consequatur tenetur debitis, culpa
          reprehenderit reiciendis minima? Quisquam labore doloribus, dicta
          sequi unde exercitationem minus pariatur dolore recusandae nulla
          nesciunt? Accusamus, perspiciatis molestiae facere nobis facilis quasi
          perferendis dolore velit, mollitia dicta consequuntur dolorum rem nemo
          omnis culpa iusto, repellendus repellat sint laboriosam quisquam
          libero recusandae officiis! Ducimus, ipsum sapiente.
        </div>
        <div className="contact__info">
          <ul>
            <p></p>
            <li>
              <strong>Address: </strong>Lorem 7 Str., 364 Rome, Italy
            </li>
            <p></p>
            <li>
              <strong>Phone: </strong>+123456789
            </li>
            <p></p>
            <li>
              <strong>Email: </strong>contact.contact@gmail.com
            </li>
          </ul>
        </div>
        <Social />
      </div>
    </div>
  )
}

export default Contact
