import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITicketDetails } from "@/interfaces/tickets";

const InvoiceTable = ({
  movieDetails,
}: {
  movieDetails: ITicketDetails["movie"];
}) => {
  return (
    <Table className="mt-6 bg-white border rounded-md border-border">
      <TableHeader>
        <TableRow className="bg-[#F7F8F9] text-[#556987] hover:bg-[#F7F8F9]">
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Event Detail</TableHead>
          <TableHead>Event Type</TableHead>
          <TableHead className="text-middle">Ticket</TableHead>
          <TableHead className="text-middle">Unit Price</TableHead>
          <TableHead className="text-middle">Discount</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow className="text-black bg-white hover:bg-white">
          <TableCell>1</TableCell>
          <TableCell>{movieDetails.movie}</TableCell>
          <TableCell>Movie</TableCell>
          <TableCell>X{movieDetails.ticketQty}</TableCell>
          <TableCell>NRS. {movieDetails.unitPrice}</TableCell>
          <TableCell>NRS. 0</TableCell>
          <TableCell className="text-right">
            NRS. {movieDetails.total}
          </TableCell>
        </TableRow>
      </TableBody>

      <TableFooter className="w-full text-black bg-white">
        <TableRow>
          <TableCell className="text-xl text-right" colSpan={7}>
            Invoice Total: NRS. {movieDetails.total}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default InvoiceTable;
