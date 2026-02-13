import { type SVGProps } from "react";
import type { ServicesIconsProps } from "./types/serviceiconsprops.ts";

type IconProps = {
  width?: number;
  height?: number;
} & SVGProps<SVGSVGElement>;

export const MenuIcon = ({ width, height, className, color = "#1C1C1C", ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 44}
      height={height ?? 25}
      viewBox="0 0 44 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M44 0.5H0.5" stroke={color} />
      <path d="M44 12.5H0.5" stroke={color} />
      <path d="M44 24.5H0.5" stroke={color} />
    </svg>
  );
};



export const ArrowIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1091_26468)">
        <path
          d="M28.2068 -13.0858C28.2068 -13.6379 28.6546 -14.0855 29.2067 -14.0857L38.2071 -14.0857C38.7594 -14.0857 39.207 -13.6381 39.207 -13.0858V-4.08539C39.2068 -3.5333 38.7593 -3.08549 38.2071 -3.08549C37.655 -3.0855 37.2075 -3.5333 37.2073 -4.08539V-10.6717L25.9143 0.621294L24.5 -0.792919L35.793 -12.0859L29.2067 -12.0859C28.6546 -12.0861 28.2068 -12.5337 28.2068 -13.0858Z"
          fill="#FAFAFA"
        />
        <path
          d="M8.20684 5.9142C8.20684 5.36205 8.65464 4.91453 9.20673 4.9143L18.2071 4.9143C18.7594 4.9143 19.207 5.36191 19.207 5.9142V14.9146C19.2068 15.4667 18.7593 15.9145 18.2071 15.9145C17.655 15.9145 17.2075 15.4667 17.2073 14.9146V8.3283L5.91426 19.6213L4.50005 18.2071L15.793 6.91409L9.20673 6.91409C8.65464 6.91386 8.20684 6.46633 8.20684 5.9142Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1091_26468">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const InstagramIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 30}
      height={height ?? 30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1202_1419)">
        <path
          d="M14.996 9.99787C12.2417 9.99787 9.99393 12.2456 9.99393 15C9.99393 17.7544 12.2417 20.0021 14.996 20.0021C17.7503 20.0021 19.998 17.7544 19.998 15C19.998 12.2456 17.7503 9.99787 14.996 9.99787ZM29.9983 15C29.9983 12.9286 30.0171 10.876 29.9008 8.80832C29.7844 6.40669 29.2366 4.27525 27.4804 2.51907C25.7205 0.759128 23.5929 0.215011 21.1913 0.098682C19.1199 -0.0176466 17.0673 0.00111617 14.9997 0.00111617C12.9284 0.00111617 10.8758 -0.0176466 8.80815 0.098682C6.40658 0.215011 4.27517 0.762881 2.51902 2.51907C0.759114 4.27901 0.215007 6.40669 0.0986802 8.80832C-0.0176462 10.8797 0.00111615 12.9324 0.00111615 15C0.00111615 17.0676 -0.0176462 19.124 0.0986802 21.1917C0.215007 23.5933 0.762867 25.7247 2.51902 27.4809C4.27893 29.2409 6.40658 29.785 8.80815 29.9013C10.8795 30.0176 12.9321 29.9989 14.9997 29.9989C17.0711 29.9989 19.1237 30.0176 21.1913 29.9013C23.5929 29.785 25.7243 29.2371 27.4804 27.4809C29.2403 25.721 29.7844 23.5933 29.9008 21.1917C30.0208 19.124 29.9983 17.0714 29.9983 15ZM14.996 22.6964C10.7369 22.6964 7.29966 19.2591 7.29966 15C7.29966 10.7409 10.7369 7.30355 14.996 7.30355C19.255 7.30355 22.6923 10.7409 22.6923 15C22.6923 19.2591 19.255 22.6964 14.996 22.6964ZM23.0075 8.7858C22.0131 8.7858 21.2101 7.98276 21.2101 6.98834C21.2101 5.99392 22.0131 5.19087 23.0075 5.19087C24.0019 5.19087 24.8049 5.99392 24.8049 6.98834C24.8052 7.22447 24.7589 7.45834 24.6687 7.67655C24.5785 7.89476 24.4461 8.09303 24.2791 8.26C24.1122 8.42697 23.9139 8.55936 23.6957 8.64958C23.4775 8.73981 23.2436 8.7861 23.0075 8.7858Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1202_1419">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const FaceboookIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 30}
      height={height ?? 30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1202_1421)">
        <path
          d="M28.35 0H1.65C1.21239 0 0.792709 0.173839 0.483274 0.483274C0.173839 0.792709 0 1.21239 0 1.65V28.35C0 28.7876 0.173839 29.2073 0.483274 29.5167C0.792709 29.8262 1.21239 30 1.65 30H16.02V18.375H12.12V13.875H16.02V10.5C15.9392 9.70764 16.0328 8.90719 16.2941 8.15481C16.5554 7.40242 16.9781 6.71632 17.5327 6.14462C18.0872 5.57292 18.7602 5.12946 19.5042 4.84536C20.2483 4.56125 21.0455 4.44338 21.84 4.5C23.0075 4.49194 24.1745 4.55204 25.335 4.68V8.73H22.95C21.06 8.73 20.7 9.63 20.7 10.935V13.83H25.2L24.615 18.33H20.7V30H28.35C28.5667 30 28.7812 29.9573 28.9814 29.8744C29.1816 29.7915 29.3635 29.6699 29.5167 29.5167C29.6699 29.3635 29.7915 29.1816 29.8744 28.9814C29.9573 28.7812 30 28.5667 30 28.35V1.65C30 1.43332 29.9573 1.21876 29.8744 1.01857C29.7915 0.818385 29.6699 0.636491 29.5167 0.483274C29.3635 0.330057 29.1816 0.208519 28.9814 0.125599C28.7812 0.0426786 28.5667 0 28.35 0Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1202_1421">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const LinkedinIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 30}
      height={height ?? 30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1202_1423)">
        <path
          d="M0 2.14875C0 0.961875 0.98625 0 2.20312 0H27.7969C29.0138 0 30 0.961875 30 2.14875V27.8512C30 29.0381 29.0138 30 27.7969 30H2.20312C0.98625 30 0 29.0381 0 27.8512V2.14875ZM9.26812 25.1138V11.5669H4.76625V25.1138H9.26812ZM7.01813 9.71625C8.5875 9.71625 9.56437 8.6775 9.56437 7.37625C9.53625 6.04688 8.58938 5.03625 7.04813 5.03625C5.50688 5.03625 4.5 6.04875 4.5 7.37625C4.5 8.6775 5.47687 9.71625 6.98812 9.71625H7.01813ZM16.2206 25.1138V17.5481C16.2206 17.1431 16.2506 16.7381 16.3706 16.4494C16.695 15.6412 17.4356 14.8031 18.6806 14.8031C20.31 14.8031 20.9606 16.0444 20.9606 17.8669V25.1138H25.4625V17.3438C25.4625 13.1812 23.2425 11.2463 20.28 11.2463C17.8913 11.2463 16.8206 12.5588 16.2206 13.4831V13.53H16.1906L16.2206 13.4831V11.5669H11.7206C11.7769 12.8381 11.7206 25.1138 11.7206 25.1138H16.2206Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1202_1423">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface DropdownMenuIconProps extends React.SVGProps<SVGSVGElement> {
  durationMs?: number;
  isHovered?: boolean;
}

