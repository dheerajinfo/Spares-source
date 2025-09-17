import React from 'react';
import Table from '../../library/components/Table/Table';
import TableBody from '../../library/components/Table/TableBody';
import TableCell from '../../library/components/Table/TableCell';
import TableHead from '../../library/components/Table/TableHead';
import TableHeader from '../../library/components/Table/TableHeader';
import TableRow from '../../library/components/Table/TableRow';
import TableEmpty from '../../library/components/Table/TableEmpty';

function TableDemoOne() {
  const tableData = [
    {
      control: "Pause",
      userName: "Dheeraj Singh",
      contact: "None",
      social: "Default",
      relevancy: "Yes",
    },
  ];

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="grid bg-black text-sm font-normal tracking-wider grid-cols-3 lg:grid-cols-5 w-full border-b border-white/10 h-12">
          <TableHead className="text-white text-center text-nowrap">Controls</TableHead>
          <TableHead className="text-white text-center text-nowrap">User Name</TableHead>
          <TableHead className="text-white text-center text-nowrap">Contact</TableHead>
          <TableHead className="text-white text-center text-nowrap hidden lg:flex">Social Media</TableHead>
          <TableHead className="text-white text-center text-nowrap hidden lg:flex rounded-tr-lg">Relevancy</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tableData.length === 0 ? (
          <TableEmpty showButton={false} />
        ) : (
          tableData.map((row, i) => (
            <TableRow key={i} className="grid grid-cols-3 lg:grid-cols-5 w-full bg-black text-white text-sm font-normal tracking-wider border-b border-white/10 h-12">
              <TableCell className="text-center">{row.control}</TableCell>
              <TableCell className="text-center">{row.userName}</TableCell>
              <TableCell className="text-center">{row.contact}</TableCell>
              <TableCell className="hidden lg:flex text-center">{row.social}</TableCell>
              <TableCell className="hidden lg:flex text-center">{row.relevancy}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default TableDemoOne;
