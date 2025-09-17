import React from 'react';
import PageBoundary from '../../library/layouts/PageBoundary';
import PricingDemo from '../layouts/PricingDemo';
import HeaderDemo from '../layouts/HeaderDemo';
import FooterDemo from '../layouts/FooterDemo';
import FaqDemo from '../layouts/FaqDemo';
import ClientsDemo from '../layouts/ClientsDemo';
import Table from '../../library/components/Table/Table';
import TableBody from '../../library/components/Table/TableBody';
import TableCell from '../../library/components/Table/TableCell';
import TableHead from '../../library/components/Table/TableHead';
import TableHeader from '../../library/components/Table/TableHeader';
import TableRow from '../../library/components/Table/TableRow';
import TableEmpty from '../../library/components/Table/TableEmpty';

function PricingpageTemplate() {
  const check = (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M1.5 4C1.5 4 2.81593 6.60287 3.18382 6.99338C3.40755 7.23086 9 1 9 1" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const no = (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7M1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
  );
  const tableData = [
    {
      feature: "Store",
      plana: check,
      planb: check,
    },
    {
      feature: "Store management",
      plana: check,
      planb: check,
    },
    {
      feature: "24/7 chat support",
      plana: no,
      planb: check,
    },
    {
      feature: "Products",
      plana: "1000",
      planb: "10000",
    },
    {
      feature: "Staff Accounts",
      plana: "2",
      planb: "5",
    },
  ];
  return (
    <PageBoundary className='bg-black h-full'>
        <HeaderDemo />
        <ClientsDemo />
        <PricingDemo />
        <div className='py-24'>
            <Table className="w-full">
                <TableHeader>
                    <TableRow className="grid bg-black text-sm font-normal tracking-wider grid-cols-3 lg:grid-cols-3 w-full h-12">
                    <TableHead className="text-white text-center text-nowrap">Feature</TableHead>
                    <TableHead className="text-white text-center text-nowrap">Plan A</TableHead>
                    <TableHead className="text-white text-center text-nowrap">Plan B</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tableData.length === 0 ? (
                    <TableEmpty showButton={false} />
                    ) : (
                    tableData.map((row, i) => (
                        <TableRow key={i} className="grid grid-cols-3 lg:grid-cols-3 w-full bg-black text-white text-sm font-normal tracking-wider h-12">
                            <TableCell className="text-nowrap overflow-x-auto noscrollbar">{row.feature}</TableCell>
                            <TableCell className="text-center overflow-x-auto noscrollbar text-nowrap flex">{row.plana}</TableCell>
                            <TableCell className="flex text-center overflow-x-auto noscrollbar text-nowrap">{row.planb}</TableCell>
                        </TableRow>
                    ))
                    )}
                </TableBody>
            </Table>
        </div>
        <FaqDemo />
        <FooterDemo />
    </PageBoundary>
  )
}

export default PricingpageTemplate;
