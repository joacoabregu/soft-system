/*
Support css prop
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
*/

import { CSSProp } from "styled-components";

interface MyTheme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
