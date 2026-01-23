export type DesignProcessSectionProps = {
    heading: React.ReactNode,
    leftimage: React.ComponentProps<"img">["src"],
    rightimage: React.ComponentProps<"img">["src"],
    className?: React.ComponentProps<"div">["className"]
}