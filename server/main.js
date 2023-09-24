import express from "express";
import mysql from "mysql";
import cors from 'cors';
import bcrypt from 'bcrypt';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';
import moment from "moment";
import crypto from "crypto"




const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET","POST"],
  credentials: true,
}))


app.use(cookieParser());
app.use(
  session({
    secret: 'ed375de0e0aaeaf3aa1f28a5dba7e916d3c9e1278f0d1cf0f1c14d24fdbba94c3de1d5ea8b490c1cc8ad0fdd3f41633d816e10af17f5b529d2612e83ab8ca5ee',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if you're using HTTPS
      httpOnly: true,
      expires: false, // Set to false to create a browser-session-only cookie
    },
  })
);


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database:'clinic'

})






app.post("/login", (req, res) => {
  const { phoneNumber, password } = req.body;
  const query = "SELECT * FROM patients WHERE PhoneNumber = ?";
  
  db.query(query, [phoneNumber], (error, results) => {
    if (error) {
      return res.json({
        success: false,
        message: "An error occurred while processing your request.",
      });
    }

    if (results.length === 0) {
      return res.json({
        success: false,
        message: "Invalid phone number or password.",
      });
    }

    // Compare the hashed password
    const hashedPasswordFromDB = results[0].Password;
    bcrypt.compare(password, hashedPasswordFromDB, (error, passwordMatch) => {
      if (error) {
        return res.json({
          success: false,
          message: "An error occurred while processing your request.",
        });
      }
      

      if (!passwordMatch) {
        return res.json({
          success: false,
          message: "Invalid phone number or password.",
        });
      }

      req.session.user = results[0];


      return res.json({
        success: true,
        message: "Login successful.",
      });
    });
  });
});

app.post("/signup",(req,res) => {
  const {name, email, phoneNumber, password, confirm} = req.body;
  const query = "INSERT INTO patients (Name, Email, PhoneNumber, Password) VALUES (?, ?, ?, ?)";
  const query2 = "SELECT * FROM patients WHERE PhoneNumber = ?";

        db.query(query2, [phoneNumber], (error, results) => {
          if (error) {
            return res.json({
              success: false,
              message: "An error occurred while processing your request.",
            });
          } else if (results.length !== 0) {
            return res.json({
              success: false,
              message: "This phone number is already registered to another account",
            });
          }

          if (password !== confirm) {
            return res.json({
              success: false,
              message: "The passwords do not match",
            });
          }

          if (password.length < 8) {
            return res.json({
              success: false,
              message: "Your password must consist of 8 characters",
            });
          }

          // Validate phone number format (must start with "01")
          const phoneNumberPattern = /^01[0125][0-9]{8}$/;
          if (!phoneNumberPattern.test(phoneNumber)) {
            return res.json({
              success: false,
              message: "Please enter a valid Egyptian phone number (starting with +20).",
            });
          }

          // Hash the password using bcrypt
          bcrypt.hash(password, 10, (error, hashedPassword) => {
            if (error) {
              return res.json({
                success: false,
                message: "An error occurred while processing your request.",
              });
            }

            db.query(query, [name, email, phoneNumber, hashedPassword], (error, results) => {
              if (error) {
                return res.json({
                  success: false,
                  message: "An error occurred while processing your request.",
                });
              }

              return res.json({
                success: true,
                message: "Registration successful.",
              });
            });
          });
          
        });
      });


app.get("/check-login-status", (req, res) => {
        if (req.session.user) {
          return res.json({
            authenticated: true,
            user: {
              name: req.session.user.Name,
              id: req.session.user.Id,
              phoneNumber: req.session.user.PhoneNumber,
            },
          });
        } else {
          // User is not authenticated
          return res.json({
            authenticated: false,
          });
        }
});



