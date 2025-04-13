"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        return {
            id: "1",
            title: "Mocked todo",
            description: "Mocked Todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
