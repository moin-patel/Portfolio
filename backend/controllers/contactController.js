// import transporter from "../config/mailConfig.js";

// export const sendContactMail = async (req, res) => {
//   try {
//     const { name, email, project, message } = req.body;

//     // Validation
//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields.",
//       });
//     }

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "📩 New Portfolio Contact Message",
//       html: `
//         <h2>New Contact Form Submission</h2>

//         <p><strong>Name:</strong> ${name}</p>

//         <p><strong>Email:</strong> ${email}</p>

//         <p><strong>Project:</strong> ${project || "Not Provided"}</p>

//         <p><strong>Message:</strong></p>

//         <p>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({
//       success: true,
//       message: "Email sent successfully.",
//     });

//   }catch (error) {
//     console.log("Mail Error Details:", error); // Ye console mein error ki puri wajah batayega
//     return res.status(500).json({
//       success: false,
//       message: "Failed to send email.",
//       error: error.message // Client side pe bhi error dekhne ke liye
//     });
// }
// };


import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, project, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,

        message: "Required fields missing",
      });
    }

    const mail = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: [process.env.MY_EMAIL],

      subject: `New Portfolio Contact - ${name}`,

      html: `

<h2>New Message From Portfolio</h2>

<p>
<b>Name:</b> ${name}
</p>


<p>
<b>Email:</b> ${email}
</p>


<p>
<b>Project:</b> ${project}
</p>


<p>
<b>Message:</b> ${message}
</p>

`,
    });

    console.log("MAIL SENT:", mail);

    res.status(200).json({
      success: true,

      message: "Message sent successfully",
    });
  } catch (error) {
    console.log("RESEND ERROR:", error);

    res.status(500).json({
      success: false,

      message: "Mail sending failed",
    });
  }
};
