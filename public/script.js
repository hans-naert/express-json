console.log("Hello World!");

(async () => {
let data=await fetch("data.json");
let data_json=await data.json();
console.log(data_json);
document.querySelector('#json_data').textContent=JSON.stringify(data_json);
})();