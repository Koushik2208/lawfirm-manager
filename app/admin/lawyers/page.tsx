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

const lawyers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    specialization: "Criminal Law",
    activeCases: 15,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    specialization: "Corporate Law",
    activeCases: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    specialization: "Family Law",
    activeCases: 8,
    status: "Active",
  },
];

export default function LawyersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lawyers</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Lawyer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lawyers Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Active Cases</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lawyers.map((lawyer) => (
                <TableRow key={lawyer.id}>
                  <TableCell className="font-medium">{lawyer.name}</TableCell>
                  <TableCell>{lawyer.email}</TableCell>
                  <TableCell>{lawyer.specialization}</TableCell>
                  <TableCell>{lawyer.activeCases}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                      {lawyer.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
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