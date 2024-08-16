<div id="top"></div>
<div align="center">
  <h1>StudyNotion</h1>
  <h2> Online Education Platform for You </h2>
  <h3> Check out at https://study-notion-nine-rust.vercel.app/</h3>
</div>

<br>

## Project Description
<a name="project-description"></a>
StudyNotion is a fully functional ed-tech platform that enables users to create, consume,
and rate educational content. The platform is built using the MERN stack, which includes
ReactJS, NodeJS, MongoDB, and ExpressJS.
StudyNotion aims to provide:
* A seamless and interactive learning experience for students, making education
more accessible and engaging.
* A platform for instructors to showcase their expertise and connect with learners
across the globe.
In the following sections, we will cover the technical details of the platform, including:
1. System architecture: The high-level overview of the platform's components and
diagrams of the architecture.
2. Front-end: The description of the front-end architecture, user interface design,
features, and functionalities of the front-end, and frameworks, libraries, and tools
used.
3. Back-end: The description of the back-end architecture, features and functionalities of
the back-end, frameworks, libraries, tools used, and data models and database schema.
4. API Design: The description of the API design, list of API endpoints, their
functionalities, and sample API requests and responses.
5. Deployment: The description of the deployment process, hosting environment and
infrastructure, and deployment scripts and configuration.
6. Testing: The description of the testing process, types of testing, test frameworks and
tools used.
7. Future Enhancements: The list of potential future enhancements to the platform,
explanation of how these enhancements would improve the platform, estimated
timeline and priority for implementing these enhancements.

In summary, StudyNotion is a versatile and intuitive ed-tech platform that is designed to
provide an immersive learning experience to students and a platform for instructors to
showcase their expertise. In the following sections, we will delve into the technical details
of the platform, which will provide a comprehensive understanding of the platform's
features and functionalities.


<hr>

## 📌 Technology Used
<a name="tech-stack"></a>

### Frontend
<a F="frontend"></a>
<p>
  <a href="https://www.w3schools.com/html/"> <img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="HTML" /></a>
  <a href="https://www.w3schools.com/css/"> <img src="https://img.icons8.com/color/70/000000/css3.png" alt="CSS" /></a>
  <a href="https://www.w3schools.com/js/"><img src="https://img.icons8.com/color/70/000000/javascript--v1.png" alt="JS" /></a>
  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React.js" width="50" height="50" /></a>
  </p>

- **HTML**:HTML (HyperText Markup Language) is a skeleton of a website, structuring content with tags and elements.
- **CSS**:CSS is a style sheet language used to style web pages.It enables the application of different styles based on media types and user preferences, enhancing user accessibility and readability
- **JavaScript**:JavaScript is a programming language used to add interactivity to websites.
- **React.js**:A JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.

### Backend
<a m="backend"></a>
<p>
<a href="https://www.w3schools.com/nodejs/"><img src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="Node.js" width="50" height="50" /></a>
<a href="https://www.javatpoint.com/expressjs-tutorial"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="expressjs" width="50" height="50" /></a>
<a href="https://www.mongodb.com/docs/"><img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="MongoDB" width="50" height="50" /></a>
</p>

- **MongoDB**: A NoSQL database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting and running scripts server-side to produce dynamic web page content.

<p align="right">(<a href="#top">back to top</a>)</p>

## System Architecture
<a g="system-architecture"></a>
The StudyNotion ed-tech platform consists of three main components: the front end, the
back end, and the database. The platform follows a client-server architecture, with the
front end serving as the client and the back end and database serving as the server.

### Front-end 
<a h="front-end"></a>
The front end of the platform is built using ReactJS, ReactJS allows for the creation of dynamic and responsive user
interfaces, which are critical for providing an engaging learning experience to the students.
The front end communicates with the back end using RESTful API calls

