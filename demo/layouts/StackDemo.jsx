import CardDiscountprice from "../../library/components/Card/CardDiscountprice";
import Card from "../../library/components/Card/Card";
import Frame from "../../library/layouts/Frame";
import Stack from "../../library/layouts/Stack";
import Inline from "../../library/layouts/Inline";

function StackDemo() {
  return (
    <Stack className="gap-1">
      <Card className="bg-black text-white w-fit p-2 rounded-8">
        <Inline className="lg:gap-12 gap-0">
          <div className="flex flex-row gap-2">
            <Frame ratio={1/1} className="w-12 bg-white/60 rounded-4" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base">Product</h3>
              <p className="text-sm">Lorem ipsum dolor</p>
            </div>
          </div>
          <CardDiscountprice className="text-xl">$35</CardDiscountprice>
        </Inline>
      </Card>
      <Card className="bg-black text-white w-fit p-2 rounded-8">
        <Inline className="lg:gap-12 gap-0">
          <div className="flex flex-row gap-2">
            <Frame ratio={1/1} className="w-12 bg-white/60 rounded-4" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base">Product</h3>
              <p className="text-sm">Lorem ipsum dolor</p>
            </div>
          </div>
          <CardDiscountprice className="text-xl">$10</CardDiscountprice>
        </Inline>
      </Card>
      <Card className="bg-black text-white w-fit p-2 rounded-8">
        <Inline className="lg:gap-12 gap-0">
          <div className="flex flex-row gap-2">
            <Frame ratio={1/1} className="w-12 bg-white/60 rounded-4" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base">Product</h3>
              <p className="text-sm">Lorem ipsum dolor</p>
            </div>
          </div>
          <CardDiscountprice className="text-xl">$56</CardDiscountprice>
        </Inline>
      </Card>
    </Stack>
  );
}

export default StackDemo;
