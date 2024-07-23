"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudent = exports.getOnsiteStudents = exports.getAllStudents = void 0;
const studentdata_1 = __importDefault(require("./studentdata"));
const getAllStudents = () => {
    return studentdata_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnsiteStudents = () => {
    const result = studentdata_1.default.filter((students) => students.isOnsiteAllowed === true);
    return result;
};
exports.getOnsiteStudents = getOnsiteStudents;
const onsiteStudents = (0, exports.getOnsiteStudents)();
console.log(onsiteStudents);
const getStudent = (rollNo) => {
    const foundUser = studentdata_1.default.find((Student) => Student.rollNum === rollNo);
    return foundUser;
};
exports.getStudent = getStudent;
const result = (0, exports.getStudent)(401);
console.log(result);
