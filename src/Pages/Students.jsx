import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Students() {
  return (
    <>
    <span className='tx'>Students Details</span>
<button>Add new student</button>
  <div className="tbl">
     <Table striped>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>26</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='@'> Edit </a></td>
        </tr>
        <tr>
        <td>John</td>
          <td>25</td>
          <td>MERN</td>
          <td>May</td>
          <td><a href='@'> Edit </a></td>
        </tr>
        <tr>
        <td>Doe</td>
          <td>27</td>
          <td>MERN</td>
          <td>April</td>
          <td><a href='@'> Edit </a></td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>20</td>
          <td>MERN</td>
          <td>March</td>
          <td><a href='@'> Edit </a></td>
        </tr>
        <tr>
        <td>Barar</td>
          <td>21</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='@'>Edit</a></td>
        </tr>
        <tr>
        <td>Christ</td>
          <td>22</td>
          <td>MERN</td>
          <td>September</td>
           <td><a href='@'> Edit </a></td>
        </tr>
        
        <tr>
        <td>Rohan</td>
          <td>24</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='@'> Edit </a></td>
        </tr>
      </tbody>
    </Table>
  </div>
  );



    </>
  )
}
