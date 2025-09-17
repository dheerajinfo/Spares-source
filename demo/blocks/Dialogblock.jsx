import React, { useState, useRef, useEffect } from 'react';
import Box from '../../library/layouts/Box';
import Tabs from '../../library/components/Tabs/Tabs';
import TabsNav from '../../library/components/Tabs/TabsNav';
import TabName from '../../library/components/Tabs/TabName';
import TabContent from '../../library/components/Tabs/TabContent';
import Input from '../../library/components/Input/Input';
import InputLabel from '../../library/components/Input/InputLabel';
import InputForm from '../../library/components/Input/InputForm';
import Select from '../../library/components/Select/Select';
import SelectPanel from '../../library/components/Select/SelectPanel';
import SelectPlaceholder from '../../library/components/Select/SelectPlaceholder';
import SelectItem from '../../library/components/Select/SelectItem';
import RadioItem from '../../library/components/Radio/RadioItem';
import RadioButton from '../../library/components/Radio/RadioButton';
import RadioLabel from '../../library/components/Radio/RadioLabel';
import Button from '../../library/components/Button';


function Dialogblock() {
  const [openPanel, setOpenPanel] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const [tabIndex, setTabIndex] = useState(0);
  const [selected, setSelected] = useState('');  
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpenPanel(false);
  };

  const handleCountry = (value) => {
    setSelectedCountry(value);
    setOpenCountry(false);
  };
  
  const handleCity = (value) => {
    setSelectedCity(value);
    setOpenCity(false);
  };

  const handleCurrency = (value) => {
    setSelectedCurrency(value);
    setOpenCurrency(false);
  };

  return (
    <Box className='text-white h-full lg:h-96 border border-white/10'>
        <div className='w-full h-full flex flex-col lg:flex-row'>
            <div className='w-full h-fit lg:h-full lg:w-fit bg-surface lg:border-r border-white/10 px-2 py-4 lg:p-8'>
                <Tabs className='w-full'>
                    <TabsNav className='flex flex-row overflow-x-auto noscrollbar lg:flex-col gap-4 lg:gap-8'>
                        <TabName onClick={()=>{setTabIndex(0)}} className='focus:underline-none focus:bg-white/10 px-3 h-8 w-40 rounded-4 text-nowrap'>Store Setup</TabName>
                        <TabName onClick={()=>{setTabIndex(1)}} className='focus:underline-none focus:bg-white/10 px-3 h-8 w-40 rounded-4 text-nowrap'>Delivery Locations</TabName>
                        <TabName onClick={()=>{setTabIndex(2)}} className='focus:underline-none focus:bg-white/10 px-3 h-8 w-40 rounded-4 text-nowrap'>Payment Methods</TabName>
                        <TabName onClick={()=>{setTabIndex(3)}} className='focus:underline-none focus:bg-white/10 px-3 h-8 w-40 rounded-4 text-nowrap'>Admin</TabName>
                    </TabsNav>        
                </Tabs>    
            </div>
            <div className='w-full px-4 lg:px-12 lg:overflow-y-auto noscrollbar'>
                {tabIndex === 0 && (
                <TabContent className='py-8'>
                    <h3 className='text-xl mb-12'>Build Your Ecommece Store</h3>
                    <Input className='flex flex-col gap-3 mb-12'>
                        <InputLabel className='text-tiny'>Name Your Store</InputLabel>
                        <InputForm className='text-white w-40 h-8 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30' placeholder='My store' />
                    </Input>
                    <Input className='flex flex-col gap-3 mb-12'>
                        <InputLabel className='text-tiny'>Connect domain</InputLabel>
                        <InputForm className='text-white w-40 h-8 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30' placeholder='https://www.mystore.com' />
                    </Input>   
                    <div ref={selectRef}>
                        <div className='flex flex-col gap-3'>
                        <h6 className='text-tiny'>Select product type you want to sell</h6>
                        <Select className=" bg-black text-white w-40">
                            <SelectPlaceholder
                            className="text-white text-sm h-8"
                            onClick={() => setOpenPanel((prev) => !prev)}
                            >
                            {selectedValue || 'Product type'}
                            </SelectPlaceholder>

                            {openPanel && (
                            <SelectPanel className="lg:absolute bg-black text-white w-40 z-10 py-3">
                                {['Physical', 'Digital', 'Service'].map((item) => (
                                <SelectItem
                                    key={item}
                                    className={`text-sm flex flex-col gap-4 h-8 ${
                                    selectedValue === item ? 'hover:font-medium' : ''
                                    }`}
                                    onClick={() => handleSelect(item)}
                                >
                                    {item}
                                </SelectItem>
                                ))}
                            </SelectPanel>
                            )}
                        </Select>
                        </div>
                    </div>  
                </TabContent>
                )}
                {tabIndex === 1 && (
                <TabContent className='py-8'>
                    <h3 className='text-xl mb-12'>Locations</h3>  
                    <div ref={selectRef}>
                        <div className='flex flex-col gap-3'>
                        <h6 className='text-tiny'>Select the country where your product delivery is available</h6>
                        <Select className="bg-black border border-white/0 text-white w-40">
                            <SelectPlaceholder
                            className="text-white text-sm h-8"
                            onClick={() => setOpenCountry((prev) => !prev)}
                            >
                            {selectedCountry || 'Country'}
                            </SelectPlaceholder>

                            {openCountry && (
                            <SelectPanel className="lg:absolute bg-black gap-4 text-white w-40 py-3">
                                {['India'].map((item) => (
                                <SelectItem
                                    key={item}
                                    className={`text-sm flex flex-start h-8 ${
                                    selectedCountry === item ? 'hover:font-medium hover:tracking-widest' : ''
                                    }`}
                                    onClick={() => handleCountry(item)}
                                >
                                    {item}
                                </SelectItem>
                                ))}
                            </SelectPanel>
                            )}
                        </Select>
                        </div>
                    </div> 
                    <div ref={selectRef}>
                        <div className='flex flex-col gap-3 mt-16'>
                        <h6 className='text-tiny'>Choose the city</h6>
                        <Select className="bg-black border border-white/0 text-white w-40">
                            <SelectPlaceholder
                            className="text-white text-sm h-8"
                            onClick={() => setOpenCity((prev) => !prev)}
                            >
                            {selectedCity || 'City'}
                            </SelectPlaceholder>

                            {openCity && (
                            <SelectPanel className="lg:absolute bg-black gap-4 text-white w-40 py-3">
                                {['Delhi', 'Mumbai', 'Bangalore'].map((item) => (
                                <SelectItem
                                    key={item}
                                    className={`text-sm flex flex-col gap-4 h-8 ${
                                    selectedValue === item ? 'hover:font-medium hover:tracking-widest' : ''
                                    }`}
                                    onClick={() => handleCity(item)}
                                >
                                    {item}
                                </SelectItem>
                                ))}
                            </SelectPanel>
                            )}
                        </Select>
                        </div>
                    </div> 
                </TabContent>
                )}
                {tabIndex === 2 && (
                <TabContent className='py-8'>
                    <h3 className='text-xl mb-12'>Payment Methods</h3>  
                    
                    <div ref={selectRef}>
                        <div className='flex flex-col gap-3 mb-6'>
                            <p className='text-tiny'>Add a payment method to receive payments on product sales.</p>                        
                            <RadioItem>
                            <RadioButton   
                            id="Cardpay"
                            name="plan"
                            value="individual"
                            selectedValue={selected}
                            onChange={setSelected}
                            className='border-white focus:bg-white'
                            />
                            <RadioLabel className='text-tiny' htmlFor="Cardpay">Card payment</RadioLabel>
                        </RadioItem>
                        <RadioItem>
                            <RadioButton   
                            id="UPIpay"
                            name="plan"
                            value="individual"
                            selectedValue={selected}
                            onChange={setSelected}
                            className='border-white focus:bg-white'
                            />
                            <RadioLabel className='text-tiny' htmlFor="UPIpay">UPI pay</RadioLabel>
                        </RadioItem>
                        </div>
                        <Button className='h-8 bg-[#171717] px-3'>Add Payment Method</Button>
                    </div> 
                    <div className='mt-12'>
                        <h3 className='text-xl mb-12'>Store Currency</h3>
                        <div ref={selectRef}>
                        <div className='flex flex-col gap-3'>
                        <h6 className='text-tiny'>Set your store currency</h6>
                        <Select className="bg-black text-white w-40">
                            <SelectPlaceholder
                            className="text-white text-sm h-8"
                            onClick={() => setOpenCurrency((prev) => !prev)}
                            >
                            {selectedCurrency || 'Currency'}
                            </SelectPlaceholder>

                            {openCurrency && (
                            <SelectPanel className="lg:absolute bg-black gap-4 text-white w-64 py-3">
                                {['INR'].map((item) => (
                                <SelectItem
                                    key={item}
                                    className={`text-sm flex flex-col h-8 ${
                                    selectedCurrency === item ? 'hover:font-medium' : ''
                                    }`}
                                    onClick={() => handleCurrency(item)}
                                >
                                    {item}
                                </SelectItem>
                                ))}
                            </SelectPanel>
                            )}
                        </Select>
                        </div>
                    </div>
                    </div>
                </TabContent>
                )}
                {tabIndex === 3 && (
                <TabContent className='py-8'>
                    <h3 className='text-xl mb-12'>Store Admin Access Settings</h3> 
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-tiny'>Your Login Email</h6>
                        <p className='text-tiny'>user@example.com</p>
                        <h6 className='text-tiny'>Password</h6>
                        <p className='text-tiny'>********</p>
                    </div>
                    <Button className='h-8 bg-[#171717] px-3 mt-4'>Change Password</Button>
                    <Input className='flex flex-col gap-3 my-12'>
                        <InputLabel className='text-tiny'>Add backup email</InputLabel>
                        <div className='flex flex-row gap-3'>
                            <InputForm className='text-white w-40 h-8 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30' placeholder='user@example.com' />
                            <Button className='h-8 bg-[#171717] px-3 w-fit'>Save</Button>
                        </div>
                    </Input>
                    <div>
                        <h3 className='text-xl mb-12'>Staff</h3>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
                            <p>Add staff members to manage your store</p>
                            <Button className='h-8 bg-[#171717] px-3 w-fit'>Add member</Button>
                        </div>
                    </div>
                </TabContent>    
                )}    
            </div>    
        </div>    
    </Box>    
  )
}

export default Dialogblock;
