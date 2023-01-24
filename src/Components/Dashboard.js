import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import { StudentContext } from '../App';


function Dashboard() {

    let context = useContext(StudentContext);

    let navigate = useNavigate();
    let deleteFunc = (i) => {
        let students = [...context.students];
        students.splice(i, 1);
        context.useStudents(students)
    }

    return <>
        <div id='wrapper'>
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Batch</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                context.students.map((e, i) => {
                                    return <tr key={i}>
                                        <td>{i}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button varient="primary" onClick={() => navigate(`/edit-student/${i}/${e.name}`)}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button variant="danger" onClick={() => deleteFunc(i)}>Delete</Button>
                                        </td>
                                    </tr>
                                })}
                        </tbody>
                    </Table>


                    <Outlet />
                </div>

                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}

            </div>
        </div>
    </>
}

export default Dashboard