import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { cn } from "../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({
  ...props
}: React.ComponentProps<typeof DropdownMenu.Root>) {
  return <DropdownMenu.Root modal={false} {...props} />;
}

function DropdownTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenu.Trigger>) {
  return <DropdownMenu.Trigger className="cursor-pointer" {...props} />;
}

function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Content>) {
  return (
    <DropdownMenu.Portal>
      <AnimatePresence>
        <DropdownMenu.Content forceMount alignOffset={0} align="start" side="bottom" sideOffset={10} asChild {...props}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "DropdownMenuContent bg-white p-5 z-[99] rounded-xl shadow-lg",
              "w-[var(--radix-dropdown-menu-trigger-width)]",
              "max-w-[100vw]",
              className
            )}
          >
            {children}
          </motion.div>
        </DropdownMenu.Content>
      </AnimatePresence>
    </DropdownMenu.Portal>
  );
}

function DropdownItem({
  className,
  children,
  active,
  ...props
}: React.ComponentProps<typeof DropdownMenu.Item> & { active?: boolean }) {
  return (
    <DropdownMenu.Item
      className={cn(
        "DropdownMenuItem mb-3 font-chillax text-[30px] cursor-pointer  font-[400] text-black transition-colors group",
        "hover:outline-none hover:border-none hover:text-red-primary-400",
        "focus:outline-none focus:border-none focus:ring-0",
        `${active ? "text-red-primary-400" : ""}`,
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center">{children}</div>
      <div
        className={cn(
          "bg-red-primary-400 h-[0.1px] w-full mt-1 ",
          `${active ? "scale-x-[1]" : ""}`,
          "scale-x-0 transition-transform duration-700 origin-left group-hover:scale-x-[1]"
        )}
      />
    </DropdownMenu.Item>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;

export { Dropdown };
