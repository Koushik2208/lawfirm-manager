import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";

const cases = [
  {
    id: "2024-001",
    title: "Smith vs. Johnson",
    type: "Civil",
    court: "Supreme Court",
    assignedTo: "John Doe",
    status: "Active",
    nextHearing: "2024-04-15",
  },
  {
    id: "2024-002",
    title: "State vs. Williams",
    type: "Criminal",
    court: "District Court",
    assignedTo: "Jane Smith",
    status: "Pending",
    nextHearing: "2024-04-20",
  },
  {
    id: "2024-003",
    title: "Brown Family Trust",
    type: "Family",
    court: "Family Court",
    assignedTo: "Robert Johnson",
    status: "Active",
    nextHearing: "2024-04-18",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-700';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700';
    case 'closed':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-blue-100 text-blue-700';
  }
};

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cases</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Case
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cases Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Court</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Next Hearing</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((case_) => (
                <TableRow key={case_.id}>
                  <TableCell className="font-medium">{case_.id}</TableCell>
                  <TableCell>{case_.title}</TableCell>
                  <TableCell>{case_.type}</TableCell>
                  <TableCell>{case_.court}</TableCell>
                  <TableCell>{case_.assignedTo}</TableCell>
                  <TableCell>{case_.nextHearing}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}