import React, { useState } from "react";
import "./Test2.css"


function AccordionItem({ Garchig, text }) {
  const [Show, setShow] = useState(false);

  const toggle = () => {
    setShow(!Show);
  };

  return (
    <div className="accordion">
      <button className="accordionBtn" onClick={toggle}>
        {Show ? '-' : '+'} {Garchig}
      </button>
      {Show && <div className="accordion-content">{text}</div>}
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion-Items">
        <h1>React Accordion</h1>
        <div className='Accordion-texts'>
      <AccordionItem
        Garchig="What is Lorem Ipsum?"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <AccordionItem
        Garchig="Where does it come from"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
      <AccordionItem
        Garchig="Why do we use it"
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <AccordionItem
        Garchig="Where can i get some"
        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      
      </div>
    </div>
  );
}

export default Accordion;