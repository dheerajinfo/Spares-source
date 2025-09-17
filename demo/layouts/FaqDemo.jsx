import React, { useState } from 'react';
import Accordion from "../../library/components/Accordion/Accordion";
import AccordionItem from "../../library/components/Accordion/AccordionItem";
import AccordionButton from "../../library/components/Accordion/AccordionButton";
import AccordionContent from "../../library/components/Accordion/AccordionContent";
import Stack from '../../library/layouts/Stack';

function FaqDemo() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
    };

  return (
        <Stack className='w-full py-24'>
            <h3 className='text-white text-3xl mb-4'>Frequently Asked Questions</h3>
            <Accordion className="w-full py-6 text-white space-y-2">
                <AccordionItem>
                    <AccordionButton className='py-4 h-8 w-full px-1 text-base' iconColor="white"
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
                    <AccordionContent className="py-4 w-full px-1 text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                        consectetur, magnam harum, id obcaecati vitae inventore temporibus
                        quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
                        voluptas consequatur.
                    </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton className='py-4 h-8 w-full px-1 text-base' iconColor="white"
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
                    <AccordionContent className="py-4 w-full px-1 text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                        consectetur, magnam harum, id obcaecati vitae inventore temporibus
                        quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
                        voluptas consequatur.
                    </AccordionContent>
                    </div>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton className='py-4 h-8 w-full px-1 text-base' iconColor="white"
                    onClick={() => toggleItem(2)}
                    isOpen={openItem === 2}
                    >
                    Lorem ipsum dolor sit amet
                    </AccordionButton>
                    <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItem === 2 ? "max-h-96" : "max-h-0"
                    }`}
                    >
                    <AccordionContent className="py-4 w-full px-1 text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                        consectetur, magnam harum, id obcaecati vitae inventore temporibus
                        quod corporis aperiam nobis repudiandae in maxime. A est quasi velit
                        voluptas consequatur.
                    </AccordionContent>
                    </div>
                </AccordionItem>
            </Accordion>
        </Stack>
  )
}

export default FaqDemo;

