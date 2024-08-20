import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";
import { headerSection } from "./sections/header.section";


const style: StyleDictionary = {
    header:{
        fontSize:18,
        bold:true,
        alignment:"center",
        margin:[0,0,0,20]
    },
    start:{
        margin:[0,0,0,20],
        bold:true
    },
    bottom_space:{
        margin:[0,0,0,20],
        alignment:'justify'
    },
    bottom:{
        margin:[0,0,0,70]
    }
}

const logo: Content = {
    image:'src/assets/logo-datalo.png',
    width:200,
    height:150,
    alignment:"center",
    margin:[0,0,0,0]
}

const footerLogo: Content = {
    image:'src/assets/o-datalo.png',
    width:80,
    height:80,
    alignment:'center',
    margin:[80,0,0,100]
}

export const getEmploymentLetterReport = (id?:string):TDocumentDefinitions => {
    
    const formatedDate = DateFormatter.getDDMMYYYY(new Date());
    
    const docDefinition:TDocumentDefinitions = {
        styles:style,
        pageMargins:[40,100,40,100],
       
        header: headerSection({
            showlogo:true,
            showDate:true
        }),

        content:[{
            text:'Carta de Recomendación',
            style:'header'
        },
        {
            text:`Chihuahua, Chih., México\n
            ${formatedDate}\n\n
            A quien corresponda:`,
            style:'start'
        },
        {
            text:`Por medio de la presente me permito informar que la C. {NOMBRE_EMPLEADO}
            laboró en esta empresa del [FECHA_ENTRADA] al [FECHA DE RENUNCIA]. Como correspondía en su contrato laboral por tiempo determinado ocupando el puesto de [CARGO].\n
            Mostró un comportamiento profesional,atendiendo a la reglamentación establecida para su trabajo y respetando su horario de forma puntual.\n
            Se expide la prestente a solicitud del interesado para los fines que convengan`,
            style:'bottom_space'
        },
        {   text:`Atentamente`,
            style:'bottom'
        },
        {
            text:`[NombreEmpleador]\n
            [CargoEmpleador]`
        }],
        footer:{
            columns:[footerLogo]
        }
    };
    
    return docDefinition;
}