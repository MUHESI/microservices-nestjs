"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCmdPattern = exports.EmitPattern = exports.NamesService = void 0;
var NamesService;
(function (NamesService) {
    NamesService["COMMUNICATION"] = "COMMUNICATION";
    NamesService["ANALYTIC"] = "ANALYTIC";
})(NamesService = exports.NamesService || (exports.NamesService = {}));
var EmitPattern;
(function (EmitPattern) {
    EmitPattern["userCreated"] = "TCP::USER/USER_CREATED";
})(EmitPattern = exports.EmitPattern || (exports.EmitPattern = {}));
var SendCmdPattern;
(function (SendCmdPattern) {
    SendCmdPattern["getAnalytics"] = "TCP::ANALYTC/GET_ANALYTICS";
})(SendCmdPattern = exports.SendCmdPattern || (exports.SendCmdPattern = {}));
//# sourceMappingURL=config.js.map