export const DropdownMenuIcon = ({
  height,
  width,
  durationMs = 500,
  isHovered = false,
  ...props
}: DropdownMenuIconProps) => {

  const varStyle = {
    ["--dur" as any]: `${durationMs}ms`,
  } as React.CSSProperties;

  const redPathClosed = "M0.849553 21.722L16.5737 29.75L5.33281 5.25L0.849553 21.722Z";
  const redPathOpen = "M4.35312 24.8374L21.9847 23.9278L-0.000244525 8.33066L4.35312 24.8374Z";

  const gradientPathClosed = "M13.9999 13.278L29.7241 5.25L18.4832 29.75L13.9999 13.278Z";
  const gradientPathOpen = "M26.8979 24.8374L9.2663 23.9278L31.2512 8.33066L26.8979 24.8374Z";

  return (
    <div
      className={`inline-block ${isHovered ? "force-hover" : ""}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        width={width ?? 32}
        height={height ?? 30}
        viewBox="0 0 32 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={varStyle}
        {...props}
      >
        <style>{`
          /* Default State (Closed) */
          .petal {
            transition: d var(--dur) cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy spring effect */
          }
          
          .petal-red {
            d: path('${redPathClosed}');
          }
          
          .petal-gradient {
            d: path('${gradientPathClosed}');
          }

          /* Hover State (Open) */
          .force-hover .petal-red {
            d: path('${redPathOpen}');
          }

          .force-hover .petal-gradient {
            d: path('${gradientPathOpen}');
          }
        `}</style>

        {/* Left Petal (Solid Red) */}
        <path
          className="petal petal-red"
          fill="#D31F23"
        />

        {/* Right Petal (Gradient) */}
        <path
          className="petal petal-gradient"
          fill="url(#paint0_linear_animated)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_animated"
            x1="9.76484"
            y1="10.377"
            x2="33.5871"
            y2="23.6698"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EA2227" />
            <stop offset="1" stopColor="#F6A9AB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export function UIUXDesignIcon({
  size,
  className = "",
  label = "Dual toggles",
  durationMs = 300,
  isHovered = false,
}: ServicesIconsProps) {
  // expose a CSS variable for the transition duration
  const varStyle = {
    ["--dur" as any]: `${durationMs}ms`,
  } as React.CSSProperties;

  const sizestyles: React.CSSProperties = {};

  if (size) {
    sizestyles.width = size;
    sizestyles.height = size;
  }

  return (
    <div
      className={`inline-block ${className} ${isHovered ? "force-hover" : ""}`}
      style={{ ...sizestyles, lineHeight: 0 }}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toggle-swap"
        style={varStyle}
      >
        <style>{`
          .toggle-swap {
            overflow: visible;
          }
          /* Knobs move */
          .knob {
            transform-box: fill-box;
            transform-origin: center;
            transition: transform var(--dur, 300ms) cubic-bezier(.2,.7,.2,1);
          }
          
          /* Background opacity */
          .bg-grey {
            transition: opacity var(--dur, 300ms) cubic-bezier(.2,.7,.2,1);
          }

          /* DEFAULT STATE (Pre-hover) */
          /* Left: Active (Red). Knob Bottom. Grey Hidden. */
          /* Right: Inactive (Grey). Knob Top. Grey Visible. */
          
          .knob--left { transform: translateY(26px); }
          .knob--right { transform: translateY(-26px); }
          
          .bg-grey--left { opacity: 0; }
          .bg-grey--right { opacity: 1; }


          /* HOVER STATE */
          /* Left: Inactive (Grey). Knob Top. Grey Visible. */
          /* Right: Active (Red). Knob Bottom. Grey Hidden. */

          .force-hover .knob--left  { transform: translateY(0); }
          .force-hover .knob--right { transform: translateY(0); }
          
          .force-hover .bg-grey--left { opacity: 1; }
          .force-hover .bg-grey--right { opacity: 0; }

          @media (prefers-reduced-motion: reduce) {
            .knob, .bg-grey { transition: none; }
          }
        `}</style>
        <defs>
          <clipPath id="clip0_new">
            <rect width="19" height="45" rx="9.5" fill="white" />
          </clipPath>
          <clipPath id="clip1_new">
            <rect x="23" width="19" height="45" rx="9.5" fill="white" />
          </clipPath>
        </defs>

        <g transform="translate(7.5, 6)">
          {/* LEFT toggle Group */}
          <g clipPath="url(#clip0_new)">
            {/* Red Base */}
            <path d="M0.226562 35.631C0.226562 40.7527 4.37859 44.9048 9.50037 44.9048C14.6222 44.9048 18.7742 40.7527 18.7742 35.631V9.27381C18.7742 4.15203 14.6222 0 9.50037 0C4.37859 0 0.226562 4.15203 0.226562 9.27381V35.631Z" fill="#EA2227" />
            {/* Grey Overlay */}
            <path className="bg-grey bg-grey--left" d="M0 35.631C0 40.7527 4.15203 44.9048 9.27381 44.9048C14.3956 44.9048 18.5476 40.7527 18.5476 35.631V9.27381C18.5476 4.15203 14.3956 0 9.27381 0C4.15203 0 0 4.15203 0 9.27381V35.631Z" fill="#D2D5DB" />
            {/* Top Knob */}
            <path className="knob knob--left" d="M2.17871 9.32143C2.17871 13.3649 5.45663 16.6429 9.50014 16.6429C13.5437 16.6429 16.8216 13.3649 16.8216 9.32143C16.8216 5.27792 13.5437 2 9.50014 2C5.45663 2 2.17871 5.27792 2.17871 9.32143Z" fill="#FAFAFA" />
          </g>

          {/* RIGHT toggle Group */}
          <g clipPath="url(#clip1_new)">
            {/* Red Base */}
            <path d="M23.2266 35.631C23.2266 40.7527 27.3786 44.9048 32.5004 44.9048C37.6222 44.9048 41.7742 40.7527 41.7742 35.631V9.27381C41.7742 4.15203 37.6222 0 32.5004 0C27.3786 0 23.2266 4.15203 23.2266 9.27381V35.631Z" fill="#EA2227" />
            {/* Grey Overlay (Constructed from Red Path) */}
            <path className="bg-grey bg-grey--right" d="M23.2266 35.631C23.2266 40.7527 27.3786 44.9048 32.5004 44.9048C37.6222 44.9048 41.7742 40.7527 41.7742 35.631V9.27381C41.7742 4.15203 37.6222 0 32.5004 0C27.3786 0 23.2266 4.15203 23.2266 9.27381V35.631Z" fill="#D2D5DB" />
            {/* Bottom Knob */}
            <path className="knob knob--right" d="M25.1787 35.3214C25.1787 39.3649 28.4566 42.6429 32.5001 42.6429C36.5437 42.6429 39.8216 39.3649 39.8216 35.3214C39.8216 31.2779 36.5437 28 32.5001 28C28.4566 28 25.1787 31.2779 25.1787 35.3214Z" fill="#FAFAFA" />
          </g>
        </g>
      </svg>
    </div>
  );
}
export function ProductdesignIcon({
  size,
  className = "",
  label = "Morphing pill with tool",
  durationMs = 800,
  isHovered = false,
}: ServicesIconsProps) {
  const vars = {
    ["--dur" as any]: `${durationMs}ms`,
    ["--ease" as any]: "cubic-bezier(.2,.8,.2,1)",
  } as React.CSSProperties;

  const sizestyles: React.CSSProperties = {};

  if (size) {
    sizestyles.width = size;
    sizestyles.height = size;
  }

  return (
    <div
      className={`morph-tool inline-block ${className} ${isHovered ? "force-hover" : ""
        }`}
      style={{ ...sizestyles, lineHeight: 0, ...vars }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .morph-tool .element {
            transform-box: fill-box;
            transform-origin: center;
            will-change: transform, opacity;
            transition: transform var(--dur) var(--ease), opacity var(--dur) var(--ease);
          }
          
          /* Default state elements (visible) */
          .morph-tool .default-state {
            opacity: 1;
          }
          
          /* Hover state elements (hidden initially) */
          .morph-tool .hover-state {
            opacity: 0;
          }
          
          /* Hover animations */
          .force-hover.morph-tool .default-state {
            opacity: 0;
            transition-delay: 0ms;
          }
          
          .force-hover.morph-tool .hover-state {
            opacity: 1;
            transition-delay: 100ms;
          }
          
          /* Motion safety */
          @media (prefers-reduced-motion: reduce) {
            .morph-tool .element { transition: none !important; }
          }
        `}</style>

        {/* Default state - First SVG */}
        <g className="element default-state">
          <rect x="8" y="8" width="41" height="7" rx="3.5" fill="#D2D5DB" />
          <rect x="8" y="17" width="19" height="8" rx="4" fill="#D2D5DB" />
          <rect x="8" y="32" width="41" height="19" rx="9.5" fill="#EA2227" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9203 36.0502C23.7986 36.0001 23.6648 35.9871 23.5357 36.013C23.4066 36.0388 23.2881 36.1023 23.1951 36.1954C23.102 36.2886 23.0386 36.4071 23.0129 36.5362C22.9871 36.6653 23.0002 36.7991 23.0503 36.9208L27.717 48.2542C27.767 48.3756 27.8517 48.4795 27.9606 48.553C28.0694 48.6264 28.1975 48.6661 28.3288 48.6671C28.4601 48.668 28.5888 48.6301 28.6986 48.5582C28.8085 48.4863 28.8947 48.3835 28.9463 48.2628L30.7363 44.0862C30.8038 43.9289 30.9291 43.8036 31.0863 43.7362L35.263 41.9462C35.3837 41.8945 35.4865 41.8083 35.5584 41.6984C35.6303 41.5886 35.6682 41.4599 35.6672 41.3286C35.6663 41.1973 35.6266 41.0692 35.5532 40.9604C35.4797 40.8515 35.3758 40.7668 35.2543 40.7168L23.9203 36.0502Z"
            fill="#FAFAFA"
          />
        </g>

        {/* Hover state - Second SVG with adjusted positioning */}
        <g className="element hover-state">
          {/* Removed clipPath to prevent cutting off */}
          <rect
            x="7.86621"
            y="14.0938"
            width="41"
            height="7"
            rx="3.5"
            transform="rotate(-16.8545 7.86621 14.0938)"
            fill="#D2D5DB"
          />
          <rect
            x="8.42383"
            y="25.8848"
            width="19"
            height="8"
            rx="4"
            transform="rotate(-51.1232 8.42383 25.8848)"
            fill="#D2D5DB"
          />
          {/* Adjusted the Y position to prevent cutting off at bottom */}
          <rect
            x="19.6104"
            y="17.7275"
            width="41"
            height="19"
            rx="9.5"
            transform="rotate(41.9678 19.6104 17.7275)"
            fill="#EA2227"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9203 36.0502C23.7986 36.0001 23.6648 35.9871 23.5357 36.013C23.4066 36.0388 23.2881 36.1023 23.1951 36.1954C23.102 36.2886 23.0386 36.4071 23.0129 36.5362C22.9871 36.6653 23.0002 36.7991 23.0503 36.9208L27.717 48.2542C27.767 48.3756 27.8517 48.4795 27.9606 48.553C28.0694 48.6264 28.1975 48.6661 28.3288 48.6671C28.4601 48.668 28.5888 48.6301 28.6986 48.5582C28.8085 48.4863 28.8947 48.3835 28.9463 48.2628L30.7363 44.0862C30.8038 43.9289 30.9291 43.8036 31.0863 43.7362L35.263 41.9462C35.3837 41.8945 35.4865 41.8083 35.5584 41.6984C35.6303 41.5886 35.6682 41.4599 35.6672 41.3286C35.6663 41.1973 35.6266 41.0692 35.5532 40.9604C35.4797 40.8515 35.3758 40.7668 35.2543 40.7168L23.9203 36.0502Z"
            fill="#FAFAFA"
          />
        </g>
      </svg>
    </div>
  );
}
export function Webdesignicon({
  size,
  className = "",
  label = "Sliding stacked cards",
  durationMs = 800,
  isHovered = false,
}: ServicesIconsProps) {
  const vars = {
    ["--dur" as any]: `${durationMs}ms`,
  } as React.CSSProperties;

  const sizestyles: React.CSSProperties = {};

  if (size) {
    sizestyles.width = size;
    sizestyles.height = size;
  }

  return (
    <div
      className={`inline-block ${className}`}
      style={{ ...sizestyles, lineHeight: 0 }}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 57 57"
        xmlns="http://www.w3.org/2000/svg"
        className={`cards-hover ${isHovered ? "force-hover" : ""}`}
        style={vars}
      >
        <style>{`
          .cards-hover { --ease: cubic-bezier(.2,.8,.2,1); }

          /* Layering:
             - base-first: EXACT first SVG (always rendered). Fades out on hover.
             - anim-second: built in final positions; starts offset to match first,
               moves to zero on hover and fades in. */

          .base-first {
            transition: opacity var(--dur) var(--ease);
            opacity: 1;
          }
          .cards-hover:hover .base-first,
          .cards-hover:focus-visible .base-first,
          .cards-hover.force-hover .base-first
          {
            opacity: 0;
          }

          .anim-second {
            transition: opacity var(--dur) var(--ease);
            opacity: 0;
          }
          .cards-hover:hover .anim-second,
          .cards-hover:focus-visible .anim-second,
          .cards-hover.force-hover .anim-second 
          {
            opacity: 1;
          }

          .piece {
            transform-box: fill-box;
            transform-origin: center;
            transition: transform var(--dur) var(--ease);
            will-change: transform, opacity;
          }

          /* Offsets so the anim layer visually MATCHES the first SVG before hover */
          /* Final (second) white y=13.2285 → first white y=22.2285 => +9px */
          .white { transform: translateY(9px); }
          /* Grey: 13.1143 → 14.1143 => +1px */
          .grey  { transform: translateY(1px); }
          /* Red: 13 → 6 => -7px */
          .red   { transform: translateY(-7px); }
          /* Text block: second baseline around 26–32 → first 37–43 => +11px */
          .text  { transform: translateY(11px); }

          .cards-hover:hover .piece,
          .cards-hover:focus-visible .piece,
          .cards-hover.force-hover .piece {
            transform: translateY(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .base-first,
            .anim-second,
            .piece {
              transition: none !important;
            }
          }
        `}</style>

        {/* ---------- BASE LAYER: EXACT FIRST SVG (no changes) ---------- */}
        <g className="base-first">
          <g clipPath="url(#clip0_first)">
            <rect
              x="8"
              y="22.2285"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#FAFAFA"
            />
          </g>
          <g clipPath="url(#clip1_first)">
            <rect
              x="8"
              y="14.1143"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#D2D5DB"
            />
          </g>
          <g clipPath="url(#clip2_first)">
            <rect
              x="8"
              y="6"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#EA2227"
            />
            <path
              d="M20.82 37.61C20.82 39.73 19.22 41 17.2 41H15.1V34.32H17.27C19.39 34.32 20.82 35.64 20.82 37.61ZM20.16 37.61C20.16 36 18.96 34.92 17.27 34.92H15.74V40.4H17.2C18.82 40.4 20.16 39.37 20.16 37.61ZM23.323 41.1C21.893 41.1 20.823 40.01 20.823 38.56C20.823 37.16 21.793 36.03 23.213 36.03C24.623 36.03 25.543 37.04 25.543 38.42V38.79H21.433C21.533 39.78 22.293 40.51 23.323 40.51C23.983 40.51 24.583 40.26 24.933 39.64L25.413 39.9C24.973 40.7 24.213 41.1 23.323 41.1ZM21.453 38.29H24.923C24.903 37.28 24.193 36.62 23.213 36.62C22.203 36.62 21.543 37.35 21.453 38.29ZM27.4766 41.09C26.6566 41.09 25.9766 40.74 25.6166 40.03L26.1266 39.75C26.4166 40.31 26.8666 40.51 27.4566 40.51C28.1066 40.51 28.6466 40.23 28.6466 39.67C28.6466 38.45 25.7666 39.3 25.7666 37.46C25.7666 36.65 26.5066 36.08 27.4366 36.08C28.2266 36.08 28.8266 36.42 29.1466 37L28.6366 37.29C28.3766 36.8 27.9566 36.66 27.4466 36.66C26.9066 36.66 26.3866 36.95 26.3866 37.45C26.3866 38.63 29.2666 37.82 29.2666 39.66C29.2666 40.54 28.4366 41.09 27.4766 41.09ZM30.1323 34.98C29.8823 34.98 29.6823 34.78 29.6823 34.52C29.6823 34.26 29.8823 34.06 30.1323 34.06C30.3823 34.06 30.5723 34.26 30.5723 34.52C30.5723 34.78 30.3823 34.98 30.1323 34.98ZM29.8223 36.15H30.4423V41H29.8223V36.15ZM33.3695 43.34C32.3895 43.34 31.5195 42.91 31.0795 42.1L31.5995 41.81C31.9495 42.42 32.5995 42.75 33.3595 42.75C34.5395 42.75 35.3595 41.89 35.3595 40.58V39.9C35.0195 40.58 34.2995 41.08 33.3695 41.08C31.9795 41.08 30.8895 39.97 30.8895 38.56C30.8895 37.18 31.9795 36.04 33.4295 36.04C34.8595 36.04 35.9795 37.14 35.9795 38.56V40.6C35.9795 42.26 34.8895 43.34 33.3695 43.34ZM33.4295 40.49C34.4995 40.49 35.3595 39.62 35.3595 38.55C35.3595 37.49 34.4995 36.63 33.4295 36.63C32.3695 36.63 31.5095 37.49 31.5095 38.55C31.5095 39.62 32.3695 40.49 33.4295 40.49ZM38.8873 36.63C37.7873 36.63 37.1973 37.54 37.1973 38.57V41H36.5773V38.52C36.5773 37.12 37.4273 36.04 38.8873 36.04C40.3773 36.04 41.2473 37.11 41.2473 38.51V41H40.6273V38.58C40.6273 37.54 40.0173 36.63 38.8873 36.63Z"
              fill="white"
            />
          </g>
        </g>

        {/* ---------- ANIMATED LAYER: SECOND SVG (moves into place on hover) ---------- */}
        <g className="anim-second">
          {/* White card (final y=13.2285), starts +9px to match first */}
          <g clipPath="url(#clipWhite_final)">
            <rect
              className="piece white"
              x="8"
              y="13.2285"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#FAFAFA"
            />
          </g>

          {/* Grey card (final y=13.1143), starts +1px */}
          <g clipPath="url(#clipGrey_final)">
            <rect
              className="piece grey"
              x="8"
              y="13.1143"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#D2D5DB"
            />
          </g>

          {/* Red card + text (final y=13), card starts -7px; text starts +11px */}
          <g clipPath="url(#clipRed_final)">
            <rect
              className="piece red"
              x="8"
              y="13"
              width="41"
              height="28.1143"
              rx="5.54054"
              fill="#EA2227"
            />
            <path
              className="piece text"
              d="M20.82 26.61C20.82 28.73 19.22 30 17.2 30H15.1V23.32H17.27C19.39 23.32 20.82 24.64 20.82 26.61ZM20.16 26.61C20.16 25 18.96 23.92 17.27 23.92H15.74V29.4H17.2C18.82 29.4 20.16 28.37 20.16 26.61ZM23.323 30.1C21.893 30.1 20.823 29.01 20.823 27.56C20.823 26.16 21.793 25.03 23.213 25.03C24.623 25.03 25.543 26.04 25.543 27.42V27.79H21.433C21.533 28.78 22.293 29.51 23.323 29.51C23.983 29.51 24.583 29.26 24.933 28.64L25.413 28.9C24.973 29.7 24.213 30.1 23.323 30.1ZM21.453 27.29H24.923C24.903 26.28 24.193 25.62 23.213 25.62C22.203 25.62 21.543 26.35 21.453 27.29ZM27.4766 30.09C26.6566 30.09 25.9766 29.74 25.6166 29.03L26.1266 28.75C26.4166 29.31 26.8666 29.51 27.4566 29.51C28.1066 29.51 28.6466 29.23 28.6466 28.67C28.6466 27.45 25.7666 28.3 25.7666 26.46C25.7666 25.65 26.5066 25.08 27.4366 25.08C28.2266 25.08 28.8266 25.42 29.1466 26L28.6366 26.29C28.3766 25.8 27.9566 25.66 27.4466 25.66C26.9066 25.66 26.3866 25.95 26.3866 26.45C26.3866 27.63 29.2666 26.82 29.2666 28.66C29.2666 29.54 28.4366 30.09 27.4766 30.09ZM30.1323 23.98C29.8823 23.98 29.6823 23.78 29.6823 23.52C29.6823 23.26 29.8823 23.06 30.1323 23.06C30.3823 23.06 30.5723 23.26 30.5723 23.52C30.5723 23.78 30.3823 23.98 30.1323 23.98ZM29.8223 25.15H30.4423V30H29.8223V25.15ZM33.3695 32.34C32.3895 32.34 31.5195 31.91 31.0795 31.1L31.5995 30.81C31.9495 31.42 32.5995 31.75 33.3595 31.75C34.5395 31.75 35.3595 30.89 35.3595 29.58V28.9C35.0195 29.58 34.2995 30.08 33.3695 30.08C31.9795 30.08 30.8895 28.97 30.8895 27.56C30.8895 26.18 31.9795 25.04 33.4295 25.04C34.8595 25.04 35.9795 26.14 35.9795 27.56V29.6C35.9795 31.26 34.8895 32.34 33.3695 32.34ZM33.4295 29.49C34.4995 29.49 35.3595 28.62 35.3595 27.55C35.3595 26.49 34.4995 25.63 33.4295 25.63C32.3695 25.63 31.5095 26.49 31.5095 27.55C31.5095 28.62 32.3695 29.49 33.4295 29.49ZM38.8873 25.63C37.7873 25.63 37.1973 26.54 37.1973 27.57V30H36.5773V27.52C36.5773 26.12 37.4273 25.04 38.8873 25.04C40.3773 25.04 41.2473 26.11 41.2473 27.51V30H40.6273V27.58C40.6273 26.54 40.0173 25.63 38.8873 25.63Z"
              fill="white"
            />
          </g>
        </g>

        {/* CLIPS (separate ids for each layer to avoid collisions) */}
        <defs>
          {/* First SVG clips */}
          <clipPath id="clip0_first">
            <rect
              width="41"
              height="28.1143"
              transform="translate(8 22.2285)"
            />
          </clipPath>
          <clipPath id="clip1_first">
            <rect
              width="41"
              height="28.1143"
              transform="translate(8 14.1143)"
            />
          </clipPath>
          <clipPath id="clip2_first">
            <rect width="41" height="28.1143" transform="translate(8 6)" />
          </clipPath>

          {/* Second SVG clips */}
          <clipPath id="clipWhite_final">
            <rect
              width="41"
              height="28.1143"
              transform="translate(8 13.2285)"
            />
          </clipPath>
          <clipPath id="clipGrey_final">
            <rect
              width="41"
              height="28.1143"
              transform="translate(8 13.1143)"
            />
          </clipPath>
          <clipPath id="clipRed_final">
            <rect width="41" height="28.1143" transform="translate(8 13)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
export function SaasdesignIcon({
  size,
  className = "",
  label = "Tool icon",
  durationMs = 800,
  arrowHoverDeg = 65, // change if you want more/less rotation
  nutHoverDeg = 30,
  isHovered = false,
}: ServicesIconsProps & { arrowHoverDeg?: number; nutHoverDeg?: number }) {
  const vars = {
    ["--dur" as any]: `${durationMs}ms`,
    ["--ease" as any]: "cubic-bezier(.22,1,.36,1)",
    ["--arrow-hover-deg" as any]: `${arrowHoverDeg}deg`,
    ["--nut-hover-deg" as any]: `${nutHoverDeg}deg`,
  } as React.CSSProperties;


  const sizestyles: React.CSSProperties = {};

  if (size) {
    sizestyles.width = size;
    sizestyles.height = size;
  }

  return (
    <div
      className={`inline-block ${className}`}
      style={{ ...sizestyles, lineHeight: 0 }}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 57 57"
        xmlns="http://www.w3.org/2000/svg"
        className={`morph-tool ${isHovered ? "force-hover" : ""}`}
        style={vars}
      >
        <style>{`
          .morph-tool [data-part]{
            transform-box: fill-box;
            transform-origin: center;
            transition: transform var(--dur) var(--ease);
            will-change: transform;
            backface-visibility: hidden;
          }
          /* base poses */
          .morph-tool [data-part="arrow"] { transform: rotate(0deg); }
          .morph-tool [data-part="nut"]   { transform: rotate(0deg); }

          /* hover targets (no opacity changes at all) */
          .force-hover.morph-tool [data-part="arrow"] { transform: rotate(var(--arrow-hover-deg)); }
          .force-hover.morph-tool hover [data-part="nut"]   { transform: rotate(var(--nut-hover-deg)); }

          @media (prefers-reduced-motion: reduce){
            .morph-tool [data-part]{ transition: none; }
          }
        `}</style>

        {/* Nut */}
        <g data-part="nut">
          <path
            d="M38 14.7508L23 6L8 14.7508V32.2492L23 41L38 32.2492V14.7508ZM23 29.7752C21.3527 29.7752 19.7729 29.1141 18.608 27.9372C17.4432 26.7604 16.7888 25.1643 16.7888 23.5C16.7888 21.8357 17.4432 20.2396 18.608 19.0628C19.7729 17.8859 21.3527 17.2248 23 17.2248C24.6473 17.2248 26.2271 17.8859 27.392 19.0628C28.5568 20.2396 29.2112 21.8357 29.2112 23.5C29.2112 25.1643 28.5568 26.7604 27.392 27.9372C26.2271 29.1141 24.6473 29.7752 23 29.7752Z"
            fill="#EA2227"
          />
        </g>

        {/* Arrow */}
        <g data-part="arrow">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.5258 30.0831C29.324 30.0001 29.1021 29.9787 28.8881 30.0215C28.6741 30.0644 28.4777 30.1696 28.3234 30.324C28.1692 30.4784 28.0641 30.675 28.0214 30.889C27.9787 31.103 28.0003 31.3248 28.0835 31.5266L35.8199 50.3155C35.9028 50.5168 36.0433 50.6891 36.2237 50.8109C36.4041 50.9327 36.6165 50.9984 36.8342 51C37.0518 51.0015 37.2651 50.9387 37.4473 50.8195C37.6294 50.7003 37.7723 50.5299 37.858 50.3298L40.8254 43.4056C40.9372 43.1449 41.145 42.9371 41.4057 42.8253L48.3298 39.8578C48.5299 39.7721 48.7003 39.6292 48.8195 39.4471C48.9387 39.265 49.0015 39.0517 49 38.834C48.9984 38.6163 48.9327 38.4039 48.8109 38.2235C48.6891 38.0431 48.5168 37.9026 48.3155 37.8197L29.5258 30.0831Z"
            fill="#D2D5DB"
          />
        </g>
      </svg>
    </div>
  );
}
export function BrandingIcon({
  size,
  className = "",
  label = "Morphing pill with tool",
  durationMs = 800,
  isHovered = false,
}: ServicesIconsProps) {
  const vars = {
    ["--dur" as any]: `${durationMs}ms`,
    ["--ease" as any]: "cubic-bezier(.2,.8,.2,1)",
  } as React.CSSProperties;

  const sizestyles: React.CSSProperties = {}

  if (size) {
    sizestyles.width = size
    sizestyles.height = size
  }

  return (
    <div
      className={`morph-tool inline-block ${className} ${isHovered ? "force-hover" : ""
        }`}
      style={{ ...sizestyles, lineHeight: 0, ...vars }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          /* Pen sliding animation */
          .morph-tool .tool-pen {
            transform-box: fill-box;
            transform-origin: center;
            will-change: transform;
            transition: transform var(--dur) var(--ease);
            transform: translate(0, 0);
          }

          /* Hover State: Slide pen to "write" position */
          .force-hover.morph-tool .tool-pen {
            transform: translate(10.5742px, -14.4258px);
          }

          /* motion safety */
          @media (prefers-reduced-motion: reduce) {
            .morph-tool .tool-pen { transition: none !important; }
          }
        `}</style>

        <g clipPath="url(#clip0_1091_27310)">
          <rect x="8" y="13" width="41" height="19" rx="9.5" fill="#EA2227" />
          <path d="M20.105 24.9997H17.6846V19.2267H20.105C21.5589 19.2267 22.4313 19.8681 22.4313 20.8602C22.4313 21.4846 22.1063 21.9122 21.6017 22.1346C22.1148 22.3056 22.474 22.6648 22.474 23.3662C22.474 24.4438 21.5161 24.9997 20.105 24.9997ZM19.2668 20.5096V21.5102H20.1905C20.6352 21.5102 20.849 21.3221 20.849 20.9885C20.849 20.6977 20.6438 20.5096 20.1905 20.5096H19.2668ZM19.2668 22.7931V23.7168H20.1905C20.6352 23.7168 20.8918 23.5885 20.8918 23.255C20.8918 22.8958 20.6352 22.7931 20.1905 22.7931H19.2668Z" fill="#FAFAFA" />
          <path d="M24.6986 24.9997H23.1334V19.2267H25.5538C26.9222 19.2267 27.9657 19.8681 27.9657 21.1425C27.9657 21.9037 27.538 22.528 26.8624 22.7418C27.1532 22.93 27.3413 23.2635 27.5979 23.7852L28.188 24.9997H26.4689L25.9301 23.9135C25.7334 23.5201 25.5111 23.3747 24.9979 23.3747H24.7071L24.6986 24.9997ZM25.5709 20.6806H24.7157L24.7071 21.9721H25.5538C26.0157 21.9721 26.3407 21.7155 26.3407 21.305C26.3407 20.8688 26.0157 20.6806 25.5709 20.6806Z" fill="#FAFAFA" />
          <path d="M30.2116 24.9997H28.7149V20.0734C28.7149 19.4576 29.1939 19.0898 29.6985 19.0898C30.1004 19.0898 30.4511 19.2267 30.6564 19.5517L32.6919 22.776V19.2267H34.1886V24.153C34.1886 24.7688 33.7096 25.128 33.205 25.128C32.8116 25.128 32.4524 24.9912 32.2471 24.6662L30.2116 21.4418V24.9997Z" fill="#FAFAFA" />
          <path d="M40.4894 22.1346C40.4894 23.8879 39.1894 24.9997 37.342 24.9997H35.0584V19.2267H37.342C39.2321 19.2267 40.4894 20.3813 40.4894 22.1346ZM38.8644 22.1346C38.8644 21.2708 38.2657 20.6806 37.342 20.6806H36.6407V23.5885H37.342C38.2657 23.5885 38.8644 23.0069 38.8644 22.1346Z" fill="#FAFAFA" />

          {/* Pen Tool */}
          <path className="tool-pen" fillRule="evenodd" clipRule="evenodd" d="M45.1532 42.6851L43.4103 40.9635C43.3713 41.0026 43.3294 41.0394 43.2847 41.0739L39.0353 44.301C38.9907 44.3348 38.944 44.3653 38.8952 44.3922L40.0857 46.5334C40.1514 46.6515 40.2418 46.754 40.3505 46.8342C40.4593 46.9143 40.5841 46.9702 40.7163 46.9979C40.8486 47.0257 40.9853 47.0247 41.1171 46.995C41.2489 46.9653 41.3728 46.9077 41.4805 46.826L45.0606 44.1071C45.1682 44.0254 45.257 43.9215 45.321 43.8025C45.385 43.6835 45.4226 43.5521 45.4314 43.4172C45.4402 43.2824 45.4199 43.1472 45.3719 43.0209C45.3239 42.8946 45.2493 42.7801 45.1532 42.6851ZM41.9899 35.6578L34.9527 33.5388L37.3327 36.6727L37.6599 36.4242C37.7845 36.3297 37.9415 36.2884 38.0964 36.3096C38.2513 36.3308 38.3915 36.4127 38.4861 36.5372C38.5806 36.6617 38.6219 36.8187 38.6007 36.9737C38.5795 37.1286 38.4976 37.2688 38.3731 37.3634L36.7796 38.5735C36.655 38.6681 36.498 38.7093 36.3431 38.6881C36.1882 38.6669 36.048 38.5851 35.9534 38.4605C35.8588 38.336 35.8176 38.179 35.8388 38.0241C35.86 37.8691 35.9418 37.729 36.0664 37.6344L36.3936 37.3859L34.0136 34.252L34.1656 41.5996C34.1699 41.8063 34.2419 42.0059 34.3706 42.1676C34.4994 42.3294 34.6777 42.4443 34.8781 42.4949L38.3221 43.3618L42.5715 40.1348L42.661 36.5845C42.6661 36.3778 42.6032 36.1752 42.482 36.0077C42.3607 35.8403 42.1878 35.7173 41.9899 35.6578Z" fill="#D2D5DB" />
        </g>
        <defs>
          <clipPath id="clip0_1091_27310">
            <rect width="57" height="57" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
export function WebdevelopmentIcon({
  size,
  className = "",
  label = "Morphing pill with tool",
  durationMs = 800,
  isHovered = false,
}: ServicesIconsProps) {
  const vars = {
    ["--dur" as any]: `${durationMs}ms`,
    ["--ease" as any]: "cubic-bezier(.2,.8,.2,1)",
  } as React.CSSProperties;

  const sizestyles: React.CSSProperties = {};

  if (size) {
    sizestyles.width = size;
    sizestyles.height = size;
  }

  return (
    <div
      className={`morph-tool inline-block ${className} ${isHovered ? "force-hover" : ""
        }`}
      style={{ ...sizestyles, lineHeight: 0, ...vars }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          /* transition animations */
          .morph-tool [data-state] { transition: opacity var(--dur) var(--ease); }

          /* base easing & transform animation for subtle rotation */
          .morph-tool .pill-state { 
            transform-box: fill-box;
            transform-origin: center;
            transition: transform var(--dur) var(--ease);
          }

          /* default visibility */
          .morph-tool [data-state="a"] { opacity: 1; }
          .morph-tool [data-state="b"] { opacity: 0; }

          /* on hover, cross-fade + add slight rotation */
          .force-hover.morph-tool [data-state="a"] { opacity: 0; }
          .force-hover.morph-tool [data-state="b"] { opacity: 1; }
          .force-hover.morph-tool .pill-a { transform: rotate(-6deg); }
          .force-hover.morph-tool .pill-b { transform: rotate(0deg); }
          .morph-tool .pill-b { transform: rotate(6deg); }
        `}</style>

        {/* STATE A: Regular pill */}
        <g data-state="a" className="pill-state pill-a">
          <path
            d="M29 25.5C38.3883 25.5 46 21.6962 46 17C46 12.3038 38.3883 8.5 29 8.5C19.6117 8.5 12 12.3038 12 17C12 21.6962 19.6117 25.5 29 25.5Z"
            fill="#EA2227"
          />
          <path
            opacity="0.5"
            d="M12 29.5V41.5C12 45.92 19.6117 49.5 29 49.5C38.3883 49.5 46 45.92 46 41.5V29.5C46 33.92 38.3883 37.5 29 37.5C19.6117 37.5 12 33.92 12 29.5Z"
            fill="#D2D5DB"
          />
          <path
            d="M12 16.5V29.1C12 33.741 19.6117 37.5 29 37.5C38.3883 37.5 46 33.741 46 29.1V16.5C46 21.141 38.3883 24.9 29 24.9C19.6117 24.9 12 21.141 12 16.5Z"
            fill="#D31F23"
          />
        </g>

        {/* STATE B: Tilted pill */}
        <g data-state="b" className="pill-state pill-b">
          <path
            d="M29.7012 25.3991C38.7121 22.7642 44.9504 16.977 43.6323 12.4695C42.3143 7.96199 33.9409 6.44743 24.93 9.08232C15.9191 11.7172 9.68084 17.5044 10.9989 22.0119C12.3169 26.5194 20.6903 28.0339 29.7012 25.3991Z"
            fill="#EA2227"
          />
          <path
            opacity="0.5"
            d="M16.5459 24.2061L12.3674 35.4551C10.8283 39.5984 16.7171 45.6049 25.5178 48.874C34.3185 52.143 42.7005 51.4376 44.2396 47.2942L48.4181 36.0452C46.879 40.1886 38.497 40.894 29.6963 37.6249C20.8956 34.3559 15.0068 28.3494 16.5459 24.2061Z"
            fill="#D2D5DB"
          />
          <path
            d="M10.8594 21.5322L14.3957 33.6258C15.6982 38.0803 24.059 39.5519 33.0699 36.917C42.0809 34.2821 48.3317 28.5379 47.0291 24.0834L43.4928 11.9898C44.7954 16.4443 38.5446 22.1885 29.5336 24.8234C20.5227 27.4583 12.1619 25.9867 10.8594 21.5322Z"
            fill="#D31F23"
          />
        </g>
      </svg>
    </div>
  );
}

export const WorkflowElementArrowIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 49}
      height={height ?? 58}
      viewBox="0 0 49 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.8384 1.67245C4.01099 -0.214547 -0.102179 1.81429 0.203071 5.48962L0.292487 6.55954C1.65593 22.92 4.5358 39.1184 8.89499 54.9463C9.93407 58.7203 15.1542 59.0471 16.739 55.5475L23.3034 41.0651C23.9293 39.6807 25.4525 38.7927 27.1082 38.9685L43.3451 40.7075C47.0728 41.1083 49.706 36.5573 46.7182 33.6744C34.69 22.0709 21.6491 11.5653 7.75107 2.28295L6.8384 1.67245Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export const WokrflowChipsBottomArrowIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 16}
      height={height ?? 42}
      viewBox="0 0 16 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.29289 41.7071C7.68342 42.0976 8.31658 42.0976 8.7071 41.7071L15.0711 35.3431C15.4616 34.9526 15.4616 34.3195 15.0711 33.9289C14.6805 33.5384 14.0474 33.5384 13.6569 33.9289L8 39.5858L2.34314 33.9289C1.95262 33.5384 1.31946 33.5384 0.928931 33.9289C0.538406 34.3195 0.538406 34.9526 0.928931 35.3431L7.29289 41.7071ZM8 0L7 -4.37114e-08L7 41L8 41L9 41L9 4.37114e-08L8 0Z"
        fill="white"
      />
    </svg>
  );
};

