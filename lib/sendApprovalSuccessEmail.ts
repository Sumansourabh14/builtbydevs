import nodemailer from "nodemailer";

export async function sendApprovalSuccessEmail(to: string, name: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"BuiltByDevs" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Your portfolio has been approved!",
    html: `<p>Hi ${name},</p>
      <p>Your portfolio has been approved and is now live on <a href="https://builtbydevs.vercel.app">BuiltByDevs</a> 🎉</p>
      <p>Thanks for sharing it with us!</p>`,
  };

  await transporter.sendMail(mailOptions);
}
