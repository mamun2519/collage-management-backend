const mongoose = require("mongoose");

const routneShema = new mongoose.Schema({
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
  classRoutine: [
    {
      saturday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
      sunday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
      monday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
      tuesday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
      wednesday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
      thursday: {
        firstPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        secendPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        thwartPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
        fourthPirod: {
          time: {
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      },
    },
  ],

  examRoutine:[
    // {
    //   examName:{
    //     type: String,
    // required: true,
    //   },

    // }
  ]
});

const routineModel = new mongoose.model("Routine", routneShema);

module.exports = routineModel;
