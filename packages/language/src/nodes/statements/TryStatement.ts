import { Parser } from "@lang/parser";

export class TryStatement {
  constructor(parser: Parser) {
    parser.eat("Try");
  }
}