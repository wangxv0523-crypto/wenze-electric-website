import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserve existing campaign links while consolidating on the complete product range.
export const Route = createFileRoute("/southeast-asia-oil-immersed-transformer")({
  beforeLoad: ({ location }) => {
    throw redirect({
      href:
        "/transformer-solutions" + location.searchStr + (location.hash ? "#" + location.hash : ""),
      statusCode: 301,
    });
  },
});