export const InteractivedesignIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 83}
      height={height ?? 89}
      viewBox="0 0 83 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.140625"
        y="32.7417"
        width="82.7193"
        height="56.7218"
        rx="11.1783"
        fill="#FAFAFA"
      />
      <rect
        x="0.140625"
        y="16.3706"
        width="82.7193"
        height="56.7218"
        rx="11.1783"
        fill="#D2D5DB"
      />
      <rect
        x="0.140625"
        width="82.7193"
        height="56.7218"
        rx="11.1783"
        fill="#EA2227"
      />
    </svg>
  );

};
export const InteractivePlayIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 191}
      height={height ?? 191}
      viewBox="0 0 191 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_402_2351)">
        <circle cx="95.5" cy="95.5" r="95.5" fill="#D31F23" />
        <path
          d="M21.1382 97.2832L21.1292 98.7112L11.7494 98.6525L11.7681 95.6706C11.7838 93.1506 12.9281 91.5198 15.112 91.5334C17.352 91.5474 18.4615 93.2204 18.4464 95.6424L18.4362 97.2663L21.1382 97.2832ZM13.0843 95.6368L13.0743 97.2328L17.1063 97.258L17.1162 95.662C17.1259 94.1221 16.5308 93.0123 15.1028 93.0034C13.7309 92.9948 13.0942 94.0549 13.0843 95.6368ZM12.1963 87.2093L20.2043 88.1583L20.7529 83.5288L22.0598 83.6836L21.4979 88.4245C21.3859 89.3698 20.8565 89.6736 20.064 89.5797L12.0282 88.6273L12.1963 87.2093ZM22.2145 82.8566L14.7692 78.483C13.9742 78.0094 13.7216 77.2458 13.9002 76.4824C14.082 75.7054 14.6473 75.1331 15.5699 75.0615L24.1827 74.4458L23.851 75.8635L21.4591 76.0083L20.4774 80.2646L22.5431 81.4525L22.2145 82.8566ZM15.4589 77.3791L19.299 79.5862L20.1188 76.0828L15.7013 76.3431C15.3927 76.3716 15.2181 76.5032 15.1575 76.7622C15.0937 77.0349 15.1917 77.2304 15.4589 77.3791ZM20.9866 71.0477L15.3488 71.4052L15.8679 69.9702L21.0561 69.7032C21.4113 69.6679 21.6074 69.6197 21.6836 69.4091C21.7598 69.1984 21.6315 69.018 21.3895 68.7816L17.5728 65.2571L18.0966 63.809L22.1915 67.7169C22.6719 68.1587 22.9167 68.6343 22.9665 69.1138L25.7839 70.133L25.2981 71.4758L22.4808 70.4567C22.1488 70.7981 21.6432 71.0023 20.9866 71.0477ZM21.0361 57.5718L21.7077 56.3116L29.9856 60.7231L29.314 61.9833L21.0361 57.5718ZM32.1188 57.2796L31.3647 58.409L24.5417 53.8535C23.8315 53.3793 23.7349 52.6415 24.1314 52.0477C24.4501 51.5703 24.854 51.3687 25.4093 51.4195L33.7375 52.2329C33.8656 52.268 33.9278 52.2758 33.9744 52.2059C34.0055 52.1593 33.99 52.1321 33.9201 52.0855L27.2718 47.6466L28.0258 46.5172L34.8605 51.0805C35.5707 51.5547 35.6323 52.3197 35.2747 52.8553C34.9793 53.2977 34.5365 53.5575 33.9696 53.4989L25.6375 52.6661C25.5288 52.6272 25.4667 52.6194 25.4278 52.6776C25.3812 52.7475 25.4122 52.8019 25.5053 52.864L32.1188 57.2796ZM34.2552 38.942L35.252 39.8013L33.3688 41.9856L39.4763 47.2511L38.5439 48.3327L32.4364 43.0671L30.5623 45.2408L29.5656 44.3815L34.2552 38.942ZM43.5496 43.01L42.5223 43.9611L36.1501 37.0778L38.5438 34.8618C40.0027 33.5113 41.7612 33.1234 43.0737 34.5411C43.9772 35.5171 44.0376 36.7776 43.2621 37.8771C44.0642 37.6306 44.8852 37.9199 46.0372 38.3605L47.8337 39.044L46.7036 40.0902L45.0536 39.4619C43.8913 39.0307 43.0577 38.8104 42.092 39.7044L41.2393 40.4938L43.5496 43.01ZM39.4481 35.818L38.092 37.0734L40.3738 39.5589L41.7197 38.313C42.6032 37.495 42.851 36.4644 42.0806 35.6322C41.2912 34.7795 40.2803 35.0476 39.4481 35.818ZM52.8549 35.6223C50.6177 37.187 47.6852 36.6582 46.1046 34.3981C44.5479 32.1724 45.0687 29.2285 47.2944 27.6719C49.5086 26.1233 52.441 26.6521 53.9977 28.8777C55.5783 31.1378 55.0691 34.0737 52.8549 35.6223ZM52.0766 34.5095C53.5909 33.4504 53.9244 31.3379 52.793 29.7202C51.6777 28.1256 49.5985 27.7175 48.0727 28.7847C46.5468 29.8519 46.1939 31.9609 47.3092 33.5556C48.4405 35.1732 50.5392 35.5847 52.0766 34.5095ZM64.376 23.3024L64.9006 24.448L60.4965 26.4648L59.9719 25.3192L64.376 23.3024ZM74.3352 25.0648L72.9561 25.4352L70.523 16.3763L73.403 15.6028C75.8367 14.9491 77.7128 15.6194 78.2793 17.7287C78.8603 19.892 77.5419 21.4058 75.2028 22.0341L73.6344 22.4553L74.3352 25.0648ZM73.7849 16.8628L72.2435 17.2768L73.2894 21.1708L74.8308 20.7568C76.318 20.3574 77.23 19.4891 76.8596 18.11C76.5038 16.7849 75.3128 16.4525 73.7849 16.8628ZM81.7289 13.7779L82.8944 21.7572L87.5075 21.0834L87.6977 22.3855L82.9738 23.0756C82.0318 23.2132 81.6008 22.7809 81.4855 21.9913L80.3158 13.9843L81.7289 13.7779ZM88.5377 22.3197L90.8252 13.9934C91.0758 13.1026 91.7475 12.6601 92.5311 12.6342C93.3286 12.6077 94.0282 13.0048 94.3372 13.877L97.1709 22.0337L95.7157 22.0819L94.9541 19.8099L90.5889 19.9685L89.9789 22.272L88.5377 22.3197ZM92.0704 14.3724L90.9376 18.6542L94.5336 18.5351L93.1338 14.3371C93.0261 14.0465 92.8536 13.9122 92.5877 13.921C92.3079 13.9303 92.1446 14.0758 92.0704 14.3724ZM99.6034 18.0514L97.7681 12.7087L99.2893 12.8299L100.918 17.763C101.046 18.0962 101.145 18.2725 101.368 18.2903C101.591 18.3081 101.731 18.1367 101.895 17.8408L104.285 13.2281L105.821 13.3505L103.134 18.3328C102.835 18.9129 102.441 19.2747 101.992 19.4496L101.754 22.4361L100.33 22.3226L100.568 19.3361C100.151 19.1063 99.8208 18.6726 99.6034 18.0514ZM112.619 14.5213L114.012 14.8363L111.942 23.9852L110.55 23.6702L112.619 14.5213ZM115.827 25.1345L114.539 24.705L117.134 16.9222C117.404 16.1121 118.09 15.8244 118.768 16.0503C119.312 16.2318 119.613 16.5684 119.71 17.1173L121.122 25.3653C121.122 25.4982 121.131 25.5601 121.21 25.5867C121.263 25.6044 121.286 25.5823 121.312 25.5026L123.841 17.9191L125.129 18.3487L122.53 26.1447C122.259 26.9548 121.538 27.216 120.927 27.0122C120.422 26.8439 120.055 26.4853 119.962 25.923L118.568 17.6662C118.577 17.5511 118.568 17.4891 118.502 17.4669C118.422 17.4404 118.378 17.4846 118.342 17.5909L115.827 25.1345ZM134.088 22.3767L133.52 23.5639L130.918 22.3193L127.438 29.5939L126.15 28.9777L129.63 21.7031L127.041 20.4647L127.609 19.2775L134.088 22.3767ZM132.599 32.414L131.412 31.6713L136.388 23.7198L139.153 25.4502C140.838 26.5048 141.673 28.1005 140.648 29.7383C139.942 30.8658 138.742 31.2539 137.477 30.7932C137.925 31.5028 137.861 32.3709 137.737 33.5981L137.548 35.5108L136.242 34.6939L136.417 32.937C136.529 31.7023 136.523 30.8401 135.408 30.142L134.423 29.5256L132.599 32.414ZM138.467 26.5732L136.9 25.5929L135.098 28.4456L136.653 29.4185C137.674 30.0572 138.733 30.0266 139.335 29.0653C139.951 28.0803 139.428 27.1748 138.467 26.5732ZM142.162 39.4633C140.068 37.7127 139.812 34.7439 141.58 32.6276C143.322 30.5436 146.3 30.2771 148.384 32.0187C150.457 33.7514 150.713 36.7202 148.971 38.8043C147.203 40.9205 144.236 41.196 142.162 39.4633ZM143.033 38.4213C144.451 39.6063 146.578 39.3763 147.843 37.8616C149.091 36.3684 148.942 34.2548 147.513 33.0608C146.084 31.8667 143.956 32.0771 142.708 33.5703C141.443 35.085 141.594 37.2183 143.033 38.4213ZM157.075 47.3337L156.109 48.1427L152.999 44.4288L153.965 43.6199L157.075 47.3337ZM158.006 57.4072L157.289 56.1723L165.4 51.462L166.898 54.0408C168.163 56.22 168.005 58.2059 166.117 59.3027C164.18 60.4275 162.374 59.5492 161.158 57.4548L160.343 56.0504L158.006 57.4072ZM165.781 54.7379L164.98 53.3578L161.493 55.3825L162.294 56.7627C163.068 58.0944 164.144 58.7485 165.378 58.0315C166.565 57.3425 166.575 56.106 165.781 54.7379ZM170.823 61.5387L163.445 64.7932L165.326 69.0587L164.122 69.5898L162.195 65.2219C161.811 64.3508 162.112 63.8201 162.843 63.498L170.246 60.2322L170.823 61.5387ZM164.407 70.3819L173.042 70.4021C173.967 70.41 174.571 70.9419 174.802 71.6912C175.037 72.4538 174.837 73.233 174.077 73.7603L166.951 78.6369L166.522 77.2455L168.514 75.9138L167.215 71.7436L164.832 71.76L164.407 70.3819ZM173.004 71.7032L168.574 71.7348L169.634 75.1733L173.317 72.72C173.569 72.5398 173.653 72.338 173.575 72.0838C173.493 71.8162 173.309 71.6969 173.004 71.7032ZM171.429 79.9473L176.108 76.7827L176.388 78.2828L172.05 81.1417C171.762 81.352 171.617 81.4929 171.658 81.7131C171.699 81.9333 171.901 82.0239 172.23 82.1051L177.306 83.2101L177.588 84.724L172.078 83.4293C171.44 83.2919 170.988 83.0058 170.702 82.6176L167.756 83.1663L167.495 81.7625L170.44 81.2138C170.553 80.7512 170.886 80.319 171.429 79.9473ZM178.23 91.5784L178.291 93.0051L168.92 93.4063L168.859 91.9796L178.23 91.5784ZM168.83 97.4562L168.906 96.1004L177.097 96.5602C177.95 96.6081 178.408 97.1947 178.368 97.9076C178.336 98.4807 178.09 98.8595 177.586 99.0976L169.998 102.626C169.87 102.661 169.813 102.686 169.808 102.769C169.805 102.825 169.832 102.841 169.916 102.846L177.897 103.294L177.821 104.65L169.616 104.189C168.763 104.141 168.322 103.513 168.358 102.87C168.388 102.339 168.637 101.89 169.155 101.653L176.756 98.1396C176.87 98.1179 176.927 98.0931 176.931 98.0232C176.936 97.9393 176.881 97.9082 176.77 97.902L168.83 97.4562ZM176.314 114.328L175.018 114.096L175.528 111.257L167.59 109.833L167.842 108.428L175.78 109.852L176.286 107.027L177.582 107.259L176.314 114.328ZM166.239 115.556L166.641 114.215L175.626 116.908L174.69 120.032C174.119 121.937 172.802 123.164 170.951 122.609C169.677 122.228 168.985 121.173 169.094 119.832C168.528 120.451 167.674 120.619 166.458 120.825L164.563 121.148L165.006 119.673L166.746 119.376C167.966 119.157 168.796 118.924 169.174 117.663L169.508 116.55L166.239 115.556ZM173.425 119.668L173.956 117.898L170.728 116.916L170.201 118.673C169.856 119.826 170.166 120.84 171.252 121.165C172.365 121.499 173.1 120.754 173.425 119.668ZM161.968 126.642C163.105 124.16 165.901 123.131 168.409 124.279C170.878 125.41 171.92 128.212 170.789 130.681C169.664 133.138 166.868 134.167 164.398 133.036C161.891 131.888 160.843 129.099 161.968 126.642ZM163.203 127.207C162.433 128.887 163.215 130.878 165.01 131.7C166.78 132.51 168.779 131.809 169.554 130.116C170.33 128.423 169.566 126.426 167.796 125.615C166.002 124.794 163.984 125.502 163.203 127.207ZM158.265 143.099L157.233 142.376L160.011 138.408L161.044 139.131L158.265 143.099ZM148.79 146.624L149.79 145.605L156.485 152.176L154.396 154.304C152.631 156.102 150.674 156.477 149.115 154.947C147.517 153.378 147.884 151.405 149.581 149.676L150.718 148.517L148.79 146.624ZM153.427 153.412L154.545 152.273L151.668 149.449L150.55 150.588C149.471 151.687 149.126 152.898 150.145 153.898C151.124 154.859 152.319 154.541 153.427 153.412ZM148.161 160.097L143.098 153.82L139.469 156.747L138.643 155.723L142.359 152.726C143.1 152.128 143.691 152.281 144.192 152.902L149.272 159.2L148.161 160.097ZM137.954 156.207L140.232 164.536C140.471 165.43 140.119 166.154 139.458 166.576C138.785 167.005 137.981 167.02 137.27 166.427L130.674 160.856L131.901 160.072L133.714 161.638L137.389 159.276L136.739 156.983L137.954 156.207ZM138.968 164.845L137.759 160.584L134.726 162.521L138.071 165.418C138.312 165.613 138.529 165.641 138.753 165.497C138.989 165.347 139.055 165.138 138.968 164.845ZM130.593 165.52L134.882 169.197L133.509 169.863L129.605 166.435C129.326 166.213 129.152 166.111 128.951 166.208C128.749 166.306 128.715 166.525 128.724 166.863L129 172.051L127.614 172.723L127.406 167.067C127.37 166.415 127.527 165.903 127.826 165.525L126.518 162.83L127.802 162.206L129.11 164.902C129.586 164.889 130.091 165.095 130.593 165.52ZM121.16 175.143L119.8 175.578L116.944 166.643L118.304 166.208L121.16 175.143ZM113.013 167.622L114.342 167.339L116.05 175.363C116.228 176.198 115.782 176.794 115.084 176.943C114.522 177.063 114.092 176.925 113.73 176.501L108.332 170.107C108.265 169.992 108.226 169.944 108.144 169.961C108.089 169.973 108.081 170.003 108.099 170.085L109.763 177.904L108.435 178.187L106.724 170.149C106.546 169.314 107.036 168.723 107.666 168.589C108.186 168.478 108.684 168.601 109.049 169.038L114.436 175.449C114.487 175.553 114.526 175.602 114.595 175.587C114.677 175.57 114.693 175.509 114.669 175.399L113.013 167.622ZM98.6795 179.261L98.5662 177.95L101.439 177.701L100.745 169.667L102.168 169.544L102.862 177.578L105.721 177.331L105.835 178.642L98.6795 179.261ZM94.8677 169.858L96.2673 169.895L96.0209 179.272L92.76 179.186C90.7727 179.134 89.2432 178.183 89.2939 176.252C89.3288 174.923 90.1659 173.978 91.4888 173.733C90.7426 173.349 90.357 172.569 89.8402 171.449L89.0317 169.705L90.5712 169.745L91.3134 171.347C91.8442 172.468 92.2869 173.208 93.6024 173.242L94.764 173.273L94.8677 169.858ZM92.7806 177.87L94.628 177.919L94.7306 174.546L92.8972 174.498C91.6936 174.467 90.7965 175.031 90.7667 176.165C90.7362 177.326 91.647 177.84 92.7806 177.87ZM83.0472 168.652C85.7415 169.092 87.473 171.517 87.0281 174.239C86.5901 176.919 84.1628 178.665 81.4823 178.227C78.8157 177.791 77.0842 175.366 77.5223 172.685C77.9671 169.963 80.3806 168.216 83.0472 168.652ZM82.8282 169.992C81.0044 169.694 79.2914 170.974 78.973 172.922C78.6591 174.843 79.8638 176.586 81.7014 176.886C83.539 177.187 85.2635 175.922 85.5774 174.002C85.8958 172.054 84.6796 170.294 82.8282 169.992ZM75.0123 167.127L76.3787 167.542L73.6537 176.518L70.8003 175.652C68.389 174.919 67.1511 173.358 67.7855 171.269C68.4363 169.125 70.3558 168.538 72.6733 169.241L74.2273 169.713L75.0123 167.127ZM71.1424 174.38L72.6696 174.844L73.8409 170.986L72.3138 170.522C70.8402 170.075 69.607 170.329 69.1921 171.696C68.7936 173.009 69.6287 173.92 71.1424 174.38ZM62.772 172.801L65.999 165.41L61.7265 163.545L62.2531 162.339L66.6282 164.249C67.5007 164.63 67.6382 165.225 67.3189 165.956L64.0807 173.372L62.772 172.801ZM61.5056 161.951L55.1661 167.814C54.4829 168.438 53.6788 168.459 52.9997 168.067C52.3084 167.669 51.9241 166.962 52.1222 166.058L54.0233 157.635L55.2845 158.363L54.7315 160.694L58.5221 162.865L60.2566 161.231L61.5056 161.951ZM54.3088 166.834L57.532 163.797L54.4153 161.999L53.3872 166.303C53.3251 166.606 53.4007 166.812 53.6311 166.945C53.8737 167.085 54.0891 167.047 54.3088 166.834ZM49.848 159.717L48.566 165.218L47.3414 164.308L48.5805 159.263C48.6491 158.912 48.6595 158.711 48.4797 158.577C48.3 158.444 48.0902 158.514 47.7941 158.678L43.3194 161.317L42.0836 160.398L47.0057 157.603C47.5671 157.271 48.0931 157.173 48.5667 157.264L50.3543 154.859L51.5003 155.711L49.7126 158.116C49.9439 158.532 49.9938 159.075 49.848 159.717ZM36.9665 155.806L35.9511 154.802L42.5466 148.133L43.562 149.137L36.9665 155.806ZM39.8571 145.104L40.7237 146.149L34.4075 151.385C33.75 151.93 33.0153 151.811 32.5597 151.262C32.1934 150.82 32.1157 150.375 32.3232 149.857L35.484 142.11C35.5542 141.997 35.5794 141.94 35.5258 141.875C35.4901 141.832 35.4596 141.839 35.3949 141.892L29.2404 146.994L28.3737 145.948L34.7008 140.704C35.3582 140.159 36.1089 140.319 36.5199 140.814C36.8594 141.224 36.9818 141.723 36.7635 142.249L33.583 149.995C33.5146 150.088 33.4893 150.146 33.534 150.199C33.5876 150.264 33.6486 150.25 33.7348 150.178L39.8571 145.104ZM22.8958 137.815L24.0041 137.105L25.5591 139.534L32.3505 135.186L33.1205 136.389L26.3291 140.737L27.8766 143.154L26.7682 143.864L22.8958 137.815ZM29.4537 130.069L30.0699 131.326L21.6474 135.455L20.2116 132.526C19.3366 130.741 19.4697 128.945 21.2044 128.095C22.3987 127.509 23.6235 127.813 24.4541 128.872C24.4482 128.033 24.9609 127.329 25.7137 126.352L26.884 124.827L27.5618 126.21L26.4864 127.61C25.7398 128.6 25.2895 129.335 25.8687 130.517L26.3802 131.56L29.4537 130.069ZM21.3871 131.934L22.2005 133.594L25.2363 132.121L24.429 130.474C23.899 129.393 22.9828 128.86 21.9646 129.359C20.9212 129.871 20.888 130.916 21.3871 131.934ZM25.052 119.034C25.9065 121.627 24.556 124.283 21.9365 125.146C19.357 125.997 16.6875 124.65 15.8375 122.071C14.9918 119.505 16.3423 116.848 18.9218 115.998C21.5412 115.135 24.2063 116.468 25.052 119.034ZM23.7622 119.459C23.1838 117.704 21.2567 116.777 19.3819 117.395C17.5337 118.004 16.5444 119.877 17.1272 121.646C17.71 123.414 19.6282 124.359 21.4764 123.75C23.3512 123.132 24.3494 121.241 23.7622 119.459ZM16.5809 104.446L17.8292 104.275L18.487 109.074L17.2386 109.246L16.5809 104.446Z"
          fill="#FAFAFA"
        />
        <path
          d="M116.849 88.4985C122.384 91.6103 122.384 99.3897 116.849 102.502L89.4528 117.905C83.9182 121.017 77 117.127 77 110.903L77 80.0967C77 73.8731 83.9182 69.9834 89.4528 73.0952L116.849 88.4985Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_2351">
          <rect width="191" height="191" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const InteractiveSwitchIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 42}
      height={height ?? 46}
      viewBox="0 0 42 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.87207 36.5504C0.87207 41.6722 5.0241 45.8242 10.1459 45.8242C15.2677 45.8242 19.4197 41.6722 19.4197 36.5504L19.4197 10.1932C19.4197 5.07146 15.2677 0.919434 10.1459 0.919434C5.0241 0.919434 0.87207 5.07146 0.87207 10.1932L0.87207 36.5504Z"
        fill="#EA2227"
      />
      <path
        d="M2.82445 36.5504C2.82445 40.5939 6.10237 43.8718 10.1459 43.8718C14.1894 43.8718 17.4673 40.5939 17.4673 36.5504C17.4673 32.5069 14.1894 29.229 10.1459 29.229C6.10237 29.229 2.82445 32.5069 2.82445 36.5504Z"
        fill="#FAFAFA"
      />
      <path
        d="M23.3242 10.1932C23.3242 5.07146 27.4762 0.919434 32.598 0.919434C37.7198 0.919434 41.8718 5.07146 41.8718 10.1932V36.5504C41.8718 41.6722 37.7198 45.8242 32.598 45.8242C27.4762 45.8242 23.3242 41.6722 23.3242 36.5504L23.3242 10.1932Z"
        fill="#D2D5DB"
      />
      <path
        d="M25.2766 10.1932C25.2766 6.14973 28.5545 2.87181 32.598 2.87181C36.6415 2.87181 39.9195 6.14973 39.9195 10.1932C39.9195 14.2368 36.6415 17.5147 32.598 17.5147C28.5545 17.5147 25.2766 14.2368 25.2766 10.1932Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveAnnounceButtonIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 237}
      height={height ?? 45}
      viewBox="0 0 237 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.108398"
        y="0.687012"
        width="236"
        height="44"
        rx="6"
        fill="#FAFAFA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.3787 17.9458C29.696 18.2791 29.683 18.8066 29.3496 19.1239L19.72 28.2906C19.5556 28.4471 19.3344 28.5298 19.1076 28.5195C18.8808 28.5092 18.668 28.4067 18.5184 28.2359L14.8147 24.0051C14.5116 23.6589 14.5465 23.1324 14.8928 22.8292C15.2391 22.5261 15.7656 22.561 16.0688 22.9073L19.2002 26.4844L28.2005 17.9168C28.5339 17.5994 29.0613 17.6124 29.3787 17.9458Z"
        fill="#3DA755"
      />
      <path
        d="M48.835 28.687L47.4287 25.062H42.8506L41.4521 28.687H40.1084L44.5771 17.2183H45.7725L50.21 28.687H48.835ZM47.0303 23.8823L45.6943 20.2808C45.6631 20.187 45.611 20.0334 45.5381 19.8198C45.4704 19.6063 45.4001 19.3849 45.3271 19.1558C45.2542 18.9266 45.1943 18.7417 45.1475 18.6011C45.0954 18.8146 45.0381 19.0282 44.9756 19.2417C44.9183 19.45 44.861 19.6453 44.8037 19.8276C44.7464 20.0047 44.6969 20.1558 44.6553 20.2808L43.2959 23.8823H47.0303ZM55.6553 19.9683C56.6709 19.9683 57.4391 20.2183 57.96 20.7183C58.4808 21.2131 58.7412 22.0099 58.7412 23.1089V28.687H57.46V23.1948C57.46 22.4813 57.2959 21.9474 56.9678 21.5933C56.6449 21.2391 56.1475 21.062 55.4756 21.062C54.5277 21.062 53.861 21.3302 53.4756 21.8667C53.0902 22.4032 52.8975 23.1818 52.8975 24.2026V28.687H51.6006V20.1245H52.6475L52.8428 21.3589H52.9131C53.0954 21.0568 53.3271 20.8042 53.6084 20.6011C53.8896 20.3927 54.2048 20.2365 54.5537 20.1323C54.9027 20.0229 55.2699 19.9683 55.6553 19.9683ZM65.4678 19.9683C66.4834 19.9683 67.2516 20.2183 67.7725 20.7183C68.2933 21.2131 68.5537 22.0099 68.5537 23.1089V28.687H67.2725V23.1948C67.2725 22.4813 67.1084 21.9474 66.7803 21.5933C66.4574 21.2391 65.96 21.062 65.2881 21.062C64.3402 21.062 63.6735 21.3302 63.2881 21.8667C62.9027 22.4032 62.71 23.1818 62.71 24.2026V28.687H61.4131V20.1245H62.46L62.6553 21.3589H62.7256C62.9079 21.0568 63.1396 20.8042 63.4209 20.6011C63.7021 20.3927 64.0172 20.2365 64.3662 20.1323C64.7152 20.0229 65.0824 19.9683 65.4678 19.9683ZM78.6084 24.3901C78.6084 25.0933 78.5172 25.7209 78.335 26.2729C78.1527 26.825 77.8896 27.2912 77.5459 27.6714C77.2021 28.0516 76.7855 28.3433 76.2959 28.5464C75.8115 28.7443 75.262 28.8433 74.6475 28.8433C74.0745 28.8433 73.5485 28.7443 73.0693 28.5464C72.5954 28.3433 72.1839 28.0516 71.835 27.6714C71.4912 27.2912 71.223 26.825 71.0303 26.2729C70.8428 25.7209 70.749 25.0933 70.749 24.3901C70.749 23.4526 70.9079 22.6558 71.2256 21.9995C71.5433 21.3381 71.9964 20.8354 72.585 20.4917C73.1787 20.1427 73.8844 19.9683 74.7021 19.9683C75.4834 19.9683 76.1657 20.1427 76.749 20.4917C77.3376 20.8407 77.7933 21.3459 78.1162 22.0073C78.4443 22.6636 78.6084 23.4578 78.6084 24.3901ZM72.0928 24.3901C72.0928 25.0776 72.1839 25.674 72.3662 26.1792C72.5485 26.6844 72.8297 27.075 73.21 27.3511C73.5902 27.6271 74.0797 27.7651 74.6787 27.7651C75.2725 27.7651 75.7594 27.6271 76.1396 27.3511C76.5251 27.075 76.8089 26.6844 76.9912 26.1792C77.1735 25.674 77.2646 25.0776 77.2646 24.3901C77.2646 23.7078 77.1735 23.1193 76.9912 22.6245C76.8089 22.1245 76.5277 21.7391 76.1475 21.4683C75.7672 21.1974 75.2751 21.062 74.6709 21.062C73.7803 21.062 73.1266 21.3563 72.71 21.9448C72.2985 22.5334 72.0928 23.3485 72.0928 24.3901ZM87.9209 20.1245V28.687H86.8584L86.6709 27.4839H86.6006C86.4235 27.7808 86.1943 28.0308 85.9131 28.2339C85.6318 28.437 85.3141 28.5881 84.96 28.687C84.611 28.7912 84.2386 28.8433 83.8428 28.8433C83.1657 28.8433 82.598 28.7339 82.1396 28.5151C81.6813 28.2964 81.335 27.9578 81.1006 27.4995C80.8714 27.0412 80.7568 26.4526 80.7568 25.7339V20.1245H82.0693V25.6401C82.0693 26.3537 82.2308 26.8875 82.5537 27.2417C82.8766 27.5907 83.3688 27.7651 84.0303 27.7651C84.6657 27.7651 85.1709 27.6453 85.5459 27.4058C85.9261 27.1662 86.1995 26.8146 86.3662 26.3511C86.5329 25.8823 86.6162 25.3094 86.6162 24.6323V20.1245H87.9209ZM94.7178 19.9683C95.7334 19.9683 96.5016 20.2183 97.0225 20.7183C97.5433 21.2131 97.8037 22.0099 97.8037 23.1089V28.687H96.5225V23.1948C96.5225 22.4813 96.3584 21.9474 96.0303 21.5933C95.7074 21.2391 95.21 21.062 94.5381 21.062C93.5902 21.062 92.9235 21.3302 92.5381 21.8667C92.1527 22.4032 91.96 23.1818 91.96 24.2026V28.687H90.6631V20.1245H91.71L91.9053 21.3589H91.9756C92.1579 21.0568 92.3896 20.8042 92.6709 20.6011C92.9521 20.3927 93.2672 20.2365 93.6162 20.1323C93.9652 20.0229 94.3324 19.9683 94.7178 19.9683ZM103.905 28.8433C103.134 28.8433 102.455 28.6844 101.866 28.3667C101.278 28.049 100.819 27.5646 100.491 26.9136C100.163 26.2625 99.999 25.4422 99.999 24.4526C99.999 23.4162 100.171 22.5698 100.515 21.9136C100.864 21.2521 101.343 20.7625 101.952 20.4448C102.562 20.1271 103.254 19.9683 104.03 19.9683C104.457 19.9683 104.869 20.0125 105.265 20.1011C105.666 20.1844 105.994 20.2912 106.249 20.4214L105.858 21.5073C105.598 21.4032 105.296 21.3094 104.952 21.2261C104.614 21.1427 104.296 21.1011 103.999 21.1011C103.405 21.1011 102.91 21.2287 102.515 21.4839C102.124 21.7391 101.83 22.1141 101.632 22.6089C101.439 23.1037 101.343 23.7131 101.343 24.437C101.343 25.1297 101.437 25.7209 101.624 26.2104C101.817 26.7 102.101 27.075 102.476 27.3354C102.856 27.5907 103.33 27.7183 103.897 27.7183C104.351 27.7183 104.759 27.6714 105.124 27.5776C105.489 27.4787 105.819 27.3641 106.116 27.2339V28.3901C105.83 28.536 105.509 28.6479 105.155 28.7261C104.806 28.8042 104.39 28.8433 103.905 28.8433ZM111.444 19.9683C112.173 19.9683 112.798 20.1297 113.319 20.4526C113.84 20.7756 114.239 21.2287 114.515 21.812C114.791 22.3901 114.929 23.0672 114.929 23.8433V24.6479H109.015C109.03 25.6532 109.28 26.4188 109.765 26.9448C110.249 27.4709 110.931 27.7339 111.812 27.7339C112.353 27.7339 112.832 27.6844 113.249 27.5854C113.666 27.4865 114.098 27.3407 114.546 27.1479V28.2886C114.114 28.4813 113.684 28.6219 113.257 28.7104C112.835 28.799 112.335 28.8433 111.757 28.8433C110.934 28.8433 110.215 28.6766 109.601 28.3433C108.991 28.0047 108.517 27.5099 108.179 26.8589C107.84 26.2078 107.671 25.411 107.671 24.4683C107.671 23.5464 107.825 22.7495 108.132 22.0776C108.444 21.4006 108.882 20.8797 109.444 20.5151C110.012 20.1506 110.679 19.9683 111.444 19.9683ZM111.429 21.0308C110.736 21.0308 110.184 21.2573 109.772 21.7104C109.361 22.1636 109.116 22.7964 109.038 23.6089H113.569C113.564 23.0985 113.483 22.6506 113.327 22.2651C113.176 21.8745 112.944 21.5724 112.632 21.3589C112.319 21.1401 111.918 21.0308 111.429 21.0308ZM126.429 19.9683C127.371 19.9683 128.082 20.2157 128.562 20.7104C129.041 21.2 129.28 21.9891 129.28 23.0776V28.687H127.999V23.1401C127.999 22.4474 127.848 21.9292 127.546 21.5854C127.249 21.2365 126.806 21.062 126.218 21.062C125.39 21.062 124.788 21.3016 124.413 21.7808C124.038 22.2599 123.851 22.9657 123.851 23.8979V28.687H122.562V23.1401C122.562 22.6766 122.494 22.2912 122.358 21.9839C122.228 21.6766 122.03 21.4474 121.765 21.2964C121.504 21.1401 121.173 21.062 120.772 21.062C120.205 21.062 119.749 21.1792 119.405 21.4136C119.062 21.6479 118.812 21.9969 118.655 22.4604C118.504 22.9188 118.429 23.4839 118.429 24.1558V28.687H117.132V20.1245H118.179L118.374 21.3354H118.444C118.616 21.0386 118.832 20.7886 119.093 20.5854C119.353 20.3823 119.645 20.2287 119.968 20.1245C120.291 20.0203 120.634 19.9683 120.999 19.9683C121.65 19.9683 122.194 20.0907 122.632 20.3354C123.075 20.575 123.395 20.9422 123.593 21.437H123.663C123.944 20.9422 124.33 20.575 124.819 20.3354C125.309 20.0907 125.845 19.9683 126.429 19.9683ZM135.241 19.9683C135.97 19.9683 136.595 20.1297 137.116 20.4526C137.637 20.7756 138.035 21.2287 138.312 21.812C138.588 22.3901 138.726 23.0672 138.726 23.8433V24.6479H132.812C132.827 25.6532 133.077 26.4188 133.562 26.9448C134.046 27.4709 134.728 27.7339 135.608 27.7339C136.15 27.7339 136.629 27.6844 137.046 27.5854C137.463 27.4865 137.895 27.3407 138.343 27.1479V28.2886C137.91 28.4813 137.481 28.6219 137.054 28.7104C136.632 28.799 136.132 28.8433 135.554 28.8433C134.731 28.8433 134.012 28.6766 133.397 28.3433C132.788 28.0047 132.314 27.5099 131.976 26.8589C131.637 26.2078 131.468 25.411 131.468 24.4683C131.468 23.5464 131.621 22.7495 131.929 22.0776C132.241 21.4006 132.679 20.8797 133.241 20.5151C133.809 20.1506 134.476 19.9683 135.241 19.9683ZM135.226 21.0308C134.533 21.0308 133.981 21.2573 133.569 21.7104C133.158 22.1636 132.913 22.7964 132.835 23.6089H137.366C137.361 23.0985 137.28 22.6506 137.124 22.2651C136.973 21.8745 136.741 21.5724 136.429 21.3589C136.116 21.1401 135.715 21.0308 135.226 21.0308ZM144.983 19.9683C145.999 19.9683 146.767 20.2183 147.288 20.7183C147.809 21.2131 148.069 22.0099 148.069 23.1089V28.687H146.788V23.1948C146.788 22.4813 146.624 21.9474 146.296 21.5933C145.973 21.2391 145.476 21.062 144.804 21.062C143.856 21.062 143.189 21.3302 142.804 21.8667C142.418 22.4032 142.226 23.1818 142.226 24.2026V28.687H140.929V20.1245H141.976L142.171 21.3589H142.241C142.423 21.0568 142.655 20.8042 142.937 20.6011C143.218 20.3927 143.533 20.2365 143.882 20.1323C144.231 20.0229 144.598 19.9683 144.983 19.9683ZM153.507 27.7808C153.72 27.7808 153.939 27.7625 154.163 27.7261C154.387 27.6896 154.569 27.6453 154.71 27.5933V28.6011C154.559 28.6688 154.348 28.7261 154.077 28.7729C153.812 28.8198 153.551 28.8433 153.296 28.8433C152.843 28.8433 152.431 28.7651 152.062 28.6089C151.692 28.4474 151.395 28.1766 151.171 27.7964C150.952 27.4162 150.843 26.8901 150.843 26.2183V21.1401H149.624V20.5073L150.851 19.9995L151.366 18.1401H152.147V20.1245H154.655V21.1401H152.147V26.1792C152.147 26.7157 152.27 27.1167 152.515 27.3823C152.765 27.6479 153.095 27.7808 153.507 27.7808ZM163.366 27.7808C163.58 27.7808 163.798 27.7625 164.022 27.7261C164.246 27.6896 164.429 27.6453 164.569 27.5933V28.6011C164.418 28.6688 164.207 28.7261 163.937 28.7729C163.671 28.8198 163.41 28.8433 163.155 28.8433C162.702 28.8433 162.291 28.7651 161.921 28.6089C161.551 28.4474 161.254 28.1766 161.03 27.7964C160.812 27.4162 160.702 26.8901 160.702 26.2183V21.1401H159.483V20.5073L160.71 19.9995L161.226 18.1401H162.007V20.1245H164.515V21.1401H162.007V26.1792C162.007 26.7157 162.129 27.1167 162.374 27.3823C162.624 27.6479 162.955 27.7808 163.366 27.7808ZM169.601 19.9683C170.33 19.9683 170.955 20.1297 171.476 20.4526C171.996 20.7756 172.395 21.2287 172.671 21.812C172.947 22.3901 173.085 23.0672 173.085 23.8433V24.6479H167.171C167.187 25.6532 167.437 26.4188 167.921 26.9448C168.405 27.4709 169.088 27.7339 169.968 27.7339C170.509 27.7339 170.989 27.6844 171.405 27.5854C171.822 27.4865 172.254 27.3407 172.702 27.1479V28.2886C172.27 28.4813 171.84 28.6219 171.413 28.7104C170.991 28.799 170.491 28.8433 169.913 28.8433C169.09 28.8433 168.371 28.6766 167.757 28.3433C167.147 28.0047 166.673 27.5099 166.335 26.8589C165.996 26.2078 165.827 25.411 165.827 24.4683C165.827 23.5464 165.981 22.7495 166.288 22.0776C166.601 21.4006 167.038 20.8797 167.601 20.5151C168.168 20.1506 168.835 19.9683 169.601 19.9683ZM169.585 21.0308C168.892 21.0308 168.34 21.2573 167.929 21.7104C167.517 22.1636 167.272 22.7964 167.194 23.6089H171.726C171.72 23.0985 171.64 22.6506 171.483 22.2651C171.332 21.8745 171.101 21.5724 170.788 21.3589C170.476 21.1401 170.075 21.0308 169.585 21.0308ZM177.327 24.3042L174.366 20.1245H175.851L178.108 23.4214L180.358 20.1245H181.827L178.866 24.3042L181.991 28.687H180.507L178.108 25.1948L175.694 28.687H174.226L177.327 24.3042ZM186.429 27.7808C186.642 27.7808 186.861 27.7625 187.085 27.7261C187.309 27.6896 187.491 27.6453 187.632 27.5933V28.6011C187.481 28.6688 187.27 28.7261 186.999 28.7729C186.733 28.8198 186.473 28.8433 186.218 28.8433C185.765 28.8433 185.353 28.7651 184.983 28.6089C184.614 28.4474 184.317 28.1766 184.093 27.7964C183.874 27.4162 183.765 26.8901 183.765 26.2183V21.1401H182.546V20.5073L183.772 19.9995L184.288 18.1401H185.069V20.1245H187.577V21.1401H185.069V26.1792C185.069 26.7157 185.192 27.1167 185.437 27.3823C185.687 27.6479 186.017 27.7808 186.429 27.7808Z"
        fill="#1C1C1C"
      />
      <path
        d="M219.411 27.9903C219.737 27.6649 219.737 27.1373 219.411 26.8118L215.287 22.6876L219.412 18.5622C219.738 18.2368 219.738 17.7092 219.412 17.3837C219.087 17.0583 218.559 17.0583 218.234 17.3837L214.108 21.5091L209.983 17.3837C209.658 17.0583 209.13 17.0583 208.805 17.3837C208.479 17.7092 208.479 18.2368 208.805 18.5622L212.93 22.6876L208.806 26.8118C208.48 27.1373 208.48 27.6649 208.806 27.9903C209.131 28.3158 209.659 28.3158 209.984 27.9903L214.108 23.8661L218.233 27.9903C218.558 28.3158 219.086 28.3158 219.411 27.9903Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};
