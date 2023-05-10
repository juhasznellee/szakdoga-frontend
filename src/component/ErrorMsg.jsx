export default function ErrorMsg (props){
    if(props.place === 'investment' && props.active === true){
        return "Erre nincs elegendő pénzem!";
    }else{
        return "";
    }
}