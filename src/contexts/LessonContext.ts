import {createContext} from "react";
import {Lesson} from "@/database/lessons.ts";

export default createContext<Lesson | null>(null);
