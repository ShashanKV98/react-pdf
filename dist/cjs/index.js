"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResponses = exports.usePageContext = exports.useOutlineContext = exports.useDocumentContext = exports.Thumbnail = exports.Page = exports.Outline = exports.Document = exports.pdfjs = void 0;
const pdfjs_js_1 = __importDefault(require("./pdfjs.js"));
exports.pdfjs = pdfjs_js_1.default;
const Document_js_1 = __importDefault(require("./Document.js"));
exports.Document = Document_js_1.default;
const Outline_js_1 = __importDefault(require("./Outline.js"));
exports.Outline = Outline_js_1.default;
const Page_js_1 = __importDefault(require("./Page.js"));
exports.Page = Page_js_1.default;
const Thumbnail_js_1 = __importDefault(require("./Thumbnail.js"));
exports.Thumbnail = Thumbnail_js_1.default;
const useDocumentContext_js_1 = __importDefault(require("./shared/hooks/useDocumentContext.js"));
exports.useDocumentContext = useDocumentContext_js_1.default;
const useOutlineContext_js_1 = __importDefault(require("./shared/hooks/useOutlineContext.js"));
exports.useOutlineContext = useOutlineContext_js_1.default;
const usePageContext_js_1 = __importDefault(require("./shared/hooks/usePageContext.js"));
exports.usePageContext = usePageContext_js_1.default;
const PasswordResponses_js_1 = __importDefault(require("./PasswordResponses.js"));
exports.PasswordResponses = PasswordResponses_js_1.default;
const utils_js_1 = require("./shared/utils.js");
(0, utils_js_1.displayWorkerWarning)();
pdfjs_js_1.default.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';