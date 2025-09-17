import React from 'react';
import Stack from '../../library/layouts/Stack';
import InputLabel from '../../library/components/Input/InputLabel';
import InputForm from '../../library/components/Input/InputForm';
import Textarea from '../../library/components/Textarea';
import Inline from '../../library/layouts/Inline';
import Button from '../../library/components/Button';
import Box from '../../library/layouts/Box';
import CheckboxSelector from '../../library/components/Checkbox/CheckboxSelector';

function ContactDemo() {
  return (
    <Stack className='text-white py-24'>
        <h3 className='text-3xl mb-12'>Let's Talk</h3>
        <Box className='lg:px-8 py-12 border border-white/10  p-4 max-w-fit h-fit rounded-4'>
            <Stack className='gap-6 w-fit'>
                <div className='flex flex-col lg:flex-row gap-6'>  
                    <Stack className='gap-2 w-full'>
                        <InputLabel className='text-tiny'>Name</InputLabel>
                        <InputForm className='bg-surface text-white lg:w-32 h-10 border focus:outline-none focus:ring-none focus:border-white/30 placeholder:text-white placeholder:text-sm' placeholder='your name' />
                    </Stack>
                    <Stack className='gap-2 w-full'>
                        <InputLabel className='text-tiny'>Email</InputLabel>
                        <InputForm className='bg-surface text-white lg:w-32 h-10 border focus:outline-none focus:ring-none focus:border-white/30 placeholder:text-white placeholder:text-sm' placeholder='name@email.com' />
                    </Stack>
                </div>
                <div className='flex flex-col lg:flex-row gap-6'>  
                    <Stack className='gap-2 w-full'>
                        <InputLabel className='text-tiny'>Budget</InputLabel>
                        <InputForm className='bg-surface text-white lg:w-32 h-10 border focus:outline-none focus:ring-none focus:border-white/30 placeholder:text-white placeholder:text-sm' placeholder='$1000' />
                    </Stack>
                    <Stack className='gap-2 w-full'>
                        <InputLabel className='text-tiny'>Country</InputLabel>
                        <InputForm className='bg-surface text-white lg:w-32 h-10 border focus:outline-none focus:ring-none focus:border-white/30 placeholder:text-white placeholder:text-sm' placeholder='country' />
                    </Stack>
                </div>
                <Stack className='gap-6'>
                    <Stack className='gap-2'>
                        <InputLabel className='text-tiny'>Notes</InputLabel>
                        <Textarea
                        placeholder="Notes"
                        rows={5}
                        className='text-white border border-white/10 p-2 focus:outline-none focus:ring-none focus:border-white/30 placeholder-white/50 text-sm bg-surface'
                        />
                    </Stack>
                    <CheckboxSelector
                    id="agree"
                    label="I agree to the terms"
                    className="text-white text-sm font-normal tracking-widest"
                    boxClassName="h-4 w-4 border-white/20 peer-checked:bg-white       peer-checked:border-white"
                    checkmarkClassName="text-lg"
                    />
                    <Inline className='gap-4'>
                        <Button className='bg-[#171717] px-5'>Submit</Button>
                        <Button className='bg-white text-black px-5'>Cancel</Button>
                    </Inline>
                </Stack>
            </Stack>
        </Box>
    </Stack>
  )
}

export default ContactDemo;
