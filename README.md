# Sales Dashboard API

This is the backend API for the Sales Dashboard application. It provides endpoints for user authentication, company management, meeting management, and statistics retrieval.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sales-dashboard

1.Install dependencies:
npm install

2.Set up environment variables:
Create a .env file in the root directory and add the following environment variables:
PORT=3000
NODE_ENV=development
JWT_SECRET=<your-jwt-secret


3.Start the server:
npm start

4.Endpoints:
User Authentication
1.Register a new user:
curl -X POST -H "Content-Type: application/json" -d '{"emailAddress":"example@example.com","password":"password123","fullName":"John Doe"}' http://localhost:3000/api/auth/register
2.Login 
curl -X POST -H "Content-Type: application/json" -d '{"emailAddress":"example@example.com","password":"password123"}' http://localhost:3000/api/auth/login

5. copy the token u get after login like this: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMDE2MTQxNSwiZXhwIjoxNzEwMTY1MDE1fQ.IhfkMtNa5dJTwphqwN6p2NIqFHViyq-E4k_Wm3PF8P0

6. use the jwt token to check the other routes 
like create company
but replace the jwt with the token u get on login.

create create company:
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMDE2MTQxNSwiZXhwIjoxNzEwMTY1MDE1fQ.IhfkMtNa5dJTwphqwN6p2NIqFHViyq-E4k_Wm3PF8P0" \
  -d '{"name":"Example Company","industrySector":"Technology","annualRevenue":1000000}' \
  http://localhost:3000/api/companies


create meeting command:
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcxMDE2MDgzOCwiZXhwIjoxNzEwMTY0NDM4fQ.swAUZQMyk3ArqkCtt8pBKXSYsTc1GlN-fYZIbfah3D4" \
  -d '{"meetingDate":"2024-03-12T10:00:00","meetingLocation":"Meeting Room 1","meetingSummary":"Discussion about project progress","companyId":1}' \
  http://localhost:3000/api/meetings

