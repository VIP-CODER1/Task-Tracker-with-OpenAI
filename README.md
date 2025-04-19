# TaskTracker with OpenAI

![**🔥🔥Task Tracker Banner🔥🔥**]![image](https://github.com/user-attachments/assets/7c9100c1-1e00-44ff-8c3e-efb60c1dcbe2)
()
)

A modern Task Tracker with OpenAI application built with the MERN stack (MongoDB, Express, React, Node.js) and enhanced with OpenAI integration. TaskTracker helps teams organize, assign, and track tasks efficiently with a beautiful and intuitive interface.

## ✨ Features

### 🚀 Core Features
- **Task Management**: Create, assign, update, and delete tasks easily
- **Role-Based Access**: Admin and regular user roles with appropriate permissions
- **Task Status Tracking**: Monitor tasks with "Todo", "In Progress", and "Completed" statuses
- **Priority Levels**: Organize tasks by priority (High, Medium, Low)
- **Dashboard**: Visual overview of task metrics and recent activities
- **Team Assignment**: Assign multiple team members to tasks
- **Subtasks**: Break down complex tasks into smaller, manageable subtasks

### 🔥 Advanced Features
- **File Submission**: Users can upload completed work in any file format
- **Activity Timeline**: Track all actions and changes on tasks
- **Task Comments**: Team members can comment on tasks
- **File Storage**: Firebase integration for secure file storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📸 Screenshots

<details>
<summary>View Screenshots</summary>

![Dashboard](/screenshots/dashboard.png)
![Task View](/screenshots/task-view.png)
![Task Submission](/screenshots/task-submission.png)

</details>

## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- Headless UI components
- React Icons
- Firebase Storage

### Backend
- Node.js and Express
- MongoDB with Mongoose
- JWT Authentication
- RESTful API design

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Firebase account (for file storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VIP-CODER1/Task-Tracker-with-OpenAI.git
   cd TaskTracker-with-OpenAI
   ```

2. **Set up the server**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the server directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=8800
   NODE_ENV=development
   ```

3. **Set up the client**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the client directory with:
   ```
   VITE_APP_BASE_URL=http://localhost:8800
   VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. **Configure Firebase**
   - Create a Firebase project
   - Enable Storage service
   - Add your Firebase configuration to the client

### Running the Application

1. **Start the server**
   ```bash
   cd server
   npm start
   ```

2. **Start the client**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 🧩 Usage

### Admin User
- Create and manage tasks
- Assign tasks to team members
- View comprehensive dashboard
- Manage all users
- Create subtasks and set priorities

### Regular User
- View assigned tasks
- Update task status
- Submit completed work with file attachments
- Comment on tasks
- Track personal progress

## 🔒 Authentication

- Register with name, email, and password
- Secure login with JWT
- Role-based access control
- Password reset functionality

## 🧠 OpenAI Integration

TaskTracker integrates with OpenAI to provide:
- Smart task summarization
- Automated task categorization
- Priority suggestions based on task content
- Intelligent deadline recommendations
- Work quality assessment

## 👥 Team

- **Vipul** - Lead Developer


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing powerful AI capabilities
- Firebase for file storage solutions
- MongoDB Atlas for database hosting
- Vercel for application deployment

---

Made with ❤️ by Vipul 
