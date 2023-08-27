import { AlertItem } from "godown";
type alertArgs = {
  title?: string;
  content: string;
  call?: "success" | "error" | "warning" | "info";
  autoclose?: number;
};
const defargs = {
  autoclose: 1200,
};
// alert keeps root element is present or creates it
export default function alert(args: alertArgs) {
  let root = document.querySelector("#alert-root") as HTMLElement;
  if (!root) {
    root = document.createElement("div");
    root.setAttribute("id", "alert-root");
    document.body.appendChild(root);
  }
  // @ts-ignore
  // eslint-disable-next-line no-func-assign
  alert = (args) => {
    let root = document.querySelector("#alert-root") as HTMLElement;
    const alertItem = new AlertItem();
    Object.assign(alertItem, defargs, args);
    root.appendChild(alertItem);
  };
  alert(args);
}