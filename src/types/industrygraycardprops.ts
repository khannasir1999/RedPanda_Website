export type IndustryGrayCardProps = {
  title: string;
  description: string;
  containerClassName?: React.ComponentProps<"div">["className"];
  headingClassName?: React.ComponentProps<"h1">["className"];
  descClassName?: React.ComponentProps<"p">["className"];
  imgClassName?: React.ComponentProps<"img">["className"];
  imgsrc:React.ComponentProps<"img">["src"];
};
