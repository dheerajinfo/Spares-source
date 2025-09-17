import React, { useState } from 'react';
import Frame from "../../library/layouts/Frame";
import Split from "../../library/layouts/Split";
import Stack from "../../library/layouts/Stack";
import Accordion from '../../library/components/Accordion/Accordion';
import AccordionItem from '../../library/components/Accordion/AccordionItem';
import AccordionButton from '../../library/components/Accordion/AccordionButton';
import AccordionContent from '../../library/components/Accordion/AccordionContent';

function FeaturesDemo() {
    const [openItem, setOpenItem] = useState(null);
  
    const toggleItem = (index) => {
      setOpenItem(openItem === index ? null : index);
    };
  return (
    <Split cols={2} className="text-white gap-8 w-full lg:h-fit py-24">
        <Stack className="gap-3">
          <div className='flex flex-col gap-3 lg:mb-20'>
            <h6 className='text-sm'>LOREM IPSUM</h6>
            <h1 className='text-3xl'>Lorem ipsum dolor</h1>
          </div>
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
                <AccordionItem>
                    <AccordionButton className='py-4 h-8 w-full px-1 text-base' iconColor="white"
                    onClick={() => toggleItem(3)}
                    isOpen={openItem === 3}
                    >
                    Lorem ipsum dolor sit amet
                    </AccordionButton>
                    <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItem === 3 ? "max-h-96" : "max-h-0"
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
                    onClick={() => toggleItem(4)}
                    isOpen={openItem === 4}
                    >
                    Lorem ipsum dolor sit amet
                    </AccordionButton>
                    <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItem === 4 ? "max-h-96" : "max-h-0"
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
        <div className='flex items-start justify-center'>
          <Frame ratio={1/1} className="bg-white/60 rounded-8 w-96" /> 
        </div> 
    </Split>
  )
}

export default FeaturesDemo;
