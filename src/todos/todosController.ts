//@ts-ignore
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
  import {Todo} from "./todo"
  import { TodoCreationParams,TodoService } from "./todoService";
import path from "path";

  @Route("todo")   // this represents /todo as in express
  export class TodoController extends Controller {
    @Get("{todoId}")   // this represents /todo/{todoId} whenever anything comes with these controller should hit this function.
    public async getTodo(
        @Path() todoId: string  // we need to specify the @Path beacuse our openapifile needs to contain what are the inputs and what are the outputs,
        // so we need to clearly define our types of what you are taking as input and what you are sending as output. 
    ):Promise<Todo>{
        let todoService = new TodoService();
        return todoService.get(todoId)
    }
  }