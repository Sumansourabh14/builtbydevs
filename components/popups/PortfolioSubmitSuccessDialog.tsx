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
          <DialogTitle>Your portfolio has been submitted!</DialogTitle>
          <DialogDescription>
            Once approved, it will appear on the{" "}
            <Link href="/portfolio/browse" className="underline">
              Browse Portfolios
            </Link>{" "}
            page.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioSubmitSuccessDialog;
