"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log('logger>>', req.ip);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map