<!DOCTYPE html>
<html>
<head>
  <title>Email Sender Backend</title>
</head>
<body>

<h1>Email Sender Backend</h1>

<p>This project demonstrates a simple Express.js backend server that sends emails to specified recipients using the Nodemailer library.</p>

<h2>Prerequisites</h2>

<ul>
  <li>Node.js installed on your machine</li>
  <li>NPM (Node Package Manager) installed on your machine</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone this repository:
    <pre><code>git clone &lt;repository_url&gt;
cd email-sender-backend
</code></pre>
  </li>

  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>

  <li>Set up environment variables by creating a <code>.env</code> file in the project root and adding the following:
    <pre>
<code>
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password
RECIPIENT1_EMAIL=recipient1@example.com
RECIPIENT2_EMAIL=recipient2@example.com
</code>
    </pre>
    Replace <code>your_email@gmail.com</code>, <code>your_password</code>, <code>recipient1@example.com</code>, and <code>recipient2@example.com</code> with the appropriate values.
  </li>
</ol>

<h2>Usage</h2>

<ol>
  <li>Start the server:
    <pre><code>npm start</code></pre>
    The server will run on the specified port (default: 3000).
  </li>

  <li>To send an email, make a POST request to <code>http://localhost:3000/send-email</code> with the following JSON body:
    <pre>
<code>
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "This is a test message.",
  "recipients": ["recipient1@example.com", "recipient2@example.com"]
}
</code>
    </pre>
    Replace the values with the appropriate details.
  </li>
</ol>

<h2>Contributing</h2>

<p>Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub flow:</p>

<ol>
  <li>Fork the repository</li>
  <li>Create a new branch: <code>git checkout -b feature/your-feature</code></li>
  <li>Commit your changes: <code>git commit -m 'Add some feature'</code></li>
  <li>Push to the branch: <code>git push origin feature/your-feature</code></li>
  <li>Open a pull request</li>
</ol>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

</body>
</html>
