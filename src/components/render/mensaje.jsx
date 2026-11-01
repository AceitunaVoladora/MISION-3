export default function Mensaje({clase="", children}){
    return (
        <p className = {`mensaje ${clase}`.trim()} role = {clase === "error" ? "alert" : "status"}>
            {children}
        </p>
    );
}