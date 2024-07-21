"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudent = exports.getOnsiteStudents = exports.getAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
//functions
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnsiteStudents = () => {
    const result = data_1.default.filter((students) => students.isOnsiteAllowed === true);
    return result;
};
exports.getOnsiteStudents = getOnsiteStudents;
const getStudent = (rollNo) => {
    const foundUser = data_1.default.find((Student) => Student.rollNum === rollNo);
    return foundUser;
};
exports.getStudent = getStudent;