### Back-end 
<a i="bront-end"></a>
The back end of the platform is built using NodeJS and ExpressJS,. The back end
provides APIs for the front end to consume, which include functionalities such as user
authentication, course creation, and course consumption. The back end also handles the
logic for processing and storing the course content and user data.


### Database
<a j="database"></a>
The database for the platform is built using MongoDB, which is a NoSQL database that
provides a flexible and scalable data storage solution. MongoDB allows for the storage of
unstructured and semi-structured data. The database stores the course content, user data, and other
relevant information related to the platform.



<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## Front End Technology
<a k="front-end-technology"></a>

The front end of StudyNotion has all the necessary pages that an ed-tech platform should
have. Some of these pages are:

### For Students:
<a k="for-students"></a>
* Homepage: This page will have a brief introduction to the platform, as well as links
to the course list and user details.
* Course List: This page will have a list of all the courses available on the platform,
along with their descriptions and ratings.
* Wishlist: This page will display all the courses that a student has added to their
wishlist.
* Cart Checkout: This page will allow the user to complete the course purchase.
* Course Content: This page will have the course content for a particular course,
including videos, and other related material.
* User Details: This page will have details about the student's account, including
their name, email, and other relevant information.
* User Edit Details: This page will allow the student to edit their account details.


### For Instructors:
<a k="for-instructors"></a>
* Dashboard: This page will have an overview of the instructor's courses, as well as
the ratings and feedback for each course.
* Insights: This page will have detailed insights into the instructor's courses,
including the number of views, clicks, and other relevant metrics.
* Course Management Pages: These pages will allow the instructor to create, update,
and delete courses, as well as manage the course content and pricing.
* View and Edit Profile Details: These pages will allow the instructor to view and edit
their account details.
PAGE 3
For Admin (this is for future scope):
* Dashboard: This page will have an overview of the platform's courses, instructors,
and students.
* Insights: This page will have detailed insights into the platform's metrics, including
the number of registered users, courses, and revenue.
* Instructor Management: This page will allow the admin to manage the platform's
instructors, including their account details, courses, and ratings.
* Other Relevant Pages: The admin will also have access to other relevant pages, such
as user management and course management pages.

To build the front end, we use frameworks and libraries such as ReactJS, We also use CSS and Tailwind, which are
styling frameworks that help make the user interface look good and responsive.
To manage the state of the application, we use Redux, which is a popular state management
library for React. 

<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## Back End Technology
<a k="back-end-technology"></a>

Description of the Back-end Architecture: 
StudyNotion uses a monolithic architecture, with the backend built using Node.js and
Express.js, and MongoDB as the primary database. 

Features and Functionalities of the Back-end: 
The back end of StudyNotion provides a range of features and functionalities, including:
1. User authentication and authorization: Students and instructors can sign up and log in
to the platform using their email addresses and password. The platform also supports
OTP (One-Time Password) verification and forgot password functionality for added
security.
1. Course management: Instructors can create, read, update, and delete courses, as well 
as manage course content and media. Students can view and rate courses.
1. Payment Integration: Students will purchase and enrol on courses by completing the
checkout flow that is followed by Razorpay integration for payment handling.
1. Cloud-based media management: StudyNotion uses Cloudinary, a cloud-based media
management service, to store and manage all media content, including images, videos,
and documents.
1. Markdown formatting: Course content in document format is stored in Markdown
format, which allows for easier display and rendering on the front end.

Frameworks, Libraries, and Tools used: 
The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its
functionality and performance, including:
1. Node.js: Node.js is used as the primary framework for the back end.
2. MongoDB: MongoDB is used as the primary database, providing a flexible and scalable
data storage solution.
3. Express.js: Express.js is used as a web application framework, providing a range of
features and tools for building web applications.
4. JWT: JWT (JSON Web Tokens) are used for authentication and authorization,
providing a secure and reliable way to manage user credentials.
5. Bcrypt: Bcrypt is used for password hashing, adding an extra layer of security to user
data.
6. Mongoose: Mongoose is used as an Object Data Modeling (ODM) library, providing a
way to interact with MongoDB using JavaScript

