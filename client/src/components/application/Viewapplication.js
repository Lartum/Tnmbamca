import React, { Component } from 'react'
import {
    Table,
    Button
} from 'reactstrap';
import Axios from 'axios';
import Loading from '../common/Loading';

export default class Viewapplication extends Component {
    constructor(){
        super();
        this.state ={
            users:null,
            files:null
        }
    }

    componentDidMount(){
        Axios.get('/api/pdfgenerate')
         .then(res =>{
             const users = res.data;
             this.setState({ users });
         })
         Axios.get('/api/fileupload/files')
         .then(res =>{
             const files = res.data;
             this.setState({ files });
         })
    }

    render() {

      if(this.state.users === null || this.state.files === null){
        return <Loading />
      }
      else if(this.state.users !== null && this.state.files !== null){
        console.log(this.state.files)
        return (
          
          <div className='userdashboard'>
          <div >
            <div className="reviewHeaders">
                  Application Details
                  
            </div>
            <div className='shadow-lg p-3 mb-5 bg-white rounded'>
              <h4 className="finalReviewHeader">BASIC DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Tancent Register No:</th>
  
                  <td name="regno">{this.state.users.regno}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name:</th>
                    <td name="name">{this.state.users.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name Of Parent/Guardian:</th>
                    <td name="nameOfParent">{
                      this.state.users.nameOfParent
                    }</td>
                  </tr>
                  <tr>
                    <th scope="row">Gender:</th>
                    <td name="gender">{this.state.users.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date of Birth:</th>
                    <td name="dateOfBirth">{this.state.users.dateOfBirth}</td>
                  </tr>
                </tbody>
              </Table>
              <h4 className="finalReviewHeader">SECONDARY DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Citizenship:</th>
                    <td name="citizenship">{`${
                      this.state.users.citizenship
                    }`}</td>
                  </tr>
                  <tr>
                    <th scope="row">Nativity:</th>
                    <td name="nativity">{this.state.users.nativity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Place of Birth:</th>
                    <td name="placeOfBirth">{this.state.users.placeOfBirth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Religion:</th>
                    <td name="religion">
                      {" "}
                      {this.state.users.religion}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Mother Tongue:</th>
                    <td name="motherTongue">{this.state.users.motherTongue}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              <h4 className="finalReviewHeader">ADDRESS DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Address:</th>
                    <td name="address">{this.state.users.address}</td>
                  </tr>
                  <tr>
                    <th scope="row">State:</th>
                    <td name="State">{this.state.users.state}</td>
                  </tr>
                  <tr>
                    <th scope="row">District:</th>
                    <td name="district">{this.state.users.district}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pin Code:</th>
                    <td name="pincode">{this.state.users.pincode}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              
              <h4 className="finalReviewHeader">CONTACT DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Mobile Number:</th>
                    <td name="phonenumber">{this.state.users.phonenumber}</td>
                  </tr>
                  <tr>
                    <th scope="row">Telephone No:</th>
                    <td name="telephoneno">{this.state.users.telephoneno}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email:</th>
                    <td name="email">{this.state.users.email}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              <h4 className="finalReviewHeader">COMMUNITY DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Community Name:</th>
                    <td name="nameOfCommunity">{this.state.users.nameOfCommunity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Caste Name:</th>
                    <td name="nameOfCaste">{this.state.users.nameOfCaste}</td>
                  </tr>
                  <tr>
                    <th scope="row">Caste Code:</th>
                    <td name="casteCode">{this.state.users.casteCode}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sri Lankan Refugee:</th>
                    <td name="sriLankanRefugee">{this.state.users.sriLankanRefugee}</td>
                  </tr>
                  <tr>
                    <th scope="row">Differently Abled:</th>
                    <td name="differentlyAbled">{this.state.users.differentlyAbled}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              <h4 className="finalReviewHeader">EDUCATIONAL DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">Qualifying Degree:</th>
                    <td name="qualifyingDegree">{this.state.users.qualifyingDegree}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pattern of Study:</th>
                    <td name="patternOfStudy">{this.state.users.patternOfStudy}</td>
                  </tr>
                  <tr>
                    <th scope="row">Appearance In The Final:</th>
                    <td name="aappearanceInTheFinal">{this.state.users.appearanceInTheFinal}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tancent Marks In 2020:</th>
                    <td name="tancentMarks">{`${
                      this.state.users.tancentMarks
                    }`}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Class/Degree</th>
                    <th>Year Of Passing</th>
                    <th>Name Of School/College</th>
                    <th>District</th>
                    <th>State</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  <tr>
                    <th scope="row">X</th>
                    <td name="XyearOfPassing">{this.state.users.XyearOfPassing}</td>
                    <td name="XnameOfSchool">{this.state.users.XnameOfSchool}</td>
                   
                    <td name="Xdistrict">{this.state.users.Xdistrict}</td>
                    <td name="Xstate">{this.state.users.Xstate}</td>
                  </tr>
                  <tr>
                    <th scope="row">XII/Diploma</th>
                    <td name="XIIyearOfPassing">{this.state.users.XIIyearOfPassing}</td>
                    <td name="XIInameOfSchool">{this.state.users.XIInameOfSchool}</td>
                   
                  <td name="XIIdistrict">{this.state.users.XIIdistrict}</td>
                  <td name="XIIstate">{this.state.users.XIIstate}</td>
                  </tr>
                  <tr>
                    <th scope="row">Degree</th>
                    <td name="degreeYearOfPassing">{this.state.users.degreeYearOfPassing}</td>
                    <td name="degreeNameOfSchool">{this.state.users.degreeNameOfSchool}</td>
                    
                    <td name="degreeDistrict">{this.state.users.degreeDistrict}</td>
                    <td name="degreeState">{this.state.users.degreeState}</td>
                  </tr>
                </tbody>
              </Table>
              <h4 className="finalReviewHeader">UG DEGREE DETAILS</h4>
              <Table bordered>
                <tbody>
                  <tr>
                    <th scope="row">UG Degree:</th>
                    <td name="ugDegree">{this.state.users.ugDegree}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name Of The College:</th>
                    <td name="collegeName">{this.state.users.collegeName}</td>
                  </tr>
                  <tr>
                    <th scope="row">College Address:</th>
                    <td name="collegeAddress">{this.state.users.collegeAddress}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name Of The University:</th>
                    <td name="universityName">{this.state.users.universityName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address Of The University:</th>
                    <td name="universityAddress">{this.state.users.universityAddress}</td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Semester/Year</th>
                    <th>Month</th>
                    <th>Year Of Passing</th>
                    <th>Maximum Marks</th>
                    <th>Marks Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {this.state.users.patternOfStudy === "10 + Plus Two + 3 Years Degree"&&
                 <React.Fragment>
                 <tr>
                    <th scope="row">I</th>
                    <td name="IsemMonth">{this.state.users.IsemMonth}</td>
                    <td name="Isemyop">{this.state.users.Isemyop}</td>
                    <td name="Isemmaxmarks">{this.state.users.Isemmaxmarks}</td>
                    <td name="Isemmarks">{this.state.users.Isemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">II</th>
                    <td name="IIsemMonth">{this.state.users.IIsemMonth}</td>
                    <td name="IIsemyop">{this.state.users.IIsemyop}</td>
                    <td name="IIsemmaxmarks">{this.state.users.IIsemmaxmarks}</td>
                    <td name="IIsemmarks">{this.state.users.IIsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">III</th>
                    <td name="IIIsemMonth">{this.state.users.IIIsemMonth}</td>
                    <td name="IIIsemyop">{this.state.users.IIIsemyop}</td>
                    <td name="IIIsemmaxmarks">{this.state.users.IIIsemmaxmarks}</td>
                    <td name="IIIsemmarks">{this.state.users.IIIsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">IV</th>
                    <td name="IVsemMonth">{this.state.users.IVsemMonth}</td>
                    <td name="IVsemyop">{this.state.users.IVsemyop}</td>
                    <td name="IVsemmaxmarks">{this.state.users.IVsemmaxmarks}</td>
                    <td name="IVsemmarks">{this.state.users.IVsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">V</th>
                    <td name="VsemMonth">{this.state.users.VsemMonth}</td>
                    <td name="Vsemyop">{this.state.users.Vsemyop}</td>
                    <td name="Vsemmaxmarks">{this.state.users.Vsemmaxmarks}</td>
                    <td name="Vsemmarks">{this.state.users.Vsemmarks}</td>
                  </tr>
                  <tr></tr> 
                  </React.Fragment>
                           
                  }
          
                  {this.state.patternOfStudy === "10 + 3 Years Diploma + 3 Years Degree" &&
                  <React.Fragment>
                  <tr>
                    <th scope="row">III</th>
                    <td name="IIIsemMonth">{this.state.users.IIIsemMonth}</td>
                    <td name="IIIsemyop">{this.state.users.IIIsemyop}</td>
                    <td name="IIIsemmaxmarks">{this.state.users.IIIsemmaxmarks}</td>
                    <td name="IIIsemmarks">{this.state.users.IIIsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">IV</th>
                    <td name="IVsemMonth">{this.state.users.IVsemMonth}</td>
                    <td name="IVsemyop">{this.state.users.IVsemyop}</td>
                    <td name="IVsemmaxmarks">{this.state.users.IVsemmaxmarks}</td>
                    <td name="IVsemmarks">{this.state.users.IVsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">V</th>
                    <td name="VsemMonth">{this.state.users.VsemMonth}</td>
                    <td name="Vsemyop">{this.state.users.Vsemyop}</td>
                    <td name="Vsemmaxmarks">{this.state.users.Vsemmaxmarks}</td>
                    <td name="Vsemmarks">{this.state.users.Vsemmarks}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th scope="row">VI</th>
                    <td name="VIsemMonth">{this.state.users.VIsemMonth}</td>
                    <td name="VIsemyop">{this.state.users.VIsemyop}</td>
                    <td name="VIsemmaxmarks">{this.state.users.VIsemmaxmarks}</td>
                    <td name="VIsemmarks">{`${
                     this.state.users.VIsemmarks
                    }`}</td>
                  </tr>
                  <tr>
                    <th scope="row">VII</th>
                    <td name="VIIsemMonth">{`${
                      this.state.users.VIIsemMonth
                    }`}</td>
                    <td name="VIIsemyop">{`${
                      this.state.users.VIIsemyop
                    }`}</td>
                    <td name="VIIsemmaxmarks">{`${
                     this.state.users.VIIsemmaxmarks
                    }`}</td>
                    <td name="VIIsemmarks">{
                      this.state.users.VIIsemmarks
                    }</td>
                  </tr>
                  </React.Fragment>  
                  }
                  {this.state.users.patternOfStudy === "10 + Plus Two + 4 Years Degree" &&
                    
                    <React.Fragment> 
                      <tr>
                    <th scope="row">I</th>
                    <td name="IsemMonth">{this.state.users.IsemMonth}</td>
                    <td name="Isemyop">{this.state.users.Isemyop}</td>
                    <td name="Isemmaxmarks">{this.state.users.Isemmaxmarks}</td>
                    <td name="Isemmarks">{this.state.users.Isemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">II</th>
                    <td name="IIsemMonth">{this.state.users.IIsemMonth}</td>
                    <td name="IIsemyop">{this.state.users.IIsemyop}</td>
                    <td name="IIsemmaxmarks">{this.state.users.IIsemmaxmarks}</td>
                    <td name="IIsemmarks">{this.state.users.IIsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">III</th>
                    <td name="IIIsemMonth">{this.state.users.IIIsemMonth}</td>
                    <td name="IIIsemyop">{this.state.users.IIIsemyop}</td>
                    <td name="IIIsemmaxmarks">{this.state.users.IIIsemmaxmarks}</td>
                    <td name="IIIsemmarks">{this.state.users.IIIsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">IV</th>
                    <td name="IVsemMonth">{this.state.users.IVsemMonth}</td>
                    <td name="IVsemyop">{this.state.users.IVsemyop}</td>
                    <td name="IVsemmaxmarks">{this.state.users.IVsemmaxmarks}</td>
                    <td name="IVsemmarks">{this.state.users.IVsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">V</th>
                    <td name="VsemMonth">{this.state.users.VsemMonth}</td>
                    <td name="Vsemyop">{this.state.users.Vsemyop}</td>
                    <td name="Vsemmaxmarks">{this.state.users.Vsemmaxmarks}</td>
                    <td name="Vsemmarks">{this.state.users.Vsemmarks}</td>
                  </tr>
                  <tr>
                    <th scope="row">VI</th>
                    <td name="VIsemMonth">{this.state.users.VIsemMonth}</td>
                    <td name="VIsemyop">{this.state.users.VIsemyop}</td>
                    <td name="VIsemmaxmarks">{this.state.users.VIsemmaxmarks}</td>
                    <td name="VIsemmarks">{`${
                     this.state.users.VIsemmarks
                    }`}</td>
                  </tr>
                  <tr>
                    <th scope="row">VII</th>
                    <td name="VIIsemMonth">{`${
                      this.state.users.VIIsemMonth
                    }`}</td>
                    <td name="VIIsemyop">{`${
                      this.state.users.VIIsemyop
                    }`}</td>
                    <td name="VIIsemmaxmarks">{`${
                     this.state.users.VIIsemmaxmarks
                    }`}</td>
                    <td name="VIIsemmarks">{
                      this.state.users.VIIsemmarks
                    }</td>
                  </tr>
                  <tr></tr>
                  </React.Fragment>
                  }
                  <tr>
                    <th scope="row" colSpan="3">
                      Overall Total
                    </th>
                    <td name="overalltotalmarks">
                      {this.state.users.overalltotalmarks}
                    </td>
                    <td name="overallmarksobtained">
                      {this.state.users.overallmarksobtained}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" colSpan="4">
                      Total % Of Marks
                    </th>
                    <td name="totalpermark">
                      {this.state.users.totalpermark}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h4 className="finalReviewHeader">UPLOADED FILES</h4>
              
              <Table>
                <tbody>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.plustwoMarksheet} 
                    target='_blank' 
                    className="mr-4"
                    >PlusTwo Marksheet
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.allsemMarksheet} 
                    target='_blank' 
                    className="mr-4"
                    >All Sem Marksheet
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.degreeCertificate} 
                    target='_blank' 
                    className="mr-4"
                    >Degree Certificate
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.transferCertificate} 
                    target='_blank' 
                    className="mr-4"
                    >Transfer Certificate
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.permamentcommunitycard} 
                    target='_blank' 
                    className="mr-4"
                    >Permanent Community Card
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.tancethallticket} 
                    target='_blank' 
                    className="mr-4"
                    >TANCET Hall Ticket
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.tancetmarksheet} 
                    target='_blank' 
                    className="mr-4"
                    >TANCET Mark Sheet
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.nativitycertificate} 
                    target='_blank' 
                    className="mr-4"
                    >Nativity Certificate
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.districtmedicalboard} 
                    target='_blank' 
                    className="mr-4"
                    >District Medical Board
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.srilankantamilrefugee} 
                    target='_blank' 
                    className="mr-4"
                    >Sri Lankan tamil Refugee
                    </a>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                    <a 
                    href={this.state.files.demanddraft} 
                    target='_blank' 
                    className="mr-4"
                    >Demand Draft
                    </a>
                    </th>
                  </tr>
                </tbody>
              </Table>
            </div> 
           
         </div>
        </div>
      )
       }
      }
    }
