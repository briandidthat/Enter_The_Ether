// import React, { Component } from "react";
// import MuiThemeProvider from  "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "../UI/Button";

// export class ContactForm extends Component {
  
//   render() {
//     const { values, handleChange } = this.props;

//       return (
//         <MuiThemeProvider>
//             <React.Fragment>
//                 <TextField 
//                     name="firstName"
//                     floatingLabelText="First Name"
//                     onChange={handleChange}
//                     defaultValue={values.firstName}
//                 />
//                 <br />
//                 <TextField
//                     name="lastName"
//                     floatingLabelText="Last Name"
//                     onChange={handleChange}
//                     defaultValue={values.lastName}
//                 />
//                 <br />
//                 <TextField 
//                     name="email"
//                     type="email"
//                     floatingLabelText="email"
//                     onChange={handleChange}
//                     defaultValue={values.email}
//                 />
//                 <br />
//                 <TextField 
//                     name="message"
//                     floatingLabelText="message"
//                     multiline={true}
//                     onChange={handleChange}
//                     defaultValue={values.messsage}
//                 />
//                 <Button 
//                     className="submit"
//                     onClick={this.props.onSubmit}
//                 />
//             </React.Fragment>
//         </MuiThemeProvider>

//       );
//   };
// };

// export default ContactForm;