import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type PortfolioSubmitSuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const PortfolioSubmitSuccessDialog = ({
  open,
  onOpenChange,
}: PortfolioSubmitSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hang tight — your portfolio is in review!</DialogTitle>
          <DialogDescription>
            We’ll shoot you an email once it’s approved. Then it’ll go live on
            the{" "}
            <Link href="/portfolio/browse" className="underline">
              Browse Portfolios
            </Link>{" "}
            page for the world to see 🚀
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioSubmitSuccessDialog;
