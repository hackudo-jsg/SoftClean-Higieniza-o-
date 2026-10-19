import { createFileRoute, redirect } from "@tanstack/react-router";

// The starter's demo workspace is not part of the SoftClean public website.
export const Route = createFileRoute("/app")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
