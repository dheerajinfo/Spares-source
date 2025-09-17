import Button from "../../library/components/Button";
import Split from "../../library/layouts/Split";
import Stack from "../../library/layouts/Stack";

function SplitDemo() {
  return (
    <Split cols={3} className="h-fit py-24 text-white w-full">
      <Stack className="pr-8 py-8 gap-4">
          <h3 className="text-base font-semibold">Lorem ipsum</h3>
          <p className='text-sm'>Lorem ipsum sit amet consectetur, adipisicing elit.</p>
      </Stack>
      <Stack className="pr-8 py-8 gap-4">
          <h3 className="text-base font-semibold">Lorem ipsum</h3>
          <p className='text-sm'>Lorem ipsum sit amet consectetur, adipisicing elit.</p>
      </Stack>     
      <Stack className="pr-8 py-8 gap-4 lg:items-center lg:justify-center">
          <Button className="bg-elevation lg:px-3 text-nowrap">Contact us</Button>
      </Stack>
    </Split>
  );
}

export default SplitDemo;