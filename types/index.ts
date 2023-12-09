import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


interface Props {
  text:string,
  id:string
}
const user :Props={
  text:"ahha",
  id:"string"
}

console.log(user)

