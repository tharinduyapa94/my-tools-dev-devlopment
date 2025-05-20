import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../Store/todoSlicer";
import { unitRead } from "../Store/unitSlicer";
import { itemTypeRead } from "../Store/itemTypeSlicer";
import axios from "axios";

const ItemCreate = () => {
    // redux define
    const dispatch = useDispatch();
    const { units, unitLoading, unitError } = useSelector((state) => state.untRead);
    const { ityp, itmTypeLoading, itmTypeError } = useSelector((state) => state.itmTypeGet);
    
    useEffect(() => {
        dispatch(unitRead());
    }, [dispatch]);

    useEffect(() => {
        dispatch(itemTypeRead());
    }, [dispatch]);

    //redux end
    //form handling
  
    const [itemCategory, setItemCategory] = useState("");
    const [itemForm, setItemForm] = useState({
        ItmCd: "", ItmNm: "", Des: "", ItmTypKy:0, ItmTyp: "", UnitKy:0,
        CosPri: "", SlsPri: "", SlsPri2: ""
    });

    //binding values
    const handleChangeItemForm = (e) => {
        const { name, value } = e.target;
        setItemForm((prevItemForm) => ({
            ...prevItemForm,
            [name]: value,
        }));
    };
    // post method
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(itemForm);
        // alert(`unit id:${itemForm.ItmTyp},2:${itemForm.UnitKy},3:${itemForm.SlsPri2}`);
        try {
            if (itemForm == null) {
                alert("Item set is null");
            } else {
                debugger;
                const response = await axios.post("https://localhost:7048/api/Item/CreateMasterItem", itemForm, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log("Response:", response.data);
                alert("Item Created Successfully!");
                resetForm();
            }
        } catch (error) {
            console.error("Error creating Item:", error);
            alert("Failed to create Item!");
        }
    }

    const resetForm=()=>{
       setItemForm({
        ItmCd: "", ItmNm: "", Des: "", ItmTypKy:0, ItmTyp: "", UnitKy:0,
        CosPri: "", SlsPri: "", SlsPri2: ""
       })
    }

    function handleItmCategoryChange(event) {
        setItemCategory(event.target.value);
    }

    return (

        <div className='form-body'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='UnitKy'>Item Type</label>
                <select id="ItmTyp" name="ItmTyp" value={itemForm.ItmTyp} onChange={handleChangeItemForm}>
                    <option value="">-- Select Unit --</option>
                    {ityp.map((unit) => (
                        <option key={unit.cdKy} value={unit.cdKy}>
                            {unit.code}
                        </option>
                    ))}
                </select>
                <br />
                <label htmlFor='UnitKy'>Item Unit</label>
                <select id="UnitKy" name="UnitKy" value={itemForm.UnitKy} onChange={handleChangeItemForm}>
                    <option value="">-- Select Unit --</option>
                    {units.map((unit) => (
                        <option key={unit.unitKy} value={unit.unitKy}>
                            {unit.unit}
                        </option>
                    ))}
                </select>
                <br />

                <label htmlFor="ItemKy">Latest Id to create</label>
                <input type="text" id='itemKy' name='itmKy' placeholder='00100' />
                <br />
                <label htmlFor='ItemCode'>Item Code</label>
                <input type="text" id='itmCode' name='ItmCd' placeholder='RM01006..' value={itemForm.ItmCd} onChange={handleChangeItemForm} />
                <br />

                <label htmlFor='ItmNm'>Item Name</label>
                <input type="text" id='ItmNm' name='ItmNm' placeholder='Chocolate Brownie..' value={itemForm.ItmNm} onChange={handleChangeItemForm} />
                <br />
                <label htmlFor='itmDes'>Item Description</label>
                <input type="text" id='itmDes' name='Des' placeholder='Chocolate Brownie..' value={itemForm.Des} onChange={handleChangeItemForm} />
                <br />
                <br />
                <label htmlFor='CosPri'>Cost Price</label>
                <input type="text" id='CosPri' name='CosPri' placeholder='100.00' value={itemForm.CosPri} onChange={handleChangeItemForm} />
                <br />
                <label htmlFor='SlsPri'>Sales Price 1</label>
                <input type="text" id='SlsPri' name='SlsPri' placeholder='100.00' value={itemForm.SlsPri} onChange={handleChangeItemForm} />
                <br />
                <label htmlFor='SlsPri2'>Sales Price 2</label>
                <input type="text" id='SlsPri2' name='SlsPri2' placeholder='100.00' value={itemForm.SlsPri2} onChange={handleChangeItemForm} />
                <br />
                <input type="submit" value="Submit"></input>

            </form>

        </div>
    );
}

export default ItemCreate;