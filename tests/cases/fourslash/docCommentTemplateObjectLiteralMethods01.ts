/// <reference path='fourslash.ts' />

const singleLineOffset = 3;
const multiLineOffset = 12;

////var x = {
////    /*0*/
////    foo() {
////        return undefined;
////    }
////    /*1*/
////    [1 + 2 + 3 + Math.rand()](x: number, y: string, z = true) { }
////}

verify.docCommentTemplateAt("0", singleLineOffset, "/** */");

verify.docCommentTemplateAt("1", multiLineOffset,
   `/**
     * 
     * @param x
     * @param y
     * @param z
     */`);
