import chalk from "chalk";
import { existsSync, mkdirSync, rm, rmdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import prompt from "prompts";
import { log } from "../utils/log";
import { Command } from "./base";


export class help extends Command {
    command: string = "help";
}