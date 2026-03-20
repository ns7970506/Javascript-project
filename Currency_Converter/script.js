const populate = async(value,currency)=>{
  let str ="";
  let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_QFd2jspTdyrEUZdGPuEHBChk69kQ2A7dY9eIwmWS&base_currency="+currency
  let respnse = await fetch(url);
  let result = await respnse.json()
  document.querySelector(".output")
  for(let key of Object.keys(result["data"])){
     str += ` <tr>
                    <td>${key}</td>
                    <td>${result["data"][key]["code"]}</td>
                    <td>${Math.round(result["data"][key]["value"] * value)}</td>
                </tr> 
            `
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML=str;
}
const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
  e.preventDefault();
  const value = parseInt(document.querySelector("input[name='quantity']").value);
  if (!value) return alert("Enter amount");

  const currency = document.querySelector("select[name='currency']").value;
  populate(value,currency);
})