app.post("/changepassword", (req,res) => {
    const {old, newpass, confirmnew} = req.body;
    const phoneNumber = req.session.user.PhoneNumber;
    const query = "SELECT Password FROM patients WHERE PhoneNumber = ?";
    


    db.query(query, [phoneNumber], (error, results) => {
      if (error) {
        return res.json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
  
      const hashedPassword = results[0].Password;

      bcrypt.compare(old, hashedPassword, (error, passwordMatch) => {
        if (error) {
          return res.json({
            success: false,
            message: "An error occurred during the process.",
          });
        }
        if (!passwordMatch) {
          return res.json({
            success: false,
            message: "Incorrect old password",
          });
        }
  
        if (newpass.length < 8) {
          return res.json({
            success: false,
            message: "Your new password must consist of 8 characters",
          });
        }
  
        if (newpass !== confirmnew) {
          return res.json({
            success: false,
            message: "New passwords do not match",
          });
        }
  
        // Hash the new password before inserting it
        bcrypt.hash(newpass, 10, (hashError, hashedPassword) => {
          if (hashError) {
            return res.json({
              success: false,
              message: "An error occurred during the process. Please Try Again.",
            });
          }
  
          const updateQuery = "UPDATE patients SET Password = ? WHERE PhoneNumber = ?";
          db.query(updateQuery, [hashedPassword, phoneNumber], (updateError, updateResults) => {
            if (updateError) {
              return res.json({
                success: false,
                message: "An error occurred during the process. Please Try Again.",
              });
            }
  
            return res.json({
              success: true,
              message: "Password was changed successfully",
            });
          });
        });
      });
    });

});



const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: 'yassin_fayed@hotmail.com',
    pass: 'Doona321', 
  },
});

