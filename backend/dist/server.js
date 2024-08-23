"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const fellow_1 = __importDefault(require("./routes/fellow"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
// CORS configuration
app.use(
  (0, cors_1.default)({
    origin: "https://monika-dangar-portfoliosite.vercel.app", // Allow your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const uri = process.env.ATLAS_URI;
if (!uri) {
  throw new Error(
    "MongoDB connection string is not defined in environment variables"
  );
}
mongoose_1.default
  .connect(uri)
  .then(() =>
    console.log("MongoDB database connection established successfully")
  )
  .catch((err) => console.error("MongoDB connection error:", err));
app.use("/fellow", fellow_1.default);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
