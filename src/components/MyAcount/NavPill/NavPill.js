import React , {useState , useEffect }  from "react";
import { AiOutlineUser, AiOutlineLogout , AiFillShopping , AiOutlineDashboard , AiFillEye } from "react-icons/ai";
import "./NavPill.scss";
import profile from "../../../assets/AboutImage.jpg";
import Dropdown from "../../Dropdown/Dropdown";

const NavPill = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

    const [drop, setdrop] = useState(true);
    const [isdrop , setisdrop] = useState(true)
    const [wrmdrop , setwrmdrop] = useState(true)
    const [logdrop , setlogdrop] = useState(true)

  const Dashboard = () => {  
       setdrop(true)
       setisdrop(true)
       setwrmdrop(true)
       setlogdrop(true)
  } 
  const profile_data = () => {
     setdrop(false)
     setisdrop(true)
     setwrmdrop(true)
     setlogdrop(true)
} 
const Order = () => {
     setdrop(false)
     setisdrop(false)
     setwrmdrop(true)
     setlogdrop(true)
} 
const Acount_Set = () => {
    setwrmdrop(false)
    setlogdrop(true)

} 
const profile_LogOut = () => {
    setlogdrop(false)
} 

  
  return (

    <div>
      <div className="yn-container">
        <div className="egh-acount">
          <button active className="ed-navpill" onClick={() => Dashboard()}><span><AiOutlineDashboard  /></span><span> Dashboard</span></button>
          <button className="ed-navpill" onClick={() => profile_data()}><span><AiOutlineUser /></span><span> My Profile</span> </button>
          <button className="ed-navpill" onClick={() => Order()}><span><AiFillShopping /></span><span> My Order</span></button>
          <button className="ed-navpill" onClick={() => Acount_Set()} >
            <span><AiOutlineUser /></span>
            <span  >Acount Setting </span>
          </button>
          <button className="ed-navpill" onClick={() => profile_LogOut()}  >
            <span>
              <AiOutlineLogout />
            </span>LogOut</button>
        </div>
    
           
         {!logdrop  ? 
          <><div className="display_flex Yr-acount">
          <div className="eg_cards">
              <h3>Billing Address</h3>
              <div className="display_flex dr-cameron">
              <p>First Name :</p>
               <p className="pf_cameron">Cameron</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Last Name :</p>
               <p className="pf_cameron"> Williamson</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Address :</p>
               <p className="pf_cameron">Eight Avenue 487, London</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Post code :</p>
               <p className="pf_cameron">096895</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Country :</p>
               <p className="pf_cameron"> London</p>
              </div>
          </div>
          <div className="eg_cards">
              <h3>Shipping Address</h3>
              <div className="display_flex dr-cameron ">
              <p>First Name :</p>
               <p className="pf_cameron">Cameron</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Last Name :</p>
               <p className="pf_cameron"> Williamson</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Address :</p>
               <p className="pf_cameron">Lavaca Street, Suite 2000 Austin, TX, Bangladesh.</p>
              </div>
              <div className="display_flex dr-cameron ">    
              <p>Post code :</p>
               <p className="pf_cameron">096895</p>
              </div>
              <div className="display_flex dr-cameron ">
              <p>Country :</p>
               <p className="pf_cameron"> London</p>
              </div>
          </div>

      </div></> : 
              !wrmdrop ? 
            <><div className="display_flex Yr-acount">
            <div className="eg_cards">
                <h3>Billing Address</h3>
                <div className="display_flex dr-cameron">
                <p>First Name :</p>
                 <p className="pf_cameron">Cameron</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Last Name :</p>
                 <p className="pf_cameron"> Williamson</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Address:</p>
                 <p className="pf_cameron">Eight Avenue 487, London</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Post code :</p>
                 <p className="pf_cameron">096895</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Country :</p>
                 <p className="pf_cameron"> London</p>
                </div>
            </div>
            <div className="eg_cards">
                <h3>Shipping Address</h3>
                <div className="display_flex dr-cameron ">
                <p>First Name :</p>
                 <p className="pf_cameron">Cameron</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Last Name :</p>
                 <p className="pf_cameron"> Williamson</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Address:</p>
                 <p className="pf_cameron">Lavaca Street, Suite 2000 Austin, TX, Bangladesh.</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Post code :</p>
                 <p className="pf_cameron">096895</p>
                </div>
                <div className="display_flex dr-cameron ">
                <p>Country :</p>
                 <p className="pf_cameron"> London</p>
                </div>
            </div>

        </div></> : 
             !isdrop  ? 
             <><div className="Profile">
             <table class="egr-table table order-table mb-0">
               <thead>
                 <tr>
                   <th>Order ID</th>
                   <th>Order Date</th>
                   <th>Status</th>
                   <th>Total</th>
                   <th>Active</th>
                 </tr>
               </thead>
                 {screenWidth > 768 ? 
                  <tbody>
                  <tr>
                   <td data-label="Order ID">#56986</td>
                   <td data-label="Order Date">21 August 2021</td>
                   <td data-label="Status">Pending</td>
                   <td data-label="Total">$ 985. 0789.00 for 85 Items</td>
                   <td data-label="Active">
                     <AiFillEye/>
                   </td>
                 </tr>
                 <tr>
                   <td data-label="Order ID">#56987</td>
                   <td data-label="Order Date">25 April 2021</td>
                   <td data-label="Status">Picked</td>
                   <td data-label="Total">$ 34. 0789.00 for 65 Items</td>
                   <td data-label="Active">
                   <AiFillEye/>
                   </td>
                 </tr>
                 <tr>
                   <td data-label="Order ID">#56988</td>
                   <td data-label="Order Date">3rd June 2021</td>
                   <td data-label="Status">Completed</td>
                   <td data-label="Total">$ 56. 0789.00 for 30 Items</td>
                   <td data-label="Active">
                   <AiFillEye/>
                   </td>
                 </tr>
                 </tbody>
                  : 
                  <tbody>
                  <tr>
                  <td data-label="Order ID">#56986</td>
                  <td data-label="Order Date">
                  21 August 2021
                  </td>
                  <td data-label="Status">Pending</td>
                  <td data-label="Total">$ 985. 0789.00 for 85 Items</td>
                  <td data-label="Active"><AiFillEye/></td>
                  </tr>
                  <tr>
                  <td data-label="Order ID">#56987</td>
                  <td data-label="Order Date">
                  25 April 2021
                  </td>
                  <td data-label="Status">Picked</td>
                  <td data-label="Total">$ 34. 0789.00 for 65 Items</td>
                  <td data-label="Active"><AiFillEye/></td>
                  </tr>
                  <tr>
                  <td data-label="Order ID">#56988</td>
                  <td data-label="Order Date">
                  3rd June 2021
                  </td>
                  <td data-label="Status">Completed</td>
                  <td data-label="Total">$ 56. 0789.00 for 30 Items</td>
                  <td data-label="Active"><AiFillEye/></td>
                  </tr>
                  </tbody>

                   }
              
             </table>
             </div></>  
             : !drop ? <>
        <div className="Profile">
          <h3>Profile</h3>
          <div className="lg-Profile">
            <div className="lg-Profile">
              <img src={profile} title="" />
            </div>
            <div className="le-profile">
              <button>Upload</button>
              <button>Remove</button>
            </div>
          </div>
          <div class="row_profile">
            <div className="col_12">
                <div className="col_6">
              <div class="form-inner_user">
                <label>Frist Name *</label>
                <input type="text" name="fname" placeholder="Your first name" />
              </div>
              </div>
              <div className="col_6">
              <div class="form-inner_user">
                <label>Last Name *</label>
                <input type="text" name="fname" placeholder="Your last name" />
              </div>
            </div>
            </div>
            <div class="col-12">
              <div class="form-inner">
                <label>Email *</label>
                <input type="email" name="fname" placeholder="Your email" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-inner">
                <label>Contact Number *</label>
                <input type="text" name="fname" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-inner">
                <label>Address *</label>
                <input type="text" name="fname" />
              </div>
            </div>
            <div className="col_12" >
            <div class="col_6">
              <div class="form-inner_user">
                <label>City *</label>
                <select>
                  <option>Town / City</option>
                  <option>Dhaka</option>
                  <option>Saidpur</option>
                  <option>Newyork</option>
                </select>
              </div>
            </div>
            <div class="col_6">
              <div class="form-inner_user">
                <label>State *</label>
                <select>
                  <option>Dhaka</option>
                  <option>Rangpur</option>
                  <option>Comilla</option>
                </select>
              </div>
            </div>
            </div>
            <div className="col_12">
            <div class="col_6">
              <div class="form-inner_user zip_user ">
                <label>Zip Code *</label>
                <input type="text" />
              </div>
            </div>
            <div class="col_6">
              <div class="form-inner_user">
                <label>Country *</label>
                <select >
                  <option>Dhaka</option>
                  <option>Rangpur</option>
                  <option>Comilla</option>
                </select>
              </div>
            </div>
            </div>
            <div class="col-12">
              <div class="form-inner hidden-icon">
                <label>Password *</label>
                <input
                  type="password"
                  name="name"
                  placeholder="Enter Passsword"
                />
              </div>
            </div>
            <div class="col-12 mb-25">
              <div class="form-inner hidden-icon">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="name"
                  placeholder="Enter Confirm Passsword"
                />
              </div>
            </div>
            <div class="col-12">
              <button class="eg-btn primary--btn submit-btn">Save Change</button>
            </div>
          </div>
        </div>
        </> : <>
        <div className="pc-details">
              <div className="ig-detials">
              <p>Hi Cameron Williamson</p>
              </div>
              <div className="egh-details">
                 <div className="pi-details">
                      <p className="nm-pi">0</p>
                      <p className="nm-hading" >Pending</p>  
                  </div>
                  <div className="pi-details" >
                      <p className="nm-pi" >50</p>
                      <p className="nm-hading" >Pending</p>  
                  </div>
                  <div className="pi-details" >
                      <p className="nm-pi" >40</p>
                      <p className="nm-hading" >Pending</p>  
                  </div>
                  <div className="pi-details" >
                      <p className="nm-pi" >40</p>
                      <p className="nm-hading" >Pending</p>  
                  </div>
                  </div>
         </div>
        </>
          }
        
    
        
      </div>
    </div>
  );
};

export default NavPill;
