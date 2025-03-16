
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="w-full max-w-xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frame Builder
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Create and test your Farcaster Frames
          </p>
        </div>

        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="frame-url">Frame URL</Label>
            <div className="flex space-x-2">
              <Input
                id="frame-url"
                placeholder="Enter your frame URL"
                className="flex-1"
              />
              <Button>
                Load
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preview</h2>
            <div className="aspect-[1.91/1] w-full bg-secondary/50 rounded-lg flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                Frame preview will appear here
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
