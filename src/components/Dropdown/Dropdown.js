import React , {useState} from "react";
import "./Dropdown.css"

const Dropdown = () => {
    const [isDropDownVisible , setIsDropDownVisible] = useState(false)
    const [itemList , setItemsList] = useState([
        {
            property: "Banana",
            value:"banana"
        },
        {
            property : "Apple",
            value: "apple"
        },

    ]);
    const [selectItemIndex , setSelectedItemIndex ] = useState(null)

    return (
        <>
             <div className="custom-dropdown">
                            <div className="custom-dropdown-selection" onClick={ e => {
                                setIsDropDownVisible(!isDropDownVisible);
                            }}>
                                {selectItemIndex  !== null ? itemList[selectItemIndex].property : "Please select"}
                            </div>
                          { isDropDownVisible ? (
                            <div className="items-holder">
                               {
                                   itemList.map((item, index) => (
                                       <div key={item.value}  className="dropdown-item" onClick={e => {
                                           setSelectedItemIndex(index);
                                       }} >
                                              {item.property}
                                       </div>
                                    ) )
                               }
                            </div>
                           )  : <></> }
                      </div>
        </>
    )
}
export default Dropdown;