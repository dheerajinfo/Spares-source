import React, { useState } from "react";
import Accordion from "../../library/components/Accordion/Accordion";
import AccordionItem from "../../library/components/Accordion/AccordionItem";
import AccordionButton from "../../library/components/Accordion/AccordionButton";
import AccordionContent from "../../library/components/Accordion/AccordionContent";

function AccordionDemo() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Accordion className="max-w-full box-border py-6 px-4 rounded-4 m-0 border-none bg-black text-white space-y-2">

      <AccordionItem className="p-0 m-0">
        <AccordionButton className="py-8 h-8 w-full" iconColor="white"
          onClick={() => toggleItem(0)}
          isOpen={openItem === 0}
        >
          Lorem ipsum dolor sit
        </AccordionButton>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 0 ? "max-h-96" : "max-h-0"
          }`}
        >
          <AccordionContent className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            consectetur, magnam harum, id obcaecati vitae inventore temporibus
            quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
            voluptas consequatur.
          </AccordionContent>
        </div>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton className="py-8 h-8 w-full" iconColor="white"
          onClick={() => toggleItem(1)}
          isOpen={openItem === 1}
        >
          Lorem ipsum dolor
        </AccordionButton>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 1 ? "max-h-96" : "max-h-0"
          }`}
        >
          <AccordionContent className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            consectetur, magnam harum, id obcaecati vitae inventore temporibus
            quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
            voluptas consequatur.
          </AccordionContent>
        </div>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton className="py-8 h-8 w-full" iconColor="white"
          onClick={() => toggleItem(2)}
          isOpen={openItem === 2}
        >
          Lorem amet ipsum 
        </AccordionButton>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openItem === 2 ? "max-h-96" : "max-h-0"
          }`}
        >
          <AccordionContent className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            consectetur, magnam harum, id obcaecati vitae inventore temporibus
            quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
            voluptas consequatur.
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionDemo;
