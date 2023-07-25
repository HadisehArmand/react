var loggersysLL = []
function SetAction(Action, isSucces) {
    if (localStorage.getItem('logsystem') != null) {
        loggersysLL = JSON.parse(localStorage.getItem("logsystem"))
    } else {
        localStorage.setItem("logsystem", JSON.stringify(loggersysLL))
    }
    let currentdateLL = new Date();
    let innerobjLL = {};
    innerobjLL['Action'] = Action
    // innerobjLL.push(Action)
    innerobjLL['Date']= currentdateLL.getDate() + "/"
    + (currentdateLL.getMonth() + 1) + "/"
    + currentdateLL.getFullYear()
    innerobjLL['Success']=isSucces
    let timerLL = currentdateLL.getHours() + ":"
        + currentdateLL.getMinutes() + ":"
        + currentdateLL.getSeconds()
    innerobjLL['Time']=timerLL
    loggersysLL.push(innerobjLL)
    // loggersysLL[timerLL] = innerobjLL
    localStorage.setItem("logsystem", JSON.stringify(loggersysLL))
}
export default SetAction;