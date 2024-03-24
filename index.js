const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000;
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/Auth");
const calorieIntakeRoutes = require("./Routes/CalorieIntake");
const adminRoutes = require("./Routes/Admin");
const imageUploadRoutes = require("./Routes/imageUploadRoute");
const sleepTrackRoutes = require("./Routes/SleepTracker");
const stepTrackRoutes = require("./Routes/StepTracker");
const weightTrackRoutes = require("./Routes/WeightTracker");
const waterTrackRoutes = require("./Routes/WaterTracker");
const workoutTrackRoutes = require("./Routes/WorkoutTracker");
const workoutRoutes = require("./Routes/WorkoutPlans");
const reportRoutes = require("./Routes/Report");

dotenv.config();
require("./db");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: ["http://localhost:3000", "http://localhost:3001"] }));
// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.includes(origin)) {
//                 callback(null, true);
//             } else {
//                 callback(new Error("Not allowed by CORS"));
//             }
//         },
//         credentials: false, // Allow credentials
//     })
// );
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/calorieintake", calorieIntakeRoutes);
app.use("/admin", adminRoutes);
app.use("/image-upload", imageUploadRoutes);
app.use("/sleeptrack", sleepTrackRoutes);
app.use("/steptrack", stepTrackRoutes);
app.use("/weighttrack", weightTrackRoutes);
app.use("/watertrack", waterTrackRoutes);
app.use("/workouttrack", workoutTrackRoutes);
app.use("/workoutplans", workoutRoutes);
app.use("/report", reportRoutes);

app.get("/", (req, res) => {
    res.json({ message: "The API is working" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
