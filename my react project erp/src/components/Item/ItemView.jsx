import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../Store/todoSlicer";
import { unitRead } from "../Store/unitSlicer";
import { itemTypeRead } from "../Store/itemTypeSlicer";
import Modal from 'react-bootstrap/Modal';
import ItemCreate from "./ItemCreate";

const colorsBtn={
    backgroundColor:'Green'
}

const ItemView = () => {
    const [itemCategory, setItemCategory] = useState("");

    const [lgShow, setLgShow] = useState(false);

    const didFetch = useRef(false);

    const dispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state) => state.todo);
    const { units, unitLoading, unitError } = useSelector((state) => state.untRead);
    const { ityp, itmTypeLoading, itmTypeError } = useSelector((state) => state.itmTypeGet);

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;
        dispatch(fetchTodo());
    }, [dispatch]);

    useEffect(() => {
        dispatch(unitRead());
    }, [dispatch]);

    useEffect(() => {
        dispatch(itemTypeRead());
    }, [dispatch]);


    if (unitLoading) {
        return <p>Loading data...</p>;
    }

    if (unitError) {
        return <p>Error: {unitError}</p>;
    }

    function handleItmCategoryChange(event) {
        setItemCategory(event.target.value);
    }

    return (
        <div>
            <div className="container">
                {/* <div className="main-m"> */}
                <div className="topbar">
                    <div className="search">
                        <label htmlFor='search'>

                            <input type="text" placeholder='enter search here' />

                        </label>
                    </div>
                    

                </div>
                {/* <div className="content"> */}
                    {/* <div className="card-bo" > */}
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Code</th>
                                    <th>Type</th>
                                    <th>Name</th>
                                    {/* <th>Description</th> */}
                                    <th>Category</th>
                                    <th>Unit</th>
                                    <th>Cost Price</th>
                                    <th>Sale Price 1</th>
                                    <th>Sale Price 2</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((items) => (
                                    <tr key={items.itmKy}>
                                        <td> {items.itmKy} </td>
                                        <td> {items.itmCd} </td>
                                        <td> {items.itmTyp} </td>
                                        <td> {items.itmNm} </td>
                                        {/* <td> {items.des} </td> */}
                                        <td> {items.itmCat1Ky} </td>
                                        <td> {items.unitKy} </td>
                                        <td> {items.cosPri} </td>
                                        <td> {items.slsPri} </td>
                                        <td> {items.slsPri2} </td>
                                        <td> {items.status} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>

            <div>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Master Item Create
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                          
                        <label htmlFor='UnitKy'>Item Unit</label>
                        <select id="UnitKy" name="UnitKy">
                            <option value="">-- Select Unit --</option>
                            {units.map((unit) => (
                                <option key={unit.unitKy} value={unit.unitKy}>
                                    {unit.unit}
                                </option>
                            ))}
                        </select>


                        <label htmlFor="ItemKy">Item Master Code</label>
                        <input type="text" id='itemKy' name='itmKy' />

                        <label htmlFor='ItemCode'>Item Code</label>
                        <input type="text" id='itmCode' name='itmCode' placeholder='RM01006..' />

                        <label htmlFor='UnitKy'>Item Type</label>
                        <select id="UnitKy" name="UnitKy">
                            <option value="">-- Select Unit --</option>
                            {ityp.map((unit) => (
                                <option key={unit.cdKy} value={unit.cdKy}>
                                    {unit.code}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="itmTyp">Item Category</label>
                        <select id="itmTyp" name="itmTyp" value={itemCategory} onChange={handleItmCategoryChange}>
                            <option value="1">Item Category 1</option>
                            <option value="2">Item Category 2</option>
                            <option value="3">Item Category 3</option>
                            <option value="4">Item Category 4</option>
                        </select>
                        <p>Selected Item Category:{itemCategory}</p>


                        <label htmlFor="itmTyp">Category List</label>
                        <select id="itmTyp" name="itmTyp">
                            <option value="1">Item Category 1</option>
                            <option value="2">Item Category 2</option>
                            <option value="3">Item Category 3</option>
                            <option value="4">Item Category 4</option>
                        </select>

                        <label htmlFor='ItmNm'>Item Name</label>
                        <input type="text" id='ItmNm' name='ItmNm' placeholder='Chocolate Brownie..' />

                        <label htmlFor='itmDes'>Item Description</label>
                        <input type="text" id='itmDes' name='itmDes' placeholder='Chocolate Brownie..' />

                        <label htmlFor='UnitKy'>Item Unit</label>
                        <select id="UnitKy" name="UnitKy">
                            <option value="1">KG</option>
                            <option value="2">MG</option>
                            <option value="3">ML</option>
                            <option value="4">L</option>
                        </select>

                        <label htmlFor='CosPri'>Cost Price</label>
                        <input type="text" id='CosPri' name='CosPri' placeholder='100.00' />

                        <label htmlFor='SlsPri'>Sales Price 1</label>
                        <input type="text" id='SlsPri' name='SlsPri' placeholder='100.00' />

                        <label htmlFor='SlsPri2'>Sales Price 2</label>
                        <input type="text" id='SlsPri2' name='SlsPri2' placeholder='100.00' />

                        <input type="submit" value="Submit"></input>

                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default ItemView;