app.post("/forget", (req, res) => {
  let email = req.body.email.toString(); // Assuming you receive the email from the request body
  const token = crypto.randomBytes(20).toString('hex');

  // Check if the email exists in your database
  const emailQuery = "SELECT * FROM patients WHERE Email = ?";

  db.query(emailQuery, [email], (emailError, results) => {
    if (emailError) {
      return res.json({
        success: false,
        message: 'Error checking email in the database.',
      });
    }
    if (results.length === 0) {
      // Email doesn't exist in the database
      return res.json({
        success: false,
        message: 'Email not found in our records.',
      });
    }

    const email = results[0].Email; // Extract the email from the database result

    // Set an expiration time for the token (e.g., 1 hour from now)
    const expirationTime = moment().add(10, 'minutes').format('YYYY-MM-DD HH:mm:ss');

    // Store the token and its expiration time in your database
    // This is a simplified example; you should replace it with your actual database logic
    // Assuming you have a table named 'password_reset_tokens' with columns 'token', 'email', and 'expires_at'
    const insertQuery = "INSERT INTO tokens (Token, Email, Expiration) VALUES (?, ?, ?)";
    const insertValues = [token, email, expirationTime];

    db.query(insertQuery, insertValues, (insertError, insertResults) => {
      if (insertError) {
        return res.json({
          success: false,
          message: 'Error storing password reset token.',
        });
      }

      // Create the password reset link including the token
      const resetLink = `http://localhost:3000/resetpassword?token=${token}`;

      const mailOptions = {
        from: 'Ricci Clinics <yassin_fayed@hotmail.com>',
        to: email,
        subject: 'Password Reset',
        text: `Please reset your password by clicking on this link: ${resetLink}`,
        html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset</title>
            <style>
                /* Responsive styles */
                @media screen and (max-width: 600px) {
                    .container {
                        width: 100% !important;
                    }
                }
            </style>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f0f0f0;">
            <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 20px 0;">
                        <table role="presentation" cellspacing="0" cellpadding="0" width="600" class="container" style="border-collapse: collapse; max-width: 600px; width: 100%;">
                            <tr>
                                <td align="center" style="background-color: #ffffff; padding: 40px;">
                                    <img src="https://ricciclinics.com/images/logo.png" alt="Logo" width="150" style="display: block; margin: 0 auto;">
                                    <h1 style="color: #333;">Password Reset</h1>
                                    <p style="color: #777; line-height: 1.4;">You've requested a password reset for your account. Click the button below to reset your password:</p>
                                    <a href="${resetLink}" style="display: inline-block; background-color: #007BFF; color: #fff; text-decoration: none; padding: 10px 20px; margin-top: 20px; border-radius: 4px; font-weight: bold;">Reset Password</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>`,
      };

      // Send the password reset email
      transporter.sendMail(mailOptions, (emailSendError) => {
        if (emailSendError) {
          return res.json({
            success: false,
            message: 'Error sending password reset email.',
          });
        }

        return res.json({
          success: true,
          message: 'Password reset email sent successfully.',
        });
      });
    });
  });
});

app.get("/reset-password", (req, res) => {
  const token = req.query.token;

  const tokenQuery = "SELECT * FROM tokens WHERE Token = ?";

  db.query(tokenQuery, [token], (tokenError, tokenResults) => {
    if (tokenError) {
      return res.json({
        success: false,
        message: 'Error checking token in the database.',
      });
    }

    const expiration = moment(tokenResults[0].Expiration);
    const currentTime = moment();

    if (tokenResults.length === 0) {
      // Token doesn't exist or is expired
      return res.json({
        success: false,
        message: 'Invalid or expired token.',
      });
    }
    if(tokenResults.Used){
      return res.json ({
        success: false,
        message: 'Token has already been used',
      })
    }
    if (currentTime.isAfter(expiration)) {
      return res.json({
        success: false,
        message: 'Token has expired.',
      });
    }
    else{
      return res.json({
        success: true,
      });
    }
  });
});

app.post("/reset", (req,res) =>{
  const token = req.query.token;
  const {newpass, confirmnew} = req.body;
  const query = "SELECT Email FROM tokens WHERE Token = ? ";

  db.query(query,[token], (error,results) =>{
    if(error){
      return res.json({
        success: false,
        message: 'Error checking token in the database.',
      });
    }
    
    const email = results.Email;


    if(newpass.length < 8){
      return res.json({
        success: false,
        message: 'Password should at least be 8 characters.',

      })
    }

    else if (newpass !== confirmnew){
      return res.json({
        success: false,
        message: 'Passwords do not match.',

      })
    }

    else{
      bcrypt.hash(newpass, 10, (hashError, hashedPassword) => {
        if (hashError) {
          return res.json({
            success: false,
            message: "An error occurred during the process. Please Try Again.",
          });
        }

        const updateQuery = "UPDATE patients SET Password = ? WHERE Email = ?";
        db.query(updateQuery, [hashedPassword, email], (updateError, updateResults) => {
          if (updateError) {
            return res.json({
              success: false,
              message: "An error occurred during the process. Please Try Again.",
            });
          }

          return res.json({
            success: true,
            message: "Password was changed successfully",
          });
        });
      });
    }

  })
  

})





app.post("/logout", (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.error('Error logging out:', error);
      return res.json({
        success: false,
        message: 'Error logging out.'
      });
    }
    return res.json({
      success: true,
      message: 'Logout successful.'
    });
  });
});


app.post('/getDoctorId', (req, res) => {
  const doctor = req.body.doctorName.toString();


  // Query to find the doctor's ID based on their name
  const query = 'SELECT Id FROM doctors WHERE Name = ?';

  db.query(query, [doctor], (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.json({
        success: false,
        message: 'Error querying database.',
      });
    }

    if (results.length === 0) {
      // Doctor not found 
      return res.json({
        success: false,
        message: 'Doctor not found.',
      });
    }

    const doctorId = results[0].Id;
    return res.json({
      success: true,
      doctorId,
    });
  });
});

app.get('/getSchedule', (req, res) => {
  const doctorId = req.query.doctorId; // Get the doctorId from the query parameter
  console.log(req.query.doctorId)
  const query = 'SELECT * FROM schedule WHERE doctorid = ?';

  db.query(query, [doctorId], (err, results) => {
    if (err) {
      console.error('Error fetching schedule data:', err);
      res.json({ error: 'Error fetching schedule data' });
    } else {
      // Map the database results to the desired format
      const formattedResults = results.map((row) => ({
        date: new Date(row.Date), // Use the date from the database
        title: `${row.BranchName} ${row.StartTime}-${row.EndTime}`, // Format title
        color: '#238783', // You can set a fixed color or calculate it as needed
        isAvailable: true, // Assuming it's always available
      }));


      
      res.json(formattedResults); // Send the formatted data as JSON response
    }
  });
});

app.post('/addEvent', (req, res) => {
  const eventData = req.body; // Assuming the request body contains event data
  // Increment the date by one day
  const selectedDate = new Date(eventData.selectedDate);


  const utcDate = Date.UTC(
    selectedDate.getUTCFullYear(),
    selectedDate.getUTCMonth(),
    selectedDate.getUTCDate()
  );

  console.log(utcDate + " addevent backend");

  // Insert the eventData into the schedule table in your database
  const query = 'INSERT INTO schedule (Date, BranchName, StartTime, EndTime, doctorid) VALUES (?, ?, ?, ?, ?)';
  const values = [new Date(utcDate), eventData.branch, eventData.startTime, eventData.endTime, eventData.doctorId];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error adding event:', err);
      res.json({ error: 'Error adding event' });
    } else {
      console.log('Event added to the schedule table:', result);

      // Respond with a success message or the inserted event data
      res.json({ message: 'Event added successfully' });
    }
  });
});


app.post('/getScheduleForReservation', (req, res) => {
  const docName = req.body.doctorName; // Get the doctor's name from the request body
  const ex = req.body.extra;

  console.log(docName);
  console.log(ex);

  // Query the database to retrieve the doctor's schedule based on the doctor's name
  const query = `
    SELECT schedule.*
    FROM schedule
    INNER JOIN doctors ON schedule.doctorid = doctors.Id
    WHERE doctors.Name = ? AND schedule.BranchName = ?
  `;

  db.query(query, [docName, ex], (err, result) => {
    if (err) {
      console.error('Error fetching doctor schedule:', err);
      res.json({ error: 'Error fetching doctor schedule' });
    } else {
      res.json(result); // Respond with the fetched schedule data
    }
  });
});


app.post('/createReservation', (req, res) => {
  const requestData = req.body;

  // Insert the reservation data into the 'reservations' table
  const sql = 'INSERT INTO reservations (patientId, scheduleId) VALUES (?, ?)';
  const values = [requestData.userId, requestData.scheduleId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting reservation:', err);
      res.json({ error: 'Error creating reservation' });
    } else {
      console.log('Reservation inserted');
      res.json({ message: 'Reservation created successfully' });
    }
  });
});



app.get('/fetchReservations', (req, res) => {
  // SQL query to join reservations, schedule, patients, and doctors
  const sqlQuery = `
    SELECT 
      r.Id AS reservationId,
      p.Name AS patientName,
      p.PhoneNumber AS patientPhoneNumber,
      s.Id AS scheduleId,
      s.BranchName AS scheduleBranchName,
      s.Date AS scheduleDate,
      s.StartTime AS scheduleStartTime,
      s.EndTime AS scheduleEndTime,
      d.Name AS doctorName,
      d.Speciality AS doctorSpeciality
    FROM reservations r
    JOIN schedule s ON r.scheduleId = s.Id
    JOIN patients p ON r.patientId = p.Id
    JOIN doctors d ON s.doctorId = d.Id
  `;

  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.json({ error: 'An error occurred while fetching data.' });
    } else {
      res.json(results); // Send the joined data to the frontend
    }
  });
});


app.post('/deleteEvent', (req, res) => {
  const { doctorId, selectedDate, branch, startTime, endTime } = req.body;


  const selected = new Date(selectedDate);



  // Perform the deletion in the database
  console.log(req.body);
  const deleteQuery = `DELETE FROM schedule WHERE doctorid = ? AND Date = ? AND BranchName = ? AND StartTime = ? AND EndTime = ?`;

  db.query(deleteQuery, [doctorId, selected, branch, startTime, endTime], (err, result) => {
    if (err) {
      console.error('Error deleting event:', err);
      res.json({ error: 'Error deleting event' });
    } else {
      console.log('Event deleted successfully');
      res.json({ message: 'Event deleted successfully' });
    }
  });
});


app.listen(8800,() => {
    console.log("Connected")
})