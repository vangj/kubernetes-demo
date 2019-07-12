export class School {
  constructor(
    public readonly id: number,
    public readonly name: string
  ) { }
}

export class Course {
  constructor(
    public readonly id: number,
    public readonly room: string,
    public readonly teacherId: number,
    public readonly subject: string,
    public readonly startTime: string,
    public readonly stopTime: string
  ) { }
}

export class Teacher {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly gender: string
  ) { }
}

export class Student {
  constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly gender: string
  ) { }
}

export class Enrollment {
  constructor(
    public readonly courseId: number,
    public readonly studentId: number
  ) { }
}

export class Grade {
  constructor(
    public readonly id: number,
    public readonly courseId: number,
    public readonly studentId: number,
    public readonly grade: number
  ) { }
}