export const InteractiveBlackButtonIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 200}
      height={height ?? 83}
      viewBox="0 0 200 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="200" height="83" rx="12" fill="#1C1C1C" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M56.7244 34.2488C56.0437 33.5681 54.8537 32.8838 52.6582 33.4328C50.4551 33.9837 48.8298 35.6252 48.29 37.649C47.7602 39.6354 48.2396 42.1575 50.6121 44.5297L58.0622 51.9786C58.5831 52.4994 59.4241 52.4993 59.9449 51.9782C61.618 50.304 64.2764 47.6442 67.3909 44.5298C69.7623 42.1584 70.2419 39.6362 69.7122 37.6495C69.1725 35.6254 67.5476 33.9837 65.344 33.4328C63.1477 32.8837 61.9575 33.5682 61.2769 34.2488C60.9046 34.6211 60.6484 35.0338 60.485 35.3606C60.4044 35.5217 60.3497 35.6554 60.3169 35.7429C60.3006 35.7864 60.2899 35.8179 60.2844 35.8349L60.2801 35.8483C60.1135 36.4156 59.5929 36.8059 59.0008 36.8059C58.4088 36.806 57.8881 36.4157 57.7215 35.8485L57.7172 35.835C57.7117 35.818 57.701 35.7866 57.6846 35.743C57.6518 35.6555 57.5971 35.5218 57.5165 35.3607C57.3531 35.0339 57.0968 34.6211 56.7244 34.2488ZM59.0007 32.7901C59.1204 32.6472 59.2504 32.5041 59.3913 32.3631C60.7107 31.0437 62.8539 30.0615 65.9908 30.8458C69.1205 31.6282 71.4954 33.9865 72.2889 36.9624C73.0923 39.9757 72.2384 43.4535 69.2765 46.4154C66.1623 49.5296 63.5041 52.1892 61.8311 53.8632C60.2692 55.4261 57.7394 55.4268 56.1767 53.8644L48.7267 46.4155C45.7636 43.4529 44.9096 39.975 45.7134 36.9618C46.5072 33.986 48.8824 31.6282 52.0113 30.8458C55.1477 30.0615 57.2907 31.0438 58.61 32.3631C58.751 32.5041 58.881 32.6472 59.0007 32.7901Z"
        fill="#FAFAFA"
      />
      <path
        d="M84.7969 35.2227H89.2402C91.1413 35.2227 92.5801 35.4896 93.5566 36.0234C94.5332 36.5573 95.0215 37.4948 95.0215 38.8359C95.0215 39.3763 94.9336 39.8646 94.7578 40.3008C94.5885 40.737 94.3411 41.0951 94.0156 41.375C93.6901 41.6549 93.293 41.8372 92.8242 41.9219V42.0195C93.2995 42.1172 93.7292 42.2865 94.1133 42.5273C94.4974 42.7617 94.8034 43.1068 95.0312 43.5625C95.2656 44.0117 95.3828 44.6107 95.3828 45.3594C95.3828 46.2253 95.1712 46.9674 94.748 47.5859C94.3249 48.2044 93.7194 48.6797 92.9316 49.0117C92.1504 49.3372 91.2194 49.5 90.1387 49.5H84.7969V35.2227ZM87.8242 40.877H89.582C90.4609 40.877 91.0697 40.7402 91.4082 40.4668C91.7467 40.1868 91.916 39.7767 91.916 39.2363C91.916 38.6895 91.7142 38.2988 91.3105 38.0645C90.9134 37.8236 90.2819 37.7031 89.416 37.7031H87.8242V40.877ZM87.8242 43.2793V47H89.7969C90.7083 47 91.3431 46.8242 91.7012 46.4727C92.0592 46.1211 92.2383 45.6491 92.2383 45.0566C92.2383 44.7051 92.1602 44.3958 92.0039 44.1289C91.8477 43.862 91.584 43.6536 91.2129 43.5039C90.8483 43.3542 90.3438 43.2793 89.6992 43.2793H87.8242ZM108.02 38.582V49.5H105.734L105.334 48.1035H105.178C104.943 48.4746 104.65 48.7773 104.299 49.0117C103.947 49.2461 103.56 49.4186 103.137 49.5293C102.714 49.64 102.274 49.6953 101.818 49.6953C101.037 49.6953 100.357 49.5586 99.7773 49.2852C99.1979 49.0052 98.7454 48.5723 98.4199 47.9863C98.1009 47.4004 97.9414 46.6387 97.9414 45.7012V38.582H100.92V44.959C100.92 45.7402 101.06 46.3294 101.34 46.7266C101.62 47.1237 102.066 47.3223 102.678 47.3223C103.283 47.3223 103.758 47.1855 104.104 46.9121C104.449 46.6322 104.689 46.2253 104.826 45.6914C104.969 45.151 105.041 44.4935 105.041 43.7188V38.582H108.02ZM115.744 47.3223C116.07 47.3223 116.385 47.2897 116.691 47.2246C117.004 47.1595 117.313 47.0781 117.619 46.9805V49.1973C117.3 49.3405 116.903 49.4577 116.428 49.5488C115.959 49.6465 115.445 49.6953 114.885 49.6953C114.234 49.6953 113.648 49.5911 113.127 49.3828C112.613 49.168 112.206 48.8001 111.906 48.2793C111.613 47.752 111.467 47.0195 111.467 46.082V40.8184H110.041V39.5586L111.682 38.5625L112.541 36.2578H114.445V38.582H117.502V40.8184H114.445V46.082C114.445 46.4987 114.562 46.8112 114.797 47.0195C115.038 47.2214 115.354 47.3223 115.744 47.3223ZM124.436 47.3223C124.761 47.3223 125.077 47.2897 125.383 47.2246C125.695 47.1595 126.005 47.0781 126.311 46.9805V49.1973C125.992 49.3405 125.594 49.4577 125.119 49.5488C124.65 49.6465 124.136 49.6953 123.576 49.6953C122.925 49.6953 122.339 49.5911 121.818 49.3828C121.304 49.168 120.897 48.8001 120.598 48.2793C120.305 47.752 120.158 47.0195 120.158 46.082V40.8184H118.732V39.5586L120.373 38.5625L121.232 36.2578H123.137V38.582H126.193V40.8184H123.137V46.082C123.137 46.4987 123.254 46.8112 123.488 47.0195C123.729 47.2214 124.045 47.3223 124.436 47.3223ZM138.449 44.0215C138.449 44.9329 138.326 45.7402 138.078 46.4434C137.837 47.1465 137.482 47.7422 137.014 48.2305C136.551 48.7122 135.992 49.0768 135.334 49.3242C134.683 49.5716 133.947 49.6953 133.127 49.6953C132.359 49.6953 131.652 49.5716 131.008 49.3242C130.37 49.0768 129.813 48.7122 129.338 48.2305C128.869 47.7422 128.505 47.1465 128.244 46.4434C127.99 45.7402 127.863 44.9329 127.863 44.0215C127.863 42.8105 128.078 41.7852 128.508 40.9453C128.938 40.1055 129.549 39.4674 130.344 39.0312C131.138 38.5951 132.085 38.377 133.186 38.377C134.208 38.377 135.113 38.5951 135.9 39.0312C136.695 39.4674 137.316 40.1055 137.766 40.9453C138.221 41.7852 138.449 42.8105 138.449 44.0215ZM130.9 44.0215C130.9 44.7376 130.979 45.3398 131.135 45.8281C131.291 46.3164 131.535 46.6842 131.867 46.9316C132.199 47.179 132.632 47.3027 133.166 47.3027C133.693 47.3027 134.12 47.179 134.445 46.9316C134.777 46.6842 135.018 46.3164 135.168 45.8281C135.324 45.3398 135.402 44.7376 135.402 44.0215C135.402 43.2988 135.324 42.6999 135.168 42.2246C135.018 41.7428 134.777 41.3815 134.445 41.1406C134.113 40.8997 133.68 40.7793 133.146 40.7793C132.359 40.7793 131.786 41.0495 131.428 41.5898C131.076 42.1302 130.9 42.9408 130.9 44.0215ZM147.111 38.377C148.277 38.377 149.214 38.696 149.924 39.334C150.633 39.9655 150.988 40.9811 150.988 42.3809V49.5H148.01V43.123C148.01 42.3418 147.867 41.7526 147.58 41.3555C147.3 40.9583 146.857 40.7598 146.252 40.7598C145.34 40.7598 144.719 41.069 144.387 41.6875C144.055 42.306 143.889 43.1979 143.889 44.3633V49.5H140.91V38.582H143.186L143.586 39.9785H143.752C143.986 39.6009 144.276 39.2949 144.621 39.0605C144.973 38.8262 145.36 38.6536 145.783 38.543C146.213 38.4323 146.656 38.377 147.111 38.377Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveWhiteButtonIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 174}
      height={height ?? 69}
      viewBox="0 0 174 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.574219"
        y="0.711426"
        width="173"
        height="68"
        rx="8"
        fill="#FAFAFA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.3674 29.273C52.8569 28.7625 51.9644 28.2492 50.3177 28.661C48.6654 29.0742 47.4465 30.3053 47.0416 31.8232C46.6442 33.313 47.0038 35.2046 48.7832 36.9837L54.3708 42.5704C54.7614 42.961 55.3922 42.9609 55.7828 42.5701C57.0376 41.3144 59.0314 39.3196 61.3673 36.9838C63.1458 35.2052 63.5055 33.3135 63.1082 31.8235C62.7035 30.3054 61.4848 29.0742 59.8321 28.661C58.1849 28.2492 57.2923 28.7625 56.7818 29.273C56.5026 29.5522 56.3104 29.8618 56.1879 30.1069C56.1274 30.2277 56.0864 30.328 56.0618 30.3936C56.0495 30.4262 56.0415 30.4499 56.0374 30.4626L56.0342 30.4727C55.9092 30.8981 55.5187 31.1909 55.0747 31.1909C54.6307 31.1909 54.2402 30.8982 54.1152 30.4728L54.112 30.4627C54.1078 30.45 54.0998 30.4264 54.0876 30.3937C54.063 30.328 54.0219 30.2278 53.9615 30.1069C53.8389 29.8618 53.6467 29.5522 53.3674 29.273ZM55.0746 28.179C55.1644 28.0718 55.2619 27.9645 55.3676 27.8588C56.3571 26.8692 57.9645 26.1326 60.3172 26.7207C62.6645 27.3076 64.4456 29.0763 65.0407 31.3083C65.6433 33.5682 65.0029 36.1765 62.7815 38.398C60.4458 40.7336 58.4521 42.7283 57.1974 43.9838C56.026 45.156 54.1287 45.1566 52.9566 43.9847L47.3691 38.3981C45.1468 36.1761 44.5063 33.5677 45.1091 31.3077C45.7045 29.0759 47.4859 27.3076 49.8326 26.7208C52.1849 26.1325 53.7921 26.8693 54.7816 27.8588C54.8873 27.9645 54.9848 28.0718 55.0746 28.179Z"
        fill="#1C1C1C"
      />
      <path
        d="M72.5117 29.2896H76.0664C77.5872 29.2896 78.7383 29.5031 79.5195 29.9302C80.3008 30.3573 80.6914 31.1073 80.6914 32.1802C80.6914 32.6125 80.6211 33.0031 80.4805 33.3521C80.3451 33.701 80.1471 33.9875 79.8867 34.2114C79.6263 34.4354 79.3086 34.5812 78.9336 34.6489V34.7271C79.3138 34.8052 79.6576 34.9406 79.9648 35.1333C80.2721 35.3208 80.5169 35.5968 80.6992 35.9614C80.8867 36.3208 80.9805 36.8 80.9805 37.3989C80.9805 38.0916 80.8112 38.6854 80.4727 39.1802C80.1341 39.675 79.6497 40.0552 79.0195 40.3208C78.3945 40.5812 77.6497 40.7114 76.7852 40.7114H72.5117V29.2896ZM74.9336 33.813H76.3398C77.043 33.813 77.5299 33.7036 77.8008 33.4849C78.0716 33.2609 78.207 32.9328 78.207 32.5005C78.207 32.063 78.0456 31.7505 77.7227 31.563C77.4049 31.3703 76.8997 31.2739 76.207 31.2739H74.9336V33.813ZM74.9336 35.7349V38.7114H76.5117C77.2409 38.7114 77.7487 38.5708 78.0352 38.2896C78.3216 38.0083 78.4648 37.6307 78.4648 37.1567C78.4648 36.8755 78.4023 36.6281 78.2773 36.4146C78.1523 36.201 77.9414 36.0343 77.6445 35.9146C77.3529 35.7948 76.9492 35.7349 76.4336 35.7349H74.9336ZM91.0898 31.9771V40.7114H89.2617L88.9414 39.5942H88.8164C88.6289 39.8911 88.3945 40.1333 88.1133 40.3208C87.832 40.5083 87.5221 40.6463 87.1836 40.7349C86.8451 40.8234 86.4935 40.8677 86.1289 40.8677C85.5039 40.8677 84.9596 40.7583 84.4961 40.5396C84.0326 40.3156 83.6706 39.9692 83.4102 39.5005C83.1549 39.0317 83.0273 38.4224 83.0273 37.6724V31.9771H85.4102V37.0786C85.4102 37.7036 85.5221 38.175 85.7461 38.4927C85.9701 38.8104 86.3268 38.9692 86.8164 38.9692C87.3008 38.9692 87.681 38.8599 87.957 38.6411C88.2331 38.4172 88.4258 38.0916 88.5352 37.6646C88.6497 37.2323 88.707 36.7062 88.707 36.0864V31.9771H91.0898ZM97.2695 38.9692C97.5299 38.9692 97.7826 38.9432 98.0273 38.8911C98.2773 38.839 98.5247 38.7739 98.7695 38.6958V40.4692C98.5143 40.5838 98.1966 40.6776 97.8164 40.7505C97.4414 40.8286 97.0299 40.8677 96.582 40.8677C96.0612 40.8677 95.5924 40.7843 95.1758 40.6177C94.7643 40.4458 94.4388 40.1515 94.1992 39.7349C93.9648 39.313 93.8477 38.7271 93.8477 37.9771V33.7661H92.707V32.7583L94.0195 31.9614L94.707 30.1177H96.2305V31.9771H98.6758V33.7661H96.2305V37.9771C96.2305 38.3104 96.3242 38.5604 96.5117 38.7271C96.7044 38.8885 96.957 38.9692 97.2695 38.9692ZM104.223 38.9692C104.483 38.9692 104.736 38.9432 104.98 38.8911C105.23 38.839 105.478 38.7739 105.723 38.6958V40.4692C105.467 40.5838 105.15 40.6776 104.77 40.7505C104.395 40.8286 103.983 40.8677 103.535 40.8677C103.014 40.8677 102.546 40.7843 102.129 40.6177C101.717 40.4458 101.392 40.1515 101.152 39.7349C100.918 39.313 100.801 38.7271 100.801 37.9771V33.7661H99.6602V32.7583L100.973 31.9614L101.66 30.1177H103.184V31.9771H105.629V33.7661H103.184V37.9771C103.184 38.3104 103.277 38.5604 103.465 38.7271C103.658 38.8885 103.91 38.9692 104.223 38.9692ZM115.434 36.3286C115.434 37.0578 115.335 37.7036 115.137 38.2661C114.944 38.8286 114.66 39.3052 114.285 39.6958C113.915 40.0812 113.467 40.3729 112.941 40.5708C112.421 40.7687 111.832 40.8677 111.176 40.8677C110.561 40.8677 109.996 40.7687 109.48 40.5708C108.97 40.3729 108.525 40.0812 108.145 39.6958C107.77 39.3052 107.478 38.8286 107.27 38.2661C107.066 37.7036 106.965 37.0578 106.965 36.3286C106.965 35.3599 107.137 34.5396 107.48 33.8677C107.824 33.1958 108.314 32.6854 108.949 32.3364C109.585 31.9875 110.342 31.813 111.223 31.813C112.04 31.813 112.764 31.9875 113.395 32.3364C114.03 32.6854 114.527 33.1958 114.887 33.8677C115.251 34.5396 115.434 35.3599 115.434 36.3286ZM109.395 36.3286C109.395 36.9015 109.457 37.3833 109.582 37.7739C109.707 38.1646 109.902 38.4588 110.168 38.6567C110.434 38.8547 110.78 38.9536 111.207 38.9536C111.629 38.9536 111.97 38.8547 112.23 38.6567C112.496 38.4588 112.689 38.1646 112.809 37.7739C112.934 37.3833 112.996 36.9015 112.996 36.3286C112.996 35.7505 112.934 35.2713 112.809 34.8911C112.689 34.5057 112.496 34.2166 112.23 34.0239C111.965 33.8312 111.618 33.7349 111.191 33.7349C110.561 33.7349 110.103 33.951 109.816 34.3833C109.535 34.8156 109.395 35.464 109.395 36.3286ZM122.363 31.813C123.296 31.813 124.046 32.0682 124.613 32.5786C125.181 33.0838 125.465 33.8963 125.465 35.0161V40.7114H123.082V35.6099C123.082 34.9849 122.967 34.5135 122.738 34.1958C122.514 33.8781 122.16 33.7192 121.676 33.7192C120.947 33.7192 120.449 33.9666 120.184 34.4614C119.918 34.9562 119.785 35.6698 119.785 36.6021V40.7114H117.402V31.9771L119.223 31.9771L119.543 33.0942H119.676C119.863 32.7922 120.095 32.5474 120.371 32.3599C120.652 32.1724 120.962 32.0343 121.301 31.9458C121.645 31.8573 121.999 31.813 122.363 31.813Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};
