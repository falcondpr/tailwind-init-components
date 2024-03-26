import clsx from "clsx";
import Button from "./ui/Button";

export default function page() {
  const value = 5;

  return (
    <div className="m-5">
      <Button
        disabled
        className={clsx("px-20", {
          "bg-purple-500": value < 9,
          "bg-orange-500": value > 9,
        })}
      >
        Hello
      </Button>
    </div>
  );
}
