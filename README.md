# React Student Attendance

A small React app that displays a student attendance list. Each student is shown with a green **Present** or red **Absent** status badge, and a summary above the list counts how many students are present and absent.

Built for **React Final Lab Activity 2**. It demonstrates:

- Rendering a list with `Array.map()` using a unique `key` (`student.id`)
- A reusable component (`AttendanceRow`) that receives props
- Conditional rendering with a ternary operator
- Conditional `className` styling

## Getting Started

Requires [Node.js](https://nodejs.org/) (v20.19+ or v22.12+).

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Other Scripts

- `npm run build`: production build into `dist/`
- `npm run lint`: lint the source with oxlint
- `npm run preview`: preview the production build