export const InteractiveGreenheartIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 44}
      height={height ?? 44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="44" height="44" rx="8" fill="#3DA755" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2932 16.5616C19.7827 16.0511 18.8902 15.5378 17.2435 15.9496C15.5912 16.3628 14.3722 17.5939 13.9674 19.1118C13.57 20.6015 13.9295 22.4932 15.709 24.2723L21.2965 29.859C21.6872 30.2496 22.318 30.2495 22.7086 29.8586C23.9634 28.603 25.9572 26.6082 28.293 24.2724C30.0716 22.4938 30.4313 20.6021 30.034 19.1121C29.6293 17.594 28.4106 16.3628 26.7579 15.9496C25.1107 15.5378 24.218 16.0511 23.7076 16.5616C23.4284 16.8408 23.2362 17.1504 23.1136 17.3954C23.0532 17.5163 23.0122 17.6165 22.9876 17.6822C22.9753 17.7148 22.9673 17.7384 22.9632 17.7512L22.9599 17.7612C22.835 18.1867 22.4445 18.4794 22.0005 18.4795C21.5565 18.4795 21.166 18.1868 21.041 17.7614L21.0378 17.7513C21.0336 17.7385 21.0256 17.7149 21.0134 17.6823C20.9887 17.6166 20.9477 17.5164 20.8872 17.3955C20.7647 17.1504 20.5724 16.8408 20.2932 16.5616ZM22.0004 15.4676C22.0902 15.3604 22.1877 15.2531 22.2934 15.1473C23.2829 14.1578 24.8903 13.4211 27.243 14.0093C29.5903 14.5962 31.3714 16.3649 31.9665 18.5968C32.5691 20.8568 31.9287 23.4651 29.7073 25.6866C27.3716 28.0222 25.3779 30.0169 24.1232 31.2724C22.9518 32.4446 21.0544 32.4451 19.8824 31.2733L14.2949 25.6866C12.0725 23.4647 11.4321 20.8563 12.0349 18.5963C12.6302 16.3645 14.4117 14.5961 16.7583 14.0093C19.1107 13.4211 20.7179 14.1579 21.7074 15.1474C21.8131 15.2531 21.9106 15.3604 22.0004 15.4676Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveRedheartIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 44}
      height={height ?? 44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="44" height="44" rx="8" fill="#EA2227" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2932 16.5616C19.7827 16.0511 18.8902 15.5378 17.2435 15.9496C15.5912 16.3628 14.3722 17.5939 13.9674 19.1118C13.57 20.6015 13.9295 22.4932 15.709 24.2723L21.2965 29.859C21.6872 30.2496 22.318 30.2495 22.7086 29.8586C23.9634 28.603 25.9572 26.6082 28.293 24.2724C30.0716 22.4938 30.4313 20.6021 30.034 19.1121C29.6293 17.594 28.4106 16.3628 26.7579 15.9496C25.1107 15.5378 24.218 16.0511 23.7076 16.5616C23.4284 16.8408 23.2362 17.1504 23.1136 17.3954C23.0532 17.5163 23.0122 17.6165 22.9876 17.6822C22.9753 17.7148 22.9673 17.7384 22.9632 17.7512L22.9599 17.7612C22.835 18.1867 22.4445 18.4794 22.0005 18.4795C21.5565 18.4795 21.166 18.1868 21.041 17.7614L21.0378 17.7513C21.0336 17.7385 21.0256 17.7149 21.0134 17.6823C20.9887 17.6166 20.9477 17.5164 20.8872 17.3955C20.7647 17.1504 20.5724 16.8408 20.2932 16.5616ZM22.0004 15.4676C22.0902 15.3604 22.1877 15.2531 22.2934 15.1473C23.2829 14.1578 24.8903 13.4211 27.243 14.0093C29.5903 14.5962 31.3714 16.3649 31.9665 18.5968C32.5691 20.8568 31.9287 23.4651 29.7073 25.6866C27.3716 28.0222 25.3779 30.0169 24.1232 31.2724C22.9518 32.4446 21.0544 32.4451 19.8824 31.2733L14.2949 25.6866C12.0725 23.4647 11.4321 20.8563 12.0349 18.5963C12.6302 16.3645 14.4117 14.5961 16.7583 14.0093C19.1107 13.4211 20.7179 14.1579 21.7074 15.1474C21.8131 15.2531 21.9106 15.3604 22.0004 15.4676Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveRightArrowIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 92}
      height={height ?? 92}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_402_2318)">
        <path
          d="M22.981 68.981C10.2889 56.2889 10.2889 35.7111 22.981 23.019C35.673 10.327 56.2509 10.327 68.9429 23.019C81.6349 35.7111 81.6349 56.2889 68.9429 68.981C56.2509 81.673 35.673 81.673 22.981 68.981Z"
          fill="#D31F23"
        />
        <path
          d="M38.4844 54.1851L54.8546 37.8149M54.8546 37.8149H38.4844M54.8546 37.8149V54.1851"
          stroke="#FAFAFA"
          stroke-width="3.30728"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_2318">
          <path
            d="M22.981 68.981C10.2889 56.2889 10.2889 35.7111 22.981 23.019C35.673 10.327 56.2509 10.327 68.9429 23.019C81.6349 35.7111 81.6349 56.2889 68.9429 68.981C56.2509 81.673 35.673 81.673 22.981 68.981Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const InteractiveSaasDesignIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 76}
      height={height ?? 83}
      viewBox="0 0 76 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M55.3333 16.1403L27.6667 0L0 16.1403V48.4152L27.6667 64.5555L55.3333 48.4152V16.1403ZM27.6667 43.852C24.6283 43.852 21.7144 42.6326 19.5659 40.462C17.4175 38.2914 16.2105 35.3475 16.2105 32.2778C16.2105 29.2081 17.4175 26.2641 19.5659 24.0935C21.7144 21.9229 24.6283 20.7035 27.6667 20.7035C30.705 20.7035 33.6189 21.9229 35.7674 24.0935C37.9158 26.2641 39.1228 29.2081 39.1228 32.2778C39.1228 35.3475 37.9158 38.2914 35.7674 40.462C33.6189 42.6326 30.705 43.852 27.6667 43.852Z"
        fill="#EA2227"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.7029 44.42C39.3306 44.2668 38.9214 44.2273 38.5268 44.3063C38.1321 44.3854 37.7697 44.5795 37.4852 44.8642C37.2007 45.1489 37.0068 45.5115 36.9281 45.9062C36.8493 46.301 36.8892 46.7102 37.0426 47.0823L51.3121 81.7373C51.4649 82.1086 51.724 82.4265 52.0568 82.6511C52.3896 82.8757 52.7813 82.997 53.1828 82.9999C53.5843 83.0027 53.9777 82.8869 54.3136 82.667C54.6496 82.4471 54.9131 82.1329 55.0711 81.7638L60.5445 68.9924C60.7507 68.5115 61.1338 68.1284 61.6147 67.9222L74.3859 62.4487C74.755 62.2907 75.0692 62.0272 75.2891 61.6912C75.509 61.3553 75.6248 60.9619 75.6219 60.5604C75.6191 60.1589 75.4978 59.7672 75.2732 59.4344C75.0486 59.1016 74.7307 58.8425 74.3594 58.6897L39.7029 44.42Z"
        fill="#D2D5DB"
      />
    </svg>
  );
};
export const InteractiveQuoteIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 191}
      height={height ?? 191}
      viewBox="0 0 191 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_402_2314)">
        <circle cx="95.5" cy="95.5" r="95.5" fill="#D31F23" />
        <path
          d="M16.6665 93.0092L18.0615 93.016L18.0352 98.379L16.6402 98.3721L16.6665 93.0092ZM23.7449 81.9162C23.5513 82.9207 22.859 83.4818 21.6805 83.6177L12.4432 84.6154L12.7483 83.0325L21.5606 82.1107C21.9464 82.0746 22.1642 81.9272 22.2229 81.6228C22.2816 81.3184 22.1341 81.1005 21.7894 80.9236L13.9453 76.8228L14.2533 75.2247L22.4579 79.5844C23.5015 80.1486 23.9326 80.9421 23.7449 81.9162ZM16.4297 72.148C16.2688 72.6824 15.7088 72.9832 15.1745 72.8224C14.6402 72.6615 14.3245 72.0971 14.4854 71.5627C14.6462 71.0284 15.2166 70.7469 15.7509 70.9077C16.2852 71.0686 16.5905 71.6137 16.4297 72.148ZM17.6504 73.3087L18.0928 71.8393L25.3654 74.0286L24.923 75.498L17.6504 73.3087ZM27.6494 68.4339C26.7938 70.5791 24.6015 71.557 22.4276 70.69C20.3976 69.8803 19.3219 67.7659 20.166 65.6495C21.0158 63.5187 23.0846 62.8086 25.057 63.5953L25.6329 63.825L23.3819 69.4686C24.6545 69.7926 25.8714 69.21 26.3767 67.943C26.7212 67.0792 26.657 66.1525 26.0461 65.4249L27.044 64.5546C28.0064 65.656 28.2006 67.0518 27.6494 68.4339ZM22.4835 69.0435L24.143 64.8828C22.997 64.4925 21.9067 65.0088 21.4416 66.1749C20.965 67.3699 21.4899 68.4804 22.4835 69.0435ZM30.9842 61.5633C30.6006 62.2188 29.8704 62.5458 28.9582 62.2633L22.6817 60.3142L23.4098 59.0701L29.3851 60.9508C29.5691 61.0046 29.6807 60.998 29.7668 60.8509C29.8295 60.7439 29.7828 60.6088 29.6781 60.5116L26.037 56.9439C25.3518 56.2735 25.23 55.5916 25.6372 54.896C26.0443 54.2004 26.6772 53.9781 27.5973 54.2472L32.4965 55.6957C32.6538 55.7339 32.7732 55.714 32.8515 55.5802C32.922 55.4598 32.8809 55.3459 32.7438 55.2118L28.1542 50.9633L28.8745 49.7326L33.6713 54.2101C34.3643 54.8672 34.4446 55.6505 34.061 56.306C33.6617 56.9883 32.9942 57.2082 32.0954 56.9336L27.1347 55.4672C26.9775 55.429 26.8581 55.4489 26.7798 55.5827C26.7093 55.7031 26.7504 55.8169 26.8686 55.922L30.5687 59.5422C31.2483 60.1914 31.3835 60.8811 30.9842 61.5633ZM40.2899 47.5777L39.2604 48.6734L32.6408 42.4539C31.9518 41.8065 31.9809 40.9832 32.5222 40.4071C32.9574 39.944 33.4353 39.7975 34.0323 39.9543L42.9784 42.3621C43.1119 42.4237 43.1783 42.4436 43.242 42.3758C43.2845 42.3306 43.2725 42.2981 43.2047 42.2344L36.7546 36.1741L37.7841 35.0784L44.415 41.3085C45.104 41.9559 45.0317 42.8025 44.5435 43.3221C44.1402 43.7514 43.6092 43.9544 43.0009 43.7869L34.0541 41.3572C33.9425 41.2949 33.8761 41.275 33.823 41.3315C33.7594 41.3993 33.7833 41.4644 33.8737 41.5493L40.2899 47.5777ZM50.1064 38.381C48.3116 39.8098 45.8094 39.5036 44.4385 37.7816C43.0774 36.0717 43.3618 33.567 45.1444 32.1479C46.9391 30.7192 49.4171 31.0446 50.7687 32.7424C52.1395 34.4643 51.889 36.9619 50.1064 38.381ZM49.1989 37.2411C50.3025 36.3626 50.4369 34.7895 49.5778 33.7102C48.7089 32.6188 47.1457 32.3972 46.0422 33.2757C44.9265 34.1638 44.7799 35.7466 45.6487 36.838C46.5079 37.9173 48.0833 38.1292 49.1989 37.2411ZM56.6686 33.8341C56.0112 34.2144 55.2148 34.1378 54.5614 33.4414L50.0684 28.6449L51.3162 27.9232L55.5813 32.5113C55.7146 32.649 55.8149 32.6985 55.9625 32.6131C56.0698 32.5511 56.096 32.4106 56.053 32.2743L54.6509 27.3733C54.3866 26.4518 54.6177 25.7989 55.3154 25.3954C56.0131 24.9918 56.6732 25.1114 57.3401 25.8001L60.8833 29.4806C61.0012 29.5915 61.1148 29.6332 61.249 29.5556C61.3697 29.4858 61.3903 29.3665 61.3374 29.1822L59.4472 23.2206L60.6816 22.5066L62.6387 28.7698C62.9165 29.6834 62.5992 30.4041 61.9417 30.7844C61.2574 31.1802 60.5684 31.0415 59.9227 30.3585L56.335 26.632C56.2172 26.5211 56.1035 26.4794 55.9694 26.557C55.8486 26.6269 55.8281 26.7462 55.8789 26.8959L57.3063 31.8717C57.5763 32.772 57.3529 33.4384 56.6686 33.8341ZM73.8625 19.738L74.2983 21.0631L69.2037 22.7384L68.7679 21.4132L73.8625 19.738ZM86.6338 22.9801C85.619 23.1091 84.8701 22.6261 84.3738 21.5486L80.548 13.0818L82.1471 12.8786L85.7684 20.9652C85.9229 21.3205 86.1309 21.4816 86.4384 21.4425C86.746 21.4034 86.907 21.1955 86.9678 20.8127L88.4207 12.0814L90.0352 11.8763L88.4486 21.0308C88.2375 22.1982 87.6179 22.8551 86.6338 22.9801ZM93.5802 12.9734C93.0225 12.9906 92.5594 12.5551 92.5422 11.9974C92.5251 11.4397 92.96 10.9611 93.5178 10.9439C94.0755 10.9267 94.5236 11.3782 94.5408 11.9359C94.5579 12.4936 94.138 12.9563 93.5802 12.9734ZM92.8673 14.4996L94.4011 14.4524L94.6347 22.0438L93.1009 22.091L92.8673 14.4996ZM100.663 22.4576C98.3582 22.3152 96.7441 20.5384 96.8884 18.2023C97.0231 16.021 98.6955 14.3383 100.97 14.4788C103.259 14.6202 104.58 16.3634 104.449 18.4829L104.411 19.1017L98.3468 18.7272C98.4367 20.0372 99.3705 21.0111 100.732 21.0952C101.66 21.1525 102.52 20.8019 103.021 19.9942L104.159 20.6701C103.414 21.9286 102.148 22.5493 100.663 22.4576ZM98.4698 17.7409L102.941 18.017C102.953 16.8065 102.122 15.9321 100.869 15.8547C99.5851 15.7754 98.6943 16.6211 98.4698 17.7409ZM108.238 23.4596C107.494 23.3041 106.952 22.7157 106.93 21.761L106.784 15.1904L108.195 15.4855L108.31 21.7487C108.318 21.9403 108.359 22.044 108.526 22.0789C108.648 22.1043 108.761 22.0172 108.82 21.887L111.046 17.301C111.464 16.4383 112.072 16.1062 112.86 16.2711C113.649 16.4361 114.061 16.9656 114.098 17.9235L114.282 23.0292C114.296 23.1904 114.352 23.2973 114.504 23.329C114.641 23.3576 114.736 23.2824 114.819 23.1099L117.389 17.4082L118.785 17.7001L116.064 23.671C115.661 24.5369 114.944 24.862 114.2 24.7065C113.426 24.5447 113.006 23.9816 112.981 23.0421L112.795 17.8726C112.781 17.7114 112.724 17.6045 112.572 17.5727C112.436 17.5442 112.341 17.6194 112.279 17.7647L110.022 22.4234C109.622 23.2741 109.011 23.6214 108.238 23.4596ZM124.442 27.8739L123.079 27.2402L126.908 19.0035C127.306 18.1461 128.097 17.9155 128.814 18.2488C129.39 18.5166 129.679 18.9245 129.718 19.5406L130.238 28.7904C130.222 28.9365 130.224 29.0058 130.308 29.045C130.364 29.0711 130.391 29.0495 130.43 28.9652L134.161 20.9394L135.525 21.5732L131.689 29.8239C131.291 30.6812 130.464 30.8782 129.818 30.5776C129.284 30.3294 128.924 29.8889 128.892 29.2587L128.393 20.0014C128.417 19.8759 128.415 19.8066 128.344 19.7739C128.26 19.7347 128.206 19.7779 128.154 19.8903L124.442 27.8739ZM136.255 34.3077C134.335 33.0525 133.839 30.5807 135.044 28.7384C136.239 26.9091 138.707 26.3924 140.614 27.639C142.534 28.8942 143.003 31.3491 141.816 33.1654C140.612 35.0077 138.162 35.5544 136.255 34.3077ZM137.052 33.0881C138.233 33.8599 139.768 33.4935 140.523 32.3388C141.286 31.1711 141.006 29.6174 139.825 28.8456C138.632 28.0654 137.083 28.4233 136.32 29.591C135.565 30.7457 135.858 32.3079 137.052 33.0881ZM142.63 39.1112C142.063 38.606 141.886 37.8258 142.343 36.987L145.49 31.2172L146.566 32.176L143.546 37.6641C143.457 37.8339 143.441 37.9446 143.568 38.058C143.661 38.1404 143.803 38.1213 143.918 38.0377L148.133 35.1705C148.925 34.6307 149.618 34.6456 150.22 35.1817C150.822 35.7178 150.915 36.3821 150.47 37.2312L148.085 41.7493C148.017 41.896 148.013 42.017 148.128 42.1201C148.233 42.2129 148.352 42.195 148.511 42.087L153.58 38.4239L154.645 39.3724L149.31 43.1936C148.53 43.7437 147.746 43.6682 147.179 43.163C146.588 42.6372 146.504 41.9394 146.95 41.1122L149.365 36.5375C149.433 36.3908 149.437 36.2698 149.322 36.1667C149.217 36.0739 149.098 36.0918 148.971 36.1869L144.694 39.1018C143.923 39.6403 143.22 39.637 142.63 39.1112ZM161.415 51.0075L160.294 51.8375L157.103 47.5271L158.224 46.6971L161.415 51.0075ZM162.366 64.1417C161.922 63.2198 162.144 62.3566 163.009 61.5449L169.83 55.2366L170.529 56.6893L164.004 62.6832C163.715 62.9422 163.628 63.1904 163.763 63.4698C163.897 63.7492 164.145 63.8362 164.528 63.7727L173.27 62.3882L173.976 63.8549L164.789 65.2464C163.615 65.4156 162.796 65.0356 162.366 64.1417ZM174.058 67.5842C173.867 67.0601 174.134 66.4836 174.658 66.2921C175.183 66.1005 175.774 66.363 175.965 66.8871C176.157 67.4112 175.869 67.9785 175.345 68.17C174.821 68.3616 174.25 68.1083 174.058 67.5842ZM172.385 67.3871L172.912 68.8283L165.779 71.4358L165.252 69.9946L172.385 67.3871ZM167.284 77.2877C166.693 75.0551 167.871 72.9635 170.133 72.3645C172.246 71.8052 174.37 72.8624 174.953 75.0651C175.54 77.2827 174.302 79.0856 172.249 79.6291L171.649 79.7877L170.095 73.9141C168.88 74.4121 168.249 75.6051 168.598 76.9237C168.836 77.8227 169.44 78.5287 170.364 78.749L170.081 80.0425C168.652 79.7314 167.665 78.7262 167.284 77.2877ZM171.069 73.7201L172.216 78.0505C173.369 77.6811 173.937 76.6168 173.615 75.4031C173.286 74.1595 172.203 73.5804 171.069 73.7201ZM168.709 84.7916C168.625 84.0368 169.014 83.3381 169.914 83.0188L176.11 80.8268L176.271 82.2593L170.357 84.3261C170.177 84.393 170.092 84.465 170.111 84.6344C170.125 84.7577 170.243 84.838 170.385 84.8533L175.437 85.5346C176.387 85.6621 176.892 86.1357 176.982 86.9367C177.072 87.7377 176.698 88.2943 175.799 88.629L171.007 90.3985C170.858 90.462 170.774 90.5494 170.791 90.7034C170.807 90.8421 170.908 90.9087 171.098 90.9342L177.317 91.5939L177.476 93.011L170.954 92.2917C170.005 92.1797 169.473 91.5999 169.388 90.8452C169.3 90.0596 169.703 89.4841 170.588 89.1665L175.44 87.3747C175.589 87.3112 175.673 87.2238 175.656 87.0698C175.64 86.9312 175.539 86.8645 175.382 86.851L170.251 86.1628C169.318 86.0491 168.797 85.5772 168.709 84.7916ZM169.6 101.567L169.77 100.073L178.795 101.101C179.734 101.208 180.203 101.886 180.113 102.671C180.041 103.303 179.746 103.706 179.173 103.937L170.562 107.355C170.419 107.385 170.354 107.409 170.343 107.501C170.336 107.563 170.365 107.582 170.457 107.592L179.251 108.595L179.081 110.088L170.041 109.058C169.101 108.951 168.653 108.229 168.734 107.521C168.801 106.936 169.105 106.455 169.693 106.226L178.317 102.825C178.444 102.809 178.509 102.785 178.518 102.708C178.528 102.615 178.47 102.578 178.347 102.563L169.6 101.567ZM167.23 114.807C167.814 112.589 170.002 111.337 172.131 111.897C174.244 112.454 175.515 114.631 174.935 116.835C174.351 119.053 172.17 120.274 170.072 119.722C167.943 119.162 166.65 117.01 167.23 114.807ZM168.639 115.178C168.28 116.542 169.113 117.883 170.447 118.234C171.796 118.589 173.182 117.832 173.541 116.468C173.904 115.089 173.074 113.733 171.725 113.377C170.391 113.026 169.002 113.799 168.639 115.178ZM164.687 122.373C164.987 121.675 165.672 121.261 166.612 121.43L173.08 122.594L172.51 123.918L166.349 122.785C166.16 122.754 166.05 122.774 165.983 122.931C165.934 123.044 165.996 123.173 166.112 123.256L170.164 126.35C170.926 126.932 171.13 127.593 170.812 128.334C170.493 129.074 169.892 129.372 168.946 129.218L163.906 128.382C163.745 128.363 163.629 128.398 163.568 128.54C163.513 128.668 163.568 128.776 163.72 128.892L168.796 132.545L168.233 133.855L162.923 130C162.154 129.433 161.978 128.666 162.279 127.968C162.591 127.242 163.227 126.942 164.152 127.104L169.255 127.951C169.416 127.969 169.532 127.935 169.594 127.792C169.649 127.664 169.594 127.556 169.464 127.467L165.347 124.328C164.593 123.767 164.374 123.099 164.687 122.373ZM159.277 143.944L158.138 143.138L161.236 138.76L162.375 139.566L159.277 143.944ZM147.117 148.969C147.854 148.259 148.743 148.198 149.785 148.765L157.914 153.265L156.753 154.384L149.016 150.067C148.679 149.874 148.416 149.869 148.193 150.085C147.97 150.3 147.965 150.563 148.146 150.906L152.201 158.774L151.029 159.903L146.828 151.616C146.299 150.554 146.403 149.657 147.117 148.969ZM147.534 161.142C147.971 160.795 148.603 160.867 148.95 161.303C149.297 161.74 149.235 162.384 148.798 162.731C148.362 163.079 147.732 162.985 147.385 162.548C147.038 162.111 147.098 161.489 147.534 161.142ZM147.193 159.493L145.992 160.448L141.264 154.503L142.465 153.548L147.193 159.493ZM136.184 157.774C138.117 156.511 140.473 156.972 141.753 158.931C142.948 160.761 142.613 163.109 140.705 164.355C138.785 165.61 136.684 165.001 135.522 163.224L135.183 162.705L140.27 159.382C139.415 158.385 138.085 158.162 136.943 158.908C136.164 159.416 135.684 160.212 135.765 161.158L134.448 161.296C134.294 159.842 134.938 158.588 136.184 157.774ZM140.761 160.246L137.011 162.696C137.724 163.674 138.913 163.879 139.964 163.192C141.041 162.488 141.25 161.278 140.761 160.246ZM129.511 161.494C130.2 161.175 130.986 161.323 131.573 162.076L135.613 167.261L134.305 167.866L130.473 162.91C130.353 162.761 130.258 162.702 130.103 162.774C129.99 162.826 129.952 162.964 129.982 163.103L130.934 168.111C131.113 169.053 130.824 169.682 130.093 170.021C129.361 170.359 128.715 170.18 128.113 169.434L124.918 165.447C124.811 165.326 124.702 165.274 124.561 165.339C124.434 165.398 124.403 165.515 124.439 165.703L125.781 171.812L124.486 172.411L123.106 165.996C122.912 165.061 123.293 164.372 123.982 164.053C124.7 163.721 125.373 163.921 125.955 164.66L129.189 168.697C129.297 168.818 129.406 168.87 129.547 168.805C129.673 168.746 129.705 168.629 129.668 168.475L128.697 163.39C128.51 162.469 128.793 161.826 129.511 161.494ZM113.874 167.623L115.346 167.319L117.183 176.214C117.374 177.14 116.877 177.797 116.102 177.957C115.48 178.085 115.005 177.93 114.607 177.458L108.674 170.342C108.601 170.215 108.558 170.16 108.467 170.179C108.406 170.192 108.397 170.225 108.416 170.316L110.205 178.984L108.733 179.288L106.893 170.378C106.702 169.452 107.248 168.801 107.947 168.656C108.523 168.537 109.074 168.677 109.476 169.164L115.396 176.298C115.451 176.413 115.494 176.468 115.57 176.452C115.661 176.433 115.679 176.366 115.654 176.245L113.874 167.623ZM100.556 169.521C102.845 169.373 104.724 171.054 104.866 173.25C105.007 175.431 103.343 177.325 101.069 177.472C98.7802 177.62 96.9319 175.937 96.7921 173.772C96.6503 171.575 98.2823 169.668 100.556 169.521ZM100.65 170.975C99.2424 171.066 98.2335 172.281 98.3224 173.657C98.4123 175.049 99.5689 176.124 100.977 176.033C102.4 175.941 103.424 174.726 103.334 173.334C103.245 171.957 102.073 170.883 100.65 170.975ZM92.5749 169.49C93.3315 169.557 93.939 170.077 94.0733 171.023L94.9919 177.53L93.556 177.403L92.7041 171.197C92.6742 171.008 92.6206 170.91 92.4508 170.895C92.3272 170.884 92.225 170.984 92.1819 171.12L90.5114 175.936C90.1979 176.842 89.6334 177.243 88.8305 177.172C88.0276 177.101 87.5563 176.624 87.4066 175.677L86.6236 170.629C86.5909 170.47 86.5219 170.371 86.3675 170.357C86.2285 170.345 86.1431 170.431 86.0804 170.612L84.1995 176.576L82.779 176.451L84.7785 170.201C85.0766 169.294 85.7505 168.887 86.5071 168.953C87.2945 169.023 87.7785 169.533 87.9142 170.463L88.7072 175.574C88.7399 175.733 88.8089 175.832 88.9633 175.846C89.1023 175.858 89.1876 175.772 89.2322 175.621L90.9249 170.729C91.2216 169.837 91.7875 169.42 92.5749 169.49ZM65.9522 169.5L66.4372 168.192L71.4656 170.057L70.9805 171.365L65.9522 169.5ZM57.9729 159.027C58.8485 159.556 59.1356 160.399 58.8556 161.552L56.5976 170.565L55.2179 169.731L57.4001 161.144C57.4997 160.769 57.4366 160.514 57.1713 160.353C56.906 160.193 56.6506 160.256 56.3654 160.518L49.8052 166.461L48.4122 165.619L55.34 159.428C56.2302 158.644 57.1238 158.514 57.9729 159.027ZM46.2976 162.537C46.7444 162.871 46.8351 163.5 46.5009 163.947C46.1667 164.394 45.5282 164.497 45.0814 164.163C44.6345 163.828 44.5655 163.196 44.8998 162.749C45.234 162.302 45.8508 162.202 46.2976 162.537ZM47.8064 161.788L46.5776 160.869L51.1268 154.787L52.3556 155.706L47.8064 161.788ZM46.6545 150.723C48.3762 152.262 48.5431 154.657 46.9831 156.402C45.5264 158.031 43.1713 158.316 41.4727 156.798C39.7625 155.269 39.8049 153.082 41.2203 151.499L41.6335 151.037L46.1631 155.086C46.9038 154.002 46.7738 152.659 45.7569 151.75C45.0636 151.13 44.1711 150.873 43.2781 151.197L42.8028 149.961C44.1675 149.435 45.5452 149.731 46.6545 150.723ZM45.4557 155.785L42.1163 152.799C41.3567 153.742 41.4677 154.943 42.4037 155.78C43.3628 156.637 44.5859 156.525 45.4557 155.785ZM41.341 145.236C41.8258 145.821 41.8835 146.619 41.3061 147.38L37.3284 152.611L36.4083 151.502L40.2186 146.53C40.3321 146.375 40.3641 146.268 40.2553 146.137C40.1761 146.041 40.0332 146.039 39.9061 146.104L35.3085 148.306C34.4442 148.721 33.7618 148.602 33.2473 147.982C32.7328 147.361 32.7403 146.69 33.3078 145.918L36.3441 141.809C36.4337 141.674 36.4558 141.555 36.3569 141.436C36.2678 141.329 36.1468 141.328 35.9739 141.411L30.4122 144.272L29.502 143.174L35.3497 140.197C36.2041 139.771 36.9677 139.963 37.4525 140.548C37.9571 141.156 37.9356 141.859 37.3702 142.609L34.2961 146.77C34.2064 146.904 34.1843 147.023 34.2833 147.143C34.3723 147.25 34.4934 147.25 34.6325 147.175L39.2996 144.936C40.142 144.519 40.8364 144.628 41.341 145.236ZM31.3781 131.71L32.0514 133.054L23.9299 137.122C23.0845 137.545 22.3218 137.234 21.9678 136.527C21.6833 135.959 21.7107 135.459 22.0639 134.953L27.4103 127.387C27.5142 127.283 27.5558 127.228 27.5141 127.144C27.4864 127.089 27.4517 127.089 27.3685 127.131L19.455 131.094L18.7817 129.75L26.917 125.675C27.7624 125.252 28.5321 125.612 28.8514 126.249C29.1151 126.776 29.1224 127.344 28.7554 127.858L23.3881 135.417C23.2911 135.5 23.2496 135.555 23.2843 135.625C23.3259 135.708 23.3953 135.708 23.5061 135.652L31.3781 131.71ZM26.1168 119.328C26.8464 121.503 25.7038 123.75 23.6171 124.45C21.5451 125.145 19.2882 124.022 18.5635 121.862C17.8339 119.687 18.9864 117.469 21.0438 116.779C23.1305 116.079 25.3922 117.168 26.1168 119.328ZM24.7355 119.791C24.2869 118.454 22.8544 117.79 21.5465 118.229C20.2239 118.673 19.4816 120.066 19.9302 121.403C20.3837 122.755 21.8212 123.434 23.1437 122.99C24.4516 122.552 25.189 121.143 24.7355 119.791ZM24.1016 111.606C24.2309 112.354 23.8836 113.075 23.0041 113.447L16.9495 116.004L16.7041 114.583L22.4843 112.168C22.6596 112.091 22.7407 112.014 22.7117 111.846C22.6906 111.724 22.5678 111.651 22.4251 111.644L17.3416 111.264C16.3856 111.193 15.853 110.751 15.7157 109.956C15.5784 109.162 15.919 108.584 16.7958 108.197L21.4748 106.145C21.6196 106.073 21.6981 105.981 21.6717 105.828C21.6479 105.691 21.5431 105.63 21.3519 105.616L15.1045 105.327L14.8616 103.922L21.4151 104.252C22.3685 104.308 22.9349 104.855 23.0642 105.603C23.1988 106.382 22.8304 106.981 21.9662 107.35L17.2287 109.427C17.0839 109.5 17.0055 109.592 17.0319 109.745C17.0556 109.882 17.1605 109.943 17.3185 109.947L22.4809 110.329C23.419 110.387 23.967 110.827 24.1016 111.606Z"
          fill="#FAFAFA"
        />
        <path
          d="M73.7642 87.288C69.1562 87.288 65.5802 83.568 65.5802 78.936C65.5802 74.4 69.1322 70.656 73.7642 70.656C76.4282 70.656 79.0202 71.952 80.2682 74.4L78.2762 75.552C77.3162 73.896 75.6362 72.96 73.6682 72.96C70.5002 72.96 68.1002 75.624 68.1002 78.984C68.1002 82.416 70.5002 85.032 73.7642 85.032C75.6842 85.032 77.2442 84.288 78.0122 83.376V79.512H80.3882V84.216C79.2842 85.824 76.9082 87.288 73.7642 87.288ZM88.3792 87.264C84.8032 87.264 82.1392 84.672 82.1392 81.048C82.1392 77.664 84.5632 74.904 88.0912 74.904C91.6432 74.904 93.8512 77.472 93.8512 80.76V81.72H84.4432C84.7072 83.736 86.2432 85.152 88.3552 85.152C89.7952 85.152 91.0912 84.528 91.7872 83.232L93.6112 84.168C92.5792 86.184 90.6832 87.264 88.3792 87.264ZM84.5392 80.184H91.4752C91.3792 78.312 90.0112 77.04 88.0672 77.04C86.0752 77.04 84.7792 78.432 84.5392 80.184ZM101.56 87.312C98.6319 87.312 97.0719 85.464 97.0719 82.776V77.304H94.7439V75.24H97.0719V72.192H99.4479V75.24H103.96V77.304H99.4479V82.704C99.4479 84.24 100.36 85.152 101.776 85.152C102.544 85.152 103.384 84.864 103.96 84.456V86.64C103.36 87.048 102.424 87.312 101.56 87.312ZM118.056 87.288C114.648 87.288 112.152 84.504 112.152 81.096C112.152 77.736 114.84 74.952 118.416 74.952C121.968 74.952 124.68 77.592 124.68 81.096V87H122.424V84.936C121.536 86.376 119.976 87.288 118.056 87.288ZM118.416 85.032C120.624 85.032 122.304 83.256 122.304 81.12C122.304 78.96 120.624 77.184 118.416 77.184C116.232 77.184 114.528 78.96 114.528 81.12C114.528 83.256 116.232 85.032 118.416 85.032ZM78.4053 121.288H69.2613C64.6773 121.168 61.1973 117.592 61.1973 112.936C61.1973 108.28 64.8213 104.656 69.4773 104.656C74.1093 104.656 77.7093 108.28 77.7093 112.936C77.7093 115.432 76.7013 117.64 75.0693 119.152C75.3093 119.128 75.5733 119.128 75.7893 119.128H78.4053V121.288ZM69.4773 118.96C72.6453 118.96 75.1893 116.32 75.1893 112.936C75.1893 109.6 72.6693 106.984 69.4773 106.984C66.2853 106.984 63.7173 109.6 63.7173 112.936C63.7173 116.32 66.2613 118.96 69.4773 118.96ZM86.0148 118.984C88.1988 118.984 89.3988 117.088 89.3988 114.904V109.24H91.7748V115.192C91.7748 118.6 89.7108 121.288 86.0148 121.288C82.3668 121.288 80.3028 118.576 80.3028 115.168V109.24H82.6788V114.928C82.6788 117.088 83.8548 118.984 86.0148 118.984ZM100.158 121.288C96.6062 121.288 93.8702 118.504 93.8702 115.096C93.8702 111.712 96.6302 108.952 100.158 108.952C103.71 108.952 106.398 111.736 106.398 115.096C106.398 118.504 103.686 121.288 100.158 121.288ZM100.158 119.032C102.342 119.032 104.022 117.256 104.022 115.12C104.022 112.96 102.342 111.184 100.158 111.184C97.9502 111.184 96.2462 112.96 96.2462 115.12C96.2462 117.256 97.9502 119.032 100.158 119.032ZM113.924 121.312C110.996 121.312 109.436 119.464 109.436 116.776V111.304H107.108V109.24H109.436V106.192H111.812V109.24H116.324V111.304H111.812V116.704C111.812 118.24 112.724 119.152 114.14 119.152C114.908 119.152 115.748 118.864 116.324 118.456V120.64C115.724 121.048 114.788 121.312 113.924 121.312ZM124.158 121.264C120.582 121.264 117.918 118.672 117.918 115.048C117.918 111.664 120.342 108.904 123.87 108.904C127.422 108.904 129.63 111.472 129.63 114.76V115.72H120.222C120.486 117.736 122.022 119.152 124.134 119.152C125.574 119.152 126.87 118.528 127.566 117.232L129.39 118.168C128.358 120.184 126.462 121.264 124.158 121.264ZM120.318 114.184H127.254C127.158 112.312 125.79 111.04 123.846 111.04C121.854 111.04 120.558 112.432 120.318 114.184Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_2314">
          <rect width="191" height="191" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const InteractiveBrandButtonIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 132}
      height={height ?? 136}
      viewBox="0 0 132 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M145.338 61.3325L137.613 63.1964C137.654 63.3707 137.684 63.5489 137.703 63.7312L139.339 80.9627C139.356 81.1437 139.361 81.3244 139.352 81.5049L147.29 81.8811C147.728 81.9017 148.165 81.828 148.572 81.665C148.979 81.502 149.346 81.2534 149.648 80.9362C149.951 80.6189 150.181 80.2404 150.325 79.8262C150.468 79.412 150.521 78.9718 150.48 78.5354L149.101 64.0178C149.059 63.5815 148.925 63.1591 148.706 62.7793C148.487 62.3995 148.189 62.0712 147.832 61.8166C147.475 61.5619 147.068 61.3869 146.638 61.3034C146.207 61.2199 145.764 61.2298 145.338 61.3325ZM120.556 58.0463L102.688 73.8289L115.396 72.622L115.27 71.2951C115.222 70.7901 115.377 70.2868 115.7 69.8958C116.023 69.5048 116.488 69.2582 116.993 69.2102C117.498 69.1622 118.002 69.3169 118.393 69.64C118.784 69.9632 119.03 70.4285 119.078 70.9334L119.692 77.3953C119.74 77.9003 119.585 78.4036 119.262 78.7946C118.939 79.1856 118.474 79.4323 117.969 79.4802C117.464 79.5282 116.961 79.3736 116.57 79.0504C116.179 78.7272 115.932 78.262 115.884 77.757L115.758 76.4301L103.05 77.6371L123.569 89.7739C124.146 90.1153 124.82 90.2577 125.486 90.1792C126.152 90.1006 126.773 89.8054 127.255 89.339L135.531 81.3244L133.894 64.0929L124.258 57.7794C123.697 57.4121 123.031 57.2393 122.362 57.2875C121.693 57.3357 121.059 57.6023 120.556 58.0463Z"
        fill="#D2D5DB"
      />
      <rect
        y="113.05"
        width="133"
        height="61.6341"
        rx="30.8171"
        transform="rotate(-58.2117 0 113.05)"
        fill="#EA2227"
      />
      <path
        d="M53.7731 100.18C53.7731 100.18 52.1344 105.075 49.6371 106.854C43.6806 111.097 32.5697 104.211 33.719 96.9886C34.2009 93.9605 37.8551 90.3148 37.8551 90.3148C40.3396 86.3058 43.599 84.9965 46.3346 86.6919C48.0561 87.7588 48.6798 89.3857 48.4307 91.157C49.7792 90.0344 51.3835 89.6577 53.3173 90.8562C56.2886 92.6976 56.1846 96.2888 53.7731 100.18ZM39.9601 94.8181C40.1911 96.015 41.4977 96.8669 42.7193 96.5281C43.8469 96.2153 44.2977 93.9812 44.2977 93.9812C45.0577 92.7549 44.9042 91.8438 43.9845 91.2738C43.1827 90.7769 42.3132 91.0214 41.5386 92.2712C41.5386 92.2712 39.7292 93.6213 39.9601 94.8181ZM46.2566 98.7203C46.5241 99.8595 47.6643 100.566 48.8035 100.299C49.9427 100.031 50.3819 97.7519 50.3819 97.7519C51.1419 96.5256 51.2266 95.5989 50.3069 95.0289C49.3165 94.4151 48.595 94.9472 47.835 96.1734C47.835 96.1734 45.9892 97.5812 46.2566 98.7203Z"
        fill="#FAFAFA"
      />
      <path
        d="M61.6228 87.5139L58.9482 91.8295L43.0302 81.9644L47.1662 75.2906C49.5046 71.5174 53.0563 69.7365 56.5701 71.9141C58.6689 73.2149 59.6597 75.4609 59.0946 77.6893C60.1104 77.209 61.3516 77.2602 63.2286 77.4442L67.5857 77.8923L64.6481 82.6324L60.7324 82.262C59.3115 82.1321 58.5306 82.4968 57.6537 83.9117C57.6537 83.9117 57.2927 84.3711 57.1568 84.7135C56.3972 86.6269 61.6228 87.5139 61.6228 87.5139ZM51.2044 77.728C51.2044 77.728 49.7125 79.0032 49.7429 80.0862C49.7889 81.7216 51.8046 83.0042 53.2893 82.3167C54.2626 81.8659 54.7361 79.982 54.7361 79.982C55.5253 78.7086 55.3732 77.374 54.2413 76.6725C53.0386 75.9271 51.9644 76.5017 51.2044 77.728Z"
        fill="#FAFAFA"
      />
      <path
        d="M71.0437 72.3127L68.486 76.4396L54.9026 68.0213C53.2047 66.9691 53.0091 65.02 53.8714 63.6287C54.5583 62.5203 55.5348 61.7872 56.7817 61.7766C56.7817 61.7766 68.4286 66.4502 69.1506 61.6739C69.8226 57.228 59.3639 55.6087 59.3639 55.6087L61.9215 51.4818L75.505 59.9C77.2029 60.9523 77.3749 62.8867 76.5126 64.2781C75.8403 65.3629 74.8492 66.1195 73.6023 66.1301C73.6023 66.1301 61.9749 61.4596 61.2334 66.2328C60.5415 70.6866 71.0437 72.3127 71.0437 72.3127Z"
        fill="#FAFAFA"
      />
      <path
        d="M80.7065 39.0776C85.5409 42.0737 86.3851 47.5582 83.2282 52.6519L79.326 58.9484L63.408 49.0833L67.3102 42.7868C70.5401 37.5751 75.8721 36.0815 80.7065 39.0776ZM77.9296 43.5583C75.5478 42.0821 72.8976 42.7245 71.3192 45.2714C71.3192 45.2714 70.3987 46.3613 70.1207 47.2051C68.9684 50.704 75.5181 54.7632 78.1387 52.1742C78.7708 51.5498 79.3372 50.2405 79.3372 50.2405C80.9156 47.6936 80.335 45.049 77.9296 43.5583Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveChipsButtonIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 181}
      height={height ?? 64}
      viewBox="0 0 181 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="181" height="64" rx="32" fill="#006AB5" />
      <circle cx="32" cy="32" r="24" fill="#FAFAFA" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 8C45.2548 8 56 18.7452 56 32C56 38.5548 53.3722 44.4959 49.1126 48.8273C45.3061 43.4838 39.0599 40 32 40C24.9401 40 18.6939 43.4838 14.8867 48.8261C10.6278 44.4959 8 38.5548 8 32C8 18.7452 18.7452 8 32 8ZM32 16C26.4772 16 22 20.4772 22 26C22 31.5228 26.4772 36 32 36C37.5228 36 42 31.5228 42 26C42 20.4772 37.5228 16 32 16Z"
        fill="#1C1C1C"
        fill-opacity="0.3"
      />
      <path
        d="M72.0566 26.9824C71.2689 26.9824 70.5592 27.1191 69.9277 27.3926C69.3027 27.6595 68.7689 28.0501 68.3262 28.5645C67.89 29.0723 67.5547 29.6875 67.3203 30.4102C67.0859 31.1328 66.9688 31.9466 66.9688 32.8516C66.9688 34.0495 67.1543 35.0911 67.5254 35.9766C67.903 36.8555 68.4629 37.5358 69.2051 38.0176C69.9538 38.4993 70.888 38.7402 72.0078 38.7402C72.6458 38.7402 73.2448 38.6882 73.8047 38.584C74.3711 38.4733 74.9212 38.3366 75.4551 38.1738V39.6191C74.9342 39.8145 74.3874 39.9577 73.8145 40.0488C73.2415 40.1465 72.5612 40.1953 71.7734 40.1953C70.3216 40.1953 69.1074 39.8958 68.1309 39.2969C67.1608 38.6914 66.4316 37.8385 65.9434 36.7383C65.4616 35.638 65.2207 34.3392 65.2207 32.8418C65.2207 31.7611 65.3704 30.7747 65.6699 29.8828C65.9759 28.9844 66.4186 28.2096 66.998 27.5586C67.584 26.9076 68.3001 26.4062 69.1465 26.0547C69.9993 25.6966 70.9759 25.5176 72.0762 25.5176C72.7988 25.5176 73.4954 25.5892 74.166 25.7324C74.8366 25.8757 75.4421 26.0807 75.9824 26.3477L75.3184 27.7539C74.8626 27.5456 74.3613 27.3665 73.8145 27.2168C73.2741 27.0605 72.6882 26.9824 72.0566 26.9824ZM79.9277 24.8047V29.3457C79.9277 29.6061 79.9212 29.8698 79.9082 30.1367C79.8952 30.3971 79.8724 30.638 79.8398 30.8594H79.9473C80.1686 30.4818 80.4486 30.166 80.7871 29.9121C81.1322 29.6517 81.5228 29.4564 81.959 29.3262C82.3952 29.1895 82.8574 29.1211 83.3457 29.1211C84.2051 29.1211 84.9212 29.2578 85.4941 29.5312C86.0736 29.8047 86.5065 30.2279 86.793 30.8008C87.0859 31.3737 87.2324 32.1159 87.2324 33.0273V40H85.6309V33.1348C85.6309 32.2428 85.4258 31.5755 85.0156 31.1328C84.612 30.6901 83.9902 30.4688 83.1504 30.4688C82.3561 30.4688 81.7214 30.6217 81.2461 30.9277C80.7773 31.2272 80.4388 31.6699 80.2305 32.2559C80.0286 32.8418 79.9277 33.5579 79.9277 34.4043V40H78.3066V24.8047H79.9277ZM92.1934 29.2969V40H90.5723V29.2969H92.1934ZM91.4023 25.293C91.6693 25.293 91.8971 25.3809 92.0859 25.5566C92.2812 25.7259 92.3789 25.9928 92.3789 26.3574C92.3789 26.7155 92.2812 26.9824 92.0859 27.1582C91.8971 27.334 91.6693 27.4219 91.4023 27.4219C91.1224 27.4219 90.888 27.334 90.6992 27.1582C90.5169 26.9824 90.4258 26.7155 90.4258 26.3574C90.4258 25.9928 90.5169 25.7259 90.6992 25.5566C90.888 25.3809 91.1224 25.293 91.4023 25.293ZM100.66 29.1016C101.995 29.1016 103.059 29.5605 103.854 30.4785C104.648 31.3965 105.045 32.7767 105.045 34.6191C105.045 35.8366 104.863 36.8587 104.498 37.6855C104.133 38.5124 103.619 39.1374 102.955 39.5605C102.298 39.9837 101.52 40.1953 100.621 40.1953C100.055 40.1953 99.5566 40.1204 99.127 39.9707C98.6973 39.821 98.3294 39.6191 98.0234 39.3652C97.7174 39.1113 97.4635 38.8346 97.2617 38.5352H97.1445C97.1641 38.7891 97.1868 39.0951 97.2129 39.4531C97.2454 39.8112 97.2617 40.1237 97.2617 40.3906V44.7852H95.6309V29.2969H96.9688L97.1836 30.8789H97.2617C97.4701 30.5534 97.724 30.2572 98.0234 29.9902C98.3229 29.7168 98.6875 29.502 99.1172 29.3457C99.5534 29.1829 100.068 29.1016 100.66 29.1016ZM100.377 30.4688C99.6348 30.4688 99.0358 30.612 98.5801 30.8984C98.1309 31.1849 97.8021 31.6146 97.5938 32.1875C97.3854 32.7539 97.2747 33.4668 97.2617 34.3262V34.6387C97.2617 35.5436 97.3594 36.3086 97.5547 36.9336C97.7565 37.5586 98.0853 38.0339 98.541 38.3594C99.0033 38.6849 99.6217 38.8477 100.396 38.8477C101.061 38.8477 101.614 38.6686 102.057 38.3105C102.499 37.9525 102.828 37.4544 103.043 36.8164C103.264 36.1719 103.375 35.4329 103.375 34.5996C103.375 33.3366 103.128 32.334 102.633 31.5918C102.145 30.8431 101.393 30.4688 100.377 30.4688ZM114.801 37.0703C114.801 37.7539 114.628 38.3301 114.283 38.7988C113.945 39.2611 113.456 39.6094 112.818 39.8438C112.187 40.0781 111.432 40.1953 110.553 40.1953C109.804 40.1953 109.156 40.1367 108.609 40.0195C108.062 39.9023 107.584 39.7363 107.174 39.5215V38.0273C107.61 38.2422 108.131 38.4375 108.736 38.6133C109.342 38.7891 109.96 38.877 110.592 38.877C111.516 38.877 112.187 38.7272 112.604 38.4277C113.02 38.1283 113.229 37.7214 113.229 37.207C113.229 36.9141 113.144 36.6569 112.975 36.4355C112.812 36.2077 112.535 35.9896 112.145 35.7812C111.754 35.5664 111.214 35.332 110.523 35.0781C109.84 34.8177 109.247 34.5605 108.746 34.3066C108.251 34.0462 107.867 33.7305 107.594 33.3594C107.327 32.9883 107.193 32.5065 107.193 31.9141C107.193 31.0091 107.558 30.3158 108.287 29.834C109.023 29.3457 109.986 29.1016 111.178 29.1016C111.822 29.1016 112.424 29.1667 112.984 29.2969C113.551 29.4206 114.078 29.5898 114.566 29.8047L114.02 31.1035C113.577 30.9147 113.105 30.7552 112.604 30.625C112.102 30.4948 111.591 30.4297 111.07 30.4297C110.322 30.4297 109.745 30.5534 109.342 30.8008C108.945 31.0482 108.746 31.3867 108.746 31.8164C108.746 32.1484 108.837 32.4219 109.02 32.6367C109.208 32.8516 109.508 33.0534 109.918 33.2422C110.328 33.431 110.868 33.6523 111.539 33.9062C112.21 34.1536 112.789 34.4108 113.277 34.6777C113.766 34.9382 114.14 35.2572 114.4 35.6348C114.667 36.0059 114.801 36.4844 114.801 37.0703ZM126.061 38.8672C126.327 38.8672 126.601 38.8444 126.881 38.7988C127.161 38.7533 127.389 38.6979 127.564 38.6328V39.8926C127.376 39.9772 127.112 40.0488 126.773 40.1074C126.441 40.166 126.116 40.1953 125.797 40.1953C125.23 40.1953 124.716 40.0977 124.254 39.9023C123.792 39.7005 123.421 39.362 123.141 38.8867C122.867 38.4115 122.73 37.7539 122.73 36.9141V30.5664H121.207V29.7754L122.74 29.1406L123.385 26.8164H124.361V29.2969H127.496V30.5664H124.361V36.8652C124.361 37.5358 124.514 38.0371 124.82 38.3691C125.133 38.7012 125.546 38.8672 126.061 38.8672ZM133.854 29.1016C134.765 29.1016 135.546 29.3034 136.197 29.707C136.848 30.1107 137.346 30.6771 137.691 31.4062C138.036 32.1289 138.209 32.9753 138.209 33.9453V34.9512H130.816C130.836 36.2077 131.148 37.1647 131.754 37.8223C132.359 38.4798 133.212 38.8086 134.312 38.8086C134.99 38.8086 135.589 38.7467 136.109 38.623C136.63 38.4993 137.171 38.3171 137.73 38.0762V39.502C137.19 39.7428 136.653 39.9186 136.119 40.0293C135.592 40.14 134.967 40.1953 134.244 40.1953C133.215 40.1953 132.317 39.987 131.549 39.5703C130.787 39.1471 130.195 38.5286 129.771 37.7148C129.348 36.901 129.137 35.9049 129.137 34.7266C129.137 33.5742 129.329 32.5781 129.713 31.7383C130.104 30.8919 130.65 30.2409 131.354 29.7852C132.063 29.3294 132.896 29.1016 133.854 29.1016ZM133.834 30.4297C132.968 30.4297 132.278 30.7129 131.764 31.2793C131.249 31.8457 130.943 32.6367 130.846 33.6523H136.51C136.503 33.0143 136.402 32.4544 136.207 31.9727C136.018 31.4844 135.729 31.1068 135.338 30.8398C134.947 30.5664 134.446 30.4297 133.834 30.4297ZM143.512 34.5215L139.811 29.2969H141.666L144.488 33.418L147.301 29.2969H149.137L145.436 34.5215L149.342 40H147.486L144.488 35.6348L141.471 40H139.635L143.512 34.5215ZM154.889 38.8672C155.156 38.8672 155.429 38.8444 155.709 38.7988C155.989 38.7533 156.217 38.6979 156.393 38.6328V39.8926C156.204 39.9772 155.94 40.0488 155.602 40.1074C155.27 40.166 154.944 40.1953 154.625 40.1953C154.059 40.1953 153.544 40.0977 153.082 39.9023C152.62 39.7005 152.249 39.362 151.969 38.8867C151.695 38.4115 151.559 37.7539 151.559 36.9141V30.5664H150.035V29.7754L151.568 29.1406L152.213 26.8164H153.189V29.2969H156.324V30.5664H153.189V36.8652C153.189 37.5358 153.342 38.0371 153.648 38.3691C153.961 38.7012 154.374 38.8672 154.889 38.8672Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};
