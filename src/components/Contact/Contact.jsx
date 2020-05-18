import React from "react"

import "./Contact.scss"
import { Social } from "../"

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact__image">
          <img
            src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/26158447_1756416054382064_4075349576452669440_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=NX1FFia_8n8AX-GxfsG&oh=039d6ec571a8487e9a1a8516f9ac98e3&oe=5EE2976A"
            alt="1"
          />
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
