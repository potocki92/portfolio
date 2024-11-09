import { memo } from "react";

export const HamburgerIcon = memo(function HamburgerIcon(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
      />
    </svg>
  );
});
