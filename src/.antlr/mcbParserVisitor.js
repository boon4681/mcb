// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by mcbParser.

export default class mcbParserVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by mcbParser#script.
	visitScript(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by mcbParser#functionDeclare.
	visitFunctionDeclare(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by mcbParser#block.
	visitBlock(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by mcbParser#whileDo.
	visitWhileDo(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by mcbParser#statements.
	visitStatements(ctx) {
	  return this.visitChildren(ctx);
	}



}