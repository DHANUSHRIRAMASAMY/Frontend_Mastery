// This is a TypeScript interface.
// It defines the "shape" of a Student object.
// Every student we create must have these 4 fields.

export interface Student {
  name:       string;  // student's full name
  rollNo:     string;  // roll number
  department: string;  // department name
  year:       string;  // e.g. "1st Year"
}
