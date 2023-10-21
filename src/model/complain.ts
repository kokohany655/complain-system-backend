import mongoose, { mongo } from "mongoose";


const complain  = new mongoose.Schema(
    {
        CustomerID : {type:String, required:true},
        CustomrName : {type:String , required:true},
        FacilityName : {type:String , required:true},
        FacilityType : {type:String , required:true},
        CustomrAddress : {type:String , required:true},
        ContactName : {type:String , required:true},
        ContactDetails : {type:String , required:true},
        ComplaintDate : {type:Date  ,required:true},
        RecordNo : {type:String , required:true},
        InvoiceNo : {type:String , required:true},
        InvoiceDate : {type:Date, required:true},
        Page : {type:String , required:true},
        email : {type:String , required:true},
        DeviceName : {type:String , required:true},
        SerialNumber : {type:String , required:true},
        DeviceModel : {type:String , required:true},
        BatchLotNumber : {type:String , required:true},
        ProDate : {type:Date , required:true},
        ExpDate : {type:Date , required:true},
        Manufacturer : {type:String , required:true},
        COO : {type:String , required:true},
        Invoiceno : {type:String , required:true},
        Invoicedate : {type:String , required:true},
        ComplaintDetails : {type:Date, required:true},
        Name : {type:String , required:true},
        Contact : {type:String , required:true},
        Signture : {type:String , required:true},
        Stamp : {type:String , required:true},
        AuthorizedRepresentative : {type:String , required:true},
        Date : {type:Date , required:true},
        Comment : {type:Date , required:true},
        ARComments : {type:String , required:true},
        ManagmentComment : {type:String , required:true},
        CorrectiveActionTaken : {type:String , required:true},
        Solved : {type:Boolean, default:false , required:true},
        Recommendation : {type:String , required:true},
        PreparedBy : {type:String , required:true},
        ReviewedBy : {type:String , required:true},
        

    },
    {
        timestamps: true
    }
)

const Complain = mongoose.model('Complain' , complain)

export default Complain