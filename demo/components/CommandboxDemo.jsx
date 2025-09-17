import React, { useState, useEffect, useRef } from 'react';
import CommandBox from '../../library/components/Commandbox/CommandBox';
import CommandButton from '../../library/components/Commandbox/CommandButton';
import CommandPanel from '../../library/components/Commandbox/CommandPanel';
import CommandInput from '../../library/components/Commandbox/CommandInput';
import CommandAction from '../../library/components/Commandbox/CommandAction';
import Separator from '../../library/components/Separator';
import CommandItem from '../../library/components/Commandbox/CommandItem';

function CommandboxDemo() {

  const [openPanel, setOpenPanel] =useState(false);
  const [query, setQuery] = useState("");
  const comboboxRef = useRef(null);
  
      useEffect (() => {function handleClickOutside(event) {
        if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
          setOpenPanel(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []); 

  const [projects] = useState([
    { id: 1, name: "OutR" },
    { id: 2, name: "Codelearn" },
    { id: 3, name: "Nutbolt" },
    { id: 4, name: "StoreGrid" },
  ]);

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={comboboxRef}>
    <CommandBox className="w-48 relative">
      <CommandButton onClick={()=>setOpenPanel(!openPanel)} className="bg-black text-sm text-white">
        Projects
      </CommandButton>

      {openPanel && (  
      <CommandPanel className='absolute w-48 border bg-black border-white/10 left-0 top-full mt-1'>
        <div className="px-3 pt-6 pb-3">
          <CommandInput
            className="text-white bg-black h-8 text-xs w-full"
            placeholder="Search your project"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Separator className="border-white/10 my-2" />

        <div className="px-1 py-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <CommandItem
                key={project.id}
                className="text-sm p-3 h-8 flex items-center justify-start text-white hover:bg-white/10 rounded cursor-pointer"
              >
                {project.name}
              </CommandItem>
            ))
          ) : (
            <p className="text-xs text-white/50 p-3">No projects found</p>
          )}
        </div>

        <Separator className="border-white/10 my-2" />

        <div className='px-1 pb-3'>
        <CommandAction className="p-3 text-sm flex flex-row justify-start w-full hover:bg-white/10 border-none cursor-pointer">
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 16H12.4737C13.5783 16 14.4737 15.1046 14.4737 14V9.68421V6.52631V5.36869C14.4737 4.26428 13.5785 3.36891 12.4741 3.36869L11.1053 3.36842H7.73684H3C1.89543 3.36842 1 4.26385 1 5.36842V14C1 15.1046 1.89543 16 3 16Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M4.36842 12.6316H7.73684" stroke="white" strokeLinecap="round" />
            <path
              d="M10.2632 2.94737V2.94737C10.2632 1.51474 8.83962 0.51765 7.49324 1.00724L3.37422 2.50507C1.94884 3.02339 1 4.37805 1 5.89474V5.89474"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          Create New Project
        </CommandAction>
        </div>
        
      </CommandPanel>
      )}
      
    </CommandBox>
    </div>
  );
}

export default CommandboxDemo;
