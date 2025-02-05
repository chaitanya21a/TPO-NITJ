import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: [
      'Computer Science & Engineering',
      'Electronics & Communication Engineering',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Information Technology',
      'Chemical Engineering',
      'Instrumentation and Control Engineering',
      'Biotechnology',
      'Textile Technology',
      'Industrial & Production Engineering'
  ]
  },
  year: {
    type: String,
  },
  batch: {
    type: String,
  },
  course:{
    type:String,
    enum:["B.Tech","M.Tech","MBA","M.Sc","PHD"]
  },
  address: {
    type: String,
    },
  cgpa: {
    type: String,
   },
  gender: {
    type:String,
     enum: ['Male', 'Female', 'Other'],
  },
  active_backlogs: {
    type: Boolean,
    default:false,
  },
  backlogs_history: {
    type: Boolean,
    default:false,
  },
  debarred:{
    type:Boolean,
    default:false,
  },
  disability:{
    type:Boolean,
    default:false,
  },
  image: {
    type: String,
    },
  placementstatus: {
        type: String,
        enum: ['Not Placed','Below Dream', 'Dream', 'Super Dream'  ],
        default:'Not Placed',
    },
  internshipstatus: {
        type: String,
        enum: ['No Intern','2m Intern', '6m Intern', '11m Intern'],
        default:'No Intern',
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
