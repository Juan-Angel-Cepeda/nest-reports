import { Content } from "pdfmake/interfaces"
import { DateFormatter } from "src/helpers";

const logo: Content = {
    image:'src/assets/logo-datalo.png',
    width:200,
    height:150,
    alignment:"center",
    margin:[0,0,0,0]
}

interface HeaderOptions{
    title?:string;
    subTitle?:string;
    showlogo?:boolean;
    showDate?:boolean;
}

export const headerSection = (options:HeaderOptions):Content => {
    const { title, subTitle, showlogo, showDate} = options;
    
    const headerLogo: Content = showlogo ? logo:null;
    const headerDate: Content = showDate ? {
        text: DateFormatter.getDDMMYYYY(new Date()),
        alignment: 'right',
        margin:[20,20]
    } 
    : null
    

    const headerTitle: Content = title ? { 
        text: title, style:{
            bold:true
        } 
    }
    : null;

    return {
        columns:[
            headerLogo,
            headerTitle,
            headerDate,
        ],
    };

};