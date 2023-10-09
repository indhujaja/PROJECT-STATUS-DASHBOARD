import React from 'react';

function Home() {
  const userName = 'Indhu'; // Replace with the actual user's name
  const userDetails = {
    age: 19,
    location: 'Chennai',
    email: 'indhu00712@gmail.com',
    dept: 'Human Resource',
    doj: '2-10-2023'
    // Add more details as needed
  };

  return (
    <div>
      <div className="p-1 px-5 d-flex shadow">
        <h1>Welcome, {userName}</h1>
      </div>
      <div className="text-center mt-4">
        <img src="src/Images/manag.png" alt="" className='managerImage m-5' />
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <table className="table table-bordered w-50">
          <tbody>
            <tr>
              <th className="font-size-lg">Name:</th>
              <td className="font-size-lg">{userName}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Age:</th>
              <td className="font-size-lg">{userDetails.age}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Location:</th>
              <td className="font-size-lg">{userDetails.location}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Email:</th>
              <td className="font-size-lg">{userDetails.email}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Department:</th>
              <td className="font-size-lg">{userDetails.dept}</td>
            </tr>
            <tr>
              <th className="font-size-lg">Date of Joining</th>
              <td className="font-size-lg">{userDetails.doj}</td>
            </tr>
            {/* Add more details here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;




