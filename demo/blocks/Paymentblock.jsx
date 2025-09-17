import React, { useState } from 'react';
import Card from '../../library/components/Card/Card';
import Stack from '../../library/layouts/Stack';
import Button from '../../library/components/Button';
import Input from '../../library/components/Input/Input';
import InputLabel from '../../library/components/Input/InputLabel';
import InputForm from '../../library/components/Input/InputForm'; 
import Tabs from '../../library/components/Tabs/Tabs';
import TabsNav from '../../library/components/Tabs/TabsNav';
import TabName from '../../library/components/Tabs/TabName';
import TabContent from '../../library/components/Tabs/TabContent';
import RadioItem from '../../library/components/Radio/RadioItem';
import RadioButton from '../../library/components/Radio/RadioButton';
import RadioLabel from '../../library/components/Radio/RadioLabel';
import CheckboxSelector from "../../library/components/Checkbox/CheckboxSelector";

function Paymentblock() {
  const [selected, setSelected] = useState('');
  const [selectedTabIndex, setSelectedTabIndex] = useState(null);
  const [agreeChecked, setAgreeChecked] = useState(false); 

  const tabBaseClasses = 'text-white text-base lg:text-nowrap flex flex-row items-center gap-3';
  const activeClasses = 'underline underline-offset-8';

  return (
    <Card className='bg-black text-white p-8 rounded-4 border border-white/10 w-fit'>
      <Stack className='gap-8'>
        <h3 className='text-lg font-medium'>Upgrade your plan</h3>

        <div className='flex flex-col gap-4'>
          <Input className='flex flex-col gap-2'>
            <InputLabel className='text-tiny'>Name</InputLabel>
            <InputForm type='text' placeholder='your name' className='h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30'/>
          </Input>
          <Input className='flex flex-col gap-2'>
            <InputLabel className='text-tiny'>Email</InputLabel>
            <InputForm type='email' placeholder='user@example.com' className='h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30'/>
          </Input>
        </div>

        <div className='flex flex-row items-center justify-between w-full'>
          <Tabs>
            <TabsNav className='gap-8'>
              <TabName 
                onClick={() => setSelectedTabIndex(0)}
                className={`${tabBaseClasses} ${selectedTabIndex === 0 ? activeClasses : ''}`}>
                Card Payment
              </TabName>
              <TabName
                onClick={() => setSelectedTabIndex(1)}
                className={`${tabBaseClasses} ${selectedTabIndex === 1 ? activeClasses : ''}`}>
                UPI (India)
              </TabName>
            </TabsNav>

            {selectedTabIndex === 0 && (
              <TabContent className='py-6'>
                <Input className='flex flex-col gap-2'>
                  <InputForm type='text' placeholder='1234 1234 1234 1234' className='h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30'/>
                  <InputForm type='text' placeholder='MM/YY' className='h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30'/>
                  <InputForm type='text' placeholder='CVC' className='h-10 placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-none focus:border-white/30'/>
                </Input>
              </TabContent>
            )}
            {selectedTabIndex === 1 && (
              <TabContent className='py-6'>
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
              </TabContent>
            )}
          </Tabs>
        </div>

        <div>
          <h6>Plan</h6>
          <p>Select the plan you need</p>
          <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-white/5 p-3 rounded-4'>
              <RadioItem>
                <RadioButton   
                  id="individual"
                  name="plan"
                  value="individual"
                  selectedValue={selected}
                  onChange={setSelected}
                  className='border-white focus:bg-white'
                />
                <RadioLabel className='text-tiny' htmlFor="individual">Individual</RadioLabel>
              </RadioItem> 
              <p className='text-sm ml-6 mt-4'>Perfect for individuals starting up</p>
            </div>
            <div className='bg-white/5 p-3 rounded-4'>
              <RadioItem>
                <RadioButton 
                  id="team"
                  name="plan"
                  value="team"
                  selectedValue={selected}
                  onChange={setSelected}
                  className='border-white focus:bg-white'
                />
                <RadioLabel className='text-tiny' htmlFor="team">Team</RadioLabel>
              </RadioItem> 
              <p className='text-sm ml-6 mt-4'>Perfect for teams collaborating</p>
            </div> 
          </div>  
        </div>    

        <div>
          <CheckboxSelector
            id="agree"
            label="I agree to the terms and conditions"
            checked={agreeChecked}
            onChange={(e) => setAgreeChecked(e.target.checked)}
            className="text-white text-sm font-normal tracking-widest"
            boxClassName="h-4 w-4 border-white peer-checked:bg-white peer-checked:border-white"
            checkmarkClassName="text-lg"
          />
        </div>

        <div className='flex flex-row gap-4 w-full'>
          <Button className='h-8 w-full px-5 bg-white/5'>Confirm</Button>
          <Button className='h-10 w-full px-5 border border-white/10'>Cancel</Button>  
        </div>

      </Stack>  
    </Card>
  )
}

export default Paymentblock;
