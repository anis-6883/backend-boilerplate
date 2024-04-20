"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegistration = void 0;
const helpers_1 = require("../../helpers");
const validation_1 = require("./validation");
exports.userRegistration = (0, helpers_1.asyncHandler)((req, res) => {
    const result = validation_1.registerSchema.validate(req.body, {
        allowUnknown: true,
        abortEarly: false,
    });
    if (result.error) {
        const format = {};
        result.error.details.forEach((detail) => {
            format[detail.context.label] = detail.message;
        });
        return (0, helpers_1.apiResponse)(res, 400, false, "Input validation failed!", format);
    }
    return (0, helpers_1.apiResponse)(res, 200, true, "User Registration!");
});
//# sourceMappingURL=controller.js.map