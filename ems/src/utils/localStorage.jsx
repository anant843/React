const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDate: "2026-07-08",
        taskDescription:
          "Create a responsive login page using React and Tailwind CSS.",
        taskCategory: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDate: "2026-07-06",
        taskDescription:
          "Resolve the responsive navbar issue on mobile devices.",
        taskCategory: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect Login API",
        taskDate: "2026-07-10",
        taskDescription: "Integrate frontend login form with backend API.",
        taskCategory: "API",
      },
    ],
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDate: "2026-07-09",
        taskDescription: "Create the admin dashboard UI.",
        taskCategory: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Page",
        taskDate: "2026-07-05",
        taskDescription: "Develop the employee profile page.",
        taskCategory: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDate: "2026-07-03",
        taskDescription: "Integrate payment gateway.",
        taskCategory: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDate: "2026-07-11",
        taskDescription: "Develop a collapsible sidebar.",
        taskCategory: "Frontend",
      },
    ],
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Database",
        taskDate: "2026-07-08",
        taskDescription: "Create MongoDB collections.",
        taskCategory: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "REST API",
        taskDate: "2026-07-04",
        taskDescription: "Develop employee CRUD APIs.",
        taskCategory: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDate: "2026-07-12",
        taskDescription: "Implement JWT-based authentication.",
        taskCategory: "Security",
      },
    ],
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDate: "2026-07-08",
        taskDescription: "Write Jest tests for components.",
        taskCategory: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDate: "2026-07-06",
        taskDescription: "Compress images for faster loading.",
        taskCategory: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDate: "2026-07-02",
        taskDescription: "Deploy project to Vercel.",
        taskCategory: "Deployment",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDate: "2026-07-13",
        taskDescription: "Implement dark mode functionality.",
        taskCategory: "Frontend",
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDate: "2026-07-08",
        taskDescription: "Generate employee performance reports.",
        taskCategory: "Analytics",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Notifications",
        taskDate: "2026-07-05",
        taskDescription: "Implement email notification service.",
        taskCategory: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Review",
        taskDate: "2026-07-11",
        taskDescription: "Review and fix reported bugs.",
        taskCategory: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDate: "2026-07-01",
        taskDescription: "Conduct application load testing.",
        taskCategory: "Testing",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@a.com",
    password: "321",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
