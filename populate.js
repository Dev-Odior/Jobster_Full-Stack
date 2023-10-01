require("dotenv").config();
const Jobs = require("./models/Job");
const connectDB = require("./db/connect");
const mock_data = require("./mock_data.json");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Jobs.deleteMany();
    await Jobs.create(mock_data);
    console.log(`Successful !!!`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

populate();