<hr>

### Data Models and Database Schema:
<a k="data-models-and-database-schema"></a>
The back end of StudyNotion uses a range of data models and database schemas to
manage data, including:
1. Student schema: Includes fields such as name, email, password, and course details
for each student.
2. Instructor schema: Includes fields such as name, email, password, and course
details for each instructor.
3. Course schema: Includes fields such as course name, description, instructor details,
and media content.

Overall, the back-end of StudyNotion is designed to provide a robust and scalable solution
for an ed-tech platform, with a focus on security, reliability, and ease of use. By using the
right frameworks, libraries, and tools, we can ensure that the platform functions smoothly
and provides an optimal user experience for all its users.



<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

## API Design
<a k="api-design"></a>

The StudyNotion platform's API is designed following the REST architectural style. The
API is implemented using Node.js and Express.js. It uses JSON for data exchange and
follows standard HTTP request methods such as GET, POST, PUT, and DELETE.
Sample list of API endpoints and their functionalities: 
1. /api/auth/signup (POST) - Create a new user (student or instructor) account.
2. /api/auth/login (POST) – Log in using existing credentials and generate a JWT
token.
3. /api/auth/verify-otp (POST) - Verify the OTP sent to the user's registered email.
4. /api/auth/forgot-password (POST) - Send an email with a password reset link to
the registered email.
5. /api/courses (GET) - Get a list of all available courses.
6. /api/courses/:id (GET) - Get details of a specific course by ID.
7. /api/courses (POST) - Create a new course.
8. /api/courses/:id (PUT) - Update an existing course by ID.
9. /api/courses/:id (DELETE) - Delete a course by ID.
10. /api/courses/:id/rate (POST) - Add a rating (out of 5) to a course.
Sample API requests and responses: 
1. GET /api/courses: Get all courses
   * Response: A list of all courses in the database
2. GET /api/courses/:id: Get a single course by ID
   * Response: The course with the specified ID
3. POST /api/courses: Create a new course
   * Request: The course details in the request body
   * Response: The newly created course
4. PUT /api/courses/:id: Update an existing course by ID
   * Request: The updated course details in the request body
   * Response: The updated course
5. DELETE /api/courses/:id: Delete a course by ID
   * Response: A success message indicating that the course has been deleted.

In conclusion, the REST API design for the StudyNotion ed-tech platform is a crucial part
of the project. The API endpoints and their functionalities are designed to ensure seamless
communication between the front-end and back-end of the application. By following
RESTful principles, the API will be scalable, maintainable, and reliable. The sample API
requests and responses provided above illustrate how each endpoint will function and
what kind of data it will accept or return. With this API design, StudyNotion will be able to
provide a smooth user experience while ensuring security and stability.

<hr>
<p align="right">(<a href="#top">back to top</a>)</p>

#### Prerequisites


Before you begin, ensure you have the following prerequisites installed:

- Node.js (version X.X.X) ⚙️
- MongoDB (version X.X.X) 📦
- Git 📂

  <p align="right">(<a href="#top">back to top</a>)</p>

#### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/StudyNotion-An-Online-Education-Platform.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd StudyNotion-An-Online-Education-Platform
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Environment Variables:**

   ```bash
   cd server
   ```

   Create a `.env` file or rename it to `.env` if exists already in server for the following environment variables:

   ```bash
   PORT = 4000
   MONGODB_URL = 

   # Nodemailer
   MAIL_HOST = smtp.gmail.com
   MAIL_USER = 
   MAIL_PASS = 
   #*Controllers
   #login 
   JWT_SECRET = 

   #cloudinary
   CLOUD_NAME = 
   API_KEY =
   API_SECRET = 
   FOLDER_NAME = "StudyNotion"

   #*Config
   #Razorpay
   RAZORPAY_KEY = 
   RAZORPAY_SECRET = 

   ```

   
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- Open Source Programs -->
