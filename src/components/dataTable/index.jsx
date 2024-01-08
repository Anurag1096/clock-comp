import React from 'react'
import { useState, useEffect } from 'react'
import { tData } from './tableData'
function DataTable() {
    const [isCheckecd, setIsChecked] = useState(false)
    const [tableData, setTableData] = useState([])
    const handleChange = (e) => {
        console.log(e.target.value)
        setIsChecked(e.target.checked)
    }
    const getData = async () => {
        try {
            let result = await fetch("https://hub.dummyapis.com/employee?noofRecords=100&idStarts=100")
            let data = result.then(res => res.json)
            console.log(data)
            setTableData(data)
        } catch (err) {
            console.log("sadfsdf", err)
        }
    }
    useEffect(() => {
        //  getData()
        setTableData(tData)
    }, [])





    return (<>
        <div>sdf</div>
        <div><input type="checkbox" value="myval" checked={isCheckecd} onChange={handleChange} />
            <input type="radio" value="myval2" />
        </div>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><input type="checkbox" value="selectAll" /></th>
                        <th><img src={"#"} /></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date of Birth</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, index) => {
                            return (
                                <tr key={item.phone}>
                                    <td>#</td>
                                    <td><input type="checkbox" name="sdf" /></td>\
                                    <td>{item.img}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.department}</td>
                                    <td>{item.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
            </table>
        </div>
    </>)
}

export default DataTable;