export const InteractiveDevelopmentIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 128}
      height={height ?? 115}
      viewBox="0 0 128 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M65.2423 58.5577C81.2381 58.5577 94.2072 52.0768 94.2072 44.0752C94.2072 36.0737 81.2381 29.5928 65.2423 29.5928C49.2464 29.5928 36.2773 36.0737 36.2773 44.0752C36.2773 52.0768 49.2464 58.5577 65.2423 58.5577Z"
        fill="#EA2227"
      />
      <path
        opacity="0.5"
        d="M36.2769 65.2422V86.6317C36.2769 94.5101 49.2459 100.891 65.2418 100.891C81.2376 100.891 94.2067 94.5101 94.2067 86.6317V65.2422C94.2067 73.1206 81.2376 79.5018 65.2418 79.5018C49.2459 79.5018 36.2769 73.1206 36.2769 65.2422Z"
        fill="#D2D5DB"
      />
      <path
        d="M36.2769 42.9614V65.6877C36.2769 74.0586 49.2459 80.8386 65.2418 80.8386C81.2376 80.8386 94.2067 74.0586 94.2067 65.6877V42.9614C94.2067 51.3323 81.2376 58.1123 65.2418 58.1123C49.2459 58.1123 36.2769 51.3323 36.2769 42.9614Z"
        fill="#B01A1D"
      />
    </svg>
  );
};
export const InteractiveProductDesignIcon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 41}
      height={height ?? 43}
      viewBox="0 0 41 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="41" height="7" rx="3.5" fill="#D2D5DB" />
      <rect y="9" width="19" height="8" rx="4" fill="#D2D5DB" />
      <rect y="24" width="41" height="19" rx="9.5" fill="#EA2227" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9199 28.0502C15.7981 28.0001 15.6643 27.9871 15.5352 28.013C15.4062 28.0388 15.2876 28.1023 15.1946 28.1954C15.1016 28.2886 15.0382 28.4071 15.0124 28.5362C14.9866 28.6653 14.9997 28.7991 15.0499 28.9208L19.7165 40.2542C19.7665 40.3756 19.8512 40.4795 19.9601 40.553C20.0689 40.6264 20.197 40.6661 20.3283 40.6671C20.4596 40.668 20.5883 40.6301 20.6981 40.5582C20.808 40.4863 20.8942 40.3835 20.9459 40.2628L22.7359 36.0862C22.8033 35.9289 22.9286 35.8036 23.0859 35.7362L27.2625 33.9462C27.3832 33.8945 27.486 33.8083 27.5579 33.6984C27.6298 33.5886 27.6677 33.4599 27.6668 33.3286C27.6658 33.1973 27.6262 33.0692 27.5527 32.9604C27.4792 32.8515 27.3753 32.7668 27.2539 32.7168L15.9199 28.0502Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export const Staricon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 25}
      height={height ?? 25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.1367 2.3531C12.1816 2.26233 12.251 2.18592 12.337 2.13251C12.4231 2.07909 12.5223 2.05078 12.6236 2.05078C12.7249 2.05078 12.8242 2.07909 12.9102 2.13251C12.9962 2.18592 13.0656 2.26233 13.1106 2.3531L15.4787 7.14985C15.6347 7.46556 15.865 7.73871 16.1498 7.94584C16.4346 8.15297 16.7654 8.2879 17.1138 8.33904L22.4098 9.11406C22.5102 9.1286 22.6045 9.17093 22.682 9.23626C22.7596 9.30159 22.8173 9.38732 22.8486 9.48374C22.88 9.58017 22.8838 9.68345 22.8595 9.78189C22.8352 9.88034 22.7838 9.97003 22.7112 10.0408L18.8812 13.7704C18.6286 14.0165 18.4397 14.3203 18.3305 14.6557C18.2214 14.9911 18.1955 15.348 18.2549 15.6956L19.159 20.965C19.1768 21.0653 19.1659 21.1685 19.1278 21.263C19.0896 21.3574 19.0257 21.4392 18.9433 21.4991C18.8609 21.5589 18.7633 21.5944 18.6617 21.6015C18.5601 21.6086 18.4585 21.5869 18.3686 21.5391L13.6344 19.05C13.3225 18.8862 12.9754 18.8006 12.6231 18.8006C12.2708 18.8006 11.9237 18.8862 11.6118 19.05L6.87859 21.5391C6.78871 21.5866 6.68729 21.608 6.58586 21.6008C6.48442 21.5936 6.38704 21.5581 6.3048 21.4983C6.22256 21.4385 6.15875 21.3568 6.12064 21.2625C6.08253 21.1682 6.07164 21.0651 6.08921 20.965L6.99238 15.6967C7.05204 15.3488 7.0262 14.9917 6.91707 14.6562C6.80795 14.3206 6.61882 14.0166 6.36601 13.7704L2.53599 10.0418C2.46279 9.97113 2.41091 9.88129 2.38628 9.78255C2.36164 9.6838 2.36523 9.58012 2.39665 9.48332C2.42806 9.38651 2.48603 9.30048 2.56395 9.23502C2.64187 9.16955 2.73662 9.12729 2.83739 9.11304L8.13237 8.33904C8.48119 8.28829 8.81245 8.15354 9.09765 7.94639C9.38284 7.73923 9.61343 7.46587 9.76956 7.14985L12.1367 2.3531Z"
        fill="#FFBB33"
      />
    </svg>
  );
};
export const Goggleicon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 72}
      height={height ?? 72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M67.1593 36.9749C67.1593 34.6636 66.9519 32.4411 66.5666 30.3076H35.8677V42.9309H53.4099C52.6395 46.9905 50.3282 50.4279 46.8612 52.7392V60.9473H57.4399C63.6034 55.2579 67.1593 46.9016 67.1593 36.9749Z"
        fill="#006AB5"
      />
      <path
        d="M35.8679 68.8297C44.6686 68.8297 52.047 65.9257 57.4401 60.9475L46.8614 52.7394C43.9574 54.6951 40.2534 55.8804 35.8679 55.8804C27.393 55.8804 20.1924 50.1614 17.6144 42.457H6.76904V50.8726C12.1325 61.5105 23.126 68.8297 35.8679 68.8297Z"
        fill="#3DA755"
      />
      <path
        d="M17.6144 42.4268C16.9625 40.4711 16.5773 38.3968 16.5773 36.2337C16.5773 34.0705 16.9625 31.9963 17.6144 30.0405V21.625H6.76906C4.54665 26.0106 3.27246 30.9591 3.27246 36.2337C3.27246 41.5082 4.54665 46.4568 6.76906 50.8424L15.2142 44.264L17.6144 42.4268Z"
        fill="#FFC654"
      />
      <path
        d="M35.8679 16.6181C40.6683 16.6181 44.9353 18.2775 48.343 21.4777L57.6772 12.1436C52.0174 6.86907 44.6686 3.63916 35.8679 3.63916C23.126 3.63916 12.1325 10.9583 6.76904 21.6259L17.6144 30.0414C20.1924 22.3371 27.3931 16.6181 35.8679 16.6181Z"
        fill="#EA4335"
      />
    </svg>
  );
};
export const Accordiantriggericon = ({
  height,
  width,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width ?? 26}
      height={height ?? 12}
      viewBox="0 0 26 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 1.5L8.75736 8.25736C11.1005 10.6005 14.8995 10.6005 17.2426 8.25736L24 1.5"
        stroke="#EA2227"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const BadgesDiamondIcon = ({
  height,
  width,
  strokewidth,
  ...props
}: IconProps & { strokewidth: number | null }) => {
  return (
    <svg
      width={width ?? 15}
      height={height ?? 16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.25879 1.00244C7.73105 0.997719 8.19984 1.08615 8.6377 1.26318C9.0747 1.4399 9.47274 1.70097 9.80859 2.03174V2.03271L13.3643 5.59229C13.6954 5.92949 13.9561 6.3293 14.1318 6.76807C14.3077 7.20723 14.3948 7.67689 14.3877 8.1499C14.3806 8.62294 14.2798 9.09021 14.0908 9.52393C13.9255 9.90339 13.6958 10.2511 13.4121 10.5513L13.2832 10.6802L10.1211 13.8433L10.1191 13.8442C9.45415 14.5181 8.54923 14.9008 7.60254 14.9087C6.65571 14.9166 5.7436 14.549 5.06738 13.8862L1.50977 10.3325C1.17925 9.99625 0.918707 9.59787 0.742188 9.16064C0.565461 8.72278 0.476724 8.2539 0.481445 7.78174C0.486198 7.30966 0.584116 6.84286 0.769531 6.40869C0.954946 5.97466 1.22388 5.58125 1.56152 5.25146L4.72852 2.08447C5.05809 1.74617 5.45152 1.47629 5.88574 1.29053C6.31992 1.10481 6.78659 1.00717 7.25879 1.00244Z"
        stroke="#1C1C1C"
        stroke-width={strokewidth ?? 0.479554}
      />
    </svg>
  );
};
export const CheckboxtickIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 17}
      height={height ?? 16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7.11328L4.88672 12.1133L15 2"
        stroke="black"
        stroke-width="4"
      />
    </svg>
  );
};
export const StarburstIcon = ({ height, width, color, ...props }: IconProps) => {
  return (
    <svg
      width={width ?? 51}
      height={height ?? 52}
      viewBox="0 0 51 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="22" y="0.5" width="7" height="51" fill={"#EA2227"} />
      <rect
        x="36"
        y="2.5"
        width="7"
        height="51"
        transform="rotate(30 36 2.5)"
        fill="#EA2227"
      />
      <rect
        x="46"
        y="10.5"
        width="7"
        height="51"
        transform="rotate(60 46 10.5)"
        fill="#EA2227"
      />
      <rect
        x="51"
        y="22.5"
        width="7"
        height="51"
        transform="rotate(90 51 22.5)"
        fill="#EA2227"
      />
      <rect
        x="50"
        y="36.5"
        width="7"
        height="51"
        transform="rotate(120 50 36.5)"
        fill="#EA2227"
      />
      <rect
        x="42"
        y="46.5"
        width="7"
        height="51"
        transform="rotate(150 42 46.5)"
        fill="#EA2227"
      />
    </svg>
  );
};

