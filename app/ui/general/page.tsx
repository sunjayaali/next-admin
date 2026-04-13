import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            This card uses the small size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted">
            asd
          </div>
          <p>
            The card component supports a size prop that can be set to
            &quot;sm&quot; for a more compact appearance.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Action
          </Button>
        </CardFooter>
      </Card>

      <Card></Card>
    </div>
  );
}
