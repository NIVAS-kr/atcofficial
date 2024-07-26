const express = require("express");
const router = express.Router();
const multer = require("multer");
const nodemailer = require("nodemailer");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // File naming convention
  },
});

// Multer file upload configuration
const upload = multer({ storage });

// POST endpoint to handle job applications and contact form submissions
router.post("/api/apply", upload.single("cvFile"), async (req, res) => {
  const { firstName, lastName, email, contactNumber, currentEmployee, experience, currentSalary, expectedSalary, jobPosition, message } = req.body;
  const { file } = req;

  try {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host:"mail.atcinfocom.in",
      port:25,
      secure:false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Email content for job application
    const mailOptions = {
      from: `"ATC" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `New Job Application for ${jobPosition}`,
      html: `
        <h1>New Job Application</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Currently Employee:</strong> ${currentEmployee}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Current Salary:</strong> ${currentSalary}</p>
        <p><strong>Expected Salary:</strong> ${expectedSalary}</p>
        <p><strong>Job Position:</strong> ${jobPosition}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: "success", message: "Job Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting job application", error);
    res.status(500).json({ status: "error", message: "Failed to submit job application" });
  }
});

// POST endpoint to handle contact form submissions
router.post("/register", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host:"mail.atcinfocom.in",
      port:25,
      secure:false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Email content for contact form
    const mailOptions = {
      from: `"ATC" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: subject,
      html: `
        <h1>${name} sent you a message:</h1>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ status: "success", message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form", error);
    res.status(500).json({ status: "error", message: "Failed to submit contact form" });
  }
});

module.exports = router;