export const RightArrowIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 55} height={height ?? 37} viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M53.7678 20.1774C54.7441 19.2011 54.7441 17.6182 53.7678 16.6419L37.8579 0.731998C36.8816 -0.244312 35.2986 -0.244312 34.3223 0.731998C33.346 1.70831 33.346 3.29122 34.3223 4.26753L48.4645 18.4097L34.3223 32.5518C33.346 33.5281 33.346 35.111 34.3223 36.0873C35.2986 37.0636 36.8816 37.0636 37.8579 36.0873L53.7678 20.1774ZM0 18.4097V20.9097H52V18.4097V15.9097H0V18.4097Z" fill="white" />
    </svg>

  );
};
export const LeftArrowIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 55} height={height ?? 37} viewBox="0 0 55 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0.732231 20.1774C-0.244076 19.2011 -0.244076 17.6182 0.732231 16.6419L16.6421 0.731998C17.6184 -0.244312 19.2014 -0.244312 20.1777 0.731998C21.154 1.70831 21.154 3.29122 20.1777 4.26753L6.03553 18.4097L20.1777 32.5518C21.154 33.5281 21.154 35.111 20.1777 36.0873C19.2014 37.0636 17.6184 37.0636 16.6421 36.0873L0.732231 20.1774ZM54.5 18.4097V20.9097H2.5V18.4097V15.9097H54.5V18.4097Z" fill="white" />
    </svg>


  );
};


