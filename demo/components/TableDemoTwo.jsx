import React from 'react';
import Table from '../../library/components/Table/Table';
import TableBody from '../../library/components/Table/TableBody';
import TableCell from '../../library/components/Table/TableCell';
import TableHead from '../../library/components/Table/TableHead';
import TableHeader from '../../library/components/Table/TableHeader';
import TableRow from '../../library/components/Table/TableRow';
import ActiveToggleDemo from './ActiveToggleDemo';

function TableDemoTwo() {
  const tableData = [
    {
      control: <ActiveToggleDemo />,
      userName: "Dheeraj Singh",
      contact: "None",
      social: "Default",
      relevancy: "Yes",
    },
  ];

  return (
    <>
      <Table className="w-full lg:block hidden">
        <TableHeader>
          <TableRow className="grid grid-cols-3 lg:grid-cols-5 w-full bg-black text-white text-sm font-normal border-b border-white/10 h-12">
            <TableHead className="text-center">Controls</TableHead>
            <TableHead className="text-center">User Name</TableHead>
            <TableHead className="text-center">Contact</TableHead>
            <TableHead className="text-center hidden lg:flex">Social Media</TableHead>
            <TableHead className="text-center hidden lg:flex rounded-tr-lg">Relevancy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, i) => (
            <TableRow
              key={i}
              className="grid bg-black text-white text-sm grid-cols-3 lg:grid-cols-5 w-full border-b border-white/10 h-12"
            >
              <TableCell className="text-center">{row.control}</TableCell>
              <TableCell className="text-center">{row.userName}</TableCell>
              <TableCell className="text-center">{row.contact}</TableCell>
              <TableCell className="hidden lg:flex text-center">{row.social}</TableCell>
              <TableCell className="hidden lg:flex text-center">{row.relevancy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="w-full lg:hidden">
        <TableBody className="w-full">
          {tableData.map((row, i) => (
              <>
              <TableRow className="grid grid-cols-2 text-sm bg-black text-white w-full border-b border-white/10 h-12">
                <TableHead>Controls</TableHead>
                <TableCell className="justify-start">{row.control}</TableCell>
              </TableRow>

              <TableRow className="grid grid-cols-2 text-sm bg-black text-white w-full border-b border-white/10 h-12">
                <TableHead>User Name</TableHead>
                <TableCell className="justify-start">{row.userName}</TableCell>
              </TableRow>

              <TableRow className="grid grid-cols-2 text-sm bg-black text-white w-full border-b border-white/10 h-12">
                <TableHead>Contact</TableHead>
                <TableCell className="justify-start">{row.contact}</TableCell>
              </TableRow>

              <TableRow className="grid grid-cols-2 text-sm bg-black text-white w-full border-b border-white/10 h-12">
                <TableHead>Social Media</TableHead>
                <TableCell className="justify-start">{row.social}</TableCell>
              </TableRow>

              <TableRow className="grid grid-cols-2 text-sm bg-black text-white w-full border-b border-white/10 h-12">
                <TableHead>Relevancy</TableHead>
                <TableCell className="justify-start">{row.relevancy}</TableCell>
              </TableRow>
              </>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default TableDemoTwo;
