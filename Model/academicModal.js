const mongoose = require('mongoose');

const academicShema = new mongoose.Schema({
      teacherInformation: [
           {
            name: {
                  type: String,
                  required: true,
                },
            department: {
                  type: String,
                  required: true,
            },
            email: {
                  type: String,
                  required: true,
            },
            number: {
                  type: Number,
                  required: true,
            },
            educationalQualification: {
                  type: String,
                  required: true,
            },
            picture: {
                  public_id: {
                        type: String,
                        required: true,
                      },
                      url: {
                        type: String,
                        required: true,
                      },
            },
            collageRole: {
                  type: String,
                  required: true,
            },
            
            role: {
                  type: String,
                  default: "Teacher"
            },
            facebooId: {
                  type: String,
                  default: "no"
            },
            linkedinId: {
                  type: String,
                  default: "no"
            },
            joinDate: {
                  type: String,
                  default: Date.now,
            },
            
           }
      ],

      studentInformation: [
            {
                  name: {
                        type: String,
                        required: true,
                      },
                  department: {
                        type: String,
                        required: true,
                  },
                  email: {
                        type: String,
                        required: true,
                  },
                  dateOfBirth: {
                        type: String,
                        required: true,
                  },
                  educationLevel: {
                        type: String,
                        required: true,
                  },
                  department: {
                        type: String,
                        required: true,
                  },
                  className: {
                        type: String,
                        required: true,
                  },
                  session: {
                        type: String,
                        required: true,
                  },
                  classRoll: {
                        type: String,
                        required: true,
                  },
                  sscRoll: {
                        type: String,
                        required: true,
                  },
                  board: {
                        type: String,
                        required: true,
                  },
                  admissionType: {
                        type: String,
                        required: true,
                  },
                  joinDate: {
                        type: String,
                        default: Date.now,
                  },
                  picture: {
                        public_id: {
                              type: String,
                              required: true,
                            },
                            url: {
                              type: String,
                              required: true,
                            },
                  },
                  result:[
                        
                  ]


            }
      ]
})



const academicSModel = new mongoose.model('academicInformation' , academicShema)


module.exports = userModel