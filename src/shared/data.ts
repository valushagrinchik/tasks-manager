import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from "./types";

export const mockedData = [{
    id: uuidv4(),
    title: 'First Task',
    description: 'First Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Second Task',
    description: 'Second Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Third Task',
    description: 'Third Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Fourth Task',
    description: 'Fourth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Fifth Task',
    description: 'Fifth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Sixth Task',
    description: 'Sixth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Seventh Task',
    description: 'Seventh Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Eighth Task',
    description: 'Eighth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Ninth Task',
    description: 'Ninth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}, {
    id: uuidv4(),
    title: 'Tenth Task',
    description: 'Tenth Task Desc',
    date: new Date(),
    location: "Minsk",
    status: TaskStatus.Pending,
    createdAt: new Date()
}]