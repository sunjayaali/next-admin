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
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="border border-border">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Normal</TableHead>
                <TableHead className="text-center">Large</TableHead>
                <TableHead className="text-center">Small</TableHead>
                <TableHead className="text-center">Extra Small</TableHead>
                <TableHead className="text-center">Disabled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button asChild>
                    <Link href="#">Default</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button size="lg" asChild>
                    <Link href="#">Default</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" asChild>
                    <Link href="#">Default</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="xs" asChild>
                    <Link href="#">Default</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button className="opacity-50 cursor-not-allowed" asChild>
                    <Link href="#" className="pointer-events-none">
                      Default
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <Link href="#">Secondary</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <Link href="#">Secondary</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <Link href="#">Secondary</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="xs"
                    asChild
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    <Link href="#">Secondary</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/80 opacity-50 cursor-not-allowed"
                    asChild
                  >
                    <Link href="#" className="pointer-events-none">
                      Secondary
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button
                    asChild
                    className="bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    <Link href="#">Success</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    <Link href="#">Success</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    asChild
                    className="bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    <Link href="#">Success</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="xs"
                    asChild
                    className="bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    <Link href="#">Success</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-green-100 text-green-800 hover:bg-green-200 opacity-50 cursor-not-allowed"
                    asChild
                  >
                    <Link href="#" className="pointer-events-none">
                      Success
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button
                    asChild
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    <Link href="#">Info</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    <Link href="#">Info</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    asChild
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    <Link href="#">Info</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="xs"
                    asChild
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    <Link href="#">Info</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 opacity-50 cursor-not-allowed"
                    asChild
                  >
                    <Link href="#" className="pointer-events-none">
                      Info
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button
                    asChild
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  >
                    <Link href="#">Warning</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  >
                    <Link href="#">Warning</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    asChild
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  >
                    <Link href="#">Warning</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="xs"
                    asChild
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  >
                    <Link href="#">Warning</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 opacity-50 cursor-not-allowed"
                    asChild
                  >
                    <Link href="#" className="pointer-events-none">
                      Warning
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-r text-center">
                  <Button
                    asChild
                    className="bg-red-100 text-red-800 hover:bg-red-200"
                  >
                    <Link href="#">Danger</Link>
                  </Button>
                </TableCell>
                <TableCell className="border-r text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-red-100 text-red-800 hover:bg-red-200"
                  >
                    <Link href="#">Danger</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="sm"
                    asChild
                    className="bg-red-100 text-red-800 hover:bg-red-200"
                  >
                    <Link href="#">Danger</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    size="xs"
                    asChild
                    className="bg-red-100 text-red-800 hover:bg-red-200"
                  >
                    <Link href="#">Danger</Link>
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    className="bg-red-100 text-red-800 hover:bg-red-200 opacity-50 cursor-not-allowed"
                    asChild
                  >
                    <Link href="#" className="pointer-events-none">
                      Danger
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
