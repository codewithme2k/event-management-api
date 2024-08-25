"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("./page.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const page_validation_1 = require("./page.validation");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(page_validation_1.PageValidation.createPageZodSchema), page_controller_1.PageController.createPageController);
router.get('/user', (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.USER), page_controller_1.PageController.getPagesByUserController);
router.get('/', page_controller_1.PageController.getPagesController);
router.get('/:id', page_controller_1.PageController.getSinglePageController);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(page_validation_1.PageValidation.updatePageZodSchema), page_controller_1.PageController.updatePageController);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), page_controller_1.PageController.deletePageController);
exports.PageRoutes = router;
