/* eslint-disable no-console */
import { Format } from "logform";
import {
  Logger,
  LoggerOptions,
  createLogger,
  format,
  transports,
} from "winston";

import { ProppedVoidFunc } from "../@types/Functions/VoidFunc";


const loggerFormats: Format[] = [
  format.timestamp(),
  format.align(),
  format.colorize(),
  format.simple(),
];

const options: LoggerOptions = {
  // enable for default service to be logged
  // defaultMeta: { service: "app" },
  format: format.json(),
  level: "verbose",
  transports: [
    new transports.Console({ format: format.combine(...loggerFormats) }),
  ],
  exitOnError: false,
};

const logger: Logger = createLogger(options);

export interface ConsoleLogger {
  info: ProppedVoidFunc<[unknown]>;
  warn: ProppedVoidFunc<[unknown]>;
  error: ProppedVoidFunc<[unknown]>;
  logStr: ProppedVoidFunc<[string]>;
  extra: ProppedVoidFunc<[unknown, string?]>;
}

export const log: ConsoleLogger = {
  info(x) { logger.info(JSON.stringify(x)); },
  warn(x) { logger.warn(JSON.stringify(x)); },
  error(x) { logger.error(JSON.stringify(x)); },
  logStr(x) { logger.info(x); },
  // So we can use console logger from an extended class and have timestamps
  extra(x, name = undefined) {
    log.logStr("Logging information...");
    return name === undefined
      ? console.log(x)
      : console.log(name, x);
  },
};
