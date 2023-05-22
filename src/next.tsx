import { runAppleScript } from "run-applescript";
import { closeMainWindow } from "@raycast/api";

export default async () => {
  await closeMainWindow();
  await runAppleScript(`tell application "System Events" to key code 19 using {control down}`);
  await runAppleScript(`tell application "Google Chrome" to activate`);
}
