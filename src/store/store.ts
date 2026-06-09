// import { reducer } from "./employeeReducer";
import { createStore } from "@reduxjs/toolkit";
import {reducer} from "./rootReducer.ts"

export const store = createStore(reducer);