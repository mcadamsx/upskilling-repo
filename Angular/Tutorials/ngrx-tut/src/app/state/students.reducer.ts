import { StudentsRecords } from "./students-records";
import {createReducer} from "@ngrx/store"

export const initState: ReadonlyArray<StudentsRecords> = [
    {
        name: "Derrick",
        city: "Accra",
        country: "Ghana",
        subject: "Python programing",
        passportDeclaration: "Yes",
        fitnessDeclaration: "Yes",
        courseName: "Computer Science",
        date: "23-09-20",
        state: "Greater Accra",
        subjects: "Software",
        streets: "turblence",
        email: "example2mail.com",
        phone: "203934034940",
        postalCode:172728,
    }
]
export const studentsReducer = createReducer(
    initState
)
