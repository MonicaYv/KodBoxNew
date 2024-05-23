import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export default function Notification({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[350px] h-[300px]", className)} {...props}>
      <CardHeader className="text-center">
        <CardTitle>Notification Center</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1 text-center">
            <p className="text-sm font-medium leading-none">Empty</p>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
