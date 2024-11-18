// http://localhost:3000/api/getblog?slug=how-to-learn-nextjs

const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: "Blog slug is required" });
  }

  const filePath = path.join(process.cwd(), "blogdata", `${slug}.json`);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "No such blog exists" });
    }

    try {
      const blog = JSON.parse(data);
      res.status(200).json(blog);
    } catch (parseError) {
      res.status(500).json({ error: "Invalid JSON format in blog file" });
    }
  });
}
