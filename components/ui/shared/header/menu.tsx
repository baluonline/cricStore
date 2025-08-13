import { EllipsisIcon, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../button";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../../sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-sm gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
            Cart
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisIcon />
          </SheetTrigger>
          <SheetContent className="w-64">
            <div className="flex flex-col gap-3 p-4">
              {/* <ModeToggle /> */}
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">
                  <UserIcon /> Sign In
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