export const FigmaIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 30} height={height ?? 30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.25 3.75H15V11.25H11.25C10.2554 11.25 9.30161 10.8549 8.59835 10.1517C7.89509 9.44839 7.5 8.49456 7.5 7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75Z" fill="#F4511E" />
      <path d="M18.75 11.25H15V3.75H18.75C19.7446 3.75 20.6984 4.14509 21.4016 4.84835C22.1049 5.55161 22.5 6.50544 22.5 7.5C22.5 8.49456 22.1049 9.44839 21.4016 10.1517C20.6984 10.8549 19.7446 11.25 18.75 11.25Z" fill="#FF8A65" />
      <path d="M15 15C15 17.0711 16.6789 18.75 18.75 18.75C20.8211 18.75 22.5 17.0711 22.5 15C22.5 12.9289 20.8211 11.25 18.75 11.25C16.6789 11.25 15 12.9289 15 15Z" fill="#29B6F6" />
      <path d="M11.25 11.25H15V18.75H11.25C10.2554 18.75 9.30161 18.3549 8.59835 17.6516C7.89509 16.9484 7.5 15.9946 7.5 15C7.5 14.0054 7.89509 13.0516 8.59835 12.3483C9.30161 11.6451 10.2554 11.25 11.25 11.25Z" fill="#7C4DFF" />
      <path d="M11.25 18.75H15V22.5C15 23.4946 14.6049 24.4484 13.9017 25.1516C13.1984 25.8549 12.2446 26.25 11.25 26.25C10.2554 26.25 9.30161 25.8549 8.59835 25.1516C7.89509 24.4484 7.5 23.4946 7.5 22.5C7.5 21.5054 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75Z" fill="#00E676" />
    </svg>
  );
};

export const PhotoshopIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 30} height={height ?? 30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_444_1745)">
        <path d="M5.31258 0.375H24.6874C27.6251 0.375 30 2.74992 30 5.68758V24.3124C30 27.2501 27.6251 29.625 24.6874 29.625H5.31258C2.37492 29.625 0 27.2501 0 24.3124V5.68758C0 2.74992 2.37492 0.375 5.31258 0.375Z" fill="#001E36" />
        <path d="M10.7501 7.81241C10.3751 7.81241 10.0001 7.81241 9.61266 7.82506C9.225 7.83749 8.86242 7.83749 8.52492 7.85014C8.18742 7.86256 7.875 7.86256 7.575 7.87499C7.28742 7.88741 7.0875 7.88741 6.87492 7.88741C6.7875 7.88741 6.75 7.93733 6.75 8.02499V20.8875C6.75 21 6.79992 21.0501 6.9 21.0501H9.32508C9.4125 21.0375 9.47508 20.9625 9.46242 20.8751V16.8626C9.69984 16.8626 9.87492 16.8626 10.0001 16.875C10.125 16.8874 10.3249 16.8874 10.6249 16.8874C11.6501 16.8874 12.5876 16.7749 13.4374 16.4625C14.25 16.1625 14.9501 15.6375 15.45 14.9374C15.95 14.2374 16.2 13.3499 16.2 12.2749C16.2 11.7124 16.1002 11.175 15.9127 10.65C15.714 10.1151 15.4027 9.62916 15 9.22499C14.5246 8.76318 13.9524 8.41299 13.3249 8.19983C12.6248 7.93733 11.775 7.81241 10.7501 7.81241ZM11.029 10.2745C11.4743 10.283 11.9079 10.3608 12.3124 10.5248C12.675 10.6624 12.975 10.9125 13.1876 11.2373C13.3869 11.5735 13.4867 11.9594 13.4752 12.3501C13.4752 12.9 13.35 13.3251 13.0875 13.6376C12.8123 13.95 12.4624 14.1876 12.0626 14.3001C11.5999 14.4501 11.1124 14.5249 10.6249 14.5249H9.96234C9.81234 14.5249 9.65016 14.5125 9.47508 14.5001V10.3001C9.5625 10.2874 9.73758 10.275 9.98766 10.2876C10.2251 10.275 10.5124 10.275 10.8375 10.275C10.9016 10.2734 10.9654 10.2733 11.029 10.2745ZM21.5126 10.9127C20.625 10.9127 19.8874 11.0501 19.3001 11.3501C18.7627 11.6001 18.3 12 17.9876 12.4999C17.7127 12.9626 17.5624 13.4749 17.5624 14.0126C17.5517 14.4548 17.6505 14.8928 17.85 15.2876C18.0838 15.708 18.4084 16.0709 18.8002 16.35C19.35 16.7261 19.9467 17.0286 20.5751 17.25C21.1875 17.4874 21.6 17.6749 21.8002 17.8373C22.0001 18 22.1002 18.1624 22.1002 18.3375C22.1002 18.5625 21.9626 18.7751 21.7627 18.8625C21.5377 18.975 21.2002 19.0376 20.7251 19.0376C20.2252 19.0376 19.725 18.975 19.2499 18.8501C18.7044 18.7282 18.1814 18.5216 17.7 18.2376C17.6625 18.2126 17.625 18.2001 17.5875 18.2252C17.55 18.2501 17.5376 18.3 17.5376 18.3375V20.5125C17.5252 20.6126 17.5875 20.7 17.6752 20.7499C18.0805 20.9393 18.5093 21.0738 18.9502 21.15C19.5127 21.2625 20.0749 21.3124 20.6498 21.3124C21.5498 21.3124 22.3001 21.1751 22.9125 20.9126C23.475 20.6876 23.9625 20.3001 24.3124 19.8C24.6401 19.3083 24.8102 18.7284 24.7999 18.1376C24.8123 17.6912 24.7135 17.2489 24.5126 16.8501C24.2749 16.425 23.9374 16.0751 23.5249 15.8126C22.9215 15.4336 22.2753 15.1273 21.6 14.8999C21.2984 14.7751 21.0023 14.6375 20.7124 14.4874C20.55 14.4 20.4 14.2875 20.2875 14.1499C20.2125 14.0498 20.1626 13.9376 20.1626 13.8251C20.1626 13.7126 20.2001 13.5876 20.2624 13.4876C20.3501 13.3626 20.4874 13.275 20.6498 13.2375C20.8875 13.1751 21.15 13.1374 21.3998 13.1498C21.8749 13.1498 22.3373 13.2124 22.8 13.3125C23.2252 13.3999 23.625 13.5375 24 13.7376C24.0499 13.7625 24.1125 13.7625 24.225 13.7376C24.2445 13.7232 24.2604 13.7043 24.2713 13.6825C24.2821 13.6608 24.2877 13.6368 24.2876 13.6125V11.5751C24.2876 11.5249 24.2749 11.475 24.2625 11.4251C24.2374 11.3751 24.1875 11.325 24.1376 11.3126C23.7928 11.1717 23.4316 11.075 23.0625 11.025C22.5492 10.9503 22.0313 10.9129 21.5126 10.9127Z" fill="#31A8FF" />
      </g>
      <defs>
        <clipPath id="clip0_444_1745">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export const IllustratorIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 30} height={height ?? 30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_444_1750)">
        <path d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z" fill="#330000" />
        <path d="M14.4998 17.8515H9.84983L8.89979 20.789C8.87483 20.9015 8.77487 20.9766 8.66237 20.964H6.31229C6.17483 20.964 6.13733 20.889 6.17483 20.739L10.1999 9.15151C10.2374 9.02659 10.2749 8.88901 10.3248 8.73901C10.3748 8.47651 10.3998 8.20159 10.3998 7.92655C10.3874 7.86409 10.4373 7.80151 10.4999 7.78909H13.7373C13.8374 7.78909 13.8873 7.82659 13.8998 7.88905L18.4623 20.7641C18.4998 20.9015 18.4623 20.964 18.3374 20.964H15.7248C15.6374 20.9766 15.5498 20.9141 15.5249 20.8266L14.4998 17.8515ZM10.5749 15.314H13.7498C13.6748 15.0515 13.5749 14.739 13.4624 14.4141C13.3499 14.0766 13.2374 13.7141 13.1249 13.3391C12.9998 12.9516 12.8873 12.5766 12.7623 12.189C12.6374 11.8016 12.5249 11.439 12.4248 11.0766C12.3248 10.7266 12.2373 10.4015 12.1499 10.1015H12.1248C12.0123 10.6391 11.8748 11.1766 11.6999 11.7141C11.5124 12.3141 11.3249 12.939 11.1248 13.5641C10.9634 14.1541 10.78 14.7378 10.5749 15.314ZM21.2498 9.97651C20.8373 9.98905 20.4374 9.82651 20.1374 9.53905C19.8499 9.22651 19.6999 8.81401 19.7123 8.38909C19.6999 7.96405 19.8623 7.56409 20.1623 7.27651C20.4623 6.98893 20.8624 6.83905 21.2749 6.83905C21.7624 6.83905 22.1374 6.98905 22.4123 7.27651C22.6894 7.57954 22.8374 7.97868 22.8248 8.38909C22.8374 8.81401 22.6874 9.22651 22.3874 9.53905C22.0999 9.83905 21.6749 10.0016 21.2498 9.97651ZM19.8499 20.8266V11.2016C19.8499 11.0766 19.8998 11.0265 20.0123 11.0265H22.4873C22.5998 11.0265 22.6499 11.0891 22.6499 11.2016V20.8266C22.6499 20.964 22.5998 21.0266 22.4873 21.0266H20.0374C19.9124 21.0266 19.8499 20.9516 19.8499 20.8266Z" fill="#FF9A00" />
      </g>
      <defs>
        <clipPath id="clip0_444_1750">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export const BalsamiqIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 27} height={height ?? 27} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.25 25.75C20.1536 25.75 25.75 20.1536 25.75 13.25C25.75 6.34644 20.1536 0.75 13.25 0.75C6.34644 0.75 0.75 6.34644 0.75 13.25C0.75 20.1536 6.34644 25.75 13.25 25.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.25 17C8.83217 17.7762 9.58707 18.4062 10.4549 18.8402C11.3228 19.2741 12.2797 19.5 13.25 19.5C14.2203 19.5 15.1772 19.2741 16.0451 18.8402C16.9129 18.4062 17.6678 17.7762 18.25 17M8.26125 9.5H8.25M18.25 9.5H18.2388" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const WebflowIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 30} height={height ?? 30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22.9688 0H7.03125C3.148 0 0 3.148 0 7.03125V22.9688C0 26.852 3.148 30 7.03125 30H22.9688C26.852 30 30 26.852 30 22.9688V7.03125C30 3.148 26.852 0 22.9688 0Z" fill="#4353FF" />
      <path d="M19.817 12.1214C19.817 12.1214 18.198 17.1935 18.0784 17.6242C18.0306 17.2015 16.8503 8.08594 16.8503 8.08594C14.0909 8.08594 12.6234 10.0478 11.8418 12.1214C11.8418 12.1214 9.87199 17.2095 9.7125 17.6321C9.70453 17.2334 9.40945 12.1692 9.40945 12.1692C9.24187 9.62508 6.92109 8.08594 5.03906 8.08594L7.30406 21.8909C10.191 21.8829 11.7462 19.929 12.5596 17.8475C12.5596 17.8475 14.2902 13.3575 14.362 13.1582C14.378 13.3495 15.6061 21.8909 15.6061 21.8909C18.5011 21.8909 20.0643 20.0646 20.9016 18.0628L24.9609 8.08594C22.0978 8.08594 20.5905 10.0398 19.817 12.1214Z" fill="white" />
    </svg>

  );
};


export const RoundedCornersIcon = ({ height, width, ...props }: IconProps) => {
  return (
    <svg width={width ?? 344} height={height ?? 139} viewBox="0 0 344 139" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M316.996 30.5C327.996 30.5 344 21.5 344 0V138.5H-0.000565231C13.4961 138.5 27.4961 126.5 27.4961 112C27.8294 100.5 27.5024 78.3154 27.5024 57.5C27.5024 40 43.5002 30.4276 55.5002 30.5C138.334 31 301.488 30.5 316.996 30.5Z" fill="white" />
    </svg>

  );
};

export const Klemdoublearrowicon = ({ height, width }: IconProps) => {
  return (
    <svg width={width ?? 204} height={height ?? 70} viewBox="0 0 409 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M146 126.5L270 2.5M270 2.5V126.5M270 2.5H146" stroke="#E88B41" stroke-width="5"/>
    <path d="M407 2.5L283 126.5M283 126.5V2.5M283 126.5H407" stroke="#E88B41" stroke-width="5"/>
    </svg>    
